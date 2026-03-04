const CELLS = [
  {
    title: "Why Metal-Organic Frameworks?",
    body: "MOFs are nano-scale lattices with metal-ion nodes and organic linkers. By tuning the metals and linkers, pore chemistry can be engineered to selectively bind CO₂. Crucially, MOFs use physisorption rather than chemisorption — requiring far less energy to regenerate than conventional amine-scrubbing systems.",
  },
  {
    title: "Regeneration Strategy",
    body: "The team selected TVSA (Thermal-Vacuum Swing Adsorption) at 75–120°C using the ~125°C waste air from HX2a. A novel indirect conductive heating approach was devised: hot air heats conductive metal filaments branching into the MOF support, avoiding direct air–MOF contact and preventing oxidation.",
  },
  {
    title: "Capture Modelling",
    body: "Breakthrough curve data from the Airthena MOF (only commercial MOF-DAC system found) was scaled to the system's mass flow rate using the cumulative exposure assumption: n_ads(t) ∝ U(Θ). This allows curve-stretching along the time axis by adjusting the MOF-mass/airflow ratio.",
  },
  {
    title: "Bed Design",
    body: "Fixed-bed architecture selected over rotating beds due to hours-long cycle times from indirect heating (rotating beds favour second-scale cycles). Laminate substrate reduces pressure drop by ~50% vs. packed beds at industrial air velocities. Estimated pressure drop: 2 kPa, bed cross-section: ~10 × 10 m.",
  },
];

export function MofGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
      {CELLS.map((cell, i) => (
        <div key={i} className="bg-oxford-surface p-6 rounded-2xl border border-oxford-border shadow-card">
          <h4 className="font-display font-normal text-[0.85rem] text-oxford-text-bright mb-3 tracking-tight">
            {cell.title}
          </h4>
          <p className="text-[0.85rem] text-oxford-text-dim leading-relaxed">
            {cell.body}
          </p>
        </div>
      ))}
    </div>
  );
}
