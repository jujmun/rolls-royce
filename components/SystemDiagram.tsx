export function SystemDiagram() {
  return (
    <div className="h-full w-full bg-[#07101c] text-white">
      <svg
        viewBox="0 0 1200 600"
        className="h-full w-full"
        role="img"
        aria-label="sCO₂ Brayton cycle with MOF carbon capture"
      >
        {/* Background grid */}
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#111827" strokeWidth="1" />
          </pattern>
          <marker
            id="arrow"
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="currentColor" />
          </marker>
        </defs>

        <rect x="0" y="0" width="1200" height="600" fill="url(#grid)" />

        {/* Labels */}
        <text x="70" y="80" fill="#f9a8d4" fontSize="18" fontFamily="monospace">
          helium
        </text>
        <text x="360" y="70" fill="#93c5fd" fontSize="18" fontFamily="monospace">
          supercritical CO₂
        </text>
        <text x="910" y="80" fill="#6ee7b7" fontSize="18" fontFamily="monospace">
          air / CO₂ capture
        </text>

        {/* Reactor */}
        <rect x="40" y="130" width="120" height="320" rx="8" fill="#020617" stroke="#f472b6" strokeWidth="2" />
        <text x="100" y="180" textAnchor="middle" fill="#e5e7eb" fontSize="18" fontFamily="system-ui">
          Reactor
        </text>

        {/* Helium loop to HX1 */}
        <path
          d="M160 220 H230 V180 H290"
          fill="none"
          stroke="#ec4899"
          strokeWidth="6"
          markerEnd="url(#arrow)"
        />

        {/* HX1 */}
        <rect x="290" y="160" width="80" height="160" rx="8" fill="#020617" stroke="#f97316" strokeWidth="2" />
        <text x="330" y="195" textAnchor="middle" fill="#e5e7eb" fontSize="13" fontFamily="system-ui">
          HEATER
        </text>
        <text x="330" y="215" textAnchor="middle" fill="#e5e7eb" fontSize="13" fontFamily="system-ui">
          HX1
        </text>

        {/* sCO2 cold loop top rail: 2 → 1 */}
        <path
          d="M370 200 H520 H710"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="6"
          markerEnd="url(#arrow)"
        />
        <text x="540" y="185" fill="#93c5fd" fontSize="14" fontFamily="monospace">
          2
        </text>
        <text x="720" y="185" fill="#93c5fd" fontSize="14" fontFamily="monospace">
          1
        </text>

        {/* Compressor */}
        <rect x="520" y="130" width="90" height="80" rx="10" fill="#020617" stroke="#60a5fa" strokeWidth="2" />
        <text x="565" y="165" textAnchor="middle" fill="#e5e7eb" fontSize="14" fontFamily="system-ui">
          Compressor
        </text>

        {/* Cooler HX2 (stacked HX2B / HX2A) */}
        <rect x="710" y="170" width="80" height="160" rx="10" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
        <rect x="720" y="180" width="60" height="60" rx="8" fill="#0ea5e9" />
        <rect x="720" y="260" width="60" height="60" rx="8" fill="#0284c7" />
        <text x="750" y="210" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontFamily="system-ui">
          HX2B
        </text>
        <text x="750" y="290" textAnchor="middle" fill="#e5e7eb" fontSize="12" fontFamily="system-ui">
          HX2A
        </text>

        {/* sCO2 bottom rail: 4 → 3 */}
        <path
          d="M710 330 H520 H370"
          fill="none"
          stroke="#ef4444"
          strokeWidth="6"
          markerEnd="url(#arrow)"
        />
        <text x="700" y="352" fill="#fecaca" fontSize="14" fontFamily="monospace">
          4
        </text>
        <text x="380" y="352" fill="#fecaca" fontSize="14" fontFamily="monospace">
          3
        </text>

        {/* Turbine */}
        <rect x="520" y="310" width="90" height="80" rx="10" fill="#020617" stroke="#6366f1" strokeWidth="2" />
        <text x="565" y="345" textAnchor="middle" fill="#e5e7eb" fontSize="14" fontFamily="system-ui">
          Turbine
        </text>

        {/* Vertical connectors from HX1 to recup and from recup to turbine */}
        {/* Recuperator block */}
        <rect x="420" y="230" width="140" height="120" rx="10" fill="#1f2937" stroke="#f59e0b" strokeWidth="2" />
        <text x="490" y="260" textAnchor="middle" fill="#fef3c7" fontSize="14" fontFamily="system-ui">
          Recuperator
        </text>

        {/* Cold leg (blue) 2 → HX1 via recup */}
        <path
          d="M565 210 V240 H420"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
          markerEnd="url(#arrow)"
        />
        <path
          d="M420 240 H370 V220"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="5"
          markerEnd="url(#arrow)"
        />

        {/* Hot leg (red) 4 → HX2 via recup */}
        <path
          d="M565 330 V310 H560 V300 H560"
          fill="none"
          stroke="#f97316"
          strokeWidth="0"
        />
        <path
          d="M565 330 V320 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V315 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        {/* simplified hot path */}
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />
        <path
          d="M565 330 V310 H560"
          fill="none"
          stroke="none"
        />

        <path
          d="M565 330 V310 H560 V300 H560"
          fill="none"
          stroke="none"
        />

        <path
          d="M565 330 V305 H560"
          fill="none"
          stroke="none"
        />

        {/* simplified single stroke: 4 → recup → HX2 */}
        <path
          d="M565 330 V300 H490 H710 V260"
          fill="none"
          stroke="#f97316"
          strokeWidth="5"
          markerEnd="url(#arrow)"
        />

        {/* Air / MOF on the right */}
        <rect x="890" y="200" width="80" height="60" rx="10" fill="#022c22" stroke="#34d399" strokeWidth="2" />
        <rect x="890" y="290" width="80" height="60" rx="10" fill="#022c22" stroke="#34d399" strokeWidth="2" />
        <text x="930" y="230" textAnchor="middle" fill="#bbf7d0" fontSize="13" fontFamily="system-ui">
          MOF
        </text>
        <text x="930" y="320" textAnchor="middle" fill="#bbf7d0" fontSize="13" fontFamily="system-ui">
          MOF
        </text>

        {/* Air streams */}
        <path
          d="M790 210 H840"
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          markerEnd="url(#arrow)"
        />
        <path
          d="M790 290 H840"
          fill="none"
          stroke="#4ade80"
          strokeWidth="4"
          markerEnd="url(#arrow)"
        />
        <path
          d="M970 230 H1030"
          fill="none"
          stroke="#a7f3d0"
          strokeWidth="4"
          markerEnd="url(#arrow)"
        />
        <path
          d="M970 320 H1030"
          fill="none"
          stroke="#22c55e"
          strokeWidth="4"
          markerEnd="url(#arrow)"
        />
      </svg>
    </div>
  );
}

