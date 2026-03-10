"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/report", label: "Report", external: false },
  { href: "/appendix", label: "Appendix", external: false },
  {
    href: "https://docs.google.com/document/d/15uzFkJJyFezy7XwfimMGVduEP7-cyFyqqoGPnDbct_s/edit?usp=sharing",
    label: "Lessons Learned",
    external: true,
  },
  { href: "/report.pdf", label: "Download PDF", external: false, download: true, accent: true },
];

const baseLinkClass = (accent?: boolean) =>
  `font-mono text-xs tracking-wide uppercase no-underline transition-colors ${
    accent
      ? "text-oxford-accent hover:text-oxford-accent-hover"
      : "text-oxford-text-dim hover:text-oxford-accent"
  }`;

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-4 bg-oxford-surface/90 backdrop-blur-xl border-b border-oxford-border shadow-sm">
      <Link href="/" className="font-display font-bold text-sm text-oxford-text-bright tracking-tight">
        OXFORD <span className="text-oxford-accent">2</span>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-6 list-none">
        {NAV_LINKS.map((item) =>
          item.external ? (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseLinkClass(item.accent)}
              >
                {item.label}
              </a>
            </li>
          ) : item.download ? (
            <li key={item.label}>
              <a href={item.href} download className={baseLinkClass(item.accent)}>
                {item.label}
              </a>
            </li>
          ) : (
            <li key={item.label}>
              <Link href={item.href} className={baseLinkClass(item.accent)}>
                {item.label}
              </Link>
            </li>
          )
        )}
      </ul>

      {/* Mobile: hamburger button */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden p-2 -mr-2 text-oxford-text-dim hover:text-oxford-accent transition-colors"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={mobileOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          {mobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </nav>

    {/* Mobile: backdrop + dropdown menu */}
    {mobileOpen && (
      <>
        <button
          type="button"
          className="md:hidden fixed inset-0 z-[98] bg-black/20"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="md:hidden fixed top-[57px] left-0 right-0 z-[99] bg-oxford-surface border-b border-oxford-border shadow-lg"
        role="dialog"
        aria-label="Navigation menu"
      >
        <ul className="px-6 py-4 list-none space-y-1">
          {NAV_LINKS.map((item) =>
            item.external ? (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${baseLinkClass(item.accent)} block py-3`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ) : item.download ? (
              <li key={item.label}>
                <a
                  href={item.href}
                  download
                  className={`${baseLinkClass(item.accent)} block py-3`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`${baseLinkClass(item.accent)} block py-3`}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
      </>
    )}
    </>
  );
}
