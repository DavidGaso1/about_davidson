import { useEffect, useState } from 'react';
import { ArrowUpRight, ChevronRight, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechGridBackground } from './TechGridBackground';

const roles = [
  'AI Engineer',
  'Agentic AI Developer',
  'Automation Specialist',
  'RAG Systems Builder',
];

const proofPoints = [
  { value: '3+', label: 'production systems' },
  { value: '2+', label: 'years building' },
  { value: '8+', label: 'certifications' },
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    if (prefersReducedMotion) {
      setDisplayText(roles[0]);
      return;
    }

    const isComplete = !isDeleting && displayText === role;
    const timeout = setTimeout(() => {
      if (isComplete) {
        setIsDeleting(true);
      } else if (!isDeleting) {
        setDisplayText(role.substring(0, displayText.length + 1));
      } else if (displayText.length > 0) {
        setDisplayText(role.substring(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((previous) => (previous + 1) % roles.length);
      }
    }, isComplete ? 1800 : isDeleting ? 42 : 82);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, prefersReducedMotion]);

  return (      <section className="relative isolate flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#08111f] px-6 pt-28 pb-20 md:pt-32 md:pb-24">
        <TechGridBackground />

        <div className="relative z-10 mx-auto block w-full max-w-4xl text-center" role="doc-endnote" aria-label="Current availability: AI Engineer open to remote roles">            <div className="mb-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full motion-safe:animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Open to remote roles
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
              SYS_ID / DAVIDSON-01
            </span>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.24em] text-sky-400">
            <span className="opacity-60">$</span>
            <span>ai engineer · systems architecture</span>
          </div>

          <h1 className="mx-auto text-balance text-5xl font-bold leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl md:text-7xl">
            I build the systems behind{' '}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              intelligent products.
            </span>
          </h1>

          <div
            aria-hidden="true"
            className="mt-8 inline-flex h-9 items-center justify-center gap-2 rounded-md font-mono text-base text-slate-400 md:text-lg"
          >
            <span className="text-slate-600">$ role</span>
            <span className="text-sky-400">/</span>
            <span className="text-slate-100">{displayText}</span>
            <span className="h-5 w-px motion-safe:animate-pulse bg-sky-400" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-slate-400 md:text-lg">
            {PERSONAL_INFO.summary}
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="#tech-stack"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-6 py-3.5 text-sm font-semibold text-[#06111f] shadow-[0_12px_35px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300"
            >
              Explore the tech stack
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.08]"
            >
              View selected work
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              download={PERSONAL_INFO.resumeFileName || 'Davidson_Chiemezuo_Resume.pdf'}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400 transition-colors hover:text-sky-300"
            >
              Resume
            </a>
          </div>            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border-t border-white/10 pt-6">
            {proofPoints.map((point) => (
              <div key={point.label} className="text-center">
                <span className="block font-mono text-2xl font-semibold tracking-tight text-slate-100">
                  {point.value}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600">
                  {point.label}
                </span>
              </div>
            ))}
            <div className="hidden h-9 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>
      </section>
  );
}
