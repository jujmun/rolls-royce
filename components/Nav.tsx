import Link from "next/link";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 bg-oxford-surface/90 backdrop-blur-xl border-b border-oxford-border shadow-sm">
      <Link href="/" className="font-display font-bold text-sm text-oxford-text-bright tracking-tight">
        OXFORD <span className="text-oxford-accent">2</span>
      </Link>
      <ul className="hidden md:flex items-center gap-6 list-none">
        <li>
          <Link href="/report" className="font-mono text-xs tracking-wide uppercase text-oxford-text-dim no-underline transition-colors hover:text-oxford-accent">
            Report
          </Link>
        </li>
        <li>
          <Link href="/appendix" className="font-mono text-xs tracking-wide uppercase text-oxford-text-dim no-underline transition-colors hover:text-oxford-accent">
            Appendix
          </Link>
        </li>
        <li>
          <a href="/report.pdf" download className="font-mono text-xs tracking-wide uppercase text-oxford-accent no-underline transition-colors hover:text-oxford-accent-hover">
            Download PDF
          </a>
        </li>
      </ul>
    </nav>
  );
}
