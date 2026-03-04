const SECTIONS = [
  {
    id: "introduction",
    number: "01",
    title: "Introduction",
    tagline: "One system, two missions",
    points: [
      "sCO₂ Brayton cycle with MOF beds integrated into air-cooling for direct air capture (DAC).",
      "Total parasitic load 5%: 0.5% cooling, 4.5% DAC — capturing 1,100 t-CO₂/year plus ~70k t/year displaced by nuclear vs coal.",
      "Synergy: the plant already moves air for cooling; MOFs are regenerated with waste heat from the Brayton cycle.",
    ],
    accent: "blue",
  },
  {
    id: "brayton",
    number: "02",
    title: "Electricity generation & heat rejection",
    tagline: "Brayton cycle",
    points: [
      "sCO₂ chosen for high-temperature compatibility, compact turbomachinery, and lower compression work near the critical point.",
      "33.7 ± 1.7% thermal efficiency; 10.1 MWe from 30 MW input. Mass flow 57.1 kg/s; compressor 8→35 MPa, turbine 750 °C TIT.",
      "Components: centrifugal compressor, PCHE/TPMS HX1 (no parasitic load), single-stage radial turbine, counterflow recuperator (~95% effectiveness), two-stage air-cooled HX2 (~200 m² footprint, water-independent).",
    ],
    accent: "gray",
  },
  {
    id: "co2-capture",
    number: "03",
    title: "CO₂ capture",
    tagline: "MOF-based DAC",
    points: [
      "MOFs use physisorption and can be regenerated with low-temperature waste heat (unlike amine scrubbing).",
      "Air passes through a MOF bed, then cools the cycle in HX2; beds alternate between adsorption and regeneration using hot air from HX2 Stage 1.",
      "~25% mean capture rate; TVSA regeneration (75–120 °C). Indirect conductive heating so air never contacts the MOF. ~2 kPa bed pressure drop; laminate beds.",
    ],
    accent: "gray",
  },
  {
    id: "conclusion",
    number: "04",
    title: "Conclusion",
    tagline: "Figures of merit",
    points: [
      "Brayton & cooling: ~35% efficiency, 10.1 MWe; air-cooling parasitic ~50 kW (0.5% of turbine output).",
      "Carbon: ~70,000 t CO₂/year displaced (nuclear vs coal); 1,100 t/year captured by DAC. Total DAC parasitic 4.5% (regeneration + pressure-drop); waste heat cuts DAC parasitic by ~28%.",
      "Carbon credits (~£90/t-CO₂) can offset part of the parasitic cost.",
    ],
    accent: "blue",
  },
  {
    id: "evaluation",
    number: "05",
    title: "Evaluation",
    tagline: "Lessons & next steps",
    points: [
      "Turbine design: simplified to 2D then 3D; parameterised geometry; DXF resolved CAD import.",
      "Future: structural verification of sCO₂ piping (35 MPa, >300 °C gradients); proposed strain monitoring via Sagnac/Michelson interferometer at HX2 welds, turbine casing, and high-temperature piping.",
    ],
    accent: "gray",
  },
  {
    id: "work-cited",
    number: "06",
    title: "Work cited",
    tagline: "Key references",
    points: [
      "Crespi et al. — Supercritical CO₂ cycles review (Applied Energy). Sanz-Pérez et al. — Direct capture of CO₂ from air (Chemical Reviews).",
      "Sadiq et al. — Pilot-scale MOF DAC (Advanced Sustainable Systems). Rolls-Royce — GT-MHR Power Conversion System assessment. Full list in PDF report.",
    ],
    accent: "gray",
  },
] as const;

const ACCENT_STYLES = {
  blue: "border-l-tech-accent",
  gray: "border-l-tech-border",
} as const;

export function ReportSummary() {
  return (
    <div className="space-y-6">
      {SECTIONS.map((section, i) => (
        <article
          key={section.id}
          id={section.id}
          className={`animate-fade-in-up opacity-0 rounded-tech-lg border-l-4 bg-tech-bg-elevated py-6 pl-6 pr-6 sm:pl-8 sm:pr-8 border border-tech-border transition-all duration-200 hover:border-tech-border ${ACCENT_STYLES[section.accent]}`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="text-xl font-semibold tabular-nums text-tech-accent font-mono">
              {section.number}
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-tech-text sm:text-3xl font-sans">
              {section.title}
            </h3>
          </div>
          <p className="mt-1.5 text-sm font-medium text-tech-text-secondary font-mono">
            {section.tagline}
          </p>
          <ul className="mt-5 space-y-3">
            {section.points.map((point, j) => (
              <li
                key={j}
                className="flex gap-3 text-sm leading-relaxed text-tech-text-secondary sm:text-base font-sans"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-tech-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
