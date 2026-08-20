import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Github, X } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

const featuredIds = [6, 11, 4, 1];
const featured = featuredIds.map((id) => PROJECTS.find((project) => project.id === id)).filter(Boolean) as typeof PROJECTS;
const archiveIds = [9, 2, 3, 10, 12, 15, 16, 13, 14, 7, 8];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<typeof PROJECTS[number] | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) section.querySelectorAll('.scroll-reveal').forEach((item) => item.classList.add('visible'));
    }), { threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', close);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', close); document.body.style.overflow = previous; };
  }, [selected]);

  return <section id="projects" ref={sectionRef} className="bg-[var(--color-background)] py-24 md:py-32">
    <div className="section-shell">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div><p className="eyebrow">Selected work</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] md:text-6xl">A few systems, built with care.</h2></div>
        <a href="https://github.com/DavidGaso1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-sky-300 hover:text-sky-200">Browse GitHub <ArrowUpRight className="h-4 w-4" /></a>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {featured.map((project, index) => <button key={project.id} type="button" onClick={() => setSelected(project)} className={`editorial-card scroll-reveal scroll-reveal-delay-${index + 1} group text-left ${index === 0 ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.05fr_0.95fr]' : ''}`}>
          <div className={`relative min-h-56 overflow-hidden bg-slate-950 ${index === 0 ? 'lg:min-h-[360px]' : ''}`}>
            {project.image ? <img src={project.image} alt={`${project.title} interface preview`} className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03]" loading="lazy" /> : <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(135deg,#0f172a,#075985)] p-7 text-white"><span className="text-6xl font-semibold tracking-[-0.08em] opacity-20">0{index + 1}</span><span className="mt-auto text-xs uppercase tracking-[0.18em] text-sky-200">{project.category}</span></div>}
            <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-200">0{index + 1}</span>
          </div>
          <div className="flex flex-col justify-between p-7"><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300">{project.client || project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-slate-100">{project.title}</h3><p className="mt-4 max-w-xl text-sm leading-6 text-slate-300">{project.description}</p></div><div className="mt-8 flex items-center justify-between gap-4"><div className="flex flex-wrap gap-2">{project.tech.slice(0, 3).map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">{tech}</span>)}</div><span className="shrink-0 text-sm font-semibold text-sky-300 transition group-hover:translate-x-1">Read case study →</span></div></div>
        </button>)}
      </div>
      <div className="mt-20 border-t border-white/10 pt-8"><div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="eyebrow">Additional work</p><h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100">More experiments and production workflows.</h3></div><p className="max-w-md text-sm leading-6 text-slate-400">A compact archive for the rest of the work. The main story stays focused on the projects most relevant to applied AI roles.</p></div><div className="mt-8 grid gap-x-8 md:grid-cols-2">{archiveIds.map((id) => { const project = PROJECTS.find((item) => item.id === id); if (!project) return null; return <button key={project.id} type="button" onClick={() => setSelected(project)} className="group flex items-center justify-between border-b border-white/10 py-4 text-left"><span><span className="block text-sm font-semibold text-slate-200 group-hover:text-sky-300">{project.title}</span><span className="mt-1 block text-xs text-slate-500">{project.category}</span></span><ArrowUpRight className="h-4 w-4 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-300" /></button>; })}</div></div>
    </div>
    {selected && <div className="fixed inset-0 z-[60] flex items-end justify-center bg-slate-950/50 p-0 backdrop-blur-sm sm:items-center sm:p-6" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><article role="dialog" aria-modal="true" aria-labelledby="case-study-title" className="max-h-[92vh] w-full max-w-3xl overflow-y-auto bg-white p-7 shadow-2xl sm:p-10"><div className="flex items-start justify-between gap-6"><div><p className="eyebrow">{selected.client || selected.category}</p><h2 id="case-study-title" className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950">{selected.title}</h2></div><button type="button" onClick={() => setSelected(null)} className="inline-flex min-h-11 min-w-11 items-center justify-center border text-slate-500 hover:text-slate-950" aria-label="Close case study"><X className="h-5 w-5" /></button></div><p className="mt-7 text-base leading-7 text-slate-600">{selected.longDescription}</p><div className="mt-8 grid gap-8 md:grid-cols-2"><div><h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Evidence</h3><ul className="mt-4 space-y-3">{selected.highlights.map((highlight) => <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700"><Check className="mt-1 h-4 w-4 shrink-0 text-sky-700" />{highlight}</li>)}</ul></div><div><h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500">Tools used</h3><div className="mt-4 flex flex-wrap gap-2">{selected.tech.map((tech) => <span key={tech} className="rounded-full border bg-slate-50 px-3 py-1.5 text-xs text-slate-600">{tech}</span>)}</div></div></div><div className="mt-9 flex flex-wrap gap-3">{selected.github && <a href={selected.github} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-5 text-sm font-semibold text-white hover:bg-sky-800"><Github className="h-4 w-4" />View repository</a>}{selected.liveUrl && <a href={selected.liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold text-slate-800 hover:border-slate-500">Live demo <ArrowUpRight className="h-4 w-4" /></a>}</div></article></div>}
  </section>;
}
