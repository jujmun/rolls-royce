import Link from "next/link";

export default function AppendixPage() {
  return (
    <div className="min-h-screen bg-oxford-bg">
      <div className="border-b border-oxford-border bg-oxford-bg2 py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-oxford-text-dim font-mono uppercase tracking-wider">
            Code & references
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-oxford-text-bright sm:text-5xl font-sans">
            Appendix
          </h1>
          <p className="mt-4 text-oxford-text-dim">
            Code structure and links to repositories.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-6 py-14">
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-oxford-text-bright mb-4 font-sans">
            7.1 Overall Code Structure (Brayton Cycle Optimizer)
          </h2>
          <p className="mb-3 text-oxford-text-dim font-sans">
            The Brayton Cycle Optimizer package contains:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-oxford-text-dim font-sans">
            <li><strong className="text-oxford-text-bright font-mono">Properties</strong> — CoolProp for sCO₂ enthalpy, entropy, density.</li>
            <li><strong className="text-oxford-text-bright font-mono">Components</strong> — Compressor, turbine, recuperator outlet states.</li>
            <li><strong className="text-oxford-text-bright font-mono">Cycle_solver</strong> — Assembles components; net work and efficiency.</li>
            <li><strong className="text-oxford-text-bright font-mono">Run_optimization</strong> — Parametric sweep; outputs CSV.</li>
          </ul>
          <a
            href="https://github.com/Oxford-2/sCO2-Brayton-Cycle-Optimizer"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-oxford-accent hover:underline"
          >
            GitHub: Oxford-2/sCO2-Brayton-Cycle-Optimizer
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-oxford-text-bright mb-4 font-sans">
            7.2–7.4 Compressor, Recuperator, Run_Optimization
          </h2>
          <p className="text-oxford-text-dim leading-relaxed">
            Compressor model uses isentropic efficiency and CoolProp for states. Recuperator uses node-by-node balance with NTU. Run_Optimization sweeps P_high and T_turbine; bisection for mass flow. See the repository and report PDF for code snippets.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-oxford-text-bright mb-4 font-sans">
            7.5–7.8 Turbine Blades
          </h2>
          <p className="mb-3 text-oxford-text-dim leading-relaxed">
            Turbine package: Main.py (thermodynamics, velocity triangles, blade sizing, CSV/DXF export), Design_point_Function.py (velocity triangle, blade dimensions, linear/Bezier/spline profiles), CSVToDXF.py, Demo_lib.py, FunctionForCircular.py.
          </p>
          <a
            href="https://github.com/Oxford-2/Turbine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm font-medium text-oxford-accent hover:underline"
          >
            GitHub: Oxford-2/Turbine
          </a>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-oxford-text-bright mb-4 font-sans">
            7.9 Derate Analysis
          </h2>
          <p className="text-oxford-text-dim leading-relaxed">
            Met Office data (2025); derate based on temperature points above 20 °C and k (% loss per K). Loss fraction and MWh lost per MW net-year are tabulated in the report.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-oxford-text-bright mb-4 font-sans">
            7.10 Cumulative exposure / HX2 sizing
          </h2>
          <p className="text-oxford-text-dim leading-relaxed">
            Air mass flow rates and UA for Stage 1 and 2; ε–NTU with correction factors. Total UA 72.8 + 134.3 kW/K; ~200 m² ground footprint.
          </p>
        </section>

        <div className="border-t border-oxford-border pt-10 flex flex-wrap gap-6">
          <Link href="/report" className="text-sm font-medium text-oxford-accent hover:underline">
            ← Back to Report
          </Link>
          <Link href="/" className="text-sm font-medium text-oxford-text-dim hover:text-oxford-text-bright transition-colors">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
