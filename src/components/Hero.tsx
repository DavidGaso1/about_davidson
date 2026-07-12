import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronRight, FileText } from 'lucide-react';
import { MatrixBackground } from './MatrixBackground';

export function Hero() {
  const roles = [
    'Agentic AI Developer',
    'Automation Specialist',
    'Multi-Agent Systems Engineer',
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(role.substring(0, displayText.length + 1));
          if (displayText.length === role.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setDisplayText(role.substring(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 90
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="font-mono text-xs text-sky-400 uppercase tracking-widest">
            Open to Remote AI Startup Roles
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
          style={{ textShadow: '0 4px 30px rgba(15, 23, 42, 0.9)' }}
        >
          Building intelligent systems,{' '}
          <span className="text-gradient">one agent at a time.</span>
        </h1>

        <div className="h-10 md:h-12 mb-8">
          <p className="text-lg md:text-2xl text-slate-400 font-light">
            I am an{' '}
            <span className="text-slate-100 font-medium border-r-2 border-sky-400 pr-1">
              {displayText}
            </span>
          </p>
        </div>

        <p
          className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ textShadow: '0 2px 10px rgba(15, 23, 42, 0.8)' }}
        >
          {PERSONAL_INFO.summary.slice(0, 160)}...
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            View My Work
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = PERSONAL_INFO.resumePdf;
              link.download = 'Davidson_Chiemezuo_Resume.pdf';
              link.click();
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/30 text-slate-200 font-semibold rounded-xl transition-all duration-300"
          >
            Download Resume
            <FileText className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 font-mono text-xs uppercase tracking-widest">
          {PERSONAL_INFO.openTo.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-sky-500/50" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
