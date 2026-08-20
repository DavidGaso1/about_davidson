import { ArrowDownRight, ArrowUpRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 bg-[var(--color-background)] pt-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(56,189,248,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.06)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="section-shell pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow mb-6">Applied AI systems builder</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[var(--color-primary)] sm:text-6xl md:text-8xl">
              I turn AI ideas into systems people can rely on.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I design and ship grounded AI workflows, retrieval systems, and business automations—with architecture, testing, safety boundaries, and human review built in.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-sky-400 px-5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">View selected work <ArrowDownRight className="h-4 w-4" /></a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold text-slate-100 transition hover:border-sky-300/60 hover:bg-white/10">Start a conversation <ArrowUpRight className="h-4 w-4" /></a>
            </div>
          </div>
          <aside className="border-l-2 border-sky-400 pl-6 lg:mb-2">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Currently open to</p>
            <p className="mt-4 text-2xl font-medium leading-snug tracking-tight text-slate-100">Applied AI, agentic workflow, and automation teams.</p>
            <div className="mt-6 flex items-center gap-2 text-sm text-slate-400"><MapPin className="h-4 w-4 text-sky-400" />{PERSONAL_INFO.location} · Remote-ready</div>
          </aside>
        </div>
      </div>
      <div className="border-t border-white/10 bg-slate-950/40"><div className="section-shell grid gap-6 py-6 sm:grid-cols-3"><div><p className="text-2xl font-semibold text-sky-300">3+</p><p className="mt-1 text-sm text-slate-400">production automation systems</p></div><div><p className="text-2xl font-semibold text-sky-300">2+ years</p><p className="mt-1 text-sm text-slate-400">building applied AI workflows</p></div><div><p className="text-2xl font-semibold text-emerald-300">Human-led</p><p className="mt-1 text-sm text-slate-400">AI-assisted development process</p></div></div></div>
    </section>
  );
}
