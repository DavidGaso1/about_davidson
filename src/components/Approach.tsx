import { ArrowRight, Check } from 'lucide-react';

const stages = [
  ['01', 'Clarify the problem', 'Start with the user, workflow, risk, and the decision the system needs to support.'],
  ['02', 'Shape the system', 'Choose the smallest useful architecture: model, retrieval, tools, persistence, and boundaries.'],
  ['03', 'Build with leverage', 'Use Claude Code and Codex to move quickly while reviewing generated work and keeping the repository understandable.'],
  ['04', 'Prove it works', 'Test failure paths, validate outputs, add observability, and keep consequential actions behind human review.'],
];

export function Approach() {
  return <section id="approach" className="bg-slate-950 py-24 text-white md:py-32"><div className="section-shell"><div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-300">How I build</p><h2 className="mt-5 text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Fast enough to explore. Careful enough to ship.</h2><p className="mt-6 max-w-md text-base leading-7 text-slate-300">AI-assisted development is part of my workflow, not a substitute for judgment. The goal is a system I can explain, test, and improve.</p><a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-white">Talk through a problem <ArrowRight className="h-4 w-4" /></a></div><div className="border-t border-white/20">{stages.map(([number, title, copy]) => <div key={number} className="grid gap-4 border-b border-white/20 py-6 sm:grid-cols-[48px_0.7fr_1fr] sm:items-start"><span className="text-sm text-sky-300">{number}</span><h3 className="text-lg font-semibold">{title}</h3><p className="text-sm leading-6 text-slate-400">{copy}</p></div>)}</div></div><div className="mt-16 grid gap-4 border-t border-white/20 pt-8 sm:grid-cols-3"><div className="flex gap-3 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-sky-300" />Grounded outputs over impressive guesses</div><div className="flex gap-3 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-sky-300" />Visible failure paths and review gates</div><div className="flex gap-3 text-sm text-slate-300"><Check className="h-4 w-4 shrink-0 text-sky-300" />Documentation that supports handoff</div></div></div></section>;
}
