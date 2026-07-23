import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/caminho-essencial-logo.png.asset.json";
import { EnergyOrb } from "@/components/ce/EnergyOrb";
import {
  EnergyIcon,
  DecisionIcon,
  IdentityIcon,
  LeafIcon,
  SparkleIcon,
  CheckIcon,
  PlayIcon,
  PdfIcon,
  ChatIcon,
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
          "Análise personalizada de Desenho Humano: gravação, PDF e encontro de tira-dúvidas para viver com mais clareza, leveza e confiança.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const NAV = [
  { href: "#revelacoes", label: "O que você descobrirá" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#voce-recebe", label: "O que você recebe" },
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
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`w-full px-5 sm:px-8 py-20 sm:py-28 ${className}`}>
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
        <a href="#top" className="flex items-center gap-2.5 min-w-0">
          <img src={logoAsset.url} alt="Caminho Essencial" className="h-10 w-10 sm:h-11 sm:w-11 object-contain shrink-0" />
          <span className="font-serif text-lg sm:text-xl text-foreground truncate">Caminho Essencial</span>
        </a>
        <nav className="hidden lg:flex items-center gap-8">
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
      {/* faint circles */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full border border-[color:var(--color-mint)]/30" />
      <div aria-hidden className="pointer-events-none absolute -bottom-52 -right-40 h-[600px] w-[600px] rounded-full border border-[color:var(--color-petrol)]/25" />

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-10 items-center">
        <div className="text-center lg:text-left">
          <Eyebrow>Desenho Humano personalizado</Eyebrow>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
            Caminho <em className="not-italic text-[color:var(--color-petrol)]">Essencial</em>
          </h1>
          <p className="mt-6 font-serif italic text-xl sm:text-2xl text-foreground/85 leading-snug">
            Descubra como você foi naturalmente desenhada para viver.
          </p>
          <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
            Compreenda sua energia, tome decisões com mais confiança e viva com menos resistência,
            mais leveza e magnetismo.
          </p>

          <div className="mt-8 space-y-3 text-[15px] leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0">
            <p>Talvez você já tenha sentido que precisa fazer mais esforço do que as outras pessoas para que as coisas aconteçam.</p>
            <p>Pensa demais antes de decidir. Questiona se está seguindo o caminho certo.</p>
            <p>Tenta se adaptar ao que esperam de você e, mesmo assim, sente que alguma coisa não encaixa.</p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
            <CTA className="w-full sm:w-auto">Quero receber minha análise</CTA>
            <p className="text-[13px] text-muted-foreground max-w-xs text-center lg:text-left">
              Análise gravada + PDF personalizado + encontro de tira-dúvidas.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div aria-hidden className="absolute inset-0 -m-8 rounded-full bg-gradient-to-br from-[color:var(--color-sky)]/40 via-transparent to-[color:var(--color-mint)]/30 blur-3xl" />
          <EnergyOrb className="relative w-full h-auto" />
        </div>
      </div>

      {/* intro follow-up block */}
      <div className="relative mx-auto max-w-3xl text-center mt-20 sm:mt-24">
        <div className="divider-fade w-40 mx-auto mb-8" />
        <p className="text-base sm:text-[17px] leading-relaxed text-muted-foreground">
          Muitas vezes, isso acontece quando você está vivendo de uma forma que se afasta da sua própria natureza.
        </p>
        <p className="mt-5 text-[17px] sm:text-lg leading-relaxed text-foreground/90">
          O <span className="font-serif italic text-[color:var(--color-petrol)]">Caminho Essencial</span> é uma análise
          personalizada do seu Desenho Humano, criada para mostrar como a sua energia funciona e como
          você pode se movimentar pela vida com mais consciência, confiança e alinhamento.
        </p>
        <p className="mt-5 font-serif italic text-lg sm:text-xl text-foreground/85">
          Essa análise é como um mapa que te devolve para si mesma.
        </p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Um mapa que mostra caminhos mais coerentes com quem você é, com menos desgaste,
          menos dúvida e mais fluidez.
        </p>
      </div>
    </section>
  );
}

function Revelacoes() {
  const cards = [
    {
      icon: EnergyIcon,
      title: "Seu Tipo de energia e sua Estratégia",
      body: "Você compreenderá como sua energia funciona e qual é a forma mais alinhada de agir, criar oportunidades e interagir com a vida. Ao respeitar essa natureza, você pode experimentar menos resistência, menos desgaste e mais fluidez no seu caminho.",
    },
    {
      icon: DecisionIcon,
      title: "Sua Autoridade",
      body: "Você descobrirá a sua forma única de tomar decisões. A Autoridade mostra como reconhecer escolhas mais alinhadas, reduzindo a dependência de opiniões externas, da ansiedade e da necessidade de encontrar respostas apenas pela mente. Esse conhecimento ajuda você a escolher com mais confiança.",
    },
    {
      icon: IdentityIcon,
      title: "Seu Perfil",
      body: "Você compreenderá características importantes da sua forma de aprender, se relacionar, viver experiências e contribuir com o mundo. O Perfil revela talentos, desafios e padrões que fazem parte da sua trajetória.",
    },
  ];
  return (
    <Section id="revelacoes" className="bg-[color:var(--color-surface)]/60">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>Revelações</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          O que essa análise revela sobre você
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
    </Section>
  );
}

function Transformacao() {
  const highlight = (word: string) => (
    <span className="font-serif italic text-[color:var(--color-petrol)]">{word}</span>
  );
  const benefits: React.ReactNode[] = [
    <>menos resistência e frustração;</>,
    <>mais {highlight("confiança")} nas próprias decisões;</>,
    <>mais {highlight("leveza")} para ser quem você é;</>,
    <>mais {highlight("clareza")} sobre sua forma de funcionar;</>,
    <>mais {highlight("magnetismo")} nas relações e oportunidades;</>,
    <>menos comparação com o caminho de outras pessoas;</>,
    <>mais respeito pelo seu ritmo e pela sua energia.</>,
  ];
  return (
    <Section id="beneficios">
      <div className="max-w-3xl">
        <Eyebrow>Transformação</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
          O que pode mudar quando você compreende seu Desenho Humano
        </h2>
      </div>
      <div className="mt-12 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="space-y-5 text-[16px] leading-relaxed text-muted-foreground">
          <p>Você começa a reconhecer quais movimentos respeitam sua energia.</p>
          <p>Percebe com mais clareza quando agir, quando esperar e quando uma decisão realmente faz sentido.</p>
          <p className="text-foreground/90">Essa compreensão pode trazer:</p>
          <p className="pt-4 border-t border-border/60">
            Os desafios continuam existindo, mas você passa a enfrentá-los com mais{" "}
            {highlight("consciência")} e menos conflito interno.
          </p>
        </div>
        <ul className="space-y-4">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-4 rounded-2xl bg-card/60 border border-border/50 p-5 backdrop-blur-sm"
            >
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-mint)]/35 text-[color:var(--color-olive)]">
                <CheckIcon className="h-4 w-4" />
              </span>
              <span className="text-[15.5px] leading-relaxed text-foreground/90">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

function Identificacao() {
  const items = [
    "sente que está se esforçando demais para fazer a vida acontecer;",
    "tem dificuldade para confiar nas próprias escolhas;",
    "costuma buscar respostas e validação fora de si;",
    "quer compreender por que algumas situações fluem e outras geram tanta resistência;",
    "deseja se conhecer com mais profundidade;",
    "está começando no Desenho Humano e quer compreender os pilares fundamentais do próprio mapa.",
  ];
  return (
    <Section className="bg-[color:var(--color-surface)]/70 relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full border border-[color:var(--color-sand)]/50" />
      <div aria-hidden className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full border border-[color:var(--color-mint)]/40" />
      <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
        <div>
          <Eyebrow>Identificação</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Esta análise é para você que…
          </h2>
          <ul className="mt-10 space-y-4">
            {items.map((t, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-petrol)] shrink-0" />
                <span className="text-[16px] leading-relaxed text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative mx-auto w-full max-w-[440px]">
          <div aria-hidden className="absolute inset-0 -m-6 rounded-full bg-gradient-to-br from-[color:var(--color-sand)]/40 to-[color:var(--color-sky)]/40 blur-3xl" />
          <FeminineIllustration className="relative w-full h-auto" />
        </div>
      </div>
    </Section>
  );
}

function FeminineIllustration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 500 500" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="fSand" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#E5D5B3" />
          <stop offset="1" stopColor="#8E9E6F" />
        </linearGradient>
      </defs>
      <circle cx="250" cy="250" r="200" fill="none" stroke="#AFD6B8" strokeWidth="1.2" opacity="0.6" strokeDasharray="6 10" />
      <circle cx="250" cy="250" r="170" fill="none" stroke="#6BA1AF" strokeWidth="1" opacity="0.5" />
      <g fill="none" stroke="url(#fSand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* head */}
        <circle cx="250" cy="180" r="34" />
        {/* hair flow */}
        <path d="M218 175 Q195 210 200 260 Q205 300 230 320" />
        <path d="M282 175 Q305 205 305 250 Q303 295 285 320" />
        {/* neck */}
        <path d="M240 215 Q250 232 260 215" />
        {/* shoulders + torso */}
        <path d="M200 260 Q250 245 300 260 Q310 320 300 400 Q250 415 200 400 Q190 320 200 260 Z" />
        {/* arm on heart */}
        <path d="M215 300 Q240 320 258 315" />
        <path d="M258 315 Q272 312 275 300" />
        {/* leaf near heart */}
        <path d="M255 320 Q264 314 273 320 Q267 330 259 330 Q253 326 255 320 Z" stroke="#8E9E6F" />
      </g>
      {/* floating leaves */}
      <g fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M90 140 Q108 128 122 145 Q112 160 96 158 Q85 152 90 140 Z" stroke="#AFD6B8" />
        <path d="M400 130 Q418 118 432 135 Q422 150 406 148 Q395 142 400 130 Z" stroke="#6BA1AF" />
        <path d="M110 380 Q126 370 138 385 Q128 400 114 396 Q102 390 110 380 Z" stroke="#E5D5B3" />
      </g>
    </svg>
  );
}

function ComoFunciona() {
  const steps = [
    {
      title: "Confirmação da compra",
      body: "Após a confirmação do pagamento, você receberá as orientações para enviar os dados necessários para a criação do seu mapa.",
    },
    {
      title: "Envio dos seus dados",
      body: "Para preparar sua análise personalizada, precisarei das seguintes informações:",
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
      body: "A partir das suas informações, prepararei uma análise individual sobre seu Tipo, Estratégia, Autoridade e Perfil. Todo o conteúdo será desenvolvido a partir do seu mapa, com profundidade, atenção e cuidado.",
    },
    {
      title: "Entrega da gravação e do PDF",
      body: "Você receberá:",
      list: [
        "uma análise personalizada gravada;",
        "um PDF com as principais chaves do seu Desenho Humano;",
        "materiais para rever e consultar sempre que desejar.",
      ],
      footer: "A entrega será realizada em até 15 dias após a confirmação do pagamento e o recebimento correto dos seus dados.",
    },
    {
      title: "Encontro de tira-dúvidas",
      body: "Após 10 dias do envio da gravação, teremos um encontro pelo WhatsApp, em horário previamente agendado. Esse será o momento para esclarecer dúvidas, aprofundar pontos importantes e compreender como aplicar as informações da análise na sua vida.",
    },
  ];
  return (
    <Section id="como-funciona">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>Jornada</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">Como funciona</h2>
      </div>
      <ol className="relative mt-16 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 lg:grid-cols-5 lg:gap-6">
        {/* vertical/horizontal connector */}
        <div aria-hidden className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[color:var(--color-mint)]/60 to-transparent" />
        {steps.map((s, i) => (
          <li key={i} className="relative lg:pt-16">
            <div className="lg:absolute lg:top-0 lg:left-0 flex items-center gap-4 lg:block">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-card border border-[color:var(--color-mint)]/60 font-serif text-xl text-[color:var(--color-petrol)] soft-shadow shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="lg:hidden font-serif text-xl text-foreground">{s.title}</h3>
            </div>
            <div className="mt-5 lg:mt-4 pl-[4.5rem] lg:pl-0">
              <h3 className="hidden lg:block font-serif text-xl text-foreground mb-3">{s.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{s.body}</p>
              {s.list && (
                <ul className="mt-3 space-y-1.5 text-[14.5px] text-muted-foreground">
                  {s.list.map((l, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[color:var(--color-olive)]">•</span>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              )}
              {s.footer && <p className="mt-3 text-[14.5px] leading-relaxed text-foreground/80 italic">{s.footer}</p>}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function VoceRecebe() {
  return (
    <Section id="voce-recebe" className="bg-[color:var(--color-surface)]/70">
      <div className="text-center max-w-2xl mx-auto">
        <Eyebrow>Entregáveis</Eyebrow>
        <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">O que você recebe</h2>
      </div>
      <div className="mt-14 grid md:grid-cols-3 gap-6">
        {/* Card 1 - Video */}
        <article className="rounded-3xl bg-card p-8 border border-border/60 soft-shadow flex flex-col">
          <MockupVideo />
          <h3 className="mt-6 font-serif text-2xl">Análise gravada e personalizada</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Uma leitura desenvolvida a partir do seu mapa, para você assistir com calma, fazer pausas e
            rever quantas vezes precisar.
          </p>
        </article>
        {/* Card 2 - PDF */}
        <article className="rounded-3xl bg-card p-8 border border-border/60 soft-shadow flex flex-col">
          <MockupPdf />
          <h3 className="mt-6 font-serif text-2xl">PDF com suas principais chaves</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Um material de apoio com os pontos essenciais do seu Desenho Humano para manter essas
            informações acessíveis no dia a dia.
          </p>
        </article>
        {/* Card 3 - Chat */}
        <article className="rounded-3xl bg-card p-8 border border-border/60 soft-shadow flex flex-col">
          <MockupChat />
          <h3 className="mt-6 font-serif text-2xl">Encontro de tira-dúvidas pelo WhatsApp</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            Um momento individual, realizado após o envio da gravação, para esclarecer dúvidas e
            aprofundar sua compreensão.
          </p>
        </article>
      </div>
    </Section>
  );
}

function MockupVideo() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[color:var(--color-sky)]/40 via-[color:var(--color-mint)]/25 to-[color:var(--color-sand)]/30 border border-border/60 overflow-hidden">
      <div className="absolute inset-6 rounded-xl bg-background/80 backdrop-blur-sm border border-border/40 flex items-center justify-center">
        <div className="h-16 w-16 rounded-full bg-[color:var(--color-petrol)]/90 flex items-center justify-center soft-shadow">
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-primary-foreground fill-current ml-1">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3 left-3 right-3 h-1 rounded-full bg-foreground/10">
        <div className="h-1 w-1/3 rounded-full bg-[color:var(--color-petrol)]" />
      </div>
    </div>
  );
}

function MockupPdf() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[color:var(--color-sand)]/35 via-background to-[color:var(--color-mint)]/25 border border-border/60 p-6 overflow-hidden">
      <div className="mx-auto h-full w-3/4 rounded-lg bg-card border border-border/60 soft-shadow p-4">
        <div className="flex items-center gap-1.5">
          <img src={logoAsset.url} alt="" className="h-6 w-6" />
          <div className="h-2 w-16 rounded bg-[color:var(--color-olive)]/40" />
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-2 rounded bg-foreground/10 w-5/6" />
          <div className="h-2 rounded bg-foreground/10 w-full" />
          <div className="h-2 rounded bg-foreground/10 w-4/6" />
          <div className="h-2 rounded bg-foreground/10 w-3/6" />
        </div>
        <div className="mt-4 h-10 rounded bg-[color:var(--color-mint)]/30" />
        <div className="mt-3 space-y-2">
          <div className="h-2 rounded bg-foreground/10 w-full" />
          <div className="h-2 rounded bg-foreground/10 w-4/6" />
        </div>
      </div>
    </div>
  );
}

function MockupChat() {
  return (
    <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-[color:var(--color-mint)]/30 via-background to-[color:var(--color-sky)]/40 border border-border/60 p-6 overflow-hidden">
      <div className="space-y-2.5">
        <div className="max-w-[70%] rounded-2xl rounded-tl-md bg-card border border-border/60 px-3.5 py-2 text-[12px] text-muted-foreground">
          Olá! Vamos conversar sobre seu mapa?
        </div>
        <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-md bg-[color:var(--color-mint)]/50 px-3.5 py-2 text-[12px] text-foreground">
          Sim, tenho algumas dúvidas 🌿
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-tl-md bg-card border border-border/60 px-3.5 py-2 text-[12px] text-muted-foreground">
          Perfeito. Podemos começar pela sua Autoridade.
        </div>
        <div className="ml-auto max-w-[50%] rounded-2xl rounded-tr-md bg-[color:var(--color-petrol)]/85 px-3.5 py-2 text-[12px] text-primary-foreground">
          Combinado ✨
        </div>
      </div>
    </div>
  );
}

function Investimento() {
  const bullets = [
    "análise personalizada",
    "gravação",
    "PDF",
    "encontro de tira-dúvidas",
    "entrega em até 15 dias",
  ];
  return (
    <Section id="investimento">
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

            <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[13.5px] text-muted-foreground">
              {bullets.map((b, i) => (
                <li key={i} className="inline-flex items-center gap-1.5">
                  <SparkleIcon className="h-3.5 w-3.5 text-[color:var(--color-olive)]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <CTA className="w-full sm:w-auto">Quero receber minha análise Caminho Essencial</CTA>
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
    a: "Sim. Após 10 dias do envio da análise, teremos um encontro pelo WhatsApp, em horário agendado, para tirar dúvidas e aprofundar seu entendimento.",
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
        <img src={logoAsset.url} alt="" className="mx-auto h-16 w-16 opacity-90" />
        <h2 className="mt-8 font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.15]">
          Você não precisa se afastar de quem é para encontrar o seu caminho.
        </h2>
        <div className="mt-8 space-y-5 text-[16px] sm:text-[17px] leading-relaxed text-muted-foreground">
          <p>
            O seu mapa mostra como sua energia funciona, como você pode tomar decisões mais alinhadas
            e quais movimentos tendem a gerar menos resistência.
          </p>
          <p>
            Quando você compreende sua própria natureza, a vida pode ganhar mais clareza, leveza e
            direção.
          </p>
        </div>
        <p className="mt-10 font-serif text-xl sm:text-2xl text-foreground">
          Receba sua análise Caminho Essencial por{" "}
          <span className="text-[color:var(--color-petrol)]">R$ 350,00</span>.
        </p>
        <div className="mt-8">
          <CTA className="w-full sm:w-auto">Quero conhecer meu Desenho Humano</CTA>
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
              [INSERIR nome profissional]
            </p>
          </div>
          <div>
            <h4 className="text-[13px] uppercase tracking-[0.18em] text-[color:var(--color-olive)] font-medium">
              Contato
            </h4>
            <ul className="mt-4 space-y-2 text-[14px] text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Instagram: [INSERIR]</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WhatsApp: [INSERIR]</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">E-mail: [INSERIR]</a></li>
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
          <p>© {new Date().getFullYear()} Caminho Essencial. Todos os direitos reservados.</p>
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
        <Identificacao />
        <ComoFunciona />
        <VoceRecebe />
        <Investimento />
        <Faq />
        <FinalSection />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
