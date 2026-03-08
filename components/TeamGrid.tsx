import Link from "next/link";

type Member = {
  initials: string;
  name: string;
  role: string;
  link?: string;
  gradient?: string;
};

const MEMBERS: Member[] = [
  {
    initials: "SC",
    name: "Shing Hei (Rickie) Chan",
    role: "Author",
    link: "https://www.linkedin.com/in/shing-hei-chan-98b609300/",
  },
  {
    initials: "YL",
    name: "Yuxuan (Katherine) Liu",
    role: "Author",
    link: "https://www.linkedin.com/in/y-kliu/",
  },
  {
    initials: "RL",
    name: "Rayn Lakha",
    role: "Author",
    link: "https://www.linkedin.com/in/rayn-lakha/",
  },
  {
    initials: "JM",
    name: "Juyeon Mun",
    role: "Author",
    link: "https://www.linkedin.com/in/juyeon-m/",
  },
  {
    initials: "JO",
    name: "Jin Ming Ooi",
    role: "Author",
    link: "https://www.linkedin.com/in/jin-ming-ooi-934338296/",
  },
  {
    initials: "JK",
    name: "Joo Hyun Kim",
    role: "Author",
    link: "https://www.linkedin.com/in/joo-hyun-kim-b0703a364/",
  },
];

export function TeamGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {MEMBERS.map((m, i) => (
        <div key={i} className="rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-200">
          {m.link ? (
            <Link
              href={m.link}
              target="_blank"
              rel="noreferrer"
              className="group relative block bg-oxford-surface py-6 px-4 text-center rounded-2xl border border-oxford-accent/60 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-oxford-accent focus-visible:ring-offset-2 focus-visible:ring-offset-oxford-bg transition-colors duration-150 hover:border-oxford-accent"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xs text-white mx-auto mb-3 transition-transform duration-200 group-hover:scale-105"
                style={{
                  background: m.gradient ?? "linear-gradient(135deg, var(--oxford-accent), var(--oxford-accent2))",
                }}
              >
                {m.initials}
              </div>
              <div className="text-sm font-medium text-oxford-text-bright leading-snug group-hover:text-oxford-accent">
                {m.name}
              </div>
              <div className="font-mono text-[0.65rem] tracking-wider text-oxford-text-dim uppercase mt-1">
                {m.role}
              </div>
              {/* Minimal LinkedIn mark in top-right corner */}
              <div className="absolute right-3 top-3">
                <div className="h-4 w-4 rounded-[4px] bg-oxford-accent flex items-center justify-center">
                  <span className="text-[0.55rem] leading-none font-semibold text-white">in</span>
                </div>
              </div>
            </Link>
          ) : (
            <div className="relative bg-oxford-surface py-6 px-4 text-center rounded-2xl border border-oxford-border">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xs text-white mx-auto mb-3"
                style={{
                  background: m.gradient ?? "linear-gradient(135deg, var(--oxford-accent), var(--oxford-accent2))",
                }}
              >
                {m.initials}
              </div>
              <div className="text-sm font-medium text-oxford-text-bright leading-snug">{m.name}</div>
              <div className="font-mono text-[0.65rem] tracking-wider text-oxford-text-dim uppercase mt-1">
                {m.role}
              </div>
              {/* Minimal LinkedIn mark in top-right corner for visual consistency */}
              <div className="absolute right-3 top-3">
                <div className="h-4 w-4 rounded-[4px] border border-oxford-accent/50 flex items-center justify-center">
                  <span className="text-[0.55rem] leading-none font-semibold text-oxford-accent">
                    in
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
