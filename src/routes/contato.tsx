import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/ce/SiteHeader";
import { SiteFooter } from "@/components/ce/SiteFooter";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Caminho Essencial" },
      {
        name: "description",
        content: "Entre em contato com Malu Mattos para tirar dúvidas sobre a análise Caminho Essencial.",
      },
      {
        property: "og:title",
        content: "Contato | Caminho Essencial",
      },
      {
        property: "og:description",
        content: "Entre em contato com Malu Mattos para tirar dúvidas sobre a análise Caminho Essencial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-center">Contato</h1>
          <div className="mt-6 h-px w-24 mx-auto bg-[color:var(--color-olive)]/40" />
          <p className="mt-10 text-center text-[16px] leading-relaxed text-muted-foreground">
            Fale comigo pelos canais abaixo. Será um prazer responder suas dúvidas sobre a análise
            Caminho Essencial.
          </p>

          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            <a
              href="https://instagram.com/soumalumattos"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center text-center rounded-3xl bg-card border border-border/60 p-8 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-petrol)]/40"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-sky)]/50 to-[color:var(--color-mint)]/40 text-[color:var(--color-petrol)] mb-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-8 w-8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl text-foreground">Instagram</h2>
              <p className="mt-2 text-[15px] text-muted-foreground group-hover:text-foreground transition-colors">
                @soumalumattos
              </p>
            </a>

            <a
              href="https://wa.me/5511986716236"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center text-center rounded-3xl bg-card border border-border/60 p-8 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-olive)]/40"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-mint)]/50 to-[color:var(--color-sand)]/40 text-[color:var(--color-olive)] mb-6">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5S7.3 12 7.4 12.2c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.3-.2z" />
                  <path d="M20.5 3.5A10 10 0 0 0 3.6 15.3L2 22l6.9-1.8a10 10 0 0 0 4.6 1.2h.1a10 10 0 0 0 6.9-17.9zm-6.9 16.7a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3a8.3 8.3 0 1 1 7.7 4.6z" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl text-foreground">WhatsApp</h2>
              <p className="mt-2 text-[15px] text-muted-foreground group-hover:text-foreground transition-colors">
                (11) 98671-6236
              </p>
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
