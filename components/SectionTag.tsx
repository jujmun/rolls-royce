export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-xs tracking-widest uppercase text-oxford-accent mb-3 flex items-center gap-3">
      <span className="block w-6 h-px bg-oxford-accent" />
      {children}
    </div>
  );
}
