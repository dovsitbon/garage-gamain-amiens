import Link from "next/link";
import site from "@/data/site.json";
import type { Dict, Locale } from "@/lib/i18n";
import { href } from "@/lib/routes";
import { Logo } from "@/components/Logo";
import { PhoneIcon, PinIcon } from "@/components/icons";

export function Footer({ lang, d }: { lang: Locale; d: Dict }) {
  const f = d.footer;
  const links = [
    { label: d.nav.devis, to: href(lang, "devis") },
    { label: d.pages.carrosserie.title, to: href(lang, "carrosserie") },
    { label: d.pages.entretien.title, to: href(lang, "entretien") },
    { label: d.nav.tarifs, to: href(lang, "home", "tarifs") },
    { label: d.nav.infos, to: href(lang, "home", "infos") },
  ];
  return (
    <footer className="bg-ink pb-28 text-white/85 lg:pb-0">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-10 lg:py-20">
        <div>
          <Logo className="h-11 w-auto text-white" mono title="Garage Gamain, mécanique et carrosserie à Amiens" />
          <p className="mt-6 max-w-xs text-[0.9375rem] leading-relaxed text-white/70">{f.tagline}</p>
        </div>
        <div>
          <p className="eyebrow !text-steel-light">{f.contact}</p>
          <address className="mt-4 text-[0.9375rem] leading-relaxed not-italic">
            {site.address.street}
            <br />
            {site.address.postalCode} {site.address.city}
            <br />
            <a href={site.maps} target="_blank" rel="noopener" className="mt-2 inline-flex items-center gap-2 hover:text-white">
              <PinIcon /> {d.infos.route}
            </a>
            <br />
            <a href={`tel:${site.tel}`} className="mt-2 inline-flex items-center gap-2 font-medium text-white tabular-nums">
              <PhoneIcon /> {site.phone}
            </a>
          </address>
        </div>
        <div>
          <p className="eyebrow !text-steel-light">{d.infos.hours}</p>
          <p className="mt-4 text-[0.9375rem] leading-relaxed whitespace-pre-line">{f.days}</p>
          <p className="mt-1 text-[0.9375rem] text-white/60">{f.closed}</p>
        </div>
        <div>
          <p className="eyebrow !text-steel-light">{f.pages}</p>
          <ul className="mt-4 space-y-2 text-[0.9375rem]">
            {links.map((l) => (
              <li key={l.to}>
                <Link href={l.to} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[90rem] flex-wrap items-center justify-between gap-4 border-t border-white/15 px-5 py-6 text-[0.8125rem] text-white/60 sm:px-8 lg:px-10">
        <p>
          © {new Date().getFullYear()} {f.rights}
        </p>
        <Link href={href(lang, "legal")} className="hover:text-white">
          {f.legal}
        </Link>
      </div>
    </footer>
  );
}
