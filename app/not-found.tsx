import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 py-24">
      <p className="font-mono text-xs tracking-widest uppercase text-oxford-accent mb-4">
        Error 404
      </p>
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-oxford-text-bright text-center">
        Page not found
      </h1>
      <p className="mt-4 text-oxford-text-dim text-center max-w-md">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-oxford-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-oxford-accent-hover"
        >
          Home
        </Link>
        <Link
          href="/report"
          className="inline-flex items-center justify-center rounded-full border border-oxford-border px-6 py-3 text-sm font-medium text-oxford-text transition-colors hover:bg-oxford-bg2"
        >
          Report
        </Link>
        <Link
          href="/appendix"
          className="inline-flex items-center justify-center rounded-full border border-oxford-border px-6 py-3 text-sm font-medium text-oxford-text transition-colors hover:bg-oxford-bg2"
        >
          Appendix
        </Link>
      </div>
    </div>
  );
}
