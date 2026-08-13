import { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-[#0b1120]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="scroll-reveal">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-[0.2em]">
              Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
              Let's build <span className="text-gradient">something.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm open to remote opportunities at AI startups. Whether you need
              someone to architect multi-agent systems, automate critical workflows,
              or build production RAG pipelines \u2014 let's talk.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <div className="p-2.5 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <span className="font-mono text-sm">{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
              >
                <div className="p-2.5 bg-sky-500/10 rounded-lg group-hover:bg-sky-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-sky-400" />
                </div>
                <span className="font-mono text-sm">{PERSONAL_INFO.phone}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="p-2.5 bg-white/5 rounded-lg">
                  <MapPin className="w-4 h-4 text-slate-500" />
                </div>
                <span className="font-mono text-sm">{PERSONAL_INFO.location} \u2022 Open to Remote</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="scroll-reveal scroll-reveal-delay-2">
            {submitted ? (
              <div className="glass-card p-8 text-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Email draft ready</h3>
                <p className="text-slate-400 text-sm">
                  Your email app should have opened with your message. If it didn&apos;t,
                  email me directly at {PERSONAL_INFO.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1e293b] border border-white/10 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/20 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-sky-500 hover:bg-sky-400 text-[#0f172a] font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
