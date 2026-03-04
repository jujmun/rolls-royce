const ROWS = [
  { metric: "Thermal efficiency of Brayton cycle", system: "Power generation", value: "~35% (10.1 MW)" },
  { metric: "Parasitic load — air-cooling heat rejection", system: "HX2 fan system", value: "~50 kW (0.5%)" },
  { metric: "CO₂ displaced by nuclear vs coal electricity", system: "Grid displacement", value: "~70,000 t/yr" },
  { metric: "CO₂ captured by direct air capture", system: "MOF DAC beds", value: "1,100 t/yr" },
  { metric: "Parasitic regeneration load (electrical)", system: "MOF TVSA", value: "0.035 MWe (0.35%)" },
  { metric: "Thermal regeneration load", system: "Waste heat recovery", value: "0.18 MWth (from waste)" },
  { metric: "Parasitic pressure-drop load (MOF beds)", system: "Air blower", value: "0.42 MWe (4.2%)" },
  { metric: "Total DAC parasitic load", system: "Full DAC system", value: "0.45 MWe (4.5%)" },
  { metric: "HX2 ground footprint", system: "Finned-tube towers", value: "~200 m²" },
];

export function MeritTable() {
  return (
    <div className="overflow-x-auto mt-8 rounded-2xl border border-oxford-border shadow-card">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="font-mono text-xs tracking-widest uppercase text-oxford-accent text-left py-4 px-5 bg-oxford-bg2 border-b border-oxford-border rounded-t-xl">
              Metric
            </th>
            <th className="font-mono text-xs tracking-widest uppercase text-oxford-accent text-left py-4 px-5 bg-oxford-bg2 border-b border-oxford-border">
              System
            </th>
            <th className="font-mono text-xs tracking-widest uppercase text-oxford-accent text-left py-4 px-5 bg-oxford-bg2 border-b border-oxford-border rounded-t-xl">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-oxford-surface border border-oxford-border border-t-0 rounded-b-xl">
          {ROWS.map((row, i) => (
            <tr key={i} className="hover:bg-oxford-bg2/50 transition-colors">
              <td className="py-3.5 px-5 border-b border-oxford-border text-oxford-text align-top text-sm">
                {row.metric}
              </td>
              <td className="py-3.5 px-5 border-b border-oxford-border text-oxford-text align-top text-sm">
                {row.system}
              </td>
              <td className="py-3.5 px-5 border-b border-oxford-border font-mono font-semibold text-oxford-accent align-top text-sm">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
