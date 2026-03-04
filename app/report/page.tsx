import React from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import { readFile } from "fs/promises";
import path from "path";
import Link from "next/link";

const CONTENT_DIR = path.join(process.cwd(), "content/report");
const SECTIONS = [
  { slug: "introduction", title: "Introduction" },
  { slug: "brayton", title: "2. Electricity Generation & Heat Rejection" },
  { slug: "co2-capture", title: "3. CO₂ Capture" },
  { slug: "conclusion", title: "4. Conclusion" },
  { slug: "evaluation", title: "5. Evaluation" },
  { slug: "work-cited", title: "6. Work Cited" },
];

async function getSectionContent(slug: string): Promise<string> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  try {
    return await readFile(filePath, "utf-8");
  } catch {
    return "";
  }
}

export default async function ReportPage() {
  return (
    <div className="min-h-screen bg-oxford-bg">
      <div className="border-b border-oxford-border bg-oxford-bg2 py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-oxford-text-dim font-mono uppercase tracking-wider">
            Full report
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-oxford-text-bright sm:text-5xl font-sans">
            Integrated system for net CO₂ reduction
          </h1>
          <p className="mt-4 text-oxford-text-dim max-w-2xl mx-auto">
            High-temperature gas reactor with sCO₂ Brayton cycle and MOF-based direct air capture — water-independent heat rejection.
          </p>
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-6 py-14">
      <div className="prose-report max-w-none">
        {(await Promise.all(
          SECTIONS.map(async (section) => {
            const source = await getSectionContent(section.slug);
            if (!source) return null;
            const { content } = await compileMDX({
              source,
              options: { parseFrontmatter: true },
            });
            return { slug: section.slug, content };
          })
        ))
          .filter((x): x is NonNullable<typeof x> => x !== null)
          .map(({ slug, content }) => (
            <section key={slug} id={slug} className="mb-12 scroll-mt-24">
              <div className="report-content">{content}</div>
            </section>
          ))}
      </div>
      <div className="mt-14 border-t border-oxford-border pt-10 flex flex-wrap gap-6">
        <Link href="/appendix" className="text-sm font-medium text-oxford-accent hover:underline">
          Appendix & code →
        </Link>
        <a href="/report.pdf" download className="text-sm font-medium text-oxford-accent hover:underline">
          Download full PDF
        </a>
        <Link href="/" className="text-sm font-medium text-oxford-text-dim hover:text-oxford-text-bright transition-colors">
          ← Home
        </Link>
      </div>
      </div>
    </div>
  );
}
