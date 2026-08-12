import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  Layers3,
  Network,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { TECH_STACK } from '../data/portfolioData';

const categoryStyles = {
  'ai-agents': {
    icon: BrainCircuit,
    color: 'text-sky-300',
    border: 'border-sky-400/30',
    surface: 'bg-sky-400/10',
    glow: 'shadow-[0_0_35px_rgba(56,189,248,0.16)]',
    dot: 'bg-sky-300',
  },
  'data-retrieval': {
    icon: Database,
    color: 'text-violet-300',
    border: 'border-violet-400/30',
    surface: 'bg-violet-400/10',
    glow: 'shadow-[0_0_35px_rgba(167,139,250,0.15)]',
    dot: 'bg-violet-300',
  },
  'automation-cloud': {
    icon: Cloud,
    color: 'text-emerald-300',
    border: 'border-emerald-400/30',
    surface: 'bg-emerald-400/10',
    glow: 'shadow-[0_0_35px_rgba(52,211,153,0.15)]',
    dot: 'bg-emerald-300',
  },
  'product-engineering': {
    icon: Layers3,
    color: 'text-amber-300',
    border: 'border-amber-400/30',
    surface: 'bg-amber-400/10',
    glow: 'shadow-[0_0_35px_rgba(251,191,36,0.14)]',
    dot: 'bg-amber-300',
  },
  'reliability-quality': {
    icon: ShieldCheck,
    color: 'text-cyan-300',
    border: 'border-cyan-400/30',
    surface: 'bg-cyan-400/10',
    glow: 'shadow-[0_0_35px_rgba(34,211,238,0.14)]',
    dot: 'bg-cyan-300',
  },
} as const;

type StackCategory = (typeof TECH_STACK)[number];
type Technology = StackCategory['technologies'][number] & { category: StackCategory };

const technologyLinks: Record<string, string> = {
  'AI Job Application Agent': 'https://github.com/DavidGaso1/Job-Agent',
  'VIZO-RAG System': 'https://github.com/DavidGaso1/VIZO-RAG',
  HealthRAG: 'https://github.com/DavidGaso1/HealthRAG',
  'This portfolio': 'https://github.com/DavidGaso1/about_davidson',
  NutriDine: 'https://github.com/DavidGaso1/restaurant-recommendation-system',
  'Financial statement pipeline': 'https://github.com/DavidGaso1/financial-statement-pipeline',
  'AI-News-Update': 'https://github.com/DavidGaso1/AI-News-Update',
  'R-Medy': 'https://github.com/DavidGaso1/R-Medy',
  'N8n Automation': 'https://github.com/DavidGaso1/N8n-Automation',
};

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTechnology, setSelectedTechnology] = useState<Technology | null>(null);

  const technologies = useMemo<Technology[]>(
    () => TECH_STACK.flatMap((category) => category.technologies.map((technology) => ({ ...technology, category }))),
    [],
  );

  const visibleTechnologies = activeCategory === 'all'
    ? technologies
    : technologies.filter((technology) => technology.category.id === activeCategory);

  const selectTechnology = (technology: Technology) => {
    setSelectedTechnology((current) => current?.name === technology.name ? null : technology);
  };

  return (
    <section id="tech-stack" className="relative overflow-hidden py-24 md:py-32 bg-[#0b1120]">
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <div className="absolute left-[12%] top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute right-[8%] bottom-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_16%,black_84%,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400">
              System map / 00
            </span>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              The <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              Not a list of buzzwords. A connected map of the technologies I use to move an idea from model reasoning to reliable, human-ready software.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-sky-300 md:self-end">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Click a node to inspect
          </div>
        </div>

        <div className="mb-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            type="button"
            onClick={() => { setActiveCategory('all'); setSelectedTechnology(null); }}
            className={`shrink-0 rounded-full border px-4 py-2 font-mono text-xs transition-all ${activeCategory === 'all' ? 'border-sky-400/40 bg-sky-400/15 text-sky-200' : 'border-white/10 bg-white/[0.03] text-slate-500 hover:border-white/20 hover:text-slate-300'}`}
          >
            All systems <span className="ml-1 text-slate-500">{technologies.length}</span>
          </button>
          {TECH_STACK.map((category) => {
            const style = categoryStyles[category.id as keyof typeof categoryStyles];
            const Icon = style.icon;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => { setActiveCategory(category.id); setSelectedTechnology(null); }}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 font-mono text-xs transition-all ${activeCategory === category.id ? `${style.border} ${style.surface} ${style.color}` : 'border-white/10 bg-white/[0.03] text-slate-500 hover:border-white/20 hover:text-slate-300'}`}
              >
                <Icon className="h-3.5 w-3.5" />
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="relative rounded-2xl border border-white/10 bg-slate-950/45 p-4 shadow-2xl shadow-slate-950/30 md:p-7">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border border-sky-400/25 bg-sky-400/10 shadow-[0_0_70px_rgba(56,189,248,0.14)]">
              <div className="text-center">
                <Network className="mx-auto h-6 w-6 text-sky-300" />
                <span className="mt-2 block font-mono text-[9px] uppercase tracking-widest text-sky-200">AI systems</span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-10 hidden md:block">
            <div className="absolute left-[17%] top-[25%] h-px w-[26%] rotate-[20deg] bg-gradient-to-r from-sky-400/30 to-transparent" />
            <div className="absolute right-[17%] top-[25%] h-px w-[26%] -rotate-[20deg] bg-gradient-to-l from-violet-400/30 to-transparent" />
            <div className="absolute bottom-[25%] left-[17%] h-px w-[26%] -rotate-[20deg] bg-gradient-to-r from-emerald-400/30 to-transparent" />
            <div className="absolute bottom-[25%] right-[17%] h-px w-[26%] rotate-[20deg] bg-gradient-to-l from-amber-400/30 to-transparent" />
          </div>
          <div className="relative grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visibleTechnologies.map((technology, index) => {
              const style = categoryStyles[technology.category.id as keyof typeof categoryStyles];
              const Icon = style.icon;
              const selected = selectedTechnology?.name === technology.name;
              return (
                <button
                  key={`${technology.category.id}-${technology.name}`}
                  type="button"
                  onClick={() => selectTechnology(technology)}
                  aria-pressed={selected}
                  className={`group relative min-h-[118px] overflow-hidden rounded-xl border p-4 text-left transition-all duration-300 ${selected ? `${style.border} ${style.surface} ${style.glow} -translate-y-1` : 'border-white/10 bg-white/[0.025] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]'}`}
                  style={{ animationDelay: `${index * 45}ms` }}
                >
                  <span className={`absolute right-3 top-3 h-1.5 w-1.5 rounded-full ${style.dot} opacity-60 transition-all group-hover:scale-150 group-hover:opacity-100`} />
                  <div className="flex items-start justify-between gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${style.surface}`}>
                      <Icon className={`h-4 w-4 ${style.color}`} />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-slate-100 transition-colors group-hover:text-white">{technology.name}</h3>
                  <p className={`mt-1 font-mono text-[10px] ${style.color} opacity-75`}>{technology.signal}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className={`mt-6 grid transition-all duration-500 ${selectedTechnology ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className="overflow-hidden">
            {selectedTechnology && (() => {
              const style = categoryStyles[selectedTechnology.category.id as keyof typeof categoryStyles];
              const Icon = style.icon;
              return (
                <div className={`glass-card grid gap-6 p-6 md:grid-cols-[auto_1fr_auto] md:items-start md:p-8 ${style.border}`}>
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.surface}`}>
                    <Icon className={`h-7 w-7 ${style.color}`} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-slate-100">{selectedTechnology.name}</h3>
                      <span className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${style.border} ${style.color}`}>{selectedTechnology.category.label}</span>
                    </div>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400">{selectedTechnology.detail}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {selectedTechnology.usedIn.map((project) => {
                        const link = technologyLinks[project];
                        const content = (
                          <>
                            <CheckCircle2 className={`h-3 w-3 ${style.color}`} />
                            {project}
                            {link && <ArrowUpRight className="h-3 w-3 opacity-50" />}
                          </>
                        );
                        return link ? (
                          <a
                            key={project}
                            href={link}
                            target={link.startsWith('http') ? '_blank' : undefined}
                            rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-slate-300 transition-colors hover:border-sky-400/30 hover:text-sky-200"
                          >
                            {content}
                          </a>
                        ) : (
                          <span key={project} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 font-mono text-[10px] text-slate-300">
                            {content}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="hidden text-right md:block">
                    <Sparkles className={`ml-auto h-5 w-5 ${style.color}`} />
                    <span className="mt-2 block font-mono text-[9px] uppercase tracking-widest text-slate-600">In production / practice</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
            {visibleTechnologies.length} technologies · {TECH_STACK.length} system layers · 1 engineering approach
          </p>
          <a href="#projects" className="group inline-flex items-center gap-2 font-mono text-xs text-sky-400 transition-colors hover:text-sky-300">
            See the systems in action
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
