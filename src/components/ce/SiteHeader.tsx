import { useEffect, useState } from "react";
import fullLogoAsset from "@/assets/caminho-essencial-full-logo.png.asset.json";
import { CTA } from "./CTA";

const NAV = [
  { href: "/#o-que-e", label: "O que é" },
  { href: "/#chaves", label: "As chaves" },
  { href: "/#transformacao", label: "O que muda" },
  { href: "/#para-quem", label: "Para quem" },
  { href: "/#como-funciona", label: "Sua jornada" },
  { href: "/#quem-sou", label: "Quem conduz" },
  { href: "/#faq", label: "Perguntas frequentes" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border/60" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-2.5 min-w-0" aria-label="Caminho Essencial">
          <img
            src={fullLogoAsset.url}
            alt="Caminho Essencial"
            className="h-11 sm:h-14 w-auto object-contain shrink-0"
          />
        </a>
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <CTA className="hidden sm:inline-flex !py-2.5 !px-5 text-[13px]">Quero minha análise</CTA>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-surface"
            aria-label="Abrir menu"
            aria-expanded={open}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-5 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-1.5">
                {n.label}
              </a>
            ))}
            <CTA className="mt-2 self-start sm:hidden">Quero minha análise</CTA>
          </div>
        </div>
      )}
    </header>
  );
}
