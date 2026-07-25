import { CHECKOUT_URL } from "@/lib/constants";

export function CTA({
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  ariaLabel?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-primary";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-[#5a8f9d] hover:shadow-[0_12px_30px_-12px_rgba(107,161,175,0.55)] active:scale-[0.98]"
      : "border border-border text-foreground/80 hover:text-foreground hover:border-primary/50";
  return (
    <a href={CHECKOUT_URL} aria-label={ariaLabel} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
