import { useEffect, useRef } from 'react';
import { ExternalLink, Github, GitBranch } from 'lucide-react';

const REPOS = [
  {
    name: 'AI-News-Update',
    description: 'Fully automated daily AI news digest — cron-fetched, cross-day dedup, email delivery, live Vercel dashboard.',
    url: 'https://github.com/DavidGaso1/AI-News-Update',
    live: 'https://ainl.vercel.app',
    badge: 'https://github.com/DavidGaso1/AI-News-Update/actions/workflows/tests.yml/badge.svg',
    topics: ['Python', 'GitHub Actions', 'Automation'],
  },
  {
    name: 'restaurant-recommender',
    description: 'AI restaurant recommendation engine (NutriDine) — hybrid collaborative + content-based filtering with location/time awareness.',
    url: 'https://github.com/DavidGaso1/restaurant-recommender',
    live: null,
    badge: 'https://github.com/DavidGaso1/restaurant-recommender/actions/workflows/ci.yml/badge.svg',
    topics: ['FastAPI', 'React', 'scikit-learn'],
  },
  {
    name: 'HealthRAG',
    description: 'Nigeria-first synthetic-only health triage prototype with rule-first emergency detection and grounded RAG answers.',
    url: 'https://github.com/DavidGaso1/HealthRAG',
    live: null,
    badge: 'https://github.com/DavidGaso1/HealthRAG/actions/workflows/ci.yml/badge.svg',
    topics: ['RAG', 'Python', 'LangChain'],
  },
  {
    name: 'financial-statement-pipeline',
    description: 'OCR + extraction pipeline for scanned Nigerian financial statements — validated structured output with full test suite.',
    url: 'https://github.com/DavidGaso1/financial-statement-pipeline',
    live: null,
    badge: 'https://github.com/DavidGaso1/financial-statement-pipeline/actions/workflows/ci.yml/badge.svg',
    topics: ['Python', 'OCR', 'Data'],
  },
];

export function GitHubShowcase() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section id="github" ref={sectionRef} className="relative py-24 md:py-32 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal">
          <div>
            <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
              Open Source
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4">
              Code on <span className="text-gradient">GitHub</span>
            </h2>
          </div>
          <a
            href="https://github.com/DavidGaso1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono text-slate-400 hover:text-sky-400 transition-colors group"
          >
            <Github className="w-4 h-4" />
            github.com/DavidGaso1
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {REPOS.map((repo, idx) => (
            <div
              key={repo.name}
              className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 4)} glass-card p-6 hover-lift group`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-100 group-hover:text-sky-400 transition-colors font-mono text-sm">
                  {repo.name}
                </h3>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-sky-400 transition-colors"
                  aria-label={`${repo.name} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

              <img
                src={repo.badge}
                alt={`${repo.name} CI status`}
                className="mb-3 h-5"
                onError={(e) => ((e.target as HTMLImageElement).style.display = 'none')}
              />

              <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {repo.topics.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[10px] font-mono bg-sky-500/10 text-sky-400 rounded border border-sky-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <GitBranch className="w-3 h-3" />
                  Repository
                </a>
                {repo.live && (
                  <a
                    href={repo.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
