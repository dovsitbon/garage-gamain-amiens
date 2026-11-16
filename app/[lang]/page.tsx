import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import site from "@/data/site.json";
import avantApres from "@/data/avant-apres.json";
import avis from "@/data/avis.json";
import { fill, getDict, isLocale, type Dict, type Locale } from "@/lib/i18n";
import { img, slot, tileSlot } from "@/lib/media";
import { href } from "@/lib/routes";
import { categories, fromPrice } from "@/lib/tarifs";
import { money } from "@/lib/shop";
import { intlLocale } from "@/lib/locales";
import { faqJsonLd } from "@/lib/jsonld";
import { alt, DevisCta, Faq, InfosBlock, Rating, SectionHead, Slot } from "@/components/Blocks";
import { BeforeAfter } from "@/components/BeforeAfter";
import { HeroQuote } from "@/components/HeroQuote";
import { OpenStatus } from "@/components/OpenStatus";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, BrakeIcon, CarFrontIcon, CarIcon, ClockIcon, EngineIcon, OilIcon, PhoneIcon, QuoteIcon, SnowIcon, Ticks, TyreIcon, WrenchIcon } from "@/components/icons";

type TileId = keyof Dict["tiles"]["items"];
const TILES: { id: TileId; icon: ReactNode; to: (l: Locale) => string }[] = [
  { id: "entretien", icon: <OilIcon className="size-10" />, to: (l) => href(l, "entretien") },
  { id: "freins", icon: <BrakeIcon className="size-10" />, to: (l) => `${href(l, "devis")}?c=freins` },
  { id: "pneus", icon: <TyreIcon className="size-10" />, to: (l) => `${href(l, "devis")}?c=pneus` },
  { id: "diagnostic", icon: <EngineIcon className="size-10" />, to: (l) => `${href(l, "devis")}?c=diagnostic` },
  { id: "carrosserie", icon: <CarIcon className="size-10" />, to: (l) => href(l, "carrosserie") },
  { id: "clim", icon: <SnowIcon className="size-10" />, to: (l) => `${href(l, "devis")}?c=clim` },
];

/** Voiture au trait : remplace la photo du hero tant qu'elle n'a pas été prise (jamais de fausse photo). */
function CarLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 150" className={className} fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 108h22a24 24 0 0 1 48 0h176a24 24 0 0 1 48 0h56V88l-9-15-47-9-47-32c-12-8-30-12-62-12h-44c-24 0-40 5-56 15L68 56l-34 9c-9 2-14 8-14 15Z" />
      <path d="M106 60l28-27c6-4 14-6 24-6h34v33ZM202 60V27h26c14 0 24 3 34 10l26 23ZM196 60v44M152 70h14M240 70h14M352 80h18M24 84h14" />
      <circle cx="66" cy="108" r="19" />
      <circle cx="66" cy="108" r="8" />
      <circle cx="290" cy="108" r="19" />
      <circle cx="290" cy="108" r="8" />
      <path d="M0 132h400" strokeDasharray="2 7" />
    </svg>
  );
}

function Hero({ lang, d }: { lang: Locale; d: Dict }) {
  const h = d.hero;
  const photo = slot("hero");
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-steel text-white">
      {photo ? (
        <>
          <Image src={img(photo).src} width={img(photo).width} height={img(photo).height} alt={alt(d, photo)} priority sizes="100vw" quality={80} className="absolute inset-0 -z-20 size-full object-cover object-[62%_50%] md:object-center" />
          <div className="absolute inset-0 -z-10 bg-[rgb(21_43_65/0.8)] md:bg-[linear-gradient(90deg,rgb(21_43_65/0.92)_0%,rgb(21_43_65/0.75)_45%,rgb(21_43_65/0.2)_100%)]" aria-hidden="true" />
        </>
      ) : (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <CarLine className="absolute end-[-14rem] bottom-10 w-[46rem] text-white/10 sm:text-white/18 sm:end-[-8rem] lg:end-[-2rem] lg:bottom-16 lg:w-[54rem] xl:end-[4%]" />
          <p className="absolute end-5 bottom-5 hidden text-[0.75rem] text-white/45 lg:block">{h.photo}</p>
        </div>
      )}
      <div className="mx-auto flex max-w-[90rem] flex-col justify-center px-5 pt-14 pb-16 sm:px-8 lg:min-h-[calc(100svh-7.5rem)] lg:px-10 lg:py-20">
        <p className="rise text-[0.75rem] font-medium tracking-[0.16em] text-steel-light uppercase">{h.eyebrow}</p>
        <h1 id="hero-title" className="display rise mt-5 max-w-[15ch] text-[clamp(2.6rem,7vw,5.6rem)] [animation-delay:0.08s]">
          {h.title}
        </h1>
        <p className="rise mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-white/80 [animation-delay:0.16s]">{h.lead}</p>
        <div className="rise mt-9 [animation-delay:0.24s]">
          <HeroQuote />
        </div>
        <div className="rise mt-8 flex flex-col gap-2 text-[0.9375rem] text-white/85 [animation-delay:0.32s] sm:flex-row sm:flex-wrap sm:gap-x-7">
          <Rating lang={lang} d={d} className="hover:text-white" />
          <OpenStatus dark />
        </div>
      </div>
    </section>
  );
}

function Tiles({ lang, d }: { lang: Locale; d: Dict }) {
  const t = d.tiles;
  return (
    <section id="services" aria-labelledby="tiles-title" className="mx-auto max-w-[90rem] px-5 pt-16 pb-20 sm:px-8 lg:px-10 lg:pt-24 lg:pb-24">
      <SectionHead eyebrow={t.eyebrow} title={t.title} id="tiles-title" />
      <ul className="mt-10 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-4">
        {TILES.map((tile, i) => {
          const it = t.items[tile.id];
          const p = fromPrice(tile.id);
          const photo = tileSlot(tile.id);
          return (
            <Reveal as="li" key={tile.id} delay={(i % 3) * 0.05} className="h-full">
              <Link href={tile.to(lang)} className="group flex h-full flex-col overflow-hidden rounded-[0.3rem] border border-line bg-white transition-colors duration-300 hover:border-steel">
                {photo && <Slot src={photo} d={d} sizes="(min-width:1024px) 30vw, (min-width:480px) 48vw, 100vw" className="shine aspect-[16/10]" />}
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  {!photo && <span className="text-steel">{tile.icon}</span>}
                  <h3 className={`title flex items-center justify-between gap-2 text-[1.35rem] ${photo ? "" : "mt-6"}`}>
                    {it.title}
                    <ArrowIcon className="size-5 shrink-0 text-red transition-transform duration-300 group-hover:translate-x-1" />
                  </h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-muted">{it.text}</p>
                  <p className="mt-5 border-t border-line pt-4 text-[0.875rem] font-medium text-steel tabular-nums">{p != null ? fill(t.from, { price: money(p, lang) }) : t.onQuote}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Strip({ d }: { d: Dict }) {
  const icons = [<QuoteIcon key="q" className="size-9" />, <ClockIcon key="c" className="size-9" />, <CarFrontIcon key="m" className="size-9" />, <PhoneIcon key="t" className="size-9" />];
  return (
    <section aria-label={d.strip.label} className="bg-steel text-white">
      <ul className="mx-auto grid max-w-[90rem] grid-cols-2 lg:grid-cols-4">
        {d.strip.items.map((it, i) => {
          const inner = (
            <>
              <span className="text-steel-light">{icons[i]}</span>
              <span className={`title mt-4 block text-[1.2rem] sm:text-[1.3rem] ${i === 3 ? "tabular-nums" : ""}`}>{it.title}</span>
              <span className="mt-1.5 block text-[0.875rem] leading-relaxed text-white/75">{it.text}</span>
            </>
          );
          return (
            <Reveal as="li" key={it.title} delay={i * 0.05} className={`px-5 py-9 sm:px-8 lg:px-10 lg:py-12 ${i % 2 ? "border-s border-white/12" : ""} ${i > 1 ? "border-t border-white/12 lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
              {i === 3 ? (
                <a href={`tel:${site.tel}`} className="block hover:text-steel-light">
                  {inner}
                </a>
              ) : (
                inner
              )}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

function Tarifs({ lang, d }: { lang: Locale; d: Dict }) {
  const p = d.tarifs;
  return (
    <section id="tarifs" aria-labelledby="tarifs-title" className="border-b border-line bg-concrete-soft">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-10 lg:py-24">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <SectionHead eyebrow={p.eyebrow} title={p.title} lead={p.lead} id="tarifs-title" />
          <p className="mt-6 text-[0.875rem] text-muted">{p.note}</p>
          <div className="mt-8">
            <DevisCta lang={lang} d={d} />
          </div>
          <Rating lang={lang} d={d} className="mt-6 text-[0.875rem] text-muted hover:text-ink" />
        </div>
        <div className="space-y-12">
          {categories.map((c) => (
            <Reveal key={c.id}>
              <table className="w-full border-collapse text-start">
                <caption className="text-start">
                  <span className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-3">
                    <span className="title text-[1.45rem] sm:text-[1.6rem]">{c.name[lang]}</span>
                    <Link href={`${href(lang, "devis")}?c=${c.id}`} className="link-line shrink-0 text-[0.875rem] font-medium text-steel">
                      {p.ask}
                    </Link>
                  </span>
                </caption>
                <thead className="sr-only sm:not-sr-only">
                  <tr className="text-[0.75rem] font-medium tracking-[0.08em] text-muted uppercase">
                    <th scope="col" className="pt-4 pb-2 text-start font-medium">
                      {p.head.service}
                    </th>
                    <th scope="col" className="w-48 pt-4 pb-2 text-start font-medium">
                      {p.head.delay}
                    </th>
                    <th scope="col" className="w-40 pt-4 pb-2 text-end font-medium">
                      {p.head.price}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {c.items.map((s) => (
                    <tr key={s.id} className="grid grid-cols-[1fr_auto] gap-x-6 py-3.5 sm:table-row sm:py-0">
                      <th scope="row" className="text-start text-[1rem] font-normal sm:py-3.5">
                        {s.name[lang]}
                        {s.confirm && <span className="ms-2 text-[0.8125rem] text-muted">({p.confirm})</span>}
                      </th>
                      <td className="order-3 col-span-2 text-[0.8125rem] text-muted sm:w-48 sm:py-3.5 sm:text-[0.9375rem]">{s.delay ? s.delay[lang] : "—"}</td>
                      <td className="text-end text-[0.9375rem] whitespace-nowrap tabular-nums sm:w-40 sm:py-3.5">{s.price != null ? <span className="font-medium">{fill(p.from, { price: money(s.price, lang) })}</span> : <span className="text-muted">{p.onQuote}</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterSection({ lang, d }: { lang: Locale; d: Dict }) {
  const pairs = avantApres.pairs as { id: string; before: string; after: string; alt: Record<Locale, string> }[];
  const t = d.beforeAfter;
  return (
    <section id="avant-apres" aria-labelledby="ba-title" className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <SectionHead eyebrow={t.eyebrow} title={t.title} lead={pairs.length ? t.lead : t.soon} id="ba-title" />
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {pairs.length
          ? pairs.map((p) => <BeforeAfter key={p.id} pair={{ id: p.id, before: img(p.before), after: img(p.after), alt: p.alt[lang] }} label={p.alt[lang]} />)
          : t.slots.map((label, i) => (
              <Reveal key={label} delay={i * 0.08}>
                <BeforeAfter label={label} />
              </Reveal>
            ))}
      </div>
    </section>
  );
}

/** Blocs alternés pleine largeur : photo + texte court + un seul bouton. */
function Feature({ id, eyebrow, title, text, cta, to, media, flip = false, tone }: { id: string; eyebrow: string; title: string; text: string; cta: string; to: string; media: ReactNode; flip?: boolean; tone: "white" | "concrete" | "steel" }) {
  const dark = tone === "steel";
  const bg = tone === "steel" ? "bg-steel text-white" : tone === "concrete" ? "bg-concrete-soft" : "bg-paper";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={bg}>
      <div className="mx-auto grid max-w-[90rem] items-stretch md:grid-cols-2">
        <Reveal className={`min-h-72 md:min-h-[34rem] ${flip ? "md:order-2" : ""}`}>{media}</Reveal>
        <div className={`flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-16 lg:py-20 ${flip ? "md:order-1" : ""}`}>
          <Reveal delay={0.08} className="max-w-xl">
            <p className={`eyebrow ${dark ? "!text-steel-light" : ""}`}>{eyebrow}</p>
            <Ticks className={`mt-3 h-2.5 w-16 ${dark ? "text-steel-light" : "text-red"}`} />
            <h2 id={`${id}-title`} className="display mt-5 text-[clamp(1.8rem,3.6vw,2.8rem)]">
              {title}
            </h2>
            <p className={`mt-5 text-[1.0625rem] leading-relaxed ${dark ? "text-white/80" : "text-muted"}`}>{text}</p>
            <Link href={to} className={`${dark ? "btn-solid" : "btn-steel"} mt-8`}>
              {cta} <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Features({ lang, d }: { lang: Locale; d: Dict }) {
  const b = d.blocks;
  const media = (key: "entretien" | "carrosserie" | "confiance", icon: ReactNode, label: string, dark = false) => (
    <Slot src={slot(key)} d={d} sizes="(min-width:768px) 50vw, 100vw" className="size-full min-h-72 md:min-h-[34rem]" icon={icon} label={label} dark={dark} />
  );
  return (
    <div>
      <Feature id="entretien" tone="white" {...b.entretien} to={`${href(lang, "devis")}?b=entretien`} media={media("entretien", <OilIcon className="size-20" />, d.hero.photo)} />
      <Feature id="carrosserie" tone="concrete" flip {...b.carrosserie} to={`${href(lang, "devis")}?b=carrosserie`} media={media("carrosserie", <CarIcon className="size-20" />, d.hero.photo)} />
      <Feature id="confiance" tone="steel" {...b.confiance} to={href(lang, "devis")} media={media("confiance", <WrenchIcon className="size-20" />, d.hero.photo, true)} />
    </div>
  );
}

type Avis = { author: string; date: string; rating: number; text: string; lang: string };

function Reviews({ lang, d }: { lang: Locale; d: Dict }) {
  const r = d.reviews;
  const value = new Intl.NumberFormat(intlLocale[lang], { maximumFractionDigits: 1 }).format(site.rating.value);
  const items = avis.items as Avis[];
  return (
    <section aria-labelledby="reviews-title" className="mx-auto max-w-[90rem] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <Reveal className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-20">
        <div className="flex items-end gap-5">
          <p className="display text-[clamp(5rem,10vw,7.5rem)] leading-[0.8] text-steel tabular-nums">{value}</p>
          <div className="pb-1">
            <p className="eyebrow">{r.eyebrow}</p>
            <Rating lang={lang} d={d} className="mt-2 text-[0.9375rem] text-muted hover:text-ink" />
          </div>
        </div>
        <div>
          <h2 id="reviews-title" className="display text-[clamp(1.7rem,3.2vw,2.3rem)]">
            {r.title}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {r.themes.map((t) => (
              <li key={t} className="rounded-full border border-line bg-white px-4 py-2 text-[0.9375rem]">
                {t}
              </li>
            ))}
          </ul>
          <a href={site.maps} target="_blank" rel="noopener" className="link-line mt-6 inline-block text-[0.9375rem] font-medium text-steel">
            {r.cta}
          </a>
        </div>
      </Reveal>
      {/* À REMPLIR avec de vrais avis clients (data/avis.json), seulement avec l'accord du garage. Aucun avis inventé. */}
      {items.length > 0 && (
        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {items.map((a) => (
            <Reveal as="li" key={`${a.author}-${a.date}`} className="rounded-[0.3rem] border border-line bg-white p-6">
              <p className="text-[0.9375rem] leading-relaxed" lang={a.lang}>
                « {a.text} »
              </p>
              <p className="mt-4 text-[0.875rem] text-muted">
                {a.author} · {a.rating}/5 · Google
              </p>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(d.faq.items)) }} />
      <Hero lang={lang} d={d} />
      <Tiles lang={lang} d={d} />
      <Strip d={d} />
      <Tarifs lang={lang} d={d} />
      <BeforeAfterSection lang={lang} d={d} />
      <Features lang={lang} d={d} />
      <Reviews lang={lang} d={d} />
      <InfosBlock lang={lang} d={d} />
      <Faq d={d} className="border-t border-line" />
    </>
  );
}
