import Image from "next/image";
import Link from "next/link";

export default function FomsPage() {
  return (
    <div className="min-h-screen bg-oxford-bg">
      <div className="border-b border-oxford-border bg-oxford-bg2 py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-oxford-text-dim font-mono uppercase tracking-wider">
            Sensitivity Analysis
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-oxford-text-bright sm:text-5xl font-sans">
            Figures of Merit
          </h1>
          <p className="mt-4 text-oxford-text-dim max-w-2xl mx-auto">
            Neutral, pessimistic, and optimistic ranges for each key performance metric across the integrated sCO₂ Brayton + MOF DAC system.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-6 py-14 space-y-10">
        <div className="rounded-2xl border border-oxford-border shadow-card overflow-hidden bg-oxford-surface">
          <Image
            src="/foms-1.png"
            alt="Figures of Merit — CO₂ captured per reactor, CO₂ prevented per reactor MW, HX2 parasitic load per heat rejected, Brayton cycle efficiency"
            width={1200}
            height={620}
            className="w-full h-auto"
          />
        </div>

        <div className="rounded-2xl border border-oxford-border shadow-card overflow-hidden bg-oxford-surface">
          <Image
            src="/foms-2.png"
            alt="Figures of Merit — Parasitic load for carbon capture, effective parasitic load per carbon capture, HX2 footprint, MOF bed footprint"
            width={1200}
            height={620}
            className="w-full h-auto"
          />
        </div>

        <div className="mt-10 border-t border-oxford-border pt-8 flex flex-wrap gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-oxford-text-dim hover:text-oxford-text-bright transition-colors"
          >
            ← Home
          </Link>
          <Link
            href="/report"
            className="text-sm font-medium text-oxford-accent hover:underline"
          >
            Full Report →
          </Link>
        </div>
      </div>
    </div>
  );
}
