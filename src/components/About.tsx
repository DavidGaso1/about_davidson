import { useEffect, useRef } from 'react';
import { PERSONAL_INFO, STATS, EDUCATION } from '../data/portfolioData';
import { TerminalText } from './TerminalText';
import { Briefcase, Clock, Award, Users } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  'Production Systems': Briefcase,
  'Years Experience': Clock,
  'Certifications': Award,
  'Clients Served': Users,
};

export function About() {
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
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Expertly blending{' '}
            <span className="text-gradient">social insights</span> with{' '}
            <span className="text-gradient">machine intelligence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="scroll-reveal scroll-reveal-delay-1">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#0a0f1e] shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#131b2e] border-b border-white/5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-3 font-mono text-[11px] text-slate-500">
                  user@davidson:~/
                </span>
              </div>
              <div className="p-6 min-h-[280px]">
                <div className="font-mono text-sm leading-relaxed space-y-4">
                  <div className="text-slate-500">
                    <span className="text-green-400">$</span> cat about.txt
                  </div>
                  <div className="text-slate-300">
                    <TerminalText text={PERSONAL_INFO.bioShort} speed={25} />
                  </div>
                  <div className="text-slate-500 pt-2">
                    <span className="text-green-400">$</span> cat education.txt
                  </div>
                  <div className="text-slate-300 text-xs space-y-1">
                    <p className="text-sky-400">{EDUCATION.degree}</p>
                    <p className="text-slate-400">{EDUCATION.school} | {EDUCATION.year}</p>
                    <p className="text-slate-500 italic">{EDUCATION.note}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => {
              const Icon = iconMap[stat.label] || Briefcase;
              return (
                <div
                  key={stat.label}
                  className={`scroll-reveal scroll-reveal-delay-${idx + 1} glass-card p-6 hover-lift group`}
                >
                  <div className="p-2.5 bg-sky-500/10 rounded-lg w-fit mb-4 group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-slate-100 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
