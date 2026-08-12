import { useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, TrendingUp } from 'lucide-react';

export function Testimonials() {
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
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
            Client Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Trusted to deliver <span className="text-gradient">production</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-relaxed">
            Three independent clients rely on automation systems I built and run — here's what the work looks like from their side.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 4)} glass-card p-6 md:p-8 flex flex-col hover-lift`}
            >
              <div className="flex items-start justify-between mb-4">
                <Quote className="w-6 h-6 text-sky-400/40" />
                <span className="inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                  <TrendingUp className="w-3 h-3" />
                  {t.metric}
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              <div className="border-t border-white/5 pt-4">
                <p className="text-sm font-semibold text-slate-200">
                  {t.author} — {t.company}
                </p>
                <p className="font-mono text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                  {t.project}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
