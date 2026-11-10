"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { useLocale } from "@/components/providers";
import type { Img } from "@/lib/media";
import { CarIcon } from "@/components/icons";

export type Pair = { id: string; before: Img; after: Img; alt: string };

/**
 * Curseur de comparaison avant / après : un vrai <input type="range"> (clavier, lecteurs d'écran),
 * posé en transparence sur les deux images. La photo « après » est découpée par clip-path.
 * Sans photos (pair absent), le curseur fonctionne sur deux emplacements dessinés, sans fausse photo.
 */
export function BeforeAfter({ pair, label }: { pair?: Pair; label?: string }) {
  const { d } = useLocale();
  const [pos, setPos] = useState(50);
  const t = d.beforeAfter;

  // Chaque légende reste dans sa moitié (à 25 % ou 75 %), pour ne pas se chevaucher sous le curseur.
  const placeholder = (dark: boolean, text: string): ReactNode => (
    <div className={`slot relative size-full ${dark ? "dark text-steel-light" : "text-steel/60"}`}>
      <span className={`absolute top-1/2 flex w-[42%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-3 text-center ${dark ? "left-1/4" : "left-3/4"}`}>
        <CarIcon className="size-12 sm:size-16" />
        <span className={`text-[0.8125rem] font-medium ${dark ? "text-steel-light" : "text-muted"}`}>{text}</span>
      </span>
    </div>
  );

  return (
    <figure>
      <div className="compare relative aspect-[4/3] overflow-hidden bg-concrete select-none">
        {pair ? (
          <Image src={pair.before.src} width={pair.before.width} height={pair.before.height} alt={`${t.before} : ${pair.alt}`} sizes="(min-width:1024px) 45vw, 100vw" className="absolute inset-0 size-full object-cover" />
        ) : (
          <div className="absolute inset-0">{placeholder(true, t.slotBefore)}</div>
        )}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
          {pair ? (
            <Image src={pair.after.src} width={pair.after.width} height={pair.after.height} alt={`${t.after} : ${pair.alt}`} sizes="(min-width:1024px) 45vw, 100vw" className="size-full object-cover" />
          ) : (
            placeholder(false, t.slotAfter)
          )}
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white" style={{ left: `${pos}%` }} aria-hidden="true">
          <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-red text-white shadow-[0_2px_10px_rgb(0_0_0/0.25)]">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </span>
        </div>
        <span className="absolute top-4 left-4 rounded-sm bg-white px-2 py-1 text-[0.75rem] font-medium text-ink">{t.before}</span>
        <span className="absolute top-4 right-4 rounded-sm bg-white px-2 py-1 text-[0.75rem] font-medium text-ink">{t.after}</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={label ? `${t.handle} : ${label}` : t.handle} className="absolute inset-0 size-full opacity-0" />
      </div>
      {label && <figcaption className="mt-3 text-[0.9375rem] text-muted">{label}</figcaption>}
    </figure>
  );
}
