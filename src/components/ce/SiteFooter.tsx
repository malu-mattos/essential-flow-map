import logoAsset from "@/assets/caminho-essencial-symbol.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Caminho Essencial" className="h-10 w-auto" />
            <span className="font-serif text-lg">Caminho Essencial</span>
            <span className="text-[13.5px] text-muted-foreground ml-2">by Malu Mattos</span>
          </div>
          <ul className="flex flex-wrap md:justify-end gap-6 text-[14px] text-muted-foreground">
            <li>
              <a href="/politica-de-privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:text-foreground transition-colors">
                Contato
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-10 pt-8 border-t border-border/60 text-[12.5px] leading-relaxed text-muted-foreground space-y-3">
          <p className="italic">
            O Desenho Humano é apresentado nesta página como uma ferramenta de autoconhecimento e
            não substitui acompanhamento médico, psicológico, terapêutico ou qualquer outro atendimento
            profissional.
          </p>
          <p>© {new Date().getFullYear()} Malu Mattos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
