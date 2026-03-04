import type { Metadata } from "next";
import { DM_Sans, Space_Mono, Unbounded } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-mono",
  display: "swap",
});
const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "OXFORD 2 — Integrated HTGR System",
  description:
    "Net CO₂ reduction via sCO₂ Brayton cycle with MOF-based direct air capture — water-independent heat rejection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${spaceMono.variable} ${unbounded.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-oxford-bg text-oxford-text overflow-x-hidden">
        <Nav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
