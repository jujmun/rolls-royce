const STATS = [
  { value: "33.7", suffix: "%", label: "Thermal Efficiency (±1.7%)" },
  { value: "10.1", suffix: " MW", label: "Electrical Output" },
  { value: "1,100", suffix: " t", label: "CO₂ Captured / Year (DAC)" },
  { value: "~70", suffix: "k t", label: "CO₂ Displaced / Year" },
  { value: "5", suffix: "%", label: "Total Parasitic Load" },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-oxford-surface p-6 rounded-2xl border border-oxford-border shadow-card hover:shadow-card-hover transition-all duration-200 group"
        >
          <div className="font-display font-bold text-[clamp(1.75rem,2.5vw,2.25rem)] leading-none text-oxford-text-bright mb-2">
            {stat.value}
            <span className="text-oxford-accent">{stat.suffix}</span>
          </div>
          <div className="font-mono text-xs tracking-wider text-oxford-text-dim uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
