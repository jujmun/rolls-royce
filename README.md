# Rolls-Royce Report Website

Website for the report: **Integrated High-Temperature Gas Reactor System for Net CO₂ Reduction with Water-Independent Heat Rejection** (sCO₂ Brayton cycle with MOF-based DAC).

## Features

- **Interactive 3D system architecture** — Orbit/zoom, click components for descriptions, flow highlighting, Schematic/Realistic toggle
- **Report** — MDX-based sections (Introduction, Brayton cycle, CO₂ capture, Conclusion, Evaluation, Work cited)
- **Appendix** — Code structure and links to GitHub repos
- **Key results** — Summary cards on the home page
- **PDF download** — Full report at `/report.pdf`

## Setup

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

### Vercel

1. Push the repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repository.
3. Set **Root Directory** to `site` (if the repo root is the parent of `site`).
4. Deploy. Build command: `npm run build`. Output: default (`.next`).

If the repo root is `site/`, leave Root Directory blank.

### Netlify

1. Push the repo to GitHub and connect it in [Netlify](https://netlify.com).
2. **Build settings**
   - **Base directory:** `site` (or leave empty if root is `site`)
   - **Build command:** `npm run build`
   - **Publish directory:** `site/.next` (for Next.js use the Netlify Next.js plugin; or set **Publish directory** to `site/out` only if you use static export)
3. Install the **Netlify plugin for Next.js** so the app runs as a server-rendered Next app, or use **Publish directory** `site/.next` and set **Functions** if needed.

Recommended for Next.js on Netlify: use the official [Netlify Next.js plugin](https://docs.netlify.com/integrations/frameworks/next-js/) (auto-detected when you connect a Next app).

## Optional: Export Figure 1

To add the report’s Figure 1 image under `public/figures/`, see `public/figures/README.md`.
# rolls-royce
