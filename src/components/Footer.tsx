import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-[#0a0f1e] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-sm text-slate-400">
              {PERSONAL_INFO.name}
            </p>
            <p className="font-mono text-xs text-slate-600 mt-1">
              Agentic AI Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-500 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="font-mono text-[11px] text-slate-600 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500/60" /> & Claude Code &bull; {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
