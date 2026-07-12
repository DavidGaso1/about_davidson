import { useEffect, useRef } from 'react';
import { SKILLS } from '../data/portfolioData';
import { Globe, Brain, Wrench, BookOpen } from 'lucide-react';

const categories = [
  {
    key: 'remote' as const,
    label: 'Remote Work',
    icon: Globe,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
  },
  {
    key: 'ai' as const,
    label: 'AI & Agentic Systems',
    icon: Brain,
    color: 'text-sky-400',
    bgColor: 'bg-sky-500/10',
    borderColor: 'border-sky-500/20',
  },
  {
    key: 'tools' as const,
    label: 'Software & Tools',
    icon: Wrench,
    color: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/20',
  },
  {
    key: 'domain' as const,
    label: 'Domain Expertise',
    icon: BookOpen,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
  },
];

export function Skills() {
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
            Technical Profile
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const skills = SKILLS[cat.key];
            return (
              <div
                key={cat.key}
                className={`scroll-reveal scroll-reveal-delay-${idx + 1} glass-card p-6 md:p-8 hover-lift`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-lg ${cat.bgColor}`}>
                    <Icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-100">
                    {cat.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-xs font-mono rounded-md border ${cat.borderColor} ${cat.bgColor} ${cat.color} hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
