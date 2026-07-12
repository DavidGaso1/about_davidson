import { useState, useEffect } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../data/portfolioData';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f172a]/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold text-slate-200 hover:text-sky-400 transition-colors">
          {PERSONAL_INFO.name}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover-roll"
            >
              <span>{link.label}</span>
              <span className="text-sky-400">{link.label}</span>
            </a>
          ))}
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-400 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-slate-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm uppercase tracking-widest text-slate-400 hover:text-sky-400 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400">
                <Github className="w-5 h-5" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-sky-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-sky-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
