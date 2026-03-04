"use client";

import { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import { getNode, type NodeId } from "@/lib/systemModel";
import Link from "next/link";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const SystemScene = dynamic(
  () =>
    import("./SystemScene").then((mod) => mod.SystemScene),
  { ssr: false }
);

function SceneFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-oxford-bg2 text-oxford-text-dim text-sm font-mono">
      Loading…
    </div>
  );
}

const FLOW_LEGEND = [
  { id: "sco2", label: "sCO₂ Brayton loop", color: "#c9b896" },
  { id: "heat", label: "Heat (HTTR → HX1)", color: "#f97316" },
  { id: "air", label: "Air (MOF → HX2)", color: "#14b8a6" },
] as const;

export function SystemCanvas() {
  const [selectedId, setSelectedId] = useState<NodeId | null>(null);
  const [realisticMode, setRealisticMode] = useState(false);
  const [showFlowMode, setShowFlowMode] = useState(true);
  const selectedNode = selectedId ? getNode(selectedId) : null;

  return (
    <div className="relative h-full w-full bg-oxford-bg2 rounded-xl overflow-hidden border border-oxford-border">
      <div className="absolute left-4 top-4 z-10 flex flex-col gap-2">
        <label className="flex cursor-pointer items-center gap-2.5 rounded-lg bg-oxford-surface/95 backdrop-blur-xl border border-oxford-border shadow-card px-4 py-2.5 text-xs font-medium text-oxford-text font-mono transition-colors hover:border-oxford-accent/50">
          <input
            type="checkbox"
            checked={showFlowMode}
            onChange={(e) => setShowFlowMode(e.target.checked)}
            className="h-3.5 w-3.5 rounded accent-oxford-accent"
          />
          Show how systems connect
        </label>
        {showFlowMode && (
          <div className="rounded-lg bg-oxford-surface/95 backdrop-blur-xl border border-oxford-border shadow-card px-4 py-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-oxford-text-dim font-mono">
              Flow paths
            </p>
            {FLOW_LEGEND.map(({ label, color }) => (
              <div key={label} className="flex items-center gap-2 py-1">
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs text-oxford-text font-sans">{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="absolute right-4 top-4 z-10">
        <label className="flex cursor-pointer items-center gap-2.5 rounded-lg bg-oxford-surface/95 backdrop-blur-xl border border-oxford-border shadow-card px-4 py-2.5 text-xs font-medium text-oxford-text font-mono transition-colors hover:border-oxford-accent/50">
          <input
            type="checkbox"
            checked={realisticMode}
            onChange={(e) => setRealisticMode(e.target.checked)}
            className="h-3.5 w-3.5 rounded accent-oxford-accent"
          />
          Realistic
        </label>
      </div>
      <Suspense fallback={<SceneFallback />}>
        <Canvas
          camera={{ position: [4, 1, 4], fov: 50 }}
          gl={{ antialias: true, alpha: false }}
          className="h-full w-full"
        >
          <SystemScene
            selectedId={selectedId}
            onSelect={setSelectedId}
            realisticMode={realisticMode}
            showFlowMode={showFlowMode}
          />
        </Canvas>
      </Suspense>
      {selectedNode && (
        <div className="absolute bottom-4 left-4 right-4 max-w-md rounded-2xl bg-oxford-surface/98 backdrop-blur-xl border border-oxford-border shadow-card-hover p-6 sm:right-auto">
          <p className="text-xl font-semibold text-white font-sans">{selectedNode.label}</p>
          <p className="mt-3 text-base leading-relaxed text-white/90 font-sans">
            {selectedNode.description}
          </p>
          <p className="mt-4 text-sm font-medium text-white font-mono">
            <span className="text-oxford-accent">Role</span> — {selectedNode.role}
          </p>
          {selectedNode.metrics && selectedNode.metrics.length > 0 && (
            <p className="mt-2 text-sm text-white/90 font-mono">
              <span className="font-medium text-white">Key values</span> — {selectedNode.metrics.join(", ")}
            </p>
          )}
          <Link
            href={selectedNode.reportHref}
            className="mt-4 inline-block text-sm font-semibold text-oxford-accent hover:underline font-sans"
          >
            {selectedNode.reportSection} →
          </Link>
          <button
            type="button"
            className="absolute right-3 top-3 rounded-lg p-1.5 text-oxford-text-dim hover:bg-oxford-bg2 transition-colors"
            onClick={() => setSelectedId(null)}
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>
      )}
    </div>
  );
}
