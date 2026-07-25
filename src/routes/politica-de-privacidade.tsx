import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/ce/SiteHeader";
import { SiteFooter } from "@/components/ce/SiteFooter";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Caminho Essencial" },
      {
        name: "description",
        content:
          "Saiba como os dados pessoais são coletados, utilizados, armazenados e protegidos na contratação da análise Caminho Essencial.",
      },
      {
        property: "og:title",
        content: "Política de Privacidade | Caminho Essencial",
      },
      {
        property: "og:description",
        content:
          "Saiba como os dados pessoais são coletados, utilizados, armazenados e protegidos na contratação da análise Caminho Essencial.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-center">
            Política de Privacidade
          </h1>
          <div className="mt-6 h-px w-24 mx-auto bg-[color:var(--color-olive)]/40" />
          <p className="mt-10 text-center text-[16px] leading-relaxed text-muted-foreground">
            A sua privacidade é importante para nós. Esta Política de Privacidade explica como os
            seus dados pessoais são coletados, utilizados, armazenados e protegidos durante a
            contratação da análise Caminho Essencial.
          </p>

          <div className="mt-16 space-y-14">
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Quais dados coletamos</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Para a realização da sua análise, poderemos solicitar:
              </p>
              <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>nome completo;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>e-mail;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>telefone/WhatsApp;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>data de nascimento;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>horário de nascimento;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>cidade de nascimento.</span>
                </li>
              </ul>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                Esses dados são utilizados exclusivamente para a elaboração do seu mapa de Desenho
                Humano, comunicação sobre a prestação do serviço e envio da sua análise.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Como utilizamos seus dados</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Os dados informados serão utilizados para:
              </p>
              <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>gerar o seu mapa de Desenho Humano;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>preparar sua análise personalizada;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>entrar em contato quando necessário;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>enviar informações relacionadas à sua compra.</span>
                </li>
              </ul>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                Não comercializamos nem compartilhamos seus dados pessoais com terceiros, exceto quando
                necessário para o processamento do pagamento, envio de comunicações ou cumprimento de
                obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Armazenamento e segurança</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Adotamos medidas razoáveis para proteger seus dados contra acesso não autorizado,
                perda ou divulgação indevida.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Seus direitos</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Você poderá solicitar, a qualquer momento, o acesso, atualização, correção ou exclusão
                dos seus dados pessoais, observadas as obrigações legais de armazenamento.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Contato</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus
                dados, entre em contato pelos canais oficiais de atendimento.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
