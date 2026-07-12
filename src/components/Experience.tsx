import { useEffect, useRef } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, Building2 } from 'lucide-react';

export function Experience() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/30 via-slate-700/30 to-transparent" />

          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 5)} relative mb-12 last:mb-0`}
            >
              <div className={`flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#0b1120] shadow-[0_0_10px_rgba(56,189,248,0.5)] z-10" />

                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-card p-6 md:p-8 hover-lift">
                    <div className="flex items-center gap-2 mb-3">
                      {exp.type === 'Current' && (
                        <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 rounded border border-emerald-500/20">
                          Current
                        </span>
                      )}
                      <span className="px-2 py-0.5 text-[10px] font-mono bg-sky-500/10 text-sky-400 rounded border border-sky-500/20">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-100 mb-1">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="w-1 h-1 rounded-full bg-sky-400 mt-2 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 text-[10px] font-mono bg-white/5 text-slate-400 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
