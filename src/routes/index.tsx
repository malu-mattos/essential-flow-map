import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/caminho-essencial-symbol.png.asset.json";
import fullLogoAsset from "@/assets/caminho-essencial-full-logo.png.asset.json";

import maluPhoto from "@/assets/malu-mattos.jpg.asset.json";
import {
  EnergyIcon,
  DecisionIcon,
  IdentityIcon,
  LeafIcon,
  SparkleIcon,
  CheckIcon,
  ChevronIcon,
} from "@/components/ce/icons";

const CHECKOUT_URL = "#checkout"; // [INSERIR LINK DO CHECKOUT]

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caminho Essencial | Análise Personalizada de Desenho Humano" },
      {
        name: "description",
        content:
          "Compreenda seu Tipo, Estratégia, Autoridade e Perfil por meio de uma análise personalizada de Desenho Humano, com gravação, PDF e encontro de tira-dúvidas.",
      },
      { property: "og:title", content: "Caminho Essencial | Análise Personalizada de Desenho Humano" },
      {
        property: "og:description",
        content:
          "Análise personalizada de Desenho Humano com Malu Mattos: gravação, PDF e encontro de aprofundamento para viver com mais clareza, leveza e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { href: "#chaves", label: "As chaves do seu mapa" },
  { href: "#transformacao", label: "O que muda" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#como-funciona", label: "Sua jornada" },
  { href: "#quem-sou", label: "Quem sou" },
  { href: "#faq", label: "Perguntas frequentes" },
];

function CTA({
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

function Header() {
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
        <a href="#top" className="flex items-center gap-2.5 min-w-0" aria-label="Caminho Essencial">
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

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden ethereal-bg pt-28 sm:pt-36 pb-20 sm:pb-28 px-5 sm:px-8">
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full border border-[color:var(--color-mint)]/30" />
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -right-40 h-[600px] w-[600px] rounded-full border border-[color:var(--color-petrol)]/25" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
          Caminho <span className="text-[color:var(--color-petrol)]">Essencial</span>
        </h1>
        <p className="mt-8 font-serif text-2xl sm:text-3xl lg:text-[2.15rem] leading-tight text-foreground">
          Descubra como você foi naturalmente desenhada para viver.
        </p>
        <p className="mt-5 font-serif italic text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl mx-auto">
          Compreenda sua energia, tome decisões com mais confiança e viva com menos resistência,
          mais leveza e magnetismo.
        </p>
      </div>


      {/* intro follow-up block */}
      <div className="relative mx-auto max-w-3xl mt-20 sm:mt-24">
        <div className="divider-fade w-40 mx-auto mb-8" />
        <div className="space-y-5 text-center text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground px-2">
          <p>
            Talvez você já tenha sentido que precisa fazer muito esforço para que as coisas aconteçam.
          </p>
          <p>
            Pensa demais antes de decidir. Questiona se está seguindo o caminho certo. Tenta se
            adaptar ao que esperam de você e, mesmo assim, sente que alguma coisa não encaixa.
          </p>
          <p>
            Se isso faz sentido para você, talvez não seja falta de capacidade, disciplina ou esforço.
          </p>
          <p className="font-serif italic text-lg sm:text-xl text-foreground/90">
            Talvez esteja apenas vivendo distante da forma como foi naturalmente desenhada para funcionar.
          </p>
          <p>
            O <span className="font-serif italic text-[color:var(--color-petrol)]">Caminho Essencial</span> é uma
            leitura individual do seu mapa de Desenho Humano, criada para ajudar você a compreender melhor
            o seu funcionamento, reconhecer os seus potenciais e aplicar esse conhecimento na vida real.
          </p>
        </div>

        {/* O que é */}
        <div className="relative mt-14 rounded-3xl bg-gradient-to-br from-[color:var(--color-mint)]/20 via-card/60 to-[color:var(--color-sky)]/25 border border-border/50 backdrop-blur-sm p-8 sm:p-12 overflow-hidden">
          <img
            src={logoAsset.url}
            alt=""
            aria-hidden
            className="pointer-events-none select-none absolute -right-16 -bottom-16 sm:-right-24 sm:-bottom-24 h-72 w-72 sm:h-96 sm:w-96 opacity-15"
          />
          <div className="relative text-center max-w-2xl mx-auto space-y-5">
            <Eyebrow>O que é o Desenho Humano</Eyebrow>
            <div className="space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>
                O Desenho Humano é um sistema de autoconhecimento que revela o seu jeito único de funcionar.
              </p>
              <p>
                Ele mostra que não existe uma fórmula capaz de servir igualmente para todas as pessoas. O que
                fortalece uma pode esgotar outra. O que traz clareza para alguém pode gerar ainda mais dúvida
                em você.
              </p>
              <p className="font-serif italic text-lg text-foreground/85">
                Cada Desenho é único porque cada pessoa também é.
              </p>
              <p>
                Ao conhecer o seu, você começa a reconhecer os talentos, os ritmos e as particularidades que
                já fazem parte de você. E percebe que muitas das características que tentou mudar podem ser
                justamente os recursos que vieram para ajudá-la a viver melhor.
              </p>
              <p className="font-semibold text-foreground">
                Você não precisa se tornar outra pessoa para viver uma vida mais leve. Precisa conhecer melhor
                quem já é.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}


function Revelacoes() {
  const cards = [
    {
      icon: EnergyIcon,
      title: "Seu Tipo de Energia e sua Estratégia",
      body: "Você compreenderá como sua energia funciona e qual é a forma mais alinhada de agir, criar oportunidades e interagir com a vida. Ao respeitar essa natureza, você pode experimentar menos resistência, menos desgaste e mais fluidez no seu caminho.",
    },
    {
      icon: DecisionIcon,
      title: "Sua Autoridade",
      body: "Você descobrirá a sua forma única de tomar decisões. A Autoridade mostra como reconhecer escolhas mais alinhadas, reduzindo a dependência de opiniões externas, da ansiedade e da necessidade de encontrar respostas apenas pela mente.",
    },
    {
      icon: IdentityIcon,
      title: "Seu Perfil",
      body: "Você compreenderá características importantes da sua forma de aprender, se relacionar, viver experiências e contribuir com o mundo. O Perfil revela talentos, desafios e padrões que fazem parte da sua trajetória.",
    },
  ];
  return (
    <Section id="chaves" className="bg-[color:var(--color-surface)]/60">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>As chaves do seu mapa</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          As chaves do seu mapa
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
        <CTA className="w-full sm:w-auto">Quero conhecer o meu Desenho</CTA>
      </div>
    </Section>
  );
}

function Transformacao() {
  const questionamentos = [
    "a crença de que precisa acompanhar o ritmo dos outros;",
    "a ideia de que decidir rápido é sempre sinal de segurança;",
    "a culpa por descansar, mudar de direção ou dizer “não”;",
    "a cobrança para ser mais produtiva, constante ou previsível;",
    "o hábito de buscar fora as respostas que o seu corpo já sinaliza.",
  ];
  const praticas = [
    "menos desgaste tentando sustentar um ritmo que não é o seu;",
    "mais confiança para fazer escolhas;",
    "mais liberdade para usar seus talentos;",
    "menos comparação e autocobrança;",
    "mais abertura para relações e oportunidades que favorecem você.",
  ];
  return (
    <Section id="transformacao">
      <div className="text-center max-w-3xl mx-auto">
        <Eyebrow>Transformação</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          O que muda quando você reconhece o seu Desenho
        </h2>
      </div>

      <div className="mt-12 max-w-3xl mx-auto space-y-6 text-center">
        <p className="font-serif text-xl sm:text-2xl leading-snug text-foreground">
          Você começa a aceitar o seu jeito de funcionar e a usar isso a seu favor.
        </p>
        <p className="text-[16px] leading-relaxed text-muted-foreground">
          Você passa a enxergar quantas escolhas foram feitas para caber, agradar ou corresponder,
          mesmo quando não combinavam com a sua natureza.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        <div className="rounded-3xl bg-card border border-border/60 p-8 soft-shadow">
          <h3 className="font-serif text-xl text-foreground text-center">Você passa a questionar</h3>
          <ul className="mt-6 space-y-3">
            {questionamentos.map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-[color:var(--color-mint)]/25 to-[color:var(--color-sky)]/20 border border-[color:var(--color-mint)]/40 p-8 soft-shadow">
          <h3 className="font-serif text-xl text-foreground text-center">Na prática, isso pode ser</h3>
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

      <div className="mt-12 max-w-3xl mx-auto text-center space-y-5">
        <div className="rounded-2xl bg-card/70 border border-border/60 backdrop-blur-sm p-6">
          <p className="font-serif italic text-[17px] sm:text-lg text-foreground/85 leading-relaxed">
            Esse é o início do descondicionamento: separar o que faz parte de você do que foi
            incorporado ao longo da vida.
          </p>
        </div>
        <p className="text-[15.5px] leading-relaxed text-muted-foreground">
          Os desafios continuam existindo. A diferença é que você para de gastar energia tentando
          funcionar como esperam e começa a usar seus talentos, seu ritmo e sua forma de decidir a
          seu favor.
        </p>
      </div>
    </Section>
  );
}


function ParaQuem() {
  const items = [
    "está cansada de se esforçar para acompanhar ritmos que não são os seus;",
    "costuma dizer “sim” mesmo quando algo dentro sinaliza o contrário;",
    "duvida das próprias escolhas e busca confirmação fora de si;",
    "se cobra para ser mais produtiva, decidida ou constante;",
    "deseja conhecer o seu Desenho Humano sem se perder em excesso de informações;",
    "quer reconhecer seus potenciais e aplicar esse conhecimento no dia a dia.",
  ];
  return (
    <Section id="para-quem" className="bg-[color:var(--color-surface)]/70 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-[color:var(--color-sand)]/50" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full border border-[color:var(--color-mint)]/40" />
      <div className="relative max-w-3xl mx-auto text-center">
        <Eyebrow>Para quem é esta análise</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Talvez você se reconheça aqui
        </h2>
        <p className="mt-6 text-[16px] leading-relaxed text-muted-foreground">
          O Caminho Essencial pode fazer sentido para você que:
        </p>
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

function ComoFunciona() {
  const steps = [
    {
      title: "Compra e envio dos dados",
      body: "Após a confirmação do pagamento, você receberá as orientações para enviar os dados necessários para a criação do seu mapa.",
      intro: "Para preparar sua análise personalizada, precisarei das seguintes informações:",
      list: [
        "nome completo;",
        "data de nascimento;",
        "horário exato de nascimento;",
        "cidade de nascimento;",
        "e-mail;",
        "WhatsApp para contato.",
      ],
      footer: "Esses dados são indispensáveis para a geração correta do seu mapa de Desenho Humano.",
    },
    {
      title: "Preparação da sua análise",
      body: "A partir das suas informações, prepararei uma análise individual sobre seu Tipo e Estratégia, Autoridade e Perfil. Todo o conteúdo será desenvolvido a partir do seu mapa, com profundidade, atenção e cuidado.",
    },
    {
      title: "Entrega da gravação e do PDF",
      body: "Você receberá:",
      list: [
        "uma análise personalizada gravada;",
        "um PDF com as principais chaves do seu Desenho Humano.",
      ],
      footer: "A entrega será realizada em até 15 dias após a confirmação do pagamento e o recebimento correto dos seus dados.",
    },
    {
      title: "Conversa de aprofundamento",
      body: "Cerca de 10 dias após a entrega, faremos um encontro individual para esclarecer dúvidas e aprofundar os principais pontos da sua análise.",
    },
  ];
  return (
    <Section id="como-funciona">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>Como funciona</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Sua jornada no Caminho Essencial
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
              {s.intro && (
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted-foreground">{s.intro}</p>
              )}
              {s.list && (
                <ul className="mt-3 space-y-1.5 text-[15px] text-muted-foreground">
                  {s.list.map((l, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[color:var(--color-olive)]">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.footer && (
                <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/75 italic">
                  {s.footer}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>

    </Section>
  );
}

function QuemSou() {
  return (
    <Section id="quem-sou" className="bg-[color:var(--color-surface)]/60">
      <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-start">
        <div>
          <Eyebrow>Quem sou</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Quem é Malu Mattos
          </h2>
          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-muted-foreground">
            <p className="font-serif italic text-lg text-foreground/85">Oie. Eu sou a Malu.</p>
            <p>
              Sou jornalista formada pela PUC-SP e tenho mais de 20 anos de experiência em projetos
              que unem conteúdo, estética e sensibilidade.
            </p>
            <p>
              Ao longo desse caminho, trabalhei com comunicação corporativa, produção de conteúdo,
              projetos autorais com artes manuais e, por mais de 10 anos, com decoração de eventos.
              Em cada uma dessas fases, havia algo em comum: o desejo de cuidar dos detalhes, contar
              histórias e criar experiências que permanecessem na memória.
            </p>
            <div className="rounded-2xl bg-card/80 border border-border/60 p-6 space-y-4 soft-shadow">
              <p>
                O Desenho Humano me ajudou a compreender que a minha multipotencialidade faz parte
                de quem eu sou. Também me mostrou como respeitar meu ritmo e usar melhor a minha
                energia. Foi a partir desse encontro que comecei a viver com mais clareza, menos
                autocobrança e mais confiança na minha própria natureza.
              </p>
            </div>
            <p>
              Hoje, estudo e compartilho esse conhecimento de forma simples e aplicada à vida real,
              ajudando outras pessoas a reconhecerem o próprio funcionamento, seus potenciais e as
              particularidades do seu Desenho.
            </p>
          </div>
          <div className="mt-10">
            <CTA className="w-full sm:w-auto">Quero fazer minha análise</CTA>
          </div>
        </div>
        <div className="relative md:sticky md:top-28 mx-auto w-full max-w-[420px] order-first md:order-last">
          <div aria-hidden className="absolute inset-0 -m-6 rounded-[2rem] bg-gradient-to-br from-[color:var(--color-sky)]/40 to-[color:var(--color-mint)]/30 blur-3xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-border/60 soft-shadow bg-card">
            <img
              src={maluPhoto.url}
              alt="Malu Mattos"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </Section>

  );
}

function Investimento() {
  const bullets = [
    "Análise personalizada gravada",
    "PDF com as principais chaves",
    "Encontro para esclarecer dúvidas",
    "Entrega em até 15 dias",
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
            <div className="mt-8 flex items-baseline justify-center gap-2">
              <span className="font-serif text-6xl sm:text-7xl text-[color:var(--color-petrol)] tracking-tight">
                R$ 347
              </span>
              <span className="font-serif text-2xl text-[color:var(--color-petrol)]/80">,00</span>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground max-w-md mx-auto">
              Após a confirmação do pagamento, você receberá as instruções para o envio dos dados
              necessários para a criação do seu mapa.
            </p>

            <ul className="mt-8 flex flex-col items-center gap-2 text-[14.5px] text-muted-foreground">
              {bullets.map((b, i) => (
                <li key={i} className="inline-flex items-center gap-2">
                  <SparkleIcon className="h-3.5 w-3.5 text-[color:var(--color-olive)]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTA className="w-full sm:w-auto">Quero começar meu Caminho Essencial</CTA>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const FAQ_ITEMS = [
  {
    q: "A leitura acontece ao vivo?",
    a: "A análise é preparada e gravada exclusivamente para você. Esse formato permite que o seu mapa seja analisado com profundidade e que você assista ao conteúdo no seu ritmo. Depois do envio, teremos um encontro pelo WhatsApp para esclarecer dúvidas.",
  },
  {
    q: "Quando receberei minha análise?",
    a: "A gravação e o PDF serão entregues em até 15 dias após a confirmação do pagamento e o recebimento completo dos seus dados.",
  },
  {
    q: "Terei contato com você depois da gravação?",
    a: "Sim. Cerca de 10 dias após a entrega, faremos um encontro individual para aprofundar a sua análise e esclarecer as dúvidas que surgirem ao longo desse processo.",
  },
  {
    q: "Preciso conhecer Desenho Humano?",
    a: "Não. A análise é adequada para quem está começando e deseja conhecer os pilares fundamentais do próprio mapa.",
  },
  {
    q: "Preciso saber meu horário de nascimento?",
    a: "Sim. O horário de nascimento é necessário para gerar o mapa. Quanto mais precisa for essa informação, mais confiável será a análise.",
  },
  {
    q: "A análise substitui terapia ou acompanhamento profissional?",
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
        <img src={logoAsset.url} alt="" className="mx-auto h-20 w-auto opacity-90" />
        <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
          Você não precisa continuar tentando funcionar como todo mundo.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
          <p>
            O seu Desenho pode ajudar você a reconhecer o que favorece a sua energia, os seus
            potenciais e o seu jeito único de viver.
          </p>
        </div>
        <p className="mt-10 font-serif text-xl sm:text-2xl text-foreground">
          Receba sua análise Caminho Essencial por{" "}
          <span className="text-[color:var(--color-petrol)]">R$ 347,00</span>.
        </p>
        <div className="mt-8">
          <CTA className="w-full sm:w-auto">Quero viver meu Desenho Humano</CTA>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logoAsset.url} alt="Caminho Essencial" className="h-10 w-10" />
              <span className="font-serif text-lg">Caminho Essencial</span>
            </div>
            <p className="mt-4 text-[13.5px] leading-relaxed text-muted-foreground">
              by Malu Mattos
            </p>
          </div>
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.18em] text-[color:var(--color-olive)] font-medium">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-[14px] text-muted-foreground">
              <li>
                <a
                  href="https://instagram.com/soumalumattos"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-[color:var(--color-petrol)]">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  @soumalumattos
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5511986716236"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-[color:var(--color-olive)]">
                    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5S7.3 12 7.4 12.2c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.2-.2-.3-.2z" />
                    <path d="M20.5 3.5A10 10 0 0 0 3.6 15.3L2 22l6.9-1.8a10 10 0 0 0 4.6 1.2h.1a10 10 0 0 0 6.9-17.9zm-6.9 16.7a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-4.1 1.1 1.1-4-.2-.3a8.3 8.3 0 1 1 7.7 4.6z" />
                  </svg>
                  (11) 98671-6236
                </a>
              </li>
            </ul>

          </div>
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.18em] text-[color:var(--color-olive)] font-medium">
              Legal
            </h4>
            <ul className="mt-4 space-y-2 text-[14px] text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
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

function MobileStickyCTA() {
  return (
    <div className="lg:hidden fixed bottom-4 inset-x-4 z-30">
      <a
        href={CHECKOUT_URL}
        className="flex items-center justify-center gap-2 w-full rounded-full bg-primary text-primary-foreground text-sm font-medium px-6 py-3.5 shadow-[0_16px_40px_-12px_rgba(107,161,175,0.55)] backdrop-blur"
      >
        Quero conhecer meu Desenho Humano
      </a>
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-[color:var(--color-mint)]/40">
      <Header />
      <main>
        <Hero />
        <Revelacoes />
        <Transformacao />
        <ParaQuem />
        <ComoFunciona />
        <QuemSou />
        <Investimento />
        <Faq />
        <FinalSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
