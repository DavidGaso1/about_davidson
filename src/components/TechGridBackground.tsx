export function TechGridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#08111f]" />

      <div className="absolute inset-x-0 top-1/2 mx-auto h-[60vh] w-[60vh] -translate-y-1/2 rounded-full bg-sky-500/[0.07] blur-[120px]" />
      <div className="absolute inset-x-0 top-1/2 mx-auto h-[55vh] w-[55vh] -translate-y-1/2 rounded-full bg-violet-500/[0.06] blur-[110px]" />
      <div className="absolute inset-x-0 top-1/3 mx-auto h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

      <div className="hero-tech-grid absolute inset-0 opacity-80" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,17,31,0.1)_38%,rgba(8,17,31,0.85)_88%,#08111f_100%)]" />

      <svg
        className="pointer-events-none absolute left-1/2 top-1/2 mx-auto h-[120%] w-[120%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-80"
        viewBox="-300 -400 600 800"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <defs>
          <linearGradient id="hero-flow-a" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="0.42" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop offset="1" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-flow-b" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#34d399" stopOpacity="0" />
            <stop offset="0.4" stopColor="#34d399" stopOpacity="0.35" />
            <stop offset="0.7" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="1" stopColor="#38bdf8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          className="hero-flow-line"
          d="M-40 540 C140 360 200 660 320 460 S520 320 640 380"
          stroke="url(#hero-flow-a)"
          strokeWidth="1"
        />
        <path
          className="hero-flow-line hero-flow-line-delay"
          d="M-40 260 C130 420 220 200 340 360 S540 460 640 320"
          stroke="url(#hero-flow-b)"
          strokeWidth="1"
        />

        <circle className="hero-node-pulse" cx="170" cy="500" r="3.4" fill="#38bdf8" />
        <circle className="hero-node-pulse hero-node-delay" cx="320" cy="463" r="3" fill="#a78bfa" />
        <circle className="hero-node-pulse" cx="468" cy="396" r="3.6" fill="#34d399" />
        <circle className="hero-node-pulse hero-node-delay" cx="540" cy="382" r="3" fill="#fbbf24" />
      </svg>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f172a] to-transparent" />
    </div>
  );
}
