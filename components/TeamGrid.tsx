const MEMBERS = [
  { initials: "SC", name: "Shing Hei (Rickie) Chan", role: "Author" },
  { initials: "YL", name: "Yuxuan (Katherine) Liu", role: "Author" },
  { initials: "RL", name: "Rayn Lakha", role: "Author" },
  { initials: "JM", name: "Juyeon Mun", role: "Author" },
  { initials: "JO", name: "Jin Ming Ooi", role: "Author" },
  { initials: "JK", name: "Joo Hyun Kim", role: "Author" },
  { initials: "AN", name: "Anthony Newman", role: "Supervisor", gradient: "linear-gradient(135deg, #444, #888)" },
  { initials: "RR", name: "Rolls-Royce Team", role: "Supervisor", gradient: "linear-gradient(135deg, #c0392b, #e74c3c)" },
];

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {MEMBERS.map((m, i) => (
        <div
          key={i}
          className="bg-oxford-surface py-6 px-4 text-center rounded-2xl border border-oxford-border shadow-card hover:shadow-card-hover transition-all duration-200"
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xs text-white mx-auto mb-3"
            style={{
              background: m.gradient ?? "linear-gradient(135deg, var(--oxford-accent), var(--oxford-accent2))",
            }}
          >
            {m.initials}
          </div>
          <div className="text-sm font-medium text-oxford-text-bright leading-snug">{m.name}</div>
          <div className="font-mono text-[0.65rem] tracking-wider text-oxford-text-dim uppercase mt-1">
            {m.role}
          </div>
        </div>
      ))}
    </div>
  );
}
