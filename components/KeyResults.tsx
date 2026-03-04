const delays = [
  "animation-delay-100",
  "animation-delay-200",
  "animation-delay-300",
  "animation-delay-400",
  "animation-delay-500",
  "animation-delay-600",
];

export function KeyResults() {
  const cards = [
    {
      title: "Net power output",
      value: "10.1 MWe",
      detail: "From 30 MW thermal input · 33.7% cycle efficiency",
      highlight: true,
    },
    {
      title: "CO₂ captured per year",
      value: "1,100 t",
      detail: "Direct air capture via MOF beds",
      highlight: true,
    },
    {
      title: "CO₂ displaced vs coal",
      value: "~70,000 t/year",
      detail: "By generating nuclear electricity",
      highlight: true,
    },
    {
      title: "Cooling parasitic load",
      value: "~0.5%",
      detail: "Water-independent air cooling",
    },
    {
      title: "Total DAC parasitic",
      value: "4.5%",
      detail: "Regeneration + pressure-drop",
    },
    {
      title: "Heat rejection",
      value: "Water-free",
      detail: "Two-stage air-cooled design",
    },
  ];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className={`animate-fade-in-up opacity-0 ${delays[i] ?? ""} rounded-tech-lg bg-tech-bg-elevated p-6 border border-tech-border transition-all duration-200 hover:border-tech-accent/50`}
        >
          <p className="text-xs font-medium text-tech-text-secondary tracking-wide font-mono uppercase">
            {card.title}
          </p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-tech-accent sm:text-3xl font-mono tabular-nums">
            {card.value}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-tech-text-secondary font-sans">
            {card.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
