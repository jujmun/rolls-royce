import { Hero } from "@/components/Hero";
import { StatsRow } from "@/components/StatsRow";
import { HighlightBand } from "@/components/HighlightBand";
import { SectionTag } from "@/components/SectionTag";
import { BraytonCards } from "@/components/BraytonCards";
import { SystemCanvas } from "@/components/scene/SystemCanvas";
import { MofGrid } from "@/components/MofGrid";
import { BarChart } from "@/components/BarChart";
import { MeritTable } from "@/components/MeritTable";
import { TeamGrid } from "@/components/TeamGrid";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Compact key figures strip — scrollytelling */}
      <ScrollReveal>
        <section id="overview" className="relative z-10 py-16 px-8 max-w-[1100px] mx-auto bg-oxford-bg">
          <SectionTag>System Performance</SectionTag>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-10">
            Key Figures of Merit
          </h2>
          <StatsRow />
          <HighlightBand>
            The core insight: the Brayton cycle already pulls air for cooling, and MOFs can be regenerated using the cycle&apos;s own waste heat — making this as close to &quot;free DAC&quot; as engineering allows.
          </HighlightBand>
        </section>
      </ScrollReveal>

      {/* Full-bleed 3D centerpiece — "Explore the system" */}
      <section id="system" className="relative z-10 w-full bg-oxford-bg2 py-20 sm:py-28 scroll-mt-24">
        <div className="max-w-[1100px] mx-auto px-8 mb-10">
          <ScrollReveal>
            <SectionTag>Interactive experience</SectionTag>
            <h2 className="font-display font-bold text-[clamp(1.75rem,4vw,2.75rem)] text-oxford-text-bright leading-tight tracking-tight mb-4">
              Explore the system
            </h2>
            <p className="text-oxford-text-dim max-w-xl">
              Drag to rotate · Turn on &quot;Show how systems connect&quot; to see sCO₂, heat, and air paths · Click any component for details.
            </p>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={150}>
          <div className="w-full px-4 sm:px-8 max-w-[1400px] mx-auto">
            <div className="canvas-frame overflow-hidden rounded-2xl shadow-card-hover">
              <div className="relative w-full aspect-video min-h-[400px] sm:min-h-[500px]">
                <SystemCanvas />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Brayton cycle */}
      <ScrollReveal>
        <section id="brayton" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg">
          <SectionTag>Section 2</SectionTag>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
            Electricity Generation &<br />Heat Rejection
          </h2>
          <BraytonCards />
        </section>
      </ScrollReveal>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* CO2 Capture */}
      <ScrollReveal>
        <section id="capture" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg2">
          <SectionTag>Section 3</SectionTag>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
            CO₂ Capture via<br />MOF Beds
          </h2>
          <MofGrid />
          <SectionTag>Annual CO₂ Capture Calculation</SectionTag>
          <BarChart />
        </section>
      </ScrollReveal>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Results */}
      <ScrollReveal>
        <section id="results" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg">
          <SectionTag>Section 4</SectionTag>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
            Conclusion &<br />Figures of Merit
          </h2>
          <MeritTable />
          <HighlightBand>
            Waste heat for regeneration reduced the DAC parasitic load by ~28%. Carbon credits under the EU ETS (~£90/t-CO₂) could offset ~35% of the revenue lost from the parasitic electricity load — approximately £100,000/year against £276,000/year foregone.
          </HighlightBand>
        </section>
      </ScrollReveal>

      <hr className="relative z-10 border-0 border-t border-oxford-border max-w-[1100px] mx-auto bg-transparent" />

      {/* Team */}
      <ScrollReveal>
        <section id="team" className="relative z-10 py-24 px-8 max-w-[1100px] mx-auto scroll-mt-24 bg-oxford-bg2">
          <SectionTag>Authors</SectionTag>
          <h2 className="font-display font-bold text-[clamp(1.6rem,3.5vw,2.4rem)] text-oxford-text-bright leading-tight tracking-tight mb-12">
            The Team
          </h2>
          <TeamGrid />
        </section>
      </ScrollReveal>

      <Footer />
    </div>
  );
}
