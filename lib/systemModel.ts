export type NodeId =
  | "httr"
  | "hx1"
  | "compressor"
  | "turbine"
  | "recuperator"
  | "hx2stage1"
  | "hx2stage2"
  | "mofbedA"
  | "mofbedB";

export interface SystemNode {
  id: NodeId;
  label: string;
  description: string;
  role: string;
  reportSection: string;
  reportHref: string;
  /** Key values from report, e.g. "35 MPa", "57 kg/s" */
  metrics?: string[];
}

export interface SystemEdge {
  from: NodeId;
  to: NodeId;
  label?: string;
}

export const SYSTEM_NODES: SystemNode[] = [
  {
    id: "httr",
    label: "HTTR",
    description:
      "High-Temperature gas-cooled Test Reactor. Provides 30 MW thermal output via helium to the primary heat exchanger.",
    role: "Primary heat source",
    reportSection: "Introduction",
    reportHref: "/report#introduction",
    metrics: ["30 MW thermal"],
  },
  {
    id: "hx1",
    label: "HX1",
    description:
      "Primary heat exchanger. Transfers heat from the helium loop to the sCO₂ Brayton cycle. Passive; no parasitic power.",
    role: "Heat input to Brayton cycle",
    reportSection: "2.5 Heat Exchanger 1",
    reportHref: "/report#hx1",
    metrics: ["PCHE / TPMS", "No parasitic load"],
  },
  {
    id: "compressor",
    label: "Compressor",
    description:
      "Compresses sCO₂ from ~8 MPa to 35 MPa. Centrifugal configuration; 57 kg/s mass flow, ~90% isentropic efficiency.",
    role: "Compression",
    reportSection: "2.4 Compressor",
    reportHref: "/report#compressor",
    metrics: ["8→35 MPa", "57 kg/s", "η ≈ 0.9"],
  },
  {
    id: "turbine",
    label: "Turbine",
    description:
      "Single-stage radial turbine. Expands sCO₂ from 35 MPa to 8 MPa at 750 °C TIT; extracts ~12.6 MW, net cycle ~10.1 MWe.",
    role: "Power extraction",
    reportSection: "2.6 Turbine",
    reportHref: "/report#turbine",
    metrics: ["35→8 MPa", "750 °C TIT", "~10.1 MWe net"],
  },
  {
    id: "recuperator",
    label: "Recuperator",
    description:
      "Counterflow PCHE. Recovers heat from turbine exhaust to preheat compressed sCO₂; ~95% effectiveness, NTU ≈ 5.",
    role: "Heat recovery",
    reportSection: "2.8 Recuperator",
    reportHref: "/report#recuperator",
    metrics: ["~95% effectiveness", "NTU ≈ 5"],
  },
  {
    id: "hx2stage1",
    label: "HX2 Stage 1",
    description:
      "First stage of air-cooled heat rejection. Cools sCO₂; outlet air at ~125 °C is bled for MOF regeneration.",
    role: "Heat rejection + MOF heat source",
    reportSection: "2.7 Heat Exchanger 2",
    reportHref: "/report#hx2",
    metrics: ["~102 kg/s air", "125 °C bleed"],
  },
  {
    id: "hx2stage2",
    label: "HX2 Stage 2",
    description:
      "Second stage of air-cooled heat rejection. Two-stage finned-tube design; water-independent cooling.",
    role: "Heat rejection",
    reportSection: "2.7 Heat Exchanger 2",
    reportHref: "/report#hx2",
    metrics: ["~122 kg/s air", "UA 72.8 + 134.3 kW/K"],
  },
  {
    id: "mofbedA",
    label: "MOF Bed A",
    description:
      "Metal-organic framework bed for direct air capture. Adsorbs CO₂ from air; when saturated, flow switches to Bed B and this bed is regenerated with waste heat from HX2.",
    role: "CO₂ capture (DAC)",
    reportSection: "3. CO₂ Capture",
    reportHref: "/report#co2-capture",
    metrics: ["~25% capture per pass", "TVSA regeneration"],
  },
  {
    id: "mofbedB",
    label: "MOF Bed B",
    description:
      "Second MOF bed; operates in alternation with Bed A. One bed adsorbs while the other is regenerated with hot air from HX2 Stage 1.",
    role: "CO₂ capture (DAC)",
    reportSection: "3. CO₂ Capture",
    reportHref: "/report#co2-capture",
    metrics: ["1100 t-CO₂/year", "~2 kPa pressure drop"],
  },
];

export const SYSTEM_EDGES: SystemEdge[] = [
  { from: "httr", to: "hx1" },
  { from: "hx1", to: "turbine" },
  { from: "compressor", to: "recuperator" },
  { from: "recuperator", to: "hx1" },
  { from: "turbine", to: "recuperator" },
  { from: "recuperator", to: "hx2stage1" },
  { from: "hx2stage1", to: "hx2stage2" },
  { from: "hx2stage2", to: "compressor" },
  { from: "mofbedA", to: "hx2stage1" },
  { from: "mofbedB", to: "hx2stage1" },
];

export function getNode(id: NodeId): SystemNode | undefined {
  return SYSTEM_NODES.find((n) => n.id === id);
}

export function getConnectedEdges(nodeId: NodeId): SystemEdge[] {
  return SYSTEM_EDGES.filter((e) => e.from === nodeId || e.to === nodeId);
}

/** Which system/path each edge belongs to (matches PDF diagram) */
export type FlowPathId = "sco2" | "heat" | "air";

export const FLOW_PATHS: Record<FlowPathId, { label: string; edgeKeys: string[] }> = {
  sco2: {
    label: "sCO₂ Brayton loop",
    edgeKeys: [
      "compressor-recuperator",
      "recuperator-hx1",
      "hx1-turbine",
      "turbine-recuperator",
      "recuperator-hx2stage1",
      "hx2stage1-hx2stage2",
      "hx2stage2-compressor",
    ],
  },
  heat: {
    label: "Heat (HTTR → HX1)",
    edgeKeys: ["httr-hx1"],
  },
  air: {
    label: "Air (MOF → HX2)",
    edgeKeys: ["mofbedA-hx2stage1", "mofbedB-hx2stage1"],
  },
};

export function edgeKey(from: NodeId, to: NodeId): string {
  return `${from}-${to}`;
}

export function getPathForEdge(from: NodeId, to: NodeId): FlowPathId | null {
  const key = edgeKey(from, to);
  for (const [pathId, { edgeKeys }] of Object.entries(FLOW_PATHS) as [FlowPathId, { edgeKeys: string[] }][]) {
    if (edgeKeys.includes(key)) return pathId;
  }
  return null;
}

/** Brayton loop order for flow animation (sCO₂ path) */
export const BRAYTON_LOOP_ORDER: NodeId[] = [
  "compressor",
  "recuperator",
  "hx1",
  "turbine",
  "recuperator",
  "hx2stage1",
  "hx2stage2",
  "compressor",
];

/** Which path(s) a node belongs to (for path highlighting when selected) */
export function getPathsForNode(nodeId: NodeId): FlowPathId[] {
  const paths: FlowPathId[] = [];
  if (["compressor", "recuperator", "hx1", "turbine", "hx2stage1", "hx2stage2"].includes(nodeId)) paths.push("sco2");
  if (["httr", "hx1"].includes(nodeId)) paths.push("heat");
  if (["mofbedA", "mofbedB", "hx2stage1"].includes(nodeId)) paths.push("air");
  return paths;
}

export function getEdgeKeysHighlightedForNode(nodeId: NodeId): Set<string> {
  const pathIds = getPathsForNode(nodeId);
  const keys = new Set<string>();
  for (const id of pathIds) {
    for (const k of FLOW_PATHS[id].edgeKeys) keys.add(k);
  }
  return keys;
}

/** High-level structured description of the integrated system (for docs / UI helpers) */
export const INTEGRATED_SYSTEM_MODEL = {
  system_name: "Integrated_sCO2_Power_and_MOF_Carbon_Capture_System",
  subsystems: {
    supercritical_CO2_cycle: {
      type: "closed_brayton_cycle",
      working_fluid: "supercritical_CO2",
      components: [
        {
          id: 1,
          name: "Compressor",
          function: "Compresses low-temperature sCO₂ from state 4/2 back up to high pressure (state 1).",
          inlet_state: 4,
          outlet_state: 1,
          flow_direction: "clockwise_bottom_edge",
        },
        {
          id: 2,
          name: "Heater_HX1",
          maps_to_node: "hx1" as NodeId,
          function: "Transfers heat from helium reactor loop to the sCO₂ loop (state 2 → 3).",
          heat_input: "Q_from_reactor",
          inlet_state: 2,
          outlet_state: 3,
        },
        {
          id: 3,
          name: "Turbine",
          maps_to_node: "turbine" as NodeId,
          function: "Expands hot high-pressure sCO₂ from state 3 → 4 to produce shaft work.",
          inlet_state: 3,
          outlet_state: 4,
          flow_direction: "clockwise_right_edge",
        },
        {
          id: 4,
          name: "Recuperator",
          maps_to_node: "recuperator" as NodeId,
          type: "counterflow_heat_exchanger",
          function:
            "Transfers heat from turbine exhaust (state 4) to the compressed sCO₂ stream (state 1 → 2) to improve cycle efficiency.",
          streams: {
            hot_stream: {
              source: "turbine_outlet_state_4",
              destination: "cooler_HX2_inlet",
              direction: "turbine→recuperator→HX2",
              edges: ["turbine-recuperator", "recuperator-hx2stage1"],
            },
            cold_stream: {
              source: "compressor_outlet_state_1",
              destination: "heater_HX1_inlet_state_2",
              direction: "compressor→recuperator→HX1",
              edges: ["compressor-recuperator", "recuperator-hx1"],
            },
          },
        },
        {
          id: 5,
          name: "Cooler_HX2",
          function:
            "Rejects remaining heat from the sCO₂ cycle to ambient air; supplies hot air for MOF regeneration and warm air for adsorption control.",
          subcomponents: [
            {
              name: "HX2A",
              maps_to_node: "hx2stage1" as NodeId,
              function:
                "First air-cooled stage. Receives sCO₂ from the recuperator and rejects heat to a hot air stream (~125 °C) used for MOF regeneration.",
              sCO2_path_edges: ["recuperator-hx2stage1"],
              air_role: "HX2A_hot_air_regeneration_stream",
            },
            {
              name: "HX2B",
              maps_to_node: "hx2stage2" as NodeId,
              function:
                "Second air-cooled stage. Further cools sCO₂ before it returns to the compressor, using a cooler air stream (~35–45 °C).",
              sCO2_path_edges: ["hx2stage1-hx2stage2", "hx2stage2-compressor"],
              air_role: "HX2B_warm_air_adsorption_control",
            },
          ],
        },
      ],
      state_points: {
        1: "Compressor outlet (high pressure, after cooling in HX2B)",
        2: "Compressor inlet to HX1 path (after heating in recuperator cold side)",
        3: "Turbine inlet (after Heater_HX1)",
        4: "Turbine outlet (before recuperator hot side)",
      },
    },
    helium_reactor_loop: {
      type: "closed_loop",
      working_fluid: "helium",
      component: {
        name: "Reactor_HTTR",
        maps_to_node: "httr" as NodeId,
        function: "Provides thermal energy via a helium loop to Heater_HX1.",
      },
      heat_transfer: {
        to: "Heater_HX1",
        label: "Q (HTTR → HX1)",
        edge_keys: ["httr-hx1"],
      },
    },
    carbon_capture_system: {
      type: "MOF_temperature_swing_adsorption",
      components: [
        {
          name: "MOF_Bed_1",
          maps_to_node: "mofbedA" as NodeId,
          function: "Alternates between CO₂ adsorption and regeneration using hot air from HX2A.",
        },
        {
          name: "MOF_Bed_2",
          maps_to_node: "mofbedB" as NodeId,
          function:
            "Operates in opposite phase to MOF_Bed_1 so that one bed adsorbs while the other regenerates, enabling continuous capture.",
        },
      ],
      air_streams: {
        adsorption_mode: {
          inlet: "ambient_air_with_CO2",
          outlet: "air_with_reduced_CO2",
          temperature: "approx_45C (conditioned via HX2B / site ambient)",
        },
        regeneration_mode: {
          heating_source: "HX2A_hot_air_stream (~125C)",
          connections: {
            from_hx2A_to_mof_beds_edges: ["mofbedA-hx2stage1", "mofbedB-hx2stage1"],
          },
          result: "CO2_rich_offgas_stream_for_compression_and_storage",
        },
      },
    },
  },
  integration_logic: {
    power_generation: "Helium-cooled HTTR heats sCO₂ in HX1; sCO₂ expands through the turbine to generate electrical power.",
    heat_recovery:
      "The recuperator transfers heat from turbine exhaust (state 4) to the compressed stream (state 1→2), increasing Brayton cycle efficiency.",
    waste_heat_utilization:
      "Downstream waste heat in HX2A produces a ~125 °C air stream that drives MOF bed regeneration; remaining heat is rejected in HX2B.",
    continuous_capture:
      "Two MOF beds (A and B) operate in alternating adsorption/regeneration cycles, providing effectively continuous direct air capture.",
  },
} as const;

