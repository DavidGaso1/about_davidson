import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  return <footer className="border-t border-white/10 bg-slate-950/60 py-8"><div className="section-shell flex flex-col justify-between gap-3 text-sm text-slate-500 sm:flex-row"><p>{PERSONAL_INFO.name}</p><p>Applied AI systems builder · {new Date().getFullYear()}</p></div></footer>;
}
