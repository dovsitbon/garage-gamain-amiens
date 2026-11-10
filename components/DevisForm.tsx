"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { CameraIcon, CloseIcon, PhoneIcon } from "@/components/icons";
import { DELAYS, DETAILS, emptyDevis, isEmail, isPhone, MAX_PHOTOS, NEEDS, type Devis, type NeedId } from "@/lib/devis";
import { fill } from "@/lib/i18n";
import { parisNow } from "@/lib/shop";

type Errors = Partial<Record<"vehicle" | "need" | "details" | "name" | "phone" | "email" | "photo" | "generic", string>>;
type Done = { notified: boolean; confirmed: boolean };
type Shot = { blob: Blob; url: string };

const MAX_SIDE = 1400;

/** Réduit chaque photo dans le navigateur (JPEG ≤ 1400 px) : trois photos restent sous la limite d'envoi. */
async function shrink(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, MAX_SIDE / Math.max(bmp.width, bmp.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bmp.width * scale);
  canvas.height = Math.round(bmp.height * scale);
  canvas.getContext("2d")!.drawImage(bmp, 0, 0, canvas.width, canvas.height);
  bmp.close();
  return new Promise((ok, ko) => canvas.toBlob((b) => (b ? ok(b) : ko(new Error("photo"))), "image/jpeg", 0.8));
}

/** Catégorie de tarifs (lien « Demander un devis » du tableau, tuiles) → besoin et précision pré-cochés. */
const NEED_OF: Record<string, [NeedId, string?]> = {
  entretien: ["entretien"],
  freins: ["entretien", "freins"],
  pneus: ["entretien", "pneus"],
  diagnostic: ["panne"],
  carrosserie: ["carrosserie"],
  clim: ["entretien", "clim"],
};

function Fieldset({ legend, children, hint, step }: { legend: string; children: ReactNode; hint?: string; step: number }) {
  return (
    <fieldset className="border-t border-line pt-8">
      <legend className="title float-left flex w-full items-baseline gap-4 text-[1.6rem]">
        <span className="font-[family-name:var(--font-inter)] text-[0.875rem] font-medium tracking-[0.1em] text-red tabular-nums">{String(step).padStart(2, "0")}</span>
        {legend}
      </legend>
      {hint && <p className="clear-left pt-1 text-[0.875rem] text-muted">{hint}</p>}
      <div className="clear-left space-y-7 pt-6">{children}</div>
    </fieldset>
  );
}

function Chip({ type = "checkbox", name, checked, onChange, children }: { type?: "checkbox" | "radio"; name: string; checked: boolean; onChange: () => void; children: ReactNode }) {
  return (
    <label className="chip">
      <input type={type} name={name} checked={checked} onChange={onChange} className="sr-only" />
      {children}
    </label>
  );
}

const Err = ({ id, children }: { id?: string; children?: string }) =>
  children ? (
    <p id={id} role="alert" className="mt-2 text-[0.875rem] text-red-dark">
      {children}
    </p>
  ) : null;

/**
 * Demande de devis : véhicule (immatriculation ou modèle, kilométrage), besoin + précisions, 1 à 3 photos,
 * date souhaitée, coordonnées, message. Envoi à /api/devis (e-mail au garage avec les photos + confirmation au client, via Resend).
 */
export function DevisForm() {
  const { lang, d } = useLocale();
  const uid = useId();
  const reduce = useReducedMotion();
  const f = d.devis.fields;
  const [q, setQ] = useState<Devis>(emptyDevis);
  const [shots, setShots] = useState<Shot[]>([]);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState<Done | null>(null);
  const [minDate, setMinDate] = useState("");
  const topRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const shotsRef = useRef<Shot[]>([]);
  useEffect(() => {
    shotsRef.current = shots;
  }, [shots]);

  // Préremplissage depuis un lien : ?v=immatriculation (champ du hero), ?b=carrosserie (besoin), ?c=freins (tableau des tarifs)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const vehicle = (params.get("v") ?? "").slice(0, 80);
    const b = params.get("b");
    const [need, detail] = b && (NEEDS as readonly string[]).includes(b) ? [b as NeedId] : (NEED_OF[params.get("c") ?? ""] ?? []);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- paramètres d'URL, lisibles seulement côté client
    setMinDate(parisNow().iso);
    setQ((v) => ({ ...v, vehicle: vehicle || v.vehicle, need: need ?? v.need, details: detail ? [detail] : v.details }));
  }, []);

  useEffect(() => () => shotsRef.current.forEach((s) => URL.revokeObjectURL(s.url)), []);

  const set = <K extends keyof Devis>(k: K, v: Devis[K]) => setQ((x) => ({ ...x, [k]: v }));
  const err = d.devis.errors;

  async function addPhotos(files: FileList | null) {
    setErrors((e) => ({ ...e, photo: undefined }));
    if (!files) return;
    const room = MAX_PHOTOS - shots.length;
    const next: Shot[] = [];
    for (const file of Array.from(files).slice(0, room)) {
      try {
        const blob = await shrink(file);
        next.push({ blob, url: URL.createObjectURL(blob) });
      } catch {
        setErrors((e) => ({ ...e, photo: err.photo }));
      }
    }
    setShots((s) => [...s, ...next].slice(0, MAX_PHOTOS));
    if (fileRef.current) fileRef.current.value = "";
  }

  function removePhoto(i: number) {
    setShots((s) => {
      URL.revokeObjectURL(s[i].url);
      return s.filter((_, j) => j !== i);
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (!q.vehicle.trim()) next.vehicle = err.vehicle;
    if (!q.need) next.need = err.need;
    else if (!q.details.length && !q.description.trim() && !q.message.trim()) next.details = err.details;
    if (!q.name.trim()) next.name = err.name;
    if (!isPhone(q.phone)) next.phone = err.phone;
    if (q.email && !isEmail(q.email)) next.email = err.email;
    setErrors(next);
    if (Object.keys(next).length) {
      document.querySelector<HTMLElement>(`[data-err="${Object.keys(next)[0]}"]`)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      return;
    }
    setSending(true);
    try {
      const body = new FormData();
      body.set("lang", lang);
      body.set("data", JSON.stringify(q));
      shots.forEach((s, i) => body.append("photos", s.blob, `photo-${i + 1}.jpg`));
      const r = await fetch("/api/devis", { method: "POST", body });
      const json = (await r.json()) as { ok: boolean } & Done;
      if (!r.ok || !json.ok) throw new Error();
      setDone({ notified: json.notified, confirmed: json.confirmed });
      topRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    } catch {
      setErrors({ generic: err.generic });
    } finally {
      setSending(false);
    }
  }

  const fade = reduce ? {} : { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] as const } };
  const s = d.devis.success;
  const details = q.need ? DETAILS[q.need] : [];

  return (
    <div ref={topRef} className="scroll-mt-32">
      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.div key="done" {...fade} role="status" className="rounded-[0.3rem] border border-line bg-concrete-soft p-8 sm:p-10">
            <p className="display text-[clamp(1.8rem,4vw,2.4rem)]">{s.title}</p>
            <p className="lead mt-4">{s.text}</p>
            {done.confirmed && <p className="mt-3 text-muted">{s.email}</p>}
            {!done.notified && (
              <div className="mt-6 border-t border-line pt-6">
                <p>{s.notNotified}</p>
                <a href={`tel:${site.tel}`} className="btn-solid mt-4">
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setDone(null);
                setQ(emptyDevis());
                setShots([]);
              }}
              className="link-line mt-8 inline-block text-[0.9375rem]"
            >
              {s.again}
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" {...fade} onSubmit={submit} noValidate className="space-y-12">
            <Fieldset step={1} legend={d.devis.sections.vehicle}>
              <div className="grid gap-6 sm:grid-cols-[1.6fr_1fr]">
                <div data-err="vehicle">
                  <label htmlFor={`${uid}-v`} className="label">
                    {f.vehicle}
                  </label>
                  <input id={`${uid}-v`} value={q.vehicle} onChange={(e) => set("vehicle", e.target.value)} placeholder={f.vehiclePh} autoCapitalize="characters" spellCheck={false} aria-invalid={!!errors.vehicle} aria-describedby={errors.vehicle ? `${uid}-v-e` : undefined} className="field" />
                  <Err id={`${uid}-v-e`}>{errors.vehicle}</Err>
                </div>
                <div>
                  <label htmlFor={`${uid}-km`} className="label">
                    {f.km}
                  </label>
                  <input id={`${uid}-km`} inputMode="numeric" value={q.km} onChange={(e) => set("km", e.target.value)} placeholder={f.kmPh} className="field tabular-nums" />
                </div>
              </div>
            </Fieldset>

            <Fieldset step={2} legend={d.devis.sections.need}>
              <div data-err="need" role="radiogroup" aria-label={d.devis.sections.need}>
                <div className="flex flex-wrap gap-2">
                  {NEEDS.map((o) => (
                    <Chip key={o} type="radio" name="need" checked={q.need === o} onChange={() => setQ((x) => ({ ...x, need: o, details: x.details.filter((r) => DETAILS[o].includes(r)) }))}>
                      {f.needs[o]}
                    </Chip>
                  ))}
                </div>
                <Err>{errors.need}</Err>
              </div>
              <div data-err="details" className="space-y-6">
                {details.length > 0 && (
                  <div role="group" aria-label={f.detailsLabel}>
                    <p className="label">
                      {f.detailsLabel} <span className="font-normal text-muted">({f.detailsHint})</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {details.map((r) => (
                        <Chip key={r} name="details" checked={q.details.includes(r)} onChange={() => set("details", q.details.includes(r) ? q.details.filter((x) => x !== r) : [...q.details, r])}>
                          {d.devis.details[r as keyof typeof d.devis.details]}
                        </Chip>
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <label htmlFor={`${uid}-r`} className="label">
                    {f.details}
                  </label>
                  <textarea id={`${uid}-r`} rows={3} value={q.description} onChange={(e) => set("description", e.target.value)} placeholder={f.detailsPh} className="field resize-y" />
                </div>
                <Err>{errors.details}</Err>
              </div>
            </Fieldset>

            <Fieldset step={3} legend={d.devis.sections.photos} hint={f.photosHint}>
              <div>
                <input ref={fileRef} id={`${uid}-ph`} type="file" accept="image/*" multiple className="sr-only" onChange={(e) => addPhotos(e.target.files)} />
                <ul className="flex flex-wrap gap-3">
                  {shots.map((sh, i) => (
                    <li key={sh.url} className="relative">
                      {/* eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:) */}
                      <img src={sh.url} alt="" className="size-24 rounded-[0.25rem] object-cover sm:size-28" />
                      <button type="button" onClick={() => removePhoto(i)} aria-label={`${f.photoRemove} ${i + 1}`} className="absolute -top-2 -right-2 grid size-8 place-items-center rounded-full bg-ink text-white">
                        <CloseIcon className="size-3.5" />
                      </button>
                    </li>
                  ))}
                  {shots.length < MAX_PHOTOS && (
                    <li>
                      <label htmlFor={`${uid}-ph`} className="slot grid size-24 cursor-pointer place-items-center rounded-[0.25rem] text-steel transition-colors hover:bg-concrete sm:size-28">
                        <span className="flex flex-col items-center gap-1.5 px-2 text-center text-[0.75rem] leading-tight font-medium">
                          <CameraIcon className="size-6" />
                          {f.photos}
                        </span>
                      </label>
                    </li>
                  )}
                </ul>
                <p className="mt-3 text-[0.8125rem] text-muted tabular-nums">{fill(f.photosCount, { count: shots.length })}</p>
                <Err>{errors.photo}</Err>
              </div>
            </Fieldset>

            <Fieldset step={4} legend={d.devis.sections.date}>
              <div role="radiogroup" aria-label={d.devis.sections.date} className="flex flex-wrap items-center gap-2">
                {DELAYS.map((x) => (
                  <Chip key={x} type="radio" name="delay" checked={q.delay === x} onChange={() => set("delay", x)}>
                    {f.delays[x].replace(/ ?:$/, "")}
                  </Chip>
                ))}
              </div>
              {q.delay === "date" && (
                <div className="max-w-xs">
                  <label htmlFor={`${uid}-date`} className="label">
                    {f.date}
                  </label>
                  <input id={`${uid}-date`} type="date" min={minDate} value={q.date} onChange={(e) => set("date", e.target.value)} className="field" />
                </div>
              )}
            </Fieldset>

            <Fieldset step={5} legend={d.devis.sections.contact}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div data-err="name">
                  <label htmlFor={`${uid}-n`} className="label">
                    {f.name}
                  </label>
                  <input id={`${uid}-n`} autoComplete="name" value={q.name} onChange={(e) => set("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? `${uid}-n-e` : undefined} className="field" />
                  <Err id={`${uid}-n-e`}>{errors.name}</Err>
                </div>
                <div data-err="phone">
                  <label htmlFor={`${uid}-p`} className="label">
                    {f.phone}
                  </label>
                  <input id={`${uid}-p`} type="tel" autoComplete="tel" inputMode="tel" value={q.phone} onChange={(e) => set("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? `${uid}-p-e` : undefined} className="field" />
                  <Err id={`${uid}-p-e`}>{errors.phone}</Err>
                </div>
                <div data-err="email" className="sm:col-span-2">
                  <label htmlFor={`${uid}-e`} className="label">
                    {f.email} <span className="text-muted">{f.emailHint}</span>
                  </label>
                  <input id={`${uid}-e`} type="email" autoComplete="email" value={q.email} onChange={(e) => set("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? `${uid}-e-e` : undefined} className="field" />
                  <Err id={`${uid}-e-e`}>{errors.email}</Err>
                </div>
              </div>
              <div>
                <label htmlFor={`${uid}-m`} className="label">
                  {f.message}
                </label>
                <textarea id={`${uid}-m`} rows={4} value={q.message} onChange={(e) => set("message", e.target.value)} placeholder={f.messagePh} className="field resize-y" />
              </div>
            </Fieldset>

            <div className="border-t border-line pt-8">
              {errors.generic && (
                <p role="alert" className="mb-4 text-red-dark">
                  {errors.generic}
                </p>
              )}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <button type="submit" disabled={sending} className="btn-solid min-w-56 disabled:opacity-60">
                  {sending ? d.devis.sending : d.devis.submit}
                </button>
                <a href={`tel:${site.tel}`} className="inline-flex items-center gap-2 font-medium tabular-nums">
                  <PhoneIcon /> {site.phone}
                </a>
              </div>
              <p className="mt-4 text-[0.8125rem] text-muted">{d.devis.privacy}</p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
