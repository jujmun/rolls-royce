export function Footer() {
  return (
    <footer className="relative z-10 text-center py-12 px-8 border-t border-oxford-border bg-oxford-bg2 font-mono text-xs tracking-wider text-oxford-text-dim">
      <p className="text-oxford-text">Oxford 2 · Integrated HTGR System for Net CO₂ Reduction · March 2026</p>
      <p className="mt-1.5 text-oxford-text-dim">sCO₂ Brayton Cycle · MOF DAC · Water-Independent Heat Rejection</p>
      <p className="mt-3">
        <a
          href="https://docs.google.com/document/d/15uzFkJJyFezy7XwfimMGVduEP7-cyFyqqoGPnDbct_s/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-oxford-accent hover:underline"
        >
          Lessons Learned (Google Doc)
        </a>
      </p>
    </footer>
  );
}
