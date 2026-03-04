const STATS = [
  { value: "33.7", suffix: "%", label: "Thermal Efficiency (±1.7%)" },
  { value: "10.1", suffix: " MW", label: "Electrical Output" },
  { value: "1,100", suffix: " t", label: "CO₂ Captured / Year (DAC)" },
  { value: "~70", suffix: "k t", label: "CO₂ Displaced / Year" },
  { value: "5", suffix: "%", label: "Total Parasitic Load" },
];

export function StatsRow() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-12 sm:mb-16">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-oxford-surface px-4 py-4 sm:px-5 sm:py-5 rounded-2xl border border-oxford-border shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 group"
        >
          <div className="font-display font-bold text-[1.3rem] sm:text-[1.45rem] lg:text-[1.6rem] leading-none text-oxford-text-bright mb-2 sm:mb-3 whitespace-normal sm:whitespace-nowrap">
            {stat.value}
            <span className="text-oxford-accent">{stat.suffix}</span>
          </div>
          <div className="font-mono text-[0.6rem] sm:text-[0.65rem] tracking-[0.14em] sm:tracking-[0.16em] text-oxford-text-dim uppercase leading-snug break-words">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
