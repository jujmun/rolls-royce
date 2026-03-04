const NODES = [
  { tag: "Reactor", label: "HTTR", val: "30 MW" },
  { tag: "HX1", label: "Heater", val: "750°C / 35 MPa" },
  { tag: "Component", label: "Turbine", val: "552°C / 8 MPa" },
  { tag: "Component", label: "Recuperator", val: "341°C → 110°C" },
  { tag: "HX2", label: "Air Cooler", val: "341°C → 35°C" },
  { tag: "Component", label: "Compressor", val: "35°C / 8 MPa" },
];

const ARROW_LABELS = ["He loop", "State 1→3", "State 4", "MOF regen", "State 2"];

function FlowBox({ tag, label, val }: { tag: string; label: string; val: string }) {
  return (
    <div className="border border-oxford-border py-4 px-5 min-w-[110px] bg-oxford-surface rounded-xl text-center transition-all duration-200 hover:border-oxford-accent hover:shadow-card cursor-default group">
      <div className="font-mono text-[0.6rem] tracking-wider uppercase text-oxford-text-dim mb-1">
        {tag}
      </div>
      <div className="font-display text-[0.75rem] font-bold text-oxford-text-bright group-hover:text-oxford-accent transition-colors">
        {label}
      </div>
      <div className="font-mono text-[0.65rem] text-oxford-accent mt-1">
        {val}
      </div>
    </div>
  );
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex-1 min-w-10 h-px bg-gradient-to-r from-oxford-accent to-transparent relative -mx-px">
      <span
        className="absolute -top-[18px] left-1/2 -translate-x-1/2 font-mono text-[0.55rem] tracking-wider text-oxford-text-dim px-1"
        style={{ top: "-18px" }}
      >
        {label}
      </span>
      <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-oxford-accent text-[0.5rem]">
        ▶
      </span>
    </div>
  );
}

export function FlowDiagram() {
  return (
    <div className="border border-oxford-border bg-oxford-bg2 rounded-2xl p-8 overflow-x-auto no-scrollbar mt-8 shadow-card">
      <div className="flex items-center gap-0 min-w-[700px] py-8 px-4">
        {NODES.flatMap((node, i) => [
          <div key={`node-${i}`} className="flex-shrink-0 text-center">
            <FlowBox tag={node.tag} label={node.label} val={node.val} />
          </div>,
          ...(i < NODES.length - 1
            ? [<FlowArrow key={`arrow-${i}`} label={ARROW_LABELS[i] ?? ""} />]
            : []),
        ])}
      </div>
    </div>
  );
}
