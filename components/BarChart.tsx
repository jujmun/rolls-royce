const ROWS = [
  { label: "Air Mass Flow Rate", width: 100, value: "200 kg/s", delay: "0.1s" },
  { label: "Capture Efficiency", width: 25, value: "25%", delay: "0.2s" },
  { label: "CO₂ Concentration (atm)", width: 0.43, value: "430 ppm", delay: "0.3s" },
  { label: "Annual DAC Capture", width: 55, value: "1,100 t/yr", delay: "0.4s" },
  { label: "CO₂ Displaced (nuclear vs coal)", width: 100, value: "~70,000 t/yr", delay: "0.5s" },
];

export function BarChart() {
  return (
    <div className="border border-oxford-border bg-oxford-surface rounded-2xl p-8 mt-8 shadow-card">
      <div className="font-mono text-xs tracking-widest text-oxford-accent uppercase mb-4">
        System Parameters
      </div>
      <div className="flex flex-col gap-4">
        {ROWS.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[200px_1fr_80px] gap-4 items-center max-md:grid-cols-2 max-md:gap-2"
          >
            <div className="font-mono text-xs tracking-wider text-oxford-text-dim text-right uppercase max-md:text-left max-md:col-span-2">
              {row.label}
            </div>
            <div className="h-2 bg-oxford-bg2 rounded-full overflow-hidden max-md:col-span-2">
              <div
                className="h-full rounded-full bg-gradient-to-r from-oxford-accent to-oxford-accent2"
                style={{
                  width: `${row.width}%`,
                  animation: `barGrow 1.2s cubic-bezier(0.4, 0, 0.2, 1) ${row.delay} both`,
                  ["--bar-width" as string]: `${row.width}%`,
                }}
              />
            </div>
            <div className="font-mono text-[0.7rem] font-bold text-oxford-text-bright max-md:col-span-2">
              {row.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
