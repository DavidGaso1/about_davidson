import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const links = [
  { label: 'Work', href: '#projects' },
  { label: 'Approach', href: '#approach' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'About', href: '#about' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'border-b border-white/10 bg-[#080d19]/95 backdrop-blur' : 'bg-transparent'}`}>
      <nav className="section-shell flex h-[76px] items-center justify-between" aria-label="Primary navigation">
        <a href="#top" className="max-w-[190px] text-xs font-semibold leading-tight tracking-tight text-slate-100 sm:max-w-none sm:text-sm" onClick={() => setOpen(false)}>
          {PERSONAL_INFO.name}<span className="text-sky-400">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-sky-300">{link.label}</a>)}
          <a href={PERSONAL_INFO.resumePdf} download className="inline-flex min-h-11 items-center gap-2 rounded-full bg-sky-400 px-4 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
            Resume <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
        <button className="inline-flex min-h-11 min-w-11 items-center justify-center text-slate-300 md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && <div id="mobile-menu" className="border-t border-white/10 bg-[#080d19] px-6 py-5 md:hidden"><div className="section-shell flex flex-col gap-4 px-0">{links.map((link) => <a key={link.href} href={link.href} className="py-2 text-sm font-medium text-slate-300" onClick={() => setOpen(false)}>{link.label}</a>)}<a href={PERSONAL_INFO.resumePdf} download className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full bg-sky-400 px-4 text-sm font-semibold text-slate-950">Download resume</a></div></div>}
    </header>
  );
}
