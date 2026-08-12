import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  ChevronRight,
  Cpu,
  Database,
  FileText,
  MapPin,
  Network,
  ShieldCheck,
  Terminal,
  Workflow,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TechGridBackground } from './TechGridBackground';

const roles = [
  'AI Engineer',
  'Agentic AI Developer',
  'Automation Specialist',
  'RAG Systems Builder',
];

const architectureSteps = [
  { label: 'INPUT', value: 'Signals', icon: Activity, color: 'text-sky-300', surface: 'bg-sky-400/10' },
  { label: 'RETRIEVE', value: 'Evidence', icon: Database, color: 'text-violet-300', surface: 'bg-violet-400/10' },
  { label: 'REASON', value: 'Agents', icon: Cpu, color: 'text-amber-300', surface: 'bg-amber-400/10' },
  { label: 'AUTOMATE', value: 'Outcome', icon: Workflow, color: 'text-emerald-300', surface: 'bg-emerald-400/10' },
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

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08111f] pt-28 pb-16 md:pt-32 md:pb-24">
      <TechGridBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20">
        <div className="max-w-3xl">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-300">
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

          <div className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-sky-400">
            <Terminal className="h-4 w-4" />
            <span>AI engineering / systems architecture</span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl xl:text-[5.5rem]">
            I build the systems behind{' '}
            <span className="bg-gradient-to-r from-sky-300 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
              intelligent products.
            </span>
          </h1>

          <div className="mt-8 flex min-h-9 items-center gap-2 font-mono text-base text-slate-400 md:text-xl">
            <span className="text-slate-600">$ role --active</span>
            <span className="text-sky-400">/</span>
            <span className="text-slate-100">{displayText}</span>
            <span className="h-5 w-px motion-safe:animate-pulse bg-sky-400" />
          </div>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
            {PERSONAL_INFO.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#tech-stack"
              className="group inline-flex items-center gap-2 rounded-xl bg-sky-400 px-5 py-3.5 text-sm font-semibold text-[#06111f] shadow-[0_12px_35px_rgba(56,189,248,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-sky-300"
            >
              Explore the tech stack
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40 hover:bg-white/[0.08]"
            >
              View selected work
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={PERSONAL_INFO.resumePdf}
              download={PERSONAL_INFO.resumeFileName || 'Davidson_Chiemezuo_Resume.pdf'}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-400 transition-colors hover:text-sky-300"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-5">
            {proofPoints.map((point) => (
              <div key={point.label}>
                <span className="block font-mono text-xl font-semibold text-slate-100">{point.value}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">{point.label}</span>
              </div>
            ))}
            <div className="hidden h-8 w-px bg-white/10 sm:block" />
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-500">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="absolute -inset-6 rounded-[2rem] bg-sky-400/[0.06] blur-3xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b1728]/85 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">architecture.map</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-emerald-300">
                <Activity className="h-3 w-3" />
                online
              </div>
            </div>

            <div className="p-5 md:p-7">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400">Production pattern</p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-100 md:text-2xl">From signal to outcome</h2>
                </div>
                <Network className="h-8 w-8 text-sky-300/60" />
              </div>

              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-2">
                <div className="pointer-events-none absolute left-[14%] right-[14%] top-7 hidden h-px bg-gradient-to-r from-sky-400/40 via-violet-400/30 to-emerald-400/40 sm:block" />
                {architectureSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className="relative z-10 text-center">
                      <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 ${step.surface} ${step.color}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-3 font-mono text-[9px] font-semibold tracking-[0.16em] text-slate-300">{step.label}</p>
                      <p className="mt-1 text-[10px] text-slate-600">{step.value}</p>
                      {index < architectureSteps.length - 1 && (
                        <ChevronRight className="absolute -right-3 top-5 hidden h-4 w-4 text-slate-700 sm:block" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-9 rounded-xl border border-white/10 bg-black/20 p-4">
                <div className="mb-3 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-slate-600">
                  <span>reliability layer</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {['retry', 'timeout', 'human gate'].map((item) => (
                    <div key={item} className="rounded-lg border border-emerald-400/15 bg-emerald-400/[0.06] px-2 py-2.5 text-center font-mono text-[9px] text-emerald-300">
                      <span className="mb-1.5 mx-auto block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 font-mono text-[9px] uppercase tracking-widest text-slate-600">
                <span>RAG / agents / automation</span>
                <span className="text-sky-400">v2.0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
