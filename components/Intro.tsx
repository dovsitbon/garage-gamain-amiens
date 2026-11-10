"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { WRENCH } from "@/components/icons";

const KEY = "garage-gamain-intro";
const at = (d: number) => ({ "--d": `${d}s` }) as CSSProperties;

/**
 * Ouverture (1,2 s, une fois par session), tout en CSS (globals.css) :
 * fond gris clair, une clé plate au trait bleu se dessine et tourne d'un quart de tour,
 * « GARAGE GAMAIN » apparaît, puis « AMIENS », fondu sur le hero.
 * Ignorée si l'utilisateur préfère réduire les animations (script en tête du layout).
 */
export function Intro({ skipLabel }: { skipLabel: string }) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        sessionStorage.setItem(KEY, "1");
      } catch {}
      document.documentElement.classList.add("intro-seen");
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  if (gone) return null;

  return (
    <div className="intro-curtain flex flex-col items-center justify-center text-ink">
      <svg viewBox="0 0 48 48" className="size-20 overflow-visible" fill="none" aria-hidden="true">
        <g className="intro-turn">
          <path className="intro-draw" pathLength={1} d={WRENCH} transform="translate(24 24) rotate(-45) translate(-22.5 -24)" stroke="var(--color-steel)" strokeWidth="1.8" strokeLinejoin="round" />
        </g>
      </svg>
      <p className="intro-fade display mt-6 ps-[0.08em] text-[1.9rem] leading-none tracking-[0.08em] sm:text-[2.3rem]" style={at(0.5)} translate="no" aria-hidden="true">
        Garage Gamain
      </p>
      <p className="intro-fade mt-3 ps-[0.32em] text-[0.75rem] font-medium tracking-[0.32em] text-steel" style={at(0.7)} translate="no" aria-hidden="true">
        AMIENS
      </p>
      <button
        type="button"
        onClick={() => {
          try {
            sessionStorage.setItem(KEY, "1");
          } catch {}
          document.documentElement.classList.add("intro-seen");
          setGone(true);
        }}
        className="nav-link absolute right-4 bottom-4 min-h-11 px-4 text-muted transition-colors hover:text-ink"
      >
        {skipLabel}
      </button>
    </div>
  );
}
