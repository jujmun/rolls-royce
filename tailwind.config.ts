import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        oxford: {
          bg: "#fbfbfd",
          bg2: "#f5f5f7",
          surface: "#ffffff",
          border: "rgba(0,0,0,0.08)",
          "border-focus": "rgba(0,113,227,0.4)",
          accent: "#0071e3",
          "accent-hover": "#0077ed",
          accent2: "#34c759",
          accent3: "#ff3b30",
          text: "#1d1d1f",
          "text-dim": "#6e6e73",
          "text-bright": "#1d1d1f",
        },
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)",
        "card-hover": "0 8px 30px rgba(0,0,0,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease both",
        pulse: "pulse 8s ease-in-out infinite",
        "pulse2": "pulse2 10s ease-in-out infinite reverse",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "bar-grow": "barGrow 1.2s cubic-bezier(0.4, 0, 0.2, 1) both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulse: {
          "0%, 100%": { transform: "translateX(-50%) scale(1)", opacity: "1" },
          "50%": { transform: "translateX(-50%) scale(1.1)", opacity: "0.7" },
        },
        pulse2: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.1)", opacity: "0.7" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.2)" },
        },
        barGrow: {
          from: { width: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
