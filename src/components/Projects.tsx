import { useEffect, useRef, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Github, X, ChevronRight, Sparkles, BarChart3 } from 'lucide-react';

function StatusBadge({ status }: { status: string }) {
  const ready = status !== 'under-work';
  const label = status === 'showcase-ready' ? 'Showcase Ready' : ready ? 'Ready' : 'In Progress';
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono rounded border ${
        ready
          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
          : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${ready ? 'bg-emerald-400' : 'bg-amber-400'}`} />
      {label}
    </span>
  );
}

function RowCard({
  project,
  onClick,
  amber,
}: {
  project: (typeof PROJECTS)[0];
  onClick: () => void;
  amber?: boolean;
}) {
  return (
    <div
      className={`glass-card p-5 hover-lift group cursor-pointer ${amber ? 'border-amber-500/25' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h4 className="font-semibold text-slate-100 group-hover:text-sky-400 transition-colors">
              {project.title}
            </h4>
            <StatusBadge status={project.status} />
          </div>
          <p className="text-sm text-slate-400 line-clamp-2 mb-3">{project.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((t) => (
              <span key={t} className="px-2 py-0.5 text-[10px] font-mono bg-white/5 text-slate-400 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-sky-400 transition-colors"
            onClick={(e) => e.stopPropagation()}
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.scroll-reveal').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured && p.status !== 'under-work');
  const inProgress = PROJECTS.filter((p) => p.status === 'under-work');

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal">
          <div>
            <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <a
            href="https://github.com/DavidGaso1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sky-400 transition-colors group"
          >
            View all on GitHub
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className={`scroll-reveal scroll-reveal-delay-${idx + 1} glass-card overflow-hidden hover-lift group cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-40 bg-gradient-to-br from-sky-500/10 via-purple-500/10 to-cyan-500/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-8 h-8 text-sky-400/50 mx-auto mb-2" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
                  <StatusBadge status={project.status} />
                  {project.client && (
                    <span className="px-2 py-1 text-[10px] font-mono bg-sky-500/20 text-sky-300 rounded border border-sky-500/20">
                      {project.client}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-100 mb-2 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[10px] font-mono bg-white/5 text-slate-400 rounded border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-mono text-sky-400 group-hover:gap-2 transition-all">
                  View Details <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {others.length > 0 && (
          <div className="scroll-reveal">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-6">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {others.map((project) => (
                <RowCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}

        {inProgress.length > 0 && (
          <div className="scroll-reveal mt-12">
            <h3 className="text-sm font-mono text-amber-400 uppercase tracking-widest mb-6">
              In Progress
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {inProgress.map((project) => (
                <RowCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                  amber
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-sky-400">
                  {selectedProject.category} {selectedProject.client && `\u2022 ${selectedProject.client}`}
                </span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">
                  {selectedProject.title}
                </h3>
                <div className="mt-2">
                  <StatusBadge status={selectedProject.status} />
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-300 leading-relaxed mb-6">
              {selectedProject.longDescription}
            </p>

            {selectedProject.metrics && selectedProject.metrics.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-200 mb-3 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-sky-400" />
                  Impact
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-200 mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono bg-sky-500/10 text-sky-400 rounded border border-sky-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-semibold rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-300 font-semibold rounded-xl transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
