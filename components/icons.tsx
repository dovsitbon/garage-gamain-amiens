// Icônes au trait, dessinées pour le site (1,5 px, bouts arrondis), même famille que le logo.
type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

/** Clé plate (dessin de référence, viewBox 48, horizontale, mâchoire à gauche) : logo, ouverture, picto. */
export const WRENCH = "M2.46 21.5H9v5H2.46A7 7 0 0 0 15.7 26H41a2 2 0 0 0 0-4H15.7A7 7 0 0 0 2.46 21.5Z";

export const PhoneIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 4h3.2l1.6 4-2 1.3a10 10 0 0 0 6.9 6.9l1.3-2 4 1.6V19a1.8 1.8 0 0 1-1.9 1.8C10.4 20.3 3.7 13.6 3.2 5.9A1.8 1.8 0 0 1 5 4Z" />
  </svg>
);
export const ArrowIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 12h15M14 7l5 5-5 5" />
  </svg>
);
export const CloseIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);
export const PinIcon = ({ className = "size-4" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);
export const StarIcon = ({ className = "size-3.5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
    <path d="m12 3.2 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3-5.4 3 1.2-6-4.5-4.2 6.1-.7Z" />
  </svg>
);
export const CameraIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 8h3l1.6-2.5h6.8L17 8h3v11H4Z" />
    <circle cx="12" cy="13.2" r="3.4" />
  </svg>
);
export const ClockIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);
export const QuoteIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M6 3h9l3 3v15H6Z" />
    <path d="M15 3v3h3M9 11h6M9 14h6M9 17h3.5" />
  </svg>
);
export const WrenchIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 48 48" className={className} {...base}>
    <path d={WRENCH} transform="translate(24 24) rotate(-45) scale(1.02) translate(-22 -24)" strokeWidth="3" />
  </svg>
);
export const OilIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M3 10h11v8H3ZM14 12.5l6-3.2M6 10V8h5v2" />
    <path d="M20.6 15.2c0 .9-.5 1.5-1.1 1.5s-1.1-.6-1.1-1.5.7-1.7 1.1-2.2c.4.5 1.1 1.3 1.1 2.2Z" />
  </svg>
);
export const BrakeIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="11" cy="13" r="7.5" />
    <circle cx="11" cy="13" r="2.6" />
    <path d="M16.2 4.2a9.5 9.5 0 0 1 4.3 5.3" strokeWidth="2.6" />
  </svg>
);
export const TyreIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5.2" />
    <circle cx="12" cy="12" r="1.4" />
    <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21" />
  </svg>
);
export const EngineIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 10.5h2V8.5h3V6.5h5v2h2.5l2 2H20v6h-1.5l-2 2H9l-2-2H4Z" />
    <path d="M2 11.5v4M12.5 11v3.5" />
  </svg>
);
export const CarIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M5 16.5H3v-3.6l2.2-.9 2.7-3.8h7.5l3.6 3.8 2 .6v3.9h-2M9.2 16.5h5.6" />
    <path d="M8 12.2h11" />
    <circle cx="7.1" cy="16.6" r="1.9" />
    <circle cx="16.9" cy="16.6" r="1.9" />
  </svg>
);
export const CarFrontIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M4 17v-5l2-5h12l2 5v5ZM4 12h16M5 17v2.5h2.5V17M16.5 17v2.5H19V17" />
    <circle cx="7.5" cy="14.5" r="0.9" />
    <circle cx="16.5" cy="14.5" r="0.9" />
  </svg>
);
export const SnowIcon = ({ className = "size-5" }: P) => (
  <svg viewBox="0 0 24 24" className={className} {...base}>
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M9.6 4.6 12 7l2.4-2.4M9.6 19.4 12 17l2.4 2.4" />
  </svg>
);

/** Règle graduée : le petit détail au trait des titres. */
export const Ticks = ({ className = "" }: P) => (
  <svg viewBox="0 0 64 10" className={className} fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true" preserveAspectRatio="none">
    <path d="M0 9.4h64M.6 9.4V0M16 9.4V4.5M32 9.4V2M48 9.4V4.5M63.4 9.4V0M8 9.4V7M24 9.4V7M40 9.4V7M56 9.4V7" />
  </svg>
);
