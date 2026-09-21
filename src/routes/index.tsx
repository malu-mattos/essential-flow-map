import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import maluPhoto from "@/assets/malu-mattos.jpg.asset.json";
import {
  EnergyIcon,
  DecisionIcon,
  IdentityIcon,
  LeafIcon,
  SparkleIcon,
  CheckIcon,
  ChevronIcon,
  PdfIcon,
  ChatIcon,
} from "@/components/ce/icons";
import { CTA } from "@/components/ce/CTA";
import { SiteHeader } from "@/components/ce/SiteHeader";
import { CHECKOUT_URL } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caminho Essencial | Análise de Desenho Humano" },
      {
        name: "description",
        content:
          "Leitura individual e ao vivo do seu mapa de Desenho Humano, com cerca de 2 horas de duração e PDF personalizado.",
      },
      { property: "og:title", content: "Caminho Essencial | Análise de Desenho Humano" },
      {
        property: "og:description",
        content:
          "Compreenda seu funcionamento, reconheça seus potenciais e aplique o Desenho Humano na vida real com Malu Mattos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

function Section({
  id,
  children,
  className = "",
  spacing = "default",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: "default" | "tight";
}) {
  const pad = spacing === "tight" ? "py-14 sm:py-16" : "py-20 sm:py-28";
  return (
    <section id={id} className={`w-full px-5 sm:px-8 ${pad} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-olive)]">
      <span className="h-px w-6 bg-[color:var(--color-olive)]/60" />
      {children}
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden ethereal-bg pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full border border-[color:var(--color-mint)]/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -right-40 h-[600px] w-[600px] rounded-full border border-[color:var(--color-petrol)]/25"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <Eyebrow>Caminho Essencial · Desenho Humano</Eyebrow>
        <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
          Descubra como você foi naturalmente desenhada para viver.
        </h1>
        <p className="mt-6 font-serif text-xl sm:text-2xl text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          Compreenda seu funcionamento, faça escolhas com mais confiança e viva com menos resistência, mais leveza e magnetismo.
        </p>
        <p className="mt-10 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          Você não precisa continuar se esforçando para funcionar como todo mundo.
        </p>
        <p className="mt-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          O <span className="font-serif italic text-[color:var(--color-petrol)]">Caminho Essencial</span> é uma leitura individual e ao vivo do seu mapa de Desenho Humano, com cerca de 2 horas de duração, criada para ajudar você a compreender melhor o seu funcionamento, reconhecer seus potenciais e aplicar esse conhecimento na vida real.
        </p>
        <div className="mt-10">
          <CTA className="w-full sm:w-auto">Quero conhecer o meu Desenho</CTA>
        </div>
      </div>
    </section>
  );
}

function OQueE() {
  return (
    <Section id="o-que-e">
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="relative">
          <Eyebrow>O que é</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Um mapa do seu jeito único de funcionar.
          </h2>
          <div className="mt-8 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
            <p>
              O Desenho Humano é um sistema de autoconhecimento que parte de uma ideia simples: cada pessoa possui uma combinação única de características, talentos e formas de viver.
            </p>
            <p>
              Não existe um único ritmo, uma única maneira de decidir ou um caminho que funcione igualmente para todos.
            </p>
            <p>
              O Caminho Essencial é uma leitura individual do seu mapa, focada nos primeiros pilares que ajudam você a reconhecer quem é por natureza.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Revelacoes() {
  const cards = [
    {
      icon: EnergyIcon,
      title: "Seu Tipo e sua Estratégia",
      body: "Como a sua energia funciona e a forma mais natural de interagir com a vida.",
    },
    {
      icon: DecisionIcon,
      title: "Sua Autoridade",
      body: "O seu processo interno para fazer escolhas com mais confiança.",
    },
    {
      icon: IdentityIcon,
      title: "Seu Perfil",
      body: "Seus talentos, aprendizados e a maneira como você vive suas experiências e contribui com o mundo.",
    },
  ];
  return (
    <Section id="chaves" className="bg-[color:var(--color-surface)]/60">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>As chaves do seu Desenho</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Nesta análise, você vai conhecer:
        </h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <article
            key={i}
            className="group relative rounded-3xl bg-card p-8 border border-border/60 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-petrol)]/40"
          >
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-sky)]/50 to-[color:var(--color-mint)]/40 text-[color:var(--color-petrol)]">
              <c.icon className="h-7 w-7" />
            </div>
            <h3 className="font-serif text-2xl leading-snug text-foreground">{c.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{c.body}</p>
            <div aria-hidden className="absolute top-6 right-6 opacity-20 text-[color:var(--color-olive)]">
              <LeafIcon className="h-5 w-5" />
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <CTA className="w-full sm:w-auto">Quero fazer minha leitura</CTA>
      </div>
    </Section>
  );
}

function Transformacao() {
  const questionamentos = [
    "a cobrança para acompanhar o ritmo dos outros;",
    "a pressa para decidir;",
    "a culpa por descansar ou mudar de direção;",
    "a necessidade de ser produtiva e constante o tempo todo;",
    "o hábito de buscar fora as respostas para a sua vida.",
  ];
  const praticas = [
    "menos comparação e autocobrança;",
    "mais confiança nas próprias escolhas;",
    "mais liberdade para usar seus talentos;",
    "mais respeito pelo seu ritmo;",
    "mais abertura para relações e oportunidades que favorecem você.",
  ];
  return (
    <Section id="transformacao">
      <div className="text-center max-w-3xl mx-auto">
        <Eyebrow>O que pode mudar</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Reconhecer o seu Desenho muda a forma como você olha para si.
        </h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
        <p>
          Você começa a perceber quantas escolhas foram feitas para caber, agradar ou corresponder, mesmo quando não combinavam com a sua natureza.
        </p>
        <p className="text-foreground font-medium">E passa a questionar:</p>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-card border border-border/60 p-8 soft-shadow">
          <ul className="space-y-3">
            {questionamentos.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-[color:var(--color-mint)]/25 to-[color:var(--color-sky)]/20 border border-[color:var(--color-mint)]/40 p-8 soft-shadow">
          <h3 className="font-serif text-xl text-foreground text-center">Na prática, isso pode trazer:</h3>
          <ul className="mt-6 space-y-3">
            {praticas.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-foreground/85">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-mint)]/45 text-[color:var(--color-olive)]">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 max-w-3xl mx-auto text-center">
        <p className="text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
          Os desafios continuam existindo. A diferença é que você deixa de gastar tanta energia tentando ser outra pessoa e começa a usar o seu jeito a seu favor.
        </p>
      </div>
    </Section>
  );
}

function ParaQuem() {
  const items = [
    "está cansada de viver no esforço;",
    "costuma dizer “sim” quando algo dentro sinaliza o contrário;",
    "duvida das próprias escolhas;",
    "se cobra para funcionar como as outras pessoas;",
    "sente que há um jeito mais leve de viver;",
    "deseja conhecer o seu Desenho sem se perder em excesso de informações.",
  ];
  return (
    <Section id="para-quem" className="bg-[color:var(--color-surface)]/70 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-[color:var(--color-sand)]/50" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full border border-[color:var(--color-mint)]/40" />
      <div className="relative max-w-3xl mx-auto text-center">
        <Eyebrow>Para quem é</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Talvez você se reconheça aqui.
        </h2>
      </div>
      <ul className="relative mt-10 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-2xl bg-card/80 border border-border/60 p-5 backdrop-blur-sm soft-shadow"
          >
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-mint)]/40 text-[color:var(--color-olive)]">
              <LeafIcon className="h-4 w-4" />
            </span>
            <span className="text-[15.5px] leading-relaxed text-foreground/85">{t}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function Entrega() {
  const items = [
    {
      icon: ChatIcon,
      title: "Leitura individual ao vivo",
      body: "Um encontro individual de cerca de 2 horas para conhecer o seu mapa, compreender suas principais características e conversar sobre como elas aparecem na sua vida.",
    },
    {
      icon: EnergyIcon,
      title: "Tipo, Estratégia, Autoridade e Perfil",
      body: "Os pilares centrais do seu Desenho Humano.",
    },
    {
      icon: PdfIcon,
      title: "PDF personalizado",
      body: "Com as principais chaves da sua análise.",
    },
  ];
  return (
    <Section id="entrega">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>O que está incluído</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Sua experiência no Caminho Essencial
        </h2>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <article
            key={i}
            className="relative rounded-3xl bg-card p-7 border border-border/60 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--color-petrol)]/40"
          >
            <div className="mb-5 inline-flex h-13 w-13 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-sky)]/50 to-[color:var(--color-mint)]/40 text-[color:var(--color-petrol)]">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ComoFunciona() {
  const steps = [
    {
      title: "Envio dos dados",
      body: "Você receberá as orientações para informar nome completo, data de nascimento, horário exato, cidade de nascimento, e-mail e telefone.",
    },
    {
      title: "Preparação do seu mapa",
      body: "Antes do nosso encontro, seu mapa será preparado e analisado individualmente para orientar a leitura.",
    },
    {
      title: "Leitura individual ao vivo",
      body: "No encontro, vamos percorrer os principais pilares do seu Desenho Humano e conversar sobre como essas características aparecem na sua vida, com espaço para perguntas e aprofundamentos.",
    },
  ];
  return (
    <Section id="como-funciona" className="bg-[color:var(--color-surface)]/60">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>Sua jornada</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          O que acontece a partir da compra
        </h2>
      </div>
      <ol className="mt-14 max-w-3xl mx-auto space-y-10">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-5 sm:gap-6">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[color:var(--color-sky)]/50 to-[color:var(--color-mint)]/40 font-serif text-base text-[color:var(--color-petrol)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex-1 pt-1.5">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-[15.5px] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function QuemSou() {
  return (
    <Section id="quem-sou">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-start">
        <div>
          <Eyebrow>Quem conduz</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Malu Mattos
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
            <p>
              Sou jornalista formada pela PUC-SP e tenho mais de 20 anos de experiência em projetos que unem conteúdo, estética e sensibilidade.
            </p>
            <p>
              Minha trajetória passou pela comunicação corporativa, pela produção de conteúdo, pelas artes manuais e pela decoração de eventos. Por mais de 10 anos, trabalhei criando ambientes e experiências pensados nos detalhes.
            </p>
            <p>
              O Desenho Humano me ajudou a compreender minha multipotencialidade, respeitar meu ritmo e usar melhor a minha energia.
            </p>
            <p>
              Hoje, estudo e compartilho esse conhecimento de forma simples e aplicada à vida real, ajudando outras pessoas a reconhecerem o próprio funcionamento, seus potenciais e as particularidades do seu Desenho.
            </p>
          </div>
          <div className="mt-10">
            <CTA className="w-full sm:w-auto">Quero fazer minha análise</CTA>
          </div>
        </div>
        <div className="relative md:sticky md:top-28 mx-auto w-full max-w-[420px] order-first md:order-last">
          <div aria-hidden className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-sky)]/40 to-[color:var(--color-mint)]/30 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border/60 soft-shadow bg-card">
            <img src={maluPhoto.url} alt="Malu Mattos" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>
    </Section>
  );
}

function Investimento() {
  const bullets = [
    "leitura individual ao vivo de cerca de 2 horas",
    "Tipo, Estratégia, Autoridade e Perfil",
    "PDF personalizado",
  ];

  return (
    <Section id="investimento" spacing="tight">
      <div className="mx-auto max-w-2xl">
        <div className="relative rounded-[2rem] bg-card border border-border/70 p-10 sm:p-14 text-center soft-shadow overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[color:var(--color-mint)]/25 blur-3xl" />
          <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[color:var(--color-sky)]/40 blur-3xl" />

          <div className="relative">
            <Eyebrow>Investimento</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">Caminho Essencial</h2>
            <div className="mt-8 flex flex-col items-center gap-2">
              <span className="font-serif text-5xl sm:text-6xl leading-none tracking-tight text-foreground">
                12x de R$ 35,68
              </span>
              <span className="text-[15px] sm:text-base text-muted-foreground">
                ou R$ 347,00 à vista
              </span>
            </div>

            <ul className="mt-8 flex flex-col items-center gap-2 text-[14.5px] text-muted-foreground">
              {bullets.map((b, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <SparkleIcon className="h-3.5 w-3.5 text-[color:var(--color-olive)]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTA className="w-full sm:w-auto">Quero fazer minha leitura</CTA>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Preciso conhecer Desenho Humano?",
    a: "Não. A análise foi pensada para quem está começando e deseja conhecer os pilares centrais do próprio Desenho.",
  },
  {
    q: "Como acontece a leitura?",
    a: "A leitura acontece ao vivo, em um encontro individual com a Malu, com cerca de 2 horas de duração. Vamos percorrer os principais pilares do seu mapa e conversar sobre como eles aparecem na sua vida, com espaço para perguntas e aprofundamentos ao longo do encontro.",
  },
  {
    q: "Preciso saber meu horário de nascimento?",
    a: "Sim. O horário é necessário para gerar o mapa. Quanto mais exata for a informação, mais confiável será a análise.",
  },
  {
    q: "A análise substitui terapia?",
    a: "Não. O Desenho Humano é uma ferramenta de autoconhecimento e não substitui acompanhamento médico, psicológico, terapêutico ou qualquer outro atendimento profissional.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" className="bg-[color:var(--color-surface)]/70">
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
        <div>
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Tudo que você precisa saber antes de começar
          </h2>
        </div>
        <div className="divide-y divide-border/70 rounded-2xl bg-card/70 border border-border/60 backdrop-blur-sm">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 text-left px-6 py-5 group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-foreground">{item.q}</span>
                  <ChevronIcon
                    className={`h-5 w-5 text-[color:var(--color-petrol)] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function FinalSection() {
  return (
    <section className="relative overflow-hidden ethereal-bg px-5 sm:px-8 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full border border-[color:var(--color-mint)]/40" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[760px] w-[760px] rounded-full border border-[color:var(--color-petrol)]/25" />
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[920px] w-[920px] rounded-full border border-[color:var(--color-sand)]/40" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
          Você não precisa se tornar outra pessoa para viver de um jeito mais leve.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
          <p>
            O seu Desenho ajuda você a reconhecer os recursos que já existem em você e a usá-los com mais confiança.
          </p>
        </div>
        <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-[color:var(--color-olive)]">
          Caminho Essencial
        </p>
        <p className="mt-3 font-serif text-4xl sm:text-5xl leading-none tracking-tight text-foreground">
          12x de R$ 35,68
        </p>
        <p className="mt-2 text-[15px] sm:text-base text-muted-foreground">ou R$ 347,00 à vista</p>
        <div className="mt-8">
          <CTA className="w-full sm:w-auto">Quero conhecer o meu Desenho Humano</CTA>
        </div>
      </div>
    </section>
  );
}

function MobileStickyCTA() {
  return (
    <div className="fixed bottom-4 inset-x-4 lg:inset-x-auto lg:right-6 lg:bottom-6 z-30 flex lg:justify-end">
      <a
        href={CHECKOUT_URL}
        className="flex items-center justify-center gap-2 w-full lg:w-auto rounded-full bg-primary text-primary-foreground text-sm font-medium px-6 py-3.5 shadow-[0_16px_40px_-12px_rgba(107,161,175,0.55)] backdrop-blur"
      >
        Quero conhecer meu Desenho Humano
      </a>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[color:var(--color-mint)]/40">
      <SiteHeader />
      <main>
        <Hero />
        <OQueE />
        <Revelacoes />
        <Transformacao />
        <ParaQuem />
        <Entrega />
        <ComoFunciona />
        <Investimento />
        <QuemSou />
        <FinalSection />
        <Faq />
      </main>
      <MobileStickyCTA />
    </div>
  );
}
