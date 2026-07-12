import { useEffect, useRef } from 'react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Award, Cpu, Cloud, Shield, Cog } from 'lucide-react';

const categoryConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  AI: { icon: Cpu, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  Automation: { icon: Cog, color: 'text-violet-400', bg: 'bg-violet-500/10' },
  Compliance: { icon: Shield, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  Cloud: { icon: Cloud, color: 'text-amber-400', bg: 'bg-amber-500/10' },
};

export function Certifications() {
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
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert, idx) => {
            const config = categoryConfig[cert.category] || { icon: Award, color: 'text-slate-400', bg: 'bg-white/5' };
            const Icon = config.icon;
            return (
              <div
                key={`${cert.title}-${idx}`}
                className={`scroll-reveal scroll-reveal-delay-${Math.min(idx + 1, 5)} glass-card p-5 hover-lift`}
              >
                <div className={`p-2 rounded-lg ${config.bg} w-fit mb-4`}>
                  <Icon className={`w-4 h-4 ${config.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-slate-100 mb-1 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 mb-2">{cert.issuer}</p>
                <span className="font-mono text-[10px] text-slate-600">
                  {cert.year}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
