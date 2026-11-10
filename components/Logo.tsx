import { WRENCH } from "@/components/icons";

/**
 * Logo typographique du Garage Gamain (l'enseigne n'a pas encore été photographiée) :
 * une roue au trait (pneu + jante) qui enserre une clé plate, « GARAGE GAMAIN » en capitales robustes (Archivo),
 * « MÉCANIQUE · CARROSSERIE · AMIENS » en petit. Prend la couleur du texte (currentColor) ; l'emblème est bleu acier, sauf `mono`.
 * Pour le remplacer : changer ce composant, public/logo.svg et app/icon.svg (même emblème).
 */
export function Emblem({ className = "", mono = false }: { className?: string; mono?: boolean }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke={mono ? "currentColor" : "var(--color-steel, #1E3A56)"} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <EmblemPaths />
    </svg>
  );
}

function EmblemPaths({ red = "var(--color-red, #C5302B)", mono = false }: { red?: string; mono?: boolean }) {
  return (
    <>
      <circle cx="24" cy="24" r="21.5" strokeWidth="2.6" />
      <circle cx="24" cy="24" r="16.8" strokeWidth="1.3" />
      <path d={WRENCH} transform="translate(24 24) rotate(-45) scale(0.7) translate(-22.5 -24)" strokeWidth="2.4" stroke={mono ? "currentColor" : red} />
    </>
  );
}

export function Logo({ className = "", title, mono = false, tagline = true }: { className?: string; title?: string; mono?: boolean; tagline?: boolean }) {
  return (
    <svg viewBox="0 0 292 52" className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <g transform="translate(2 2)" fill="none" stroke={mono ? "currentColor" : "var(--color-steel, #1E3A56)"} strokeLinecap="round" strokeLinejoin="round">
        <EmblemPaths mono={mono} />
      </g>
      <text x="62" y={tagline ? 30 : 36} textLength="226" lengthAdjust="spacingAndGlyphs" fill="currentColor" style={{ fontFamily: "var(--font-archivo), Archivo, 'Arial Black', Arial, sans-serif", fontWeight: 820, fontStretch: "115%", fontSize: tagline ? 25 : 29 }}>
        GARAGE GAMAIN
      </text>
      {tagline && (
        <text x="63" y="46.5" textLength="224" lengthAdjust="spacing" fill="currentColor" opacity="0.75" style={{ fontFamily: "var(--font-inter), Inter, Arial, sans-serif", fontWeight: 500, fontSize: 8.4 }}>
          MÉCANIQUE · CARROSSERIE · AMIENS
        </text>
      )}
    </svg>
  );
}
