import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/ce/SiteHeader";
import { SiteFooter } from "@/components/ce/SiteFooter";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso e Compra | Caminho Essencial" },
      {
        name: "description",
        content:
          "Conheça os termos de uso e compra da análise personalizada Caminho Essencial de Desenho Humano.",
      },
      {
        property: "og:title",
        content: "Termos de Uso e Compra | Caminho Essencial",
      },
      {
        property: "og:description",
        content:
          "Conheça os termos de uso e compra da análise personalizada Caminho Essencial de Desenho Humano.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight text-center">
            Termos de Uso e Compra
          </h1>
          <div className="mt-6 h-px w-24 mx-auto bg-[color:var(--color-olive)]/40" />
          <p className="mt-10 text-center text-[16px] leading-relaxed text-muted-foreground">
            Ao adquirir o Caminho Essencial, você declara estar de acordo com os presentes termos.
          </p>

          <div className="mt-16 space-y-14">
            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Sobre o serviço</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                O Caminho Essencial consiste em uma análise personalizada de Desenho Humano, elaborada
                individualmente com base nas informações fornecidas pela cliente.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                A análise contempla exclusivamente:
              </p>
              <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>Tipo;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>Estratégia;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>Autoridade;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>Perfil.</span>
                </li>
              </ul>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                O serviço inclui:
              </p>
              <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>análise personalizada gravada;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>PDF com os principais pontos da análise;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>encontro de acompanhamento para esclarecimento de dúvidas.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Dados necessários</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Para a realização da análise é indispensável o envio correto das seguintes informações:
              </p>
              <ul className="mt-5 space-y-3 text-[15.5px] leading-relaxed text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>nome completo;</span>
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
                  <span>cidade de nascimento;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>e-mail;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                  <span>telefone/WhatsApp.</span>
                </li>
              </ul>
              <p className="mt-5 text-[15.5px] leading-relaxed text-muted-foreground">
                A responsabilidade pela exatidão dessas informações é da cliente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Prazo de entrega</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                A análise será entregue em até 15 dias corridos após a confirmação do pagamento e o
                recebimento completo dos dados necessários.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Natureza do serviço</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Cada análise é desenvolvida de forma individual e personalizada, sendo preparada
                exclusivamente para a cliente.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Cancelamentos</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Caso deseje cancelar a compra, entre em contato antes do início da preparação da sua
                análise.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                As condições de cancelamento observarão a legislação aplicável e a natureza personalizada
                do serviço contratado.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Limitação de responsabilidade</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                O Desenho Humano é uma ferramenta de autoconhecimento.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                As informações fornecidas possuem caráter informativo e de desenvolvimento pessoal, não
                substituindo acompanhamento médico, psicológico, terapêutico, jurídico, financeiro ou
                qualquer outro atendimento profissional especializado.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Propriedade intelectual</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Todo o conteúdo entregue é protegido por direitos autorais.
              </p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                É proibida a reprodução, distribuição, comercialização ou compartilhamento integral ou
                parcial da análise sem autorização expressa.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Alterações</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Estes Termos poderão ser atualizados sempre que necessário, passando a valer a versão
                publicada nesta página.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl sm:text-3xl text-foreground">Legislação aplicável e foro</h2>
              <p className="mt-4 text-[15.5px] leading-relaxed text-muted-foreground">
                Estes Termos são regidos pelas leis da República Federativa do Brasil. Eventuais
                controvérsias serão solucionadas conforme a legislação vigente.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
