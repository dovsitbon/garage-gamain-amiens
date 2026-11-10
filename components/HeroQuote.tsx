"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import site from "@/data/site.json";
import { useLocale } from "@/components/providers";
import { href } from "@/lib/routes";
import { ArrowIcon, PhoneIcon } from "@/components/icons";

/**
 * Champ du hero : immatriculation ou modèle, qui ouvre directement la demande de devis pré-remplie
 * (/fr/devis?v=…). Deux boutons en tout : « Demander un devis » et « Appeler ».
 */
export function HeroQuote() {
  const { lang, d } = useLocale();
  const router = useRouter();
  const id = useId();
  const [v, setV] = useState("");
  const h = d.hero;
  const target = `${href(lang, "devis")}${v.trim() ? `?v=${encodeURIComponent(v.trim().slice(0, 80))}` : ""}`;

  return (
    <div>
      <form
        action={href(lang, "devis")}
        onSubmit={(e) => {
          e.preventDefault();
          router.push(target);
        }}
        className="max-w-xl"
      >
        <label htmlFor={id} className="mb-2 block text-[0.9375rem] font-medium text-white">
          {h.field}
        </label>
        <div className="flex flex-col gap-2 rounded-[0.3rem] bg-white p-1.5 sm:flex-row">
          <input
            id={id}
            name="v"
            value={v}
            onChange={(e) => setV(e.target.value)}
            placeholder={h.fieldPh}
            autoComplete="off"
            autoCapitalize="characters"
            spellCheck={false}
            className="min-h-12 w-full flex-1 rounded-[0.2rem] border-0 bg-transparent px-3 text-[1.0625rem] text-ink placeholder:text-[#85898e] focus:outline-2 focus:outline-steel"
          />
          <button type="submit" className="btn-solid shrink-0 whitespace-nowrap">
            {h.devis} <ArrowIcon />
          </button>
        </div>
      </form>
      <a href={`tel:${site.tel}`} className="btn-line on-dark mt-4 text-white tabular-nums">
        <PhoneIcon /> {h.call} · {site.phone}
      </a>
    </div>
  );
}
