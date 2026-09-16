import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Download, Github, Linkedin, Menu, X } from "lucide-react";

import project1Img from "../assets/project-1.jpg";
import project2Img from "../assets/project-2.jpg";
import project3Img from "../assets/project-3.jpg";
import project4Img from "../assets/project-4.jpg";
import cvAsset from "../assets/cv-arin-kuramoto.pdf.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arin Kuramoto — UX/UI & Front-end" },
      { name: "description", content: "Portfólio de Arin Kuramoto — UX/UI Designer e desenvolvedora front-end. Prototipação, design system e interfaces com personalidade." },
      { property: "og:title", content: "Arin Kuramoto — UX/UI & Front-end" },
      { property: "og:description", content: "Criando interfaces completas e com personalidade." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface ProjectStep { title: string; description: string }
interface GalleryItem { image: string; caption: string }
interface Project {
  id: string; title: string; category: string; year: string;
  description: string; longDescription: string; tags: string[]; image: string;
  variant: "light" | "dark" | "blood"; gallery: GalleryItem[];
  process: ProjectStep[]; outcome: { value: string; label: string };
}

const projects: Project[] = [
  {
    id: "m1", title: "Ledger Brutal", category: "Finanças", year: "2024", variant: "light", image: project1Img,
    description: "Redesenho do app bancário para reduzir abandono em fluxo de investimento.",
    longDescription: "O app tinha 38% de abandono no fluxo de investimento. Mapei o funil, cortei 5 telas intermediárias e redesenhei a confirmação com linguagem direta.",
    tags: ["Pesquisa", "Wireframe", "Design System"],
    gallery: [{ image: project1Img, caption: "Tela de confirmação — versão final" }, { image: project2Img, caption: "Wireframe do funil" }],
    process: [
      { title: "Descoberta", description: "12 entrevistas com investidores iniciantes + análise de 3 meses de funil no analytics. Hipótese: o abandono não era medo de risco, era falta de clareza no que ia acontecer depois do clique." },
      { title: "Definição", description: "Mapa de jornada com os 4 pontos de fricção priorizados por impacto × esforço. Fechei escopo em uma frase: “a pessoa precisa saber quanto vai pagar antes de confirmar”." },
      { title: "Prototipagem", description: "3 rodadas de wireframe em papel, depois protótipo navegável no Figma. Testei duas versões da tela de confirmação em teste A/B moderado com 8 usuários." },
      { title: "Entrega", description: "Componentes documentados no design system, hand-off com engenharia e plano de medição pós-lançamento definido junto com produto." },
    ], outcome: { value: "−22%", label: "Abandono no fluxo · NPS +14" },
  },
  {
    id: "m2", title: "Trânsito Cru", category: "Mobilidade", year: "2023", variant: "dark", image: project2Img,
    description: "Sistema de navegação urbana com mapa em camadas e modo offline.",
    longDescription: "App de mobilidade urbana para usuários com conectividade instável. Criei um mapa em camadas com cache inteligente e rotas alternativas.",
    tags: ["UX Research", "Mapa", "Offline-first"], gallery: [{ image: project2Img, caption: "Mapa em camadas" }],
    process: [
      { title: "Descoberta", description: "Pesquisa em campo: acompanhei 6 pessoas usando o app dentro do ônibus, no sol, com uma mão. Descobri que 70% do uso acontecia com sinal ruim ou nenhum." },
      { title: "Definição", description: "Redefini o problema de “melhorar o mapa” para “funcionar quando a internet não funciona”. Isso mudou toda a arquitetura da solução." },
      { title: "Prototipagem", description: "Protótipo de camadas com cache progressivo. Testei legibilidade sob luz solar direta com contraste medido — WCAG AA como piso, não como meta." },
      { title: "Entrega", description: "Especificação dos estados offline/degradado para engenharia, com fallbacks desenhados para cada nível de conectividade." },
    ], outcome: { value: "+40%", label: "Uso em áreas periféricas" },
  },
  {
    id: "m3", title: "Console Sujo", category: "Dev Tool", year: "2023", variant: "light", image: project3Img,
    description: "Painel de monitoramento para devs com logs densos e atalhos de teclado.",
    longDescription: "Dashboard de observabilidade com alta densidade de informação. Simplifiquei a hierarquia visual e adicionei atalhos de teclado.",
    tags: ["Dashboard", "Acessibilidade", "Atalhos"], gallery: [{ image: project3Img, caption: "Grid de densidade alta" }],
    process: [
      { title: "Descoberta", description: "Shadowing de 4 devs durante plantão real. Cronometrei quanto tempo levavam do alerta até identificar a causa: média de 11 minutos, quase todo gasto procurando informação na tela." },
      { title: "Definição", description: "O problema não era falta de dado, era excesso sem hierarquia. Defini 3 níveis de prioridade visual e o que cabe em cada um." },
      { title: "Prototipagem", description: "Grid de densidade alta testado em 3 tamanhos de tela. Mapeei atalhos de teclado para o fluxo inteiro — navegação sem mouse do alerta até a resolução." },
      { title: "Entrega", description: "Guia de densidade + tabela de atalhos documentada, revisada com o time de engenharia antes do build." },
    ], outcome: { value: "−27%", label: "Tempo de resposta a incidentes" },
  },
  {
    id: "m4", title: "Carrinho Rápido", category: "E-commerce", year: "2022", variant: "blood", image: project4Img,
    description: "Checkout em um passo que elevou conversão em 18% sem mudar o visual.",
    longDescription: "Checkout legado com múltiplos passos e alta taxa de abandono. Reduzi a jornada a uma única página com preenchimento automático e confirmação clara.",
    tags: ["Checkout", "Conversão", "Mobile"], gallery: [{ image: project4Img, caption: "Checkout em página única" }],
    process: [
      { title: "Descoberta", description: "Análise de 4.000 sessões gravadas + heatmap. O abandono se concentrava no passo 3, sempre depois de um erro de validação que apagava os dados digitados." },
      { title: "Definição", description: "Restrição dada pelo negócio: não mexer na identidade visual. Então todo o ganho tinha que vir de fluxo, não de estética." },
      { title: "Prototipagem", description: "Protótipo de página única com validação inline e recuperação de erro sem perda de dado. Teste A/B com 50% do tráfego por 3 semanas." },
      { title: "Entrega", description: "Rollout gradual acompanhado de dashboard de conversão por etapa, com critério de rollback definido antes de subir." },
    ], outcome: { value: "+18%", label: "Conversão no primeiro mês" },
  },
];

const skills = ["UX/UI", "Front-end", "Figma", "React", "Angular", "TypeScript", "Design Thinking", "Service Design"];
const socialLinks = {
  github: "https://github.com/arindevdesign",
  behance: "https://www.behance.net/akatechdesign",
  linkedin: "https://www.linkedin.com/in/arin-kuramoto-238946208/",
};

function BehanceIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.803.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.416-.7.753-1.257 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.166-.358 1.622-.238.457-.561.832-.971 1.132-.41.298-.881.519-1.42.666-.534.148-1.098.222-1.692.222H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.464-.604.464-1.119 0-.286-.051-.522-.151-.707-.104-.184-.243-.329-.423-.432-.176-.102-.383-.17-.621-.208-.236-.038-.481-.056-.733-.056H4.71v2.867h2.742zm.151 5.239c.267 0 .521-.025.76-.076.241-.052.455-.136.637-.261.182-.12.332-.283.44-.493.112-.209.166-.475.166-.797 0-.634-.18-1.085-.533-1.358-.355-.27-.83-.404-1.42-.404H4.71v3.389h2.893zm8.565-.191c.367.358.895.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.649-.798h2.13c-.34 1.006-.849 1.73-1.529 2.174-.679.444-1.502.667-2.465.667-.668 0-1.272-.107-1.813-.321-.542-.215-1.006-.522-1.391-.922-.386-.399-.683-.881-.893-1.446-.209-.565-.315-1.193-.315-1.884 0-.663.106-1.273.317-1.829.211-.557.506-1.037.887-1.44.38-.404.842-.718 1.386-.944.543-.225 1.147-.338 1.811-.338.731 0 1.366.132 1.907.395.54.264.988.624 1.341 1.081.354.457.613.988.777 1.591.165.605.229 1.253.193 1.941h-6.293c.015.742.209 1.331.576 1.69zm2.766-4.437c-.291-.319-.76-.479-1.359-.479-.39 0-.715.068-.979.202-.262.135-.472.304-.629.51-.157.205-.268.418-.333.637-.065.221-.105.414-.119.581h4.063c-.07-.637-.353-1.13-.644-1.451zM15.501 5.031h4.568v1.167h-4.568V5.031z" /></svg>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center p-4" role="dialog" aria-modal="true" aria-labelledby={`modal-${project.id}`}>
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
      <div className="modal-enter relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-paper p-6 text-ink ring-1 ring-ink/10 sm:p-8">
        <button type="button" onClick={onClose} className="absolute right-3 top-3 z-10 grid size-8 place-items-center border border-ink bg-paper transition-colors hover:bg-ink hover:text-paper" aria-label="Fechar"><X className="size-4" /></button>
        <span className="tape-strip -top-3 left-10 -rotate-3" />
        <div className="mb-3 inline-flex items-center gap-1.5 bg-grunge-accent px-2 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink">⚠ Projeto fictício</div>
        <div className="mb-2 text-[10px] uppercase tracking-[0.25em] text-grunge-blood">Dossiér · {project.category} · {project.year}</div>
        <h3 id={`modal-${project.id}`} className="font-display text-4xl leading-none sm:text-5xl">{project.title}</h3>
        <div className="mt-1 text-xs uppercase text-ink-soft">Case study · {project.year} · {project.category}</div>
        <img src={project.image} alt={`Destaque do projeto ${project.title}`} className="my-5 aspect-video w-full bg-paper-2 object-cover" />
        <p className="text-sm leading-relaxed text-ink-soft">{project.longDescription}</p>
        <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase">{project.tags.map((tag) => <span key={tag} className="border border-ink/30 px-2 py-1">{tag}</span>)}</div>

        <div className="mt-7 border-t-2 border-ink/20 pt-5">
          <div className="mb-4 flex items-baseline justify-between"><b className="font-display text-xl font-normal">Galeria</b><em className="text-[10px] not-italic uppercase tracking-[0.2em] text-grunge-blood">{String(project.gallery.length).padStart(2, "0")} de 06 slots</em></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {project.gallery.map((item) => <figure key={item.caption} className="gallery-slot group"><img src={item.image} alt={item.caption} className="size-full object-cover" loading="lazy" /><figcaption className="gallery-caption">{item.caption}</figcaption></figure>)}
            {Array.from({ length: 6 - project.gallery.length }, (_, index) => <div key={index} className="gallery-slot grid place-items-center border-2 border-dashed border-ink/25 bg-transparent text-center"><div><span className="block text-xl opacity-40">＋</span><p className="text-[8px] uppercase tracking-[0.14em] text-ink-soft">slot {String(project.gallery.length + index + 1).padStart(2, "0")}<br />adicionar imagem</p></div></div>)}
          </div>
          <p className="mt-3 border-l-2 border-grunge-accent/70 pl-2 text-[10px] uppercase leading-relaxed tracking-wide text-ink-soft">Cada slot aceita uma imagem: tela, wireframe, protótipo ou foto de workshop.</p>
        </div>

        <div className="mt-7 border-t-2 border-ink/20 pt-5">
          <div className="mb-5 flex items-baseline gap-3"><b className="font-display text-xl font-normal">Processo</b><em className="text-[10px] not-italic uppercase tracking-[0.2em] text-grunge-blood">como cheguei lá</em></div>
          {project.process.map((step, index) => <div key={step.title} className="process-step"><div className="process-number">0{index + 1}</div><div><h4 className="pt-2 text-xs font-bold uppercase tracking-[0.13em]">{step.title}</h4><p className="mt-1 text-[13px] leading-relaxed text-ink-soft">{step.description}</p></div></div>)}
          <div className="mt-2 flex items-center gap-3 border-l-[3px] border-grunge-accent bg-grunge-accent/20 px-3 py-2.5"><b className="font-display text-2xl font-normal">{project.outcome.value}</b><span className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">{project.outcome.label}</span></div>
        </div>
      </div>
    </div>
  );
}

function ChromaCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    const cursor = cursorRef.current;
    if (!cursor) return;
    let frame = 0; let mx = innerWidth / 2; let my = innerHeight / 2; let cx = mx; let cy = my;
    const red = cursor.querySelector<HTMLElement>(".cursor-red"); const green = cursor.querySelector<HTMLElement>(".cursor-green");
    const moveFrame = () => { cx += (mx - cx) * 0.24; cy += (my - cy) * 0.24; cursor.style.transform = `translate3d(${cx}px,${cy}px,0)`; const dx = (mx - cx) * .55; const dy = (my - cy) * .55; const distance = Math.hypot(dx, dy); const lag = Math.min(distance, 14); const ux = distance ? dx / distance * lag : 0; const uy = distance ? dy / distance * lag : 0; if (red) red.style.transform = `translate(${-ux - 5.5}px,${-uy - 3.5}px)`; if (green) green.style.transform = `translate(${ux - 1.5}px,${uy - 3.5}px)`; frame = requestAnimationFrame(moveFrame); };
    const onMove = (event: MouseEvent) => { mx = event.clientX; my = event.clientY; document.body.classList.add("chroma-cursor-on"); const target = event.target instanceof Element ? event.target : null; cursor.classList.toggle("is-hot", Boolean(target?.closest("a,button,[role=button],article"))); };
    const onDown = () => cursor.classList.add("is-down"); const onUp = () => cursor.classList.remove("is-down");
    window.addEventListener("mousemove", onMove, { passive: true }); window.addEventListener("mousedown", onDown); window.addEventListener("mouseup", onUp); frame = requestAnimationFrame(moveFrame);
    return () => { cancelAnimationFrame(frame); document.body.classList.remove("chroma-cursor-on"); window.removeEventListener("mousemove", onMove); window.removeEventListener("mousedown", onDown); window.removeEventListener("mouseup", onUp); };
  }, []);
  return <div ref={cursorRef} className="chroma-cursor" aria-hidden="true"><span className="cursor-ring" /><span className="cursor-square cursor-red" /><span className="cursor-square cursor-green" /><span className="cursor-square cursor-white" /></div>;
}

function Index() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = activeProject || menuOpen ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [activeProject, menuOpen]);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === "Escape") { setActiveProject(null); setMenuOpen(false); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  const closeMenu = () => setMenuOpen(false);

  return <div className="relative min-h-screen overflow-x-hidden bg-paper font-mono text-ink">
    <div className="grunge-noise" aria-hidden="true" /><ChromaCursor />
    <nav className="fixed inset-x-0 top-0 z-50 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold"><i className="size-2 bg-grunge-accent" />AK/UX</a>
        <div className="hidden items-center gap-7 text-xs uppercase md:flex">
          <a href="#projetos" className="hover:text-grunge-accent">Projetos</a><a href="#sobre" className="hover:text-grunge-accent">Sobre</a><a href="#contato" className="hover:text-grunge-accent">Contato</a>
          <a href="#contato" className="availability"><i />Disponível</a>
        </div>
        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid size-10 place-items-center border border-paper/35 md:hidden" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X className="size-5 text-grunge-accent" /> : <Menu className="size-5" />}</button>
      </div>
    </nav>
    <div className={`mobile-sheet ${menuOpen ? "is-open" : ""}`}>
      {[["Projetos", "01", "#projetos"], ["Sobre", "02", "#sobre"], ["Contato", "03", "#contato"]].map(([label, number, href]) => <a key={label} href={href} onClick={closeMenu} className="flex items-baseline gap-3 border-b border-paper/15 py-2 font-display text-[13vw] uppercase leading-none"><span>{label}</span><em className="font-mono text-[11px] not-italic tracking-[0.2em] text-grunge-accent">{number}</em></a>)}
      <a href={cvAsset.url} download className="mt-4 flex items-center justify-center gap-2 bg-grunge-accent p-3 text-xs font-bold uppercase tracking-[0.14em] text-ink"><Download className="size-4" /> Baixar CV (PDF)</a>
      <div className="mt-auto flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.15em]"><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="border border-paper/30 px-3 py-2">LinkedIn</a><a href={socialLinks.behance} target="_blank" rel="noreferrer" className="border border-paper/30 px-3 py-2">Behance</a><a href={socialLinks.github} target="_blank" rel="noreferrer" className="border border-paper/30 px-3 py-2">GitHub</a></div>
    </div>

    <header id="top" className="relative overflow-hidden bg-paper pt-24">
      <div className="absolute -left-6 -top-8 hidden select-none font-display text-[12rem] leading-none text-ink/5 md:block">UX</div><div className="absolute bottom-16 right-2 hidden rotate-6 select-none font-display text-7xl leading-none text-grunge-blood/10 lg:block">UI</div>
      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-6 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-ink-soft"><span className="bg-ink px-2 py-1 text-paper">UX/UI</span><span className="border border-ink/30 px-2 py-1">Design Thinking</span><span className="border border-ink/30 px-2 py-1">Service Design</span><span className="border border-ink/30 px-2 py-1">Front-end</span></div>
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_240px]">
          <div><h1 className="font-display text-[15vw] leading-[0.82] tracking-tight sm:text-[11vw] md:text-7xl"><span className="distressed-text block">ARIN</span><span className="-ml-2 block">KURAMOTO</span></h1>
            <div className="relative mt-3 inline-block"><span className="tape-strip -left-6 -top-3 -rotate-12" /><p className="text-sm uppercase leading-relaxed sm:text-base">UX/UI e Front-end: criando interfaces completas e com personalidade</p></div>
            <div className="mt-6 flex flex-wrap gap-3 text-xs uppercase tracking-wide"><a href="#projetos" className="bg-ink px-4 py-2.5 text-paper hover:bg-grunge-blood">Ver projetos ↓</a><a href="#sobre" className="border-2 border-ink px-4 py-2 hover:bg-ink hover:text-paper">Quem é Arin</a><a href={cvAsset.url} download className="flex items-center gap-2 border-2 border-dashed border-grunge-blood px-4 py-2 font-bold text-grunge-blood hover:bg-grunge-blood hover:text-paper"><Download className="size-4" /> Baixar CV</a></div>
          </div>
          <div className="relative hidden lg:block"><div className="relative -rotate-2 bg-paper-2 p-4 ring-1 ring-ink/10"><div className="grid aspect-[4/5] place-items-center bg-paper outline outline-1 -outline-offset-1 outline-ink/5"><div className="p-6 text-center"><div className="mx-auto mb-3 grid size-16 place-items-center rounded-full border-2 border-dashed border-ink/30 text-2xl">📷</div><p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">Adicione sua foto aqui</p></div></div><span className="tape-strip -bottom-3 left-1/2 -translate-x-1/2 rotate-6" /><span className="absolute left-3 top-2 text-[10px] uppercase tracking-[0.2em] text-ink-soft">fig.00 — arin</span></div></div>
        </div>
      </div>
      <div className="relative mt-10 overflow-hidden border-y border-ink/20 bg-paper-2 py-2"><div className="marquee-track flex whitespace-nowrap text-xs uppercase tracking-[0.3em] text-ink-soft">{[0, 1].flatMap((repeat) => skills.map((skill) => <span key={`${repeat}-${skill}`} className="px-4">{skill} ✕</span>))}</div></div>
    </header>

    <section id="projetos" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28"><div className="relative mx-auto max-w-[1200px] px-5 sm:px-8"><div className="mb-10"><div className="mb-3 text-xs uppercase tracking-[0.25em] text-grunge-accent">// projetos selecionados</div><h2 className="font-display text-5xl leading-[0.9] sm:text-6xl">Desenvolvidos com intenção.</h2></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project) => { const dark = project.variant !== "light"; return <article key={project.id} onClick={() => setActiveProject(project)} className={`grunge-card group relative cursor-pointer p-5 ${project.variant === "light" ? "-rotate-1 bg-paper-2 text-ink ring-1 ring-ink/10" : project.variant === "dark" ? "rotate-1 bg-ink text-paper ring-1 ring-paper/25 sm:mt-8" : "rotate-1 bg-grunge-blood text-paper sm:mt-8"}`}>
        <div className="relative mb-4"><span className="fiction-label" tabIndex={0}>Fictício<span>Projeto fictício — criado para demonstrar o layout. Cases reais em breve.</span></span><img src={project.image} alt={project.title} className="aspect-[16/10] w-full bg-paper object-cover" loading="lazy" /></div>
        <div className={`mb-2 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] ${dark ? "text-paper/60" : "text-ink-soft"}`}><span className={`px-1.5 py-0.5 ${project.variant === "dark" ? "bg-grunge-accent text-ink" : project.variant === "blood" ? "bg-ink text-paper" : "bg-grunge-blood text-paper"}`}>{project.category}</span></div>
        <h3 className="font-display text-3xl leading-none">{project.title}</h3><p className={`mt-2 text-xs leading-relaxed ${dark ? "text-paper/60" : "text-ink-soft"}`}>{project.description}</p><button type="button" className={`project-card-cta mt-4 px-3 py-2 text-xs font-bold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-grunge-accent focus-visible:outline-offset-2 ${project.variant === "dark" ? "bg-grunge-accent text-ink hover:bg-paper" : project.variant === "blood" ? "bg-ink text-paper hover:bg-grunge-accent hover:text-ink" : "bg-ink text-paper hover:bg-grunge-blood"}`}>Saber mais →</button>
      </article>; })}</div>
    </div></section>

    <section id="sobre" className="relative overflow-hidden bg-paper py-20 text-ink sm:py-28"><div className="mx-auto grid max-w-[1200px] gap-10 px-5 sm:px-8 md:grid-cols-12"><div className="relative md:col-span-5"><div className="relative grid aspect-[4/5] -rotate-1 place-items-center bg-paper-2 ring-1 ring-ink/10"><div className="p-8 text-center"><div className="mx-auto mb-4 grid size-20 place-items-center rounded-full border-2 border-dashed border-ink/30 text-3xl">📷</div><p className="text-[10px] uppercase tracking-[0.2em] text-ink-soft">Adicione sua foto aqui</p></div><span className="absolute left-3 top-2 text-[10px] uppercase tracking-[0.2em] text-ink-soft">fig.01 — arin</span><span className="tape-strip -top-3 left-6 -rotate-6" /><span className="tape-strip -bottom-3 right-6 -rotate-3" /></div></div>
      <div className="md:col-span-7"><div className="mb-4 text-xs uppercase tracking-[0.25em] text-grunge-blood">// SOBRE MIM</div><h2 className="mb-6 font-display text-5xl leading-[0.9] sm:text-6xl">Desenho experiências que sobrevivem ao caos.</h2><div className="max-w-[52ch] space-y-4 text-sm leading-relaxed text-ink-soft"><p>Sou Arin Kuramoto, UX/UI Designer e desenvolvedora front-end. Trabalho na discovery, alinhamento estratégico com equipes ágeis e delivery híbrida (prototipação e desenvolvimento).</p><p>Meu processo junta pesquisa, análise e automação com IA, protótipos de baixa à alta fidelidade com jornada de usuário, criações de design systems robustos e testes sem cerimônia. Tudo isso incluindo a prática da acessibilidade WCAG e W3C.&nbsp;

Meu protótipo sai do Figma e vai para o VSCode sem ruído. Ou seja: o hand-off não perde nada no caminho.</p><p>Meus resultados garantem menos atrito, mais confiança e governança dos componentes de design e telas das simples às complexas sem perder identidade da marca.</p></div><div className="mt-8 flex flex-wrap gap-2 text-[11px] uppercase">{["Pesquisa", "Prototipagem", "Design System", "React", "Angular", "TypeScript"].map((tag) => <span key={tag} className="border border-ink/30 px-2 py-1">{tag}</span>)}<span className="border border-grunge-blood px-2 py-1 text-grunge-blood">Acessibilidade</span></div></div>
    </div></section>

    <section id="contato" className="relative overflow-hidden bg-ink py-20 text-paper sm:py-28"><div className="relative mx-auto max-w-[1200px] px-5 sm:px-8"><div className="mb-4 text-xs uppercase tracking-[0.25em] text-grunge-accent">// entre em contato</div><h2 className="mb-6 font-display text-[11vw] leading-[0.85] tracking-tight sm:text-8xl"><span className="tv">BORA</span> PROTOTIPAR?</h2><p className="mb-8 max-w-[48ch] text-sm text-paper/70">Aberto para projetos e colaborações de produtos que não têm medo de ser diferentes.</p><div className="flex flex-wrap items-center gap-3.5"><a href="mailto:akatechdesign@gmail.com" className="-skew-x-6 bg-grunge-accent px-6 py-4 text-base font-bold text-ink hover:bg-grunge-blood hover:text-paper sm:text-lg"><span className="inline-block skew-x-6 break-all">akatechdesign@gmail.com</span></a><a href={cvAsset.url} download className="flex items-center gap-2 border-2 border-paper/45 px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] hover:bg-paper hover:text-ink"><Download className="size-4" /> Baixar CV</a></div></div></section>

     <footer className="border-t border-paper/15 bg-ink text-paper"><div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-5 py-8 sm:flex-row sm:items-center sm:px-8"><div className="text-xs uppercase text-paper/60">© 2026 ARIN KURAMOTO&nbsp;</div><div className="flex gap-3"><a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon"><Github className="size-4" /></a><a href={socialLinks.behance} target="_blank" rel="noreferrer" aria-label="Behance" className="social-icon"><BehanceIcon className="size-4" /></a><a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon"><Linkedin className="size-4" /></a></div></div></footer>
    {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
  </div>;
}