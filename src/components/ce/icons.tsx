type P = { className?: string };

const base = "stroke-current fill-none";

export const EnergyIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="24" r="14" />
    <path d="M24 6v6M24 36v6M6 24h6M36 24h6M12 12l4 4M32 32l4 4M36 12l-4 4M16 32l-4 4" />
    <circle cx="24" cy="24" r="3" />
  </svg>
);

export const DecisionIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M24 6C14 14 10 22 14 32c3 8 12 12 20 8" />
    <path d="M24 6c10 8 14 16 10 26" />
    <circle cx="30" cy="34" r="3" />
    <path d="M8 40h32" />
  </svg>
);

export const IdentityIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="18" r="7" />
    <path d="M10 40c2-8 8-12 14-12s12 4 14 12" />
    <path d="M24 25v5" />
  </svg>
);

export const LeafIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 4C10 5 4 11 4 19c8 0 14-6 15-15z" />
    <path d="M4 20l8-8" />
  </svg>
);

export const SparkleIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" />
  </svg>
);

export const CheckIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12l4 4 10-10" />
  </svg>
);

export const PlayIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="6" y="10" width="36" height="24" rx="3" />
    <path d="M20 17l10 5-10 5z" fill="currentColor" />
    <path d="M14 40h20" />
  </svg>
);

export const PdfIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 6h18l8 8v28H12z" />
    <path d="M30 6v8h8" />
    <path d="M18 26h12M18 32h12M18 38h8" />
  </svg>
);

export const ChatIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 48 48" className={`${base} ${className}`} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 10h32v22H20l-8 8V10z" />
    <path d="M16 18h16M16 24h10" />
  </svg>
);

export const ChevronIcon = ({ className = "" }: P) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);
