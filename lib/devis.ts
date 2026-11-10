import type { Dict } from "@/lib/i18n";
import type { Locale } from "@/lib/locales";
import { formatDay } from "@/lib/shop";

export const NEEDS = ["entretien", "panne", "carrosserie", "autre"] as const;
export type NeedId = (typeof NEEDS)[number];

/** Précisions proposées selon le besoin (libellés dans locales → devis.details). */
export const DETAILS: Record<NeedId, readonly string[]> = {
  entretien: ["vidange", "revision", "freins", "pneus", "distribution", "clim", "batterie"],
  panne: ["voyant", "demarrage", "bruit", "fumee", "freins", "embrayage", "controle-technique"],
  carrosserie: ["rayure", "bosse", "pare-chocs", "retroviseur", "phares", "peinture"],
  autre: [],
};
const ALL_DETAILS = [...new Set(Object.values(DETAILS).flat())];

export const DELAYS = ["asap", "semaine", "date"] as const;
export const MAX_PHOTOS = 3;

export type Devis = {
  vehicle: string;
  km: string;
  need: NeedId | "";
  details: string[];
  description: string;
  delay: (typeof DELAYS)[number] | "";
  date: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export const emptyDevis = (): Devis => ({ vehicle: "", km: "", need: "", details: [], description: "", delay: "", date: "", name: "", phone: "", email: "", message: "" });

export const isPhone = (v: string) => /^[+\d][\d\s\-().]{7,19}$/.test(v.trim());
export const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const ISO = /^\d{4}-\d{2}-\d{2}$/;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const pick = <T extends string>(v: unknown, list: readonly T[]): T | "" => (list.includes(v as T) ? (v as T) : "");

/** Nettoie une demande reçue côté serveur ; null si l'essentiel manque. */
export function parseDevis(v: unknown): Devis | null {
  if (!v || typeof v !== "object") return null;
  const o = v as Record<string, unknown>;
  const need = pick(o.need, NEEDS);
  const allowed = need ? DETAILS[need] : ALL_DETAILS;
  const q: Devis = {
    vehicle: str(o.vehicle, 80),
    km: str(o.km, 20).replace(/[^\d\s.]/g, ""),
    need,
    details: Array.isArray(o.details) ? [...new Set(o.details.filter((x): x is string => typeof x === "string" && allowed.includes(x)))] : [],
    description: str(o.description, 800),
    delay: pick(o.delay, DELAYS),
    date: ISO.test(str(o.date, 10)) ? str(o.date, 10) : "",
    name: str(o.name, 120),
    phone: str(o.phone, 30),
    email: str(o.email, 160),
    message: str(o.message, 1500),
  };
  if (!q.vehicle || !q.need || !q.name || !isPhone(q.phone)) return null;
  if (!q.details.length && !q.description && !q.message) return null;
  if (q.email && !isEmail(q.email)) q.email = "";
  if (q.delay !== "date") q.date = "";
  return q;
}

/** Récapitulatif lisible (e-mail du garage, confirmation client), dans une langue donnée. */
export function devisMessage(q: Devis, lang: Locale, d: Dict, opts: { title?: boolean; photos?: number } = {}) {
  const m = d.devis.message;
  const f = d.devis.fields;
  const c = lang === "fr" ? " :" : ":";
  const line = (label: string, value: string) => (value ? `${label}${c} ${value}` : "");
  const details = q.details.map((r) => d.devis.details[r as keyof Dict["devis"]["details"]] ?? r).join(", ");
  const delay = q.delay ? (q.delay === "date" && q.date ? `${f.delays.date.replace(/ ?:$/, "")} ${formatDay(q.date, lang)}` : f.delays[q.delay].replace(/ ?:$/, "")) : "";
  const blocks = [
    opts.title === false ? [] : [`*${m.title}*`],
    [line(m.vehicle, q.vehicle), line(m.km, q.km ? `${q.km} km` : "")],
    [line(m.need, q.need ? f.needs[q.need] : ""), line(m.details, details), line(m.description, q.description), line(m.date, delay)],
    [line(m.name, q.name), line(m.phone, q.phone), line(m.email, q.email), line(m.message, q.message)],
    [opts.photos ? `${m.photos}${c} ${opts.photos}` : ""],
  ];
  return blocks
    .map((x) => x.filter(Boolean).join("\n"))
    .filter(Boolean)
    .join("\n\n");
}
