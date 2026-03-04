"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line } from "@react-three/drei";
import * as THREE from "three";
import type { NodeId } from "@/lib/systemModel";
import type { FlowPathId } from "@/lib/systemModel";
import {
  SYSTEM_NODES,
  SYSTEM_EDGES,
  getPathForEdge,
  edgeKey,
  getEdgeKeysHighlightedForNode,
  FLOW_PATHS,
  BRAYTON_LOOP_ORDER,
} from "@/lib/systemModel";

/* Brayton cycle + MOF diagram layout (sCO2 loop + heat source + air/DAC path)
   Flow: Compressor → Recup → HX1 ← HTTR; HX1 → Turbine → Recup → HX2.1 → HX2.2 → Compressor
   Air: MOF A/B → HX2 (air side) */
const NODE_POSITIONS: Record<NodeId, [number, number, number]> = {
  // Brayton cycle arranged in a square loop
  compressor: [-1.2, -1.2, 0],
  recuperator: [-1.2, 1.2, 0],
  hx1: [1.2, 1.2, 0],
  turbine: [1.2, 0, 0],
  hx2stage1: [1.2, -1.2, 0],
  hx2stage2: [0, -1.2, 0],
  // HTTR sits above HX1 as external heat source
  httr: [1.2, 2.0, 0],
  // MOF beds sit in front/behind near HX2 Stage 1 for the air path
  mofbedA: [1.2, -0.2, 0.9],
  mofbedB: [1.2, -0.2, -0.9],
};

const SCHEMATIC_COLORS: Record<string, string> = {
  httr: "#b91c1c",
  hx1: "#c2410c",
  compressor: "#1e40af",
  turbine: "#6d28d9",
  recuperator: "#0e7490",
  hx2stage1: "#15803d",
  hx2stage2: "#15803d",
  mofbedA: "#a16207",
  mofbedB: "#a16207",
};

const PATH_COLORS: Record<FlowPathId, string> = {
  sco2: "#c9b896",
  heat: "#f97316",
  air: "#14b8a6",
};

interface SystemSceneProps {
  selectedId: NodeId | null;
  onSelect: (id: NodeId | null) => void;
  realisticMode: boolean;
  showFlowMode: boolean;
}

/* Reactor: tall cylinder (containment vessel) */
function ReactorShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.22, 0.28, 0.7, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000"}
          emissiveIntensity={selected ? 0.25 : 0}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0, 0.38, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.08, 24]} />
        <meshStandardMaterial color="#1e293b" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

/* Heat exchanger: flat rectangular block (PCHE style) */
function HXBlockShape({
  color,
  selected,
  width = 0.5,
  height = 0.28,
  depth = 0.35,
}: {
  color: string;
  selected: boolean;
  width?: number;
  height?: number;
  depth?: number;
}) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[width, height, depth]} />
      <meshStandardMaterial
        color={color}
        emissive={selected ? color : "#000"}
        emissiveIntensity={selected ? 0.25 : 0}
        metalness={0.4}
        roughness={0.5}
      />
    </mesh>
  );
}

/* Turbine: radial turbine – short cylinder with disc (impeller) */
function TurbineShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.28, 0.32, 0.4, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000"}
          emissiveIntensity={selected ? 0.25 : 0}
          metalness={0.6}
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.26, 0.26, 0.06, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.7} roughness={0.3} />
      </mesh>
    </group>
  );
}

/* Compressor: centrifugal – tapered cylinder */
function CompressorShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.24, 0.28, 0.45, 24]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000"}
          emissiveIntensity={selected ? 0.25 : 0}
          metalness={0.5}
          roughness={0.5}
        />
      </mesh>
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        <meshStandardMaterial color="#334155" metalness={0.6} roughness={0.4} />
      </mesh>
    </group>
  );
}

/* Recuperator: long flat block (counterflow PCHE) */
function RecuperatorShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[0.35, 0.5, 0.22]} />
      <meshStandardMaterial
        color={color}
        emissive={selected ? color : "#000"}
        emissiveIntensity={selected ? 0.25 : 0}
        metalness={0.4}
        roughness={0.5}
      />
    </mesh>
  );
}

/* Air-cooled HX: wider, flatter (finned-tube ACC) */
function AirCooledHXShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <mesh castShadow receiveShadow>
      <boxGeometry args={[0.4, 0.2, 0.5]} />
      <meshStandardMaterial
        color={color}
        emissive={selected ? color : "#000"}
        emissiveIntensity={selected ? 0.25 : 0}
        metalness={0.35}
        roughness={0.55}
      />
    </mesh>
  );
}

/* MOF bed: vertical vessel (fixed bed) */
function MOFBedShape({ color, selected }: { color: string; selected: boolean }) {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[0.18, 0.2, 0.55, 20]} />
        <meshStandardMaterial
          color={color}
          emissive={selected ? color : "#000"}
          emissiveIntensity={selected ? 0.25 : 0}
          metalness={0.3}
          roughness={0.6}
        />
      </mesh>
    </group>
  );
}

function NodeMesh({
  id,
  position,
  selected,
  onClick,
  onPointerOver,
  onPointerOut,
}: {
  id: NodeId;
  position: [number, number, number];
  selected: boolean;
  onClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const color = SCHEMATIC_COLORS[id] ?? "#64748b";
  const scale = selected ? 1.08 : 1;

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), delta * 4);
    }
  });

  const label = SYSTEM_NODES.find((n) => n.id === id)?.label ?? id;
  const isReactor = id === "httr";
  const isTurbine = id === "turbine";
  const isCompressor = id === "compressor";
  const isRecup = id === "recuperator";
  const isHX1 = id === "hx1";
  const isHX2 = id === "hx2stage1" || id === "hx2stage2";
  const isMOF = id === "mofbedA" || id === "mofbedB";

  const labelOffset = isReactor ? 0.7 : isTurbine || isCompressor ? 0.45 : isMOF ? 0.5 : 0.4;

  return (
    <group
      ref={groupRef}
      position={position}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        document.body.style.cursor = "pointer";
        onPointerOver();
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
        onPointerOut();
      }}
    >
      {isReactor && <ReactorShape color={color} selected={selected} />}
      {isHX1 && (
        <HXBlockShape color={color} selected={selected} width={0.5} height={0.26} depth={0.4} />
      )}
      {isTurbine && <TurbineShape color={color} selected={selected} />}
      {isCompressor && <CompressorShape color={color} selected={selected} />}
      {isRecup && <RecuperatorShape color={color} selected={selected} />}
      {isHX2 && <AirCooledHXShape color={color} selected={selected} />}
      {isMOF && <MOFBedShape color={color} selected={selected} />}
      <Text
        position={[0, labelOffset, 0]}
        fontSize={0.16}
        anchorX="center"
        anchorY="middle"
        color="#ffffff"
        outlineWidth={0.02}
        outlineColor="#020617"
      >
        {label}
      </Text>
    </group>
  );
}

function FlowLine({
  fromId,
  toId,
  highlighted,
  pathColor,
  showParticle,
}: {
  fromId: NodeId;
  toId: NodeId;
  highlighted: boolean;
  pathColor: string | null;
  showParticle: boolean;
}) {
  const from = NODE_POSITIONS[fromId];
  const to = NODE_POSITIONS[toId];
  const points = useMemo(
    () => [new THREE.Vector3(...from), new THREE.Vector3(...to)],
    [from, to]
  );
  const lineColor = highlighted ? "#e5dcc8" : pathColor ?? "#475569";
  const lineWidth = highlighted ? 3 : pathColor ? 2 : 1.5;
  return (
    <group>
      <Line points={points} color={lineColor} lineWidth={lineWidth} />
      <FlowParticle from={from} to={to} visible={highlighted || showParticle} color={pathColor ?? "#c9b896"} />
    </group>
  );
}

function FlowParticle({
  from,
  to,
  visible,
  color = "#c9b896",
}: {
  from: [number, number, number];
  to: [number, number, number];
  visible: boolean;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const start = useMemo(() => new THREE.Vector3(...from), [from]);
  const end = useMemo(() => new THREE.Vector3(...to), [to]);
  useFrame(() => {
    if (!ref.current || !visible) return;
    const t = (performance.now() * 0.0003) % 1;
    ref.current.position.lerpVectors(start, end, t);
  });
  if (!visible) return null;
  return (
    <mesh ref={ref} position={[...from]}>
      <sphereGeometry args={[0.035, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/** One particle traveling the full Brayton loop in order */
function BraytonLoopParticle() {
  const ref = useRef<THREE.Mesh>(null);
  const positions = useMemo(
    () => BRAYTON_LOOP_ORDER.map((id) => new THREE.Vector3(...NODE_POSITIONS[id])),
    []
  );
  useFrame(() => {
    if (!ref.current || positions.length < 2) return;
    const totalDuration = 12;
    const t = (performance.now() * 0.001 / totalDuration) % 1;
    const seg = (positions.length - 1) * t;
    const i = Math.min(Math.floor(seg), positions.length - 2);
    const localT = seg - i;
    ref.current.position.lerpVectors(positions[i], positions[i + 1], localT);
  });
  return (
    <mesh ref={ref} position={[...NODE_POSITIONS.compressor]}>
      <sphereGeometry args={[0.045, 8, 8]} />
      <meshBasicMaterial color={PATH_COLORS.sco2} />
    </mesh>
  );
}

export function SystemScene({
  selectedId,
  onSelect,
  showFlowMode,
}: SystemSceneProps) {
  const highlightedEdgeKeys = useMemo(() => {
    if (!selectedId) return new Set<string>();
    return getEdgeKeysHighlightedForNode(selectedId);
  }, [selectedId]);

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 4]} intensity={1} castShadow />
      <directionalLight position={[-2, 2, -2]} intensity={0.35} />
      <OrbitControls
        enablePan
        enableZoom
        enableRotate
        minDistance={3}
        maxDistance={14}
        target={[-0.3, 0, 0]}
      />
      {SYSTEM_NODES.map((node) => (
        <NodeMesh
          key={node.id}
          id={node.id}
          position={NODE_POSITIONS[node.id]}
          selected={selectedId === node.id}
          onClick={() => onSelect(selectedId === node.id ? null : node.id)}
          onPointerOver={() => {}}
          onPointerOut={() => {}}
        />
      ))}
      {SYSTEM_EDGES.map((edge) => {
        const key = edgeKey(edge.from, edge.to);
        const pathId = getPathForEdge(edge.from, edge.to);
        const pathColor = showFlowMode && pathId ? PATH_COLORS[pathId] : null;
        const highlighted = highlightedEdgeKeys.has(key);
        const showParticle =
          (showFlowMode && (pathId === "heat" || pathId === "air")) ||
          (highlighted && (!showFlowMode || pathId !== "sco2"));
        return (
          <FlowLine
            key={key}
            fromId={edge.from}
            toId={edge.to}
            highlighted={highlighted}
            pathColor={pathColor}
            showParticle={showParticle}
          />
        );
      })}
      {showFlowMode && <BraytonLoopParticle />}
    </>
  );
}
