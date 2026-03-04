export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center items-center text-center px-8 pt-24 pb-16 overflow-hidden z-[1] bg-gradient-to-b from-oxford-bg to-oxford-bg2">
      <p className="font-mono text-xs tracking-widest uppercase text-oxford-accent mb-6 animate-[fadeUp_0.8s_ease_both]">
        Rolls-Royce × University of Oxford · March 2026
      </p>
      <h1 className="font-display font-bold text-[clamp(2.5rem,7vw,4.5rem)] leading-tight text-oxford-text-bright tracking-tight animate-[fadeUp_0.8s_ease_0.1s_both]">
        Integrated{" "}
        <span className="text-oxford-accent">HTGR</span> System
      </h1>
      <p className="max-w-[640px] text-base sm:text-lg text-oxford-text-dim mt-5 mx-auto leading-relaxed animate-[fadeUp_0.8s_ease_0.2s_both]">
        Net CO₂ reduction via sCO₂ Brayton cycle with MOF-based direct air capture — water-independent heat rejection at Luton Airport.
      </p>

      <div className="flex flex-wrap gap-3 justify-center mt-10 animate-[fadeUp_0.8s_ease_0.3s_both]">
        <span className="font-mono text-[0.7rem] tracking-wider uppercase py-2 px-4 rounded-full border border-oxford-border text-oxford-text-dim bg-oxford-surface shadow-card">
          sCO₂ Brayton
        </span>
        <span className="font-mono text-[0.7rem] tracking-wider uppercase py-2 px-4 rounded-full border border-oxford-border text-oxford-text-dim bg-oxford-surface shadow-card">
          MOF DAC
        </span>
        <span className="font-mono text-[0.7rem] tracking-wider uppercase py-2 px-4 rounded-full border border-oxford-border text-oxford-text-dim bg-oxford-surface shadow-card">
          30 MW thermal
        </span>
        <span className="font-mono text-[0.7rem] tracking-wider uppercase py-2 px-4 rounded-full border border-oxford-border text-oxford-text-dim bg-oxford-surface shadow-card">
          ~70k t-CO₂/yr
        </span>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-oxford-text-dim font-mono text-[0.65rem] tracking-widest animate-[fadeUp_1s_ease_0.6s_both]">
        <div className="w-px h-8 bg-oxford-accent/40 animate-scroll-pulse" style={{ transformOrigin: "center top" }} />
        SCROLL
      </div>
    </section>
  );
}
