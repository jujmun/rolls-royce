const CARDS = [
  {
    num: "01",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
        <path d="M12 6v6l4 2" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Why sCO₂ Brayton?",
    body: "Supercritical CO₂ requires lower compression work near its critical point (7.38 MPa, 31.1°C), yielding higher thermal efficiency. Heat exchangers are up to 27× more compact than open-air alternatives, and helium was rejected due to low molecular weight demands.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Compressor",
    body: "A centrifugal-based configuration handles the pressure rise from 8 MPa → 35 MPa at 57 kg/s mass flow. Multistage centrifugal and integrally-geared centrifugal designs were evaluated, with isentropic efficiency of η = 0.9.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M12 3v18M3 12h18" strokeWidth={1.5} strokeLinecap="round" />
        <path d="M6 6l12 12M18 6L6 18" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Turbine Design",
    body: "Single-stage radial turbine at 3600 rpm, 3 m inlet radius. Blade profiles generated via three methods: linear interpolation, 4th-degree Bézier curves, and cubic spline — all exported to CAD (Fusion 360) via DXF conversion.",
  },
  {
    num: "04",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
        <path d="M9 9h6M9 12h6M9 15h4" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Heat Exchanger 1 (HX1)",
    body: "Selected sli(PCHE) — a printed circuit heat exchanger made from ZrC/W that chemically reacts with a mould for precision geometries. Optionally enhanced with bioinspired Triply Periodic Minimal Surfaces (TPMS) — Gyroid & Schwarz-D structures.",
  },
  {
    num: "05",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" strokeWidth={1.5} />
        <path d="M3 12h4m10 0h4M12 3v4m0 10v4" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    ),
    title: "Heat Exchanger 2 (HX2)",
    body: "Two-stage air-cooled open finned-tube exchanger. Stage 1 bleeds ~125°C hot air to regenerate MOF beds. Air-side pressure drop: 250 Pa. Total ground footprint: ~200 m² — smaller than equivalent Rankine cycle ACCs, water-free.",
  },
  {
    num: "06",
    icon: (
      <svg className="w-9 h-9 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" strokeWidth={1.5} />
      </svg>
    ),
    title: "Recuperator",
    body: "Counterflow cross-corrugated diffusion-bonded PCHE inspired by the Rolls-Royce GT-MHR system. Effectiveness: 95%. Node-by-node energy balance model with NTU = 5.0, N = 50 nodes, minimum pinch ΔT = 3°C.",
  },
];

export function BraytonCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {CARDS.map((card) => (
        <div
          key={card.num}
          className="bg-oxford-surface p-6 rounded-2xl border border-oxford-border shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
        >
          <div className="font-display font-black text-5xl text-oxford-accent/10 absolute top-4 right-4 leading-none select-none">
            {card.num}
          </div>
          <div className="mb-4 text-oxford-accent">{card.icon}</div>
          <h3 className="font-display font-semibold text-base text-oxford-text-bright mb-2 tracking-tight">
            {card.title}
          </h3>
          <p className="text-sm text-oxford-text-dim leading-relaxed [&_code]:font-mono [&_code]:text-[0.8em] [&_code]:bg-oxford-bg2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-oxford-accent">
            {card.body}
          </p>
        </div>
      ))}
    </div>
  );
}
