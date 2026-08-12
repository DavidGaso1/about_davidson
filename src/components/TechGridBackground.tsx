export function TechGridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#08111f]" />
      <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-[110px]" />
      <div className="absolute -right-24 bottom-0 h-[32rem] w-[32rem] rounded-full bg-violet-500/10 blur-[120px]" />
      <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/[0.06] blur-[100px]" />

      <div className="hero-tech-grid absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,17,31,0.15)_48%,#08111f_100%)]" />

      <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 1200 800" preserveAspectRatio="none" fill="none">
        <path className="hero-flow-line" d="M-80 610 C180 430 240 660 470 495 S760 230 1010 390 S1170 500 1280 300" stroke="url(#flow-a)" strokeWidth="1" />
        <path className="hero-flow-line hero-flow-line-delay" d="M-100 235 C120 350 245 120 445 270 S700 610 930 480 S1120 260 1280 180" stroke="url(#flow-b)" strokeWidth="1" />
        <path d="M0 690 L1200 80" stroke="rgba(56,189,248,0.08)" strokeWidth="1" strokeDasharray="3 12" />
        <path d="M-40 120 L1180 740" stroke="rgba(167,139,250,0.07)" strokeWidth="1" strokeDasharray="2 16" />
        <circle className="hero-node-pulse" cx="184" cy="520" r="4" fill="#38bdf8" />
        <circle className="hero-node-pulse hero-node-delay" cx="482" cy="493" r="3" fill="#a78bfa" />
        <circle className="hero-node-pulse" cx="775" cy="293" r="4" fill="#34d399" />
        <circle className="hero-node-pulse hero-node-delay" cx="1018" cy="394" r="3" fill="#fbbf24" />
        <defs>
          <linearGradient id="flow-a" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="0.35" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#a78bfa" stopOpacity="0.35" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow-b" x1="0" y1="0" x2="1" y2="0">
            <stop stopColor="#34d399" stopOpacity="0" />
            <stop offset="0.45" stopColor="#34d399" stopOpacity="0.32" />
            <stop offset="0.75" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </div>
  );
}
