import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Github, Linkedin, X } from "lucide-react";

import project1Img from "../assets/project-1.jpg";
import project2Img from "../assets/project-2.jpg";
import project3Img from "../assets/project-3.jpg";
import project4Img from "../assets/project-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arin Kuramoto — UX Designer" },
      { name: "description", content: "Portfólio de Arin Kuramoto, designer de UX especializado em interfaces grunge, legíveis e cheias de personalidade." },
      { property: "og:title", content: "Arin Kuramoto — UX Designer" },
      { property: "og:description", content: "Portfólio de Arin Kuramoto, designer de UX especializado em interfaces grunge, legíveis e cheias de personalidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  variant: "light" | "dark" | "accent" | "blood";
}

const projects: Project[] = [
  {
    id: "m1",
    title: "Ledger Brutal",
    category: "Finanças",
    year: "2024",
    description: "Redesenho do app bancário para reduzir abandono em fluxo de investimento.",
    longDescription:
      "O app tinha 38% de abandono no fluxo de investimento. Mapei o funil, cortei 5 telas intermediárias e redesenhei a confirmação com linguagem direta. Resultado: 22% menos drop-off e NPS +14.",
    tags: ["Pesquisa", "Wireframe", "Design System"],
    image: project1Img,
    variant: "light",
  },
  {
    id: "m2",
    title: "Trânsito Cru",
    category: "Mobilidade",
    year: "2023",
    description: "Sistema de navegação urbana com mapa em camadas e modo offline.",
    longDescription:
      "App de mobilidade urbana para usuários com conectividade instável. Criei um mapa em camadas com cache inteligente e rotas alternativas. Aumentou o uso em 40% nas áreas periféricas.",
    tags: ["UX Research", "Mapa", "Offline-first"],
    image: project2Img,
    variant: "dark",
  },
  {
    id: "m3",
    title: "Console Sujo",
    category: "Dev Tool",
    year: "2023",
    description: "Painel de monitoração para devs com logs densos e atalhos de teclado.",
    longDescription:
      "Dashboard de observabilidade com alta densidade de informação. Simplifiquei a hierarquia visual e adicionei atalhos de teclado, reduzindo o tempo médio de resposta a incidentes em 27%.",
    tags: ["Dashboard", "Acessibilidade", "Atalhos"],
    image: project3Img,
    variant: "light",
  },
  {
    id: "m4",
    title: "Carrinho Rápido",
    category: "E-commerce",
    year: "2022",
    description: "Checkout em um passo que elevou conversão em 18% sem mudar o visual.",
    longDescription:
      "Checkout legado com múltiplos passos e alta taxa de abandono. Reduzi a jornada a uma única página com preenchimento automático e confirmação clara. Conversão subiu 18% no primeiro mês.",
    tags: ["Checkout", "Conversão", "Mobile"],
    image: project4Img,
    variant: "blood",
  },
];

function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.803.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.416-.7.753-1.257 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.166-.358 1.622-.238.457-.561.832-.971 1.132-.41.298-.881.519-1.42.666-.534.148-1.098.222-1.692.222H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.464-.604.464-1.119 0-.286-.051-.522-.151-.707-.104-.184-.243-.329-.423-.432-.176-.102-.383-.17-.621-.208-.236-.038-.481-.056-.733-.056H4.71v2.867h2.742zm.151 5.239c.267 0 .521-.025.76-.076.241-.052.455-.136.637-.261.182-.12.332-.283.44-.493.112-.209.166-.475.166-.797 0-.634-.18-1.085-.533-1.358-.355-.27-.83-.404-1.42-.404H4.71v3.389h2.893zm8.565-.191c.367.358.895.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.649-.798h2.13c-.34 1.006-.849 1.73-1.529 2.174-.679.444-1.502.667-2.465.667-.668 0-1.272-.107-1.813-.321-.542-.215-1.006-.522-1.391-.922-.386-.399-.683-.881-.893-1.446-.209-.565-.315-1.193-.315-1.884 0-.663.106-1.273.317-1.829.211-.557.506-1.037.887-1.44.38-.404.842-.718 1.386-.944.543-.225 1.147-.338 1.811-.338.731 0 1.366.132 1.907.395.54.264.988.624 1.341 1.081.354.457.613.988.777 1.591.165.605.229 1.253.193 1.941h-6.293c.015.742.209 1.331.576 1.69zm2.766-4.437c-.291-.319-.76-.479-1.359-.479-.39 0-.715.068-.979.202-.262.135-.472.304-.629.51-.157.205-.268.418-.333.637-.065.221-.105.414-.119.581h4.063c-.07-.637-.353-1.13-.644-1.451zM15.501 5.031h4.568v1.167h-4.568V5.031z" />
    </svg>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div
        className="absolute inset-0 bg-ink/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-paper text-ink ring-1 ring-ink/10 p-6 sm:p-8 modal-enter">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 size-8 grid place-items-center border border-ink font-mono text-xs hover:bg-ink hover:text-paper transition-colors"
          aria-label="Fechar"
        >
          <X className="size-4" />
        </button>
        <span className="tape-strip -top-3 left-10 -rotate-3" />

        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-grunge-blood mb-2">
          Dossiér · {project.category} · {project.year}
        </div>
        <h3
          id={`modal-title-${project.id}`}
          className="font-display text-4xl sm:text-5xl leading-none tracking-tight mb-1"
        >
          {project.title}
        </h3>
        <div className="font-mono text-xs uppercase tracking-wide text-ink-soft mb-4">
          Case study · {project.year} · {project.category}
        </div>

        <img
          src={project.image}
          alt={`Destaque do projeto ${project.title}`}
          className="w-full aspect-video object-cover my-5 bg-paper-2 outline outline-1 -outline-offset-1 outline-ink/5"
          loading="lazy"
        />

        <p className="font-mono text-sm leading-relaxed text-ink-soft">
          {project.longDescription}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-ink/30 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen bg-paper text-ink font-mono overflow-x-hidden">
      <div className="grunge-noise" aria-hidden="true" />

      {/* Fixed nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-ink text-paper">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-3 flex items-center justify-between">
          <a
            href="#top"
            className="font-mono font-bold text-sm tracking-tight flex items-center gap-2"
          >
            <span className="size-2 bg-grunge-accent inline-block" />
            AK/UX
          </a>
          <div className="flex items-center gap-4 sm:gap-7 font-mono text-xs uppercase tracking-wide">
            <a href="#projetos" className="hover:text-grunge-accent transition-colors">
              Projetos
            </a>
            <a href="#sobre" className="hover:text-grunge-accent transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-grunge-accent transition-colors">
              Contato
            </a>
            <a
              href="#contato"
              className="bg-grunge-accent text-ink font-bold px-3 py-1.5 -skew-x-12 hover:bg-grunge-blood hover:text-paper transition-colors"
            >
              <span className="inline-block skew-x-12">Iniciar</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header
        id="top"
        className="relative overflow-hidden bg-paper pt-24 pb-0"
      >
        <div className="absolute -top-8 -left-6 text-[12rem] leading-none font-display text-ink/5 select-none pointer-events-none hidden md:block">
          UX
        </div>
        <div className="absolute bottom-16 right-2 text-[7rem] leading-none font-display text-grunge-blood/10 select-none pointer-events-none hidden lg:block rotate-6">
          90s
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft mb-6">
            <span className="bg-ink text-paper px-2 py-1">UX/UI</span>
            <span className="border border-ink/30 px-2 py-1">Design Thinking</span>
            <span className="border border-ink/30 px-2 py-1">Service Design</span>
            <span className="border border-ink/30 px-2 py-1">Front-end</span>
          </div>

          <div className="grid lg:grid-cols-[1fr_240px] gap-8 items-start">
            <div>
              <h1 className="font-display text-[15vw] sm:text-[11vw] md:text-[7rem] leading-[0.82] tracking-tighter text-balance">
                <span className="distressed-text block">ARIN</span>
                <span className="block text-ink -ml-2">KURAMOTO</span>
              </h1>

              <div className="mt-3 relative inline-block">
                <span className="tape-strip -top-3 -left-6 -rotate-12" />
                <p className="font-mono text-sm sm:text-base uppercase tracking-wide text-ink">
                  Designer de UX — interfaces quebradas, re-grudadas e legíveis.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-wide">
                <a
                  href="#projetos"
                  className="bg-ink text-paper px-4 py-2.5 hover:bg-grunge-blood transition-colors"
                >
                  Ver projetos ↓
                </a>
                <a
                  href="#sobre"
                  className="border-2 border-ink px-4 py-2.5 hover:bg-ink hover:text-paper transition-colors"
                >
                  Quem é Arin
                </a>
              </div>
            </div>

            {/* Photo placeholder card */}
            <div className="relative hidden lg:block">
              <div className="relative bg-paper-2 ring-1 ring-ink/10 p-4 -rotate-2">
                <div className="aspect-[4/5] bg-paper outline outline-1 -outline-offset-1 outline-ink/5 grid place-items-center">
                  <div className="text-center p-6">
                    <div className="size-16 mx-auto mb-3 rounded-full border-2 border-dashed border-ink/30 grid place-items-center">
                      <span className="text-2xl">📷</span>
                    </div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft text-balance">
                      Adicione sua foto aqui
                    </p>
                  </div>
                </div>
                <span className="tape-strip -bottom-3 left-1/2 -translate-x-1/2 rotate-6" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft absolute top-2 left-3">
                  fig.00 — arin
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-10 overflow-hidden border-y border-ink/20 py-2 bg-paper-2">
          <div className="marquee-track flex whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em] text-ink-soft">
            {[0, 1].map((dup) =>
              [
                "UX/UI",
                "Front-end",
                "Figma",
                "JavaScript",
                "React",
                "Design Thinking",
                "Service Design",
                "UX Writing",
              ].map((word) => (
                <span key={`${dup}-${word}`} className="px-4">
                  {word} ✕
                </span>
              )),
            )}
          </div>
        </div>
      </header>

      {/* Projetos */}
      <section
        id="projetos"
        className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden"
      >
        <div className="absolute -left-10 bottom-10 text-[15rem] leading-none font-display text-paper/5 select-none pointer-events-none hidden lg:block -rotate-90">
          DOSSIER
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="flex items-end justify-between mb-10 gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.25em] text-grunge-blood mb-3">
                // projetos selecionados
              </div>
              <h2 className="font-display text-5xl sm:text-6xl leading-[0.9] tracking-tight text-ink">
                Trabalho no papel.
              </h2>
            </div>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft whitespace-nowrap">
              (04 arquivos)
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const baseClasses =
                "grunge-card group relative p-5 cursor-pointer";
              const variantClasses =
                project.variant === "dark"
                  ? "bg-ink text-paper rotate-1 sm:mt-8"
                  : project.variant === "accent"
                    ? "bg-grunge-accent text-ink -rotate-1"
                    : project.variant === "blood"
                      ? "bg-grunge-blood text-paper rotate-1 sm:mt-8"
                      : "bg-paper-2 ring-1 ring-ink/10 -rotate-1";
              const textClass =
                project.variant === "dark" || project.variant === "blood"
                  ? "text-paper/60"
                  : "text-ink-soft";
              const categoryBg =
                project.variant === "dark"
                  ? "bg-grunge-accent text-ink"
                  : project.variant === "blood"
                    ? "bg-ink text-paper"
                    : project.variant === "accent"
                      ? "bg-ink text-paper"
                      : "bg-grunge-blood text-paper";

              return (
                <article
                  key={project.id}
                  className={`${baseClasses} ${variantClasses}`}
                  onClick={() => setActiveProject(project)}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="mb-4 aspect-[16/10] w-full object-cover bg-paper outline outline-1 -outline-offset-1 outline-ink/5"
                    loading="lazy"
                  />
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft mb-2">
                    <span className={`${categoryBg} px-1.5 py-0.5`}>
                      {project.category}
                    </span>
                    <span className={project.variant === "dark" || project.variant === "blood" ? "text-paper/60" : ""}>
                      {index + 1 < 10 ? `0${index + 1}` : index + 1} / {projects.length}
                    </span>
                  </div>
                  <h3 className="font-display text-3xl leading-none tracking-tight">
                    {project.title}
                  </h3>
                  <p className={`font-mono text-xs mt-2 leading-relaxed ${textClass}`}>
                    {project.description}
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide bg-ink text-paper px-3 py-2 hover:bg-grunge-blood transition-colors">
                    Abrir dossiér →
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden"
      >
        <div className="absolute -right-10 top-10 text-[16rem] leading-none font-display text-paper/5 select-none pointer-events-none hidden lg:block rotate-90">
          MEU
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 relative">
            <div className="relative bg-paper-2 outline outline-1 -outline-offset-1 outline-black/5 grid place-items-center -rotate-1 aspect-[4/5]">
              <div className="text-center p-8">
                <div className="size-20 mx-auto mb-4 rounded-full border-2 border-dashed border-ink/30 grid place-items-center">
                  <span className="text-3xl">📷</span>
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft text-balance">
                  Adicione sua foto aqui
                </p>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-soft absolute top-2 left-3">
                fig.01 — arin
              </span>
            </div>
            <span className="tape-strip -bottom-3 left-8 rotate-6" />
          </div>
          <div className="md:col-span-7">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-grunge-accent mb-4">
              // sobre
            </div>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.9] tracking-tight text-balance mb-6">
              Desenho experiências que sobrevivem ao caos.
            </h2>
            <div className="space-y-4 font-mono text-sm leading-relaxed text-paper/80 max-w-[52ch]">
              <p className="text-pretty">
                Sou Arin Kuramoto, designer de UX com anos criando produtos digitais. Trabalho na interseção entre pesquisa, estratégia e execução — onde o produto esbarra em sistemas legados, restrições reais e gente de verdade.
              </p>
              <p className="text-pretty">
                Meu processo junta pesquisa bruta, protótipos xerocados e testes sem cerimônia. A interface final precisa ser legível mesmo quando o mundo em volta está em ruído. Já entreguei fluxos para fintechs, apps de mobilidade e ferramentas internas que ninguém gostava de usar.
              </p>
              <p className="text-pretty">
                O resultado: menos atrito, mais confiança e telas que não pedem desculpa pelo próprio estilo.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide">
              <span className="border border-paper/30 px-2 py-1">Pesquisa</span>
              <span className="border border-paper/30 px-2 py-1">Prototipagem</span>
              <span className="border border-paper/30 px-2 py-1">Design System</span>
              <span className="border border-grunge-accent text-grunge-accent px-2 py-1">
                Acessibilidade
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section
        id="contato"
        className="relative bg-ink text-paper py-20 sm:py-28 overflow-hidden"
      >
        <div className="absolute top-6 right-6 text-[13rem] leading-none font-display text-grunge-accent/10 select-none pointer-events-none hidden lg:block rotate-90">
          FALA
        </div>
        <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
          <div className="font-mono text-xs uppercase tracking-[0.25em] text-grunge-accent mb-4">
            // entre em contato
          </div>
          <h2 className="font-display text-[11vw] sm:text-8xl leading-[0.85] tracking-tighter text-balance mb-6">
            <span className="distressed-text text-paper">BORA</span>{" "}
            <span className="text-paper">FAZER RUÍDO.</span>
          </h2>
          <p className="font-mono text-sm text-paper/70 max-w-[48ch] mb-8">
            Aberto para projetos, colaborações e uma boa conversa sobre produtos
            que não têm medo de ser diferentes.
          </p>
          <a
            href="mailto:hello@arinkuramoto.com"
            className="inline-flex items-center gap-3 bg-grunge-accent text-ink font-mono font-bold text-base sm:text-lg px-6 py-4 -skew-x-6 hover:bg-grunge-blood hover:text-paper transition-colors break-all"
          >
            <span className="inline-block skew-x-6">
              hello@arinkuramoto.com
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-paper border-t border-paper/15">
        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="font-mono text-xs uppercase tracking-wide text-paper/60">
            © {new Date().getFullYear()} Arin Kuramoto — feito à mão, sem
            polimento.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="size-10 grid place-items-center border border-paper/30 font-mono font-bold text-sm hover:bg-grunge-accent hover:text-ink hover:border-grunge-accent transition-colors"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className="size-10 grid place-items-center border border-paper/30 font-mono font-bold text-sm hover:bg-grunge-accent hover:text-ink hover:border-grunge-accent transition-colors"
            >
              <BehanceIcon className="size-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="size-10 grid place-items-center border border-paper/30 font-mono font-bold text-sm hover:bg-grunge-accent hover:text-ink hover:border-grunge-accent transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </footer>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
}
