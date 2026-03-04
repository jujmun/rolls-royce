import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { HighlightBand } from "@/components/HighlightBand";
import { SectionTag } from "@/components/SectionTag";
import { BraytonCards } from "@/components/BraytonCards";
import { FlowDiagram } from "@/components/FlowDiagram";
import { SystemCanvas } from "@/components/scene/SystemCanvas";
import { MofGrid } from "@/components/MofGrid";
import { BarChart } from "@/components/BarChart";
import { MeritTable } from "@/components/MeritTable";
import { TeamGrid } from "@/components/TeamGrid";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Key stats */}
      <section id="overview" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto bg-oxford-bg">
        <SectionTag>System Performance</SectionTag>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
          Key Figures of Merit
        </h2>
        <StatsRow />
        <HighlightBand>
          The core insight: the Brayton cycle already pulls air for cooling, and MOFs can be regenerated using the cycle&apos;s own waste heat — making this as close to &quot;free DAC&quot; as engineering allows.
        </HighlightBand>
      </section>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Brayton cycle */}
      <section id="brayton" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg2">
        <SectionTag>Section 2</SectionTag>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
          Electricity Generation &<br />Heat Rejection
        </h2>
        <BraytonCards />

        <div className="mt-12">
          <SectionTag>Thermodynamic States</SectionTag>
          <FlowDiagram />
        </div>

        <div className="mt-12">
          <SectionTag>Interactive 3D diagram</SectionTag>
          <p className="text-oxford-text-dim text-sm mt-2 mb-4 max-w-xl">
            Turn on &quot;Show how systems connect&quot; to see the sCO₂ loop, heat path, and air path. Click any component to highlight its connections.
          </p>
          <div className="canvas-frame">
            <div className="relative aspect-[16/9] min-h-[320px] w-full">
              <SystemCanvas />
            </div>
          </div>
        </div>
      </section>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* CO2 Capture */}
      <section id="capture" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg">
        <SectionTag>Section 3</SectionTag>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
          CO₂ Capture via<br />MOF Beds
        </h2>
        <MofGrid />
        <SectionTag>Annual CO₂ Capture Calculation</SectionTag>
        <BarChart />
      </section>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Results */}
      <section id="results" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg2">
        <SectionTag>Section 4</SectionTag>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
          Conclusion &<br />Figures of Merit
        </h2>
        <MeritTable />
        <HighlightBand>
          Waste heat for regeneration reduced the DAC parasitic load by ~28%. Carbon credits under the EU ETS (~£90/t-CO₂) could offset ~35% of the revenue lost from the parasitic electricity load — approximately £100,000/year against £276,000/year foregone.
        </HighlightBand>
      </section>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Team */}
      <section id="team" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg">
        <SectionTag>Authors</SectionTag>
        <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
          The Team
        </h2>
        <TeamGrid />
      </section>

      <Footer />
    </div>
  );
}
