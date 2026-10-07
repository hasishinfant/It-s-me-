import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Line } from '@react-three/drei';
import * as THREE from 'three';

interface ArchNode {
  id: string;
  label: string;
  sublabel: string;
  position: [number, number, number];
  connections: string[];
  tech: string;
  latency: string;
}

const ARCH_NODES: ArchNode[] = [
  {
    id: 'user',
    label: 'USER',
    sublabel: 'Human Intent',
    position: [-3.2, 1.2, 0],
    connections: ['voice', 'visual-interface'],
    tech: 'Natural Voice & Keybinds',
    latency: '0ms'
  },
  {
    id: 'voice',
    label: 'VOICE',
    sublabel: 'Audio Stream',
    position: [-1.8, 1.6, 0.6],
    connections: ['ai-model'],
    tech: 'WebAudio API + VAD Stream',
    latency: '45ms'
  },
  {
    id: 'ai-model',
    label: 'AI MODEL',
    sublabel: 'Gemini Intent',
    position: [0, 1.8, -0.4],
    connections: ['orchestrator'],
    tech: 'Gemini 1.5 Flash / Pro',
    latency: '180ms'
  },
  {
    id: 'orchestrator',
    label: 'ORCHESTRATOR',
    sublabel: 'DAG State Machine',
    position: [0, -0.2, 0.4],
    connections: ['tools', 'visual-interface'],
    tech: 'Deterministic Task Graph',
    latency: '12ms'
  },
  {
    id: 'tools',
    label: 'TOOLS',
    sublabel: 'Execution Agents',
    position: [1.8, -1.2, 0.2],
    connections: ['macos'],
    tech: 'Sandboxed Tool Callers',
    latency: '35ms'
  },
  {
    id: 'macos',
    label: 'MACOS',
    sublabel: 'Native System Bridge',
    position: [3.4, -1.0, -0.5],
    connections: ['visual-interface'],
    tech: 'AppleScript / Swift CLI Bridge',
    latency: '60ms'
  },
  {
    id: 'visual-interface',
    label: 'VISUAL INTERFACE',
    sublabel: '3D Orbital Telemetry',
    position: [0.8, 0.8, -1.0],
    connections: ['user'],
    tech: 'Three.js / React Three Fiber',
    latency: '16ms (60 FPS)'
  }
];

interface GraphSceneProps {
  activeNodeId: string | null;
  onHoverNode: (node: ArchNode | null) => void;
  pointer: { x: number; y: number };
}

const GraphScene: React.FC<GraphSceneProps> = ({ activeNodeId, onHoverNode, pointer }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Generate connection line coordinates
  const edges = useMemo(() => {
    const list: { from: [number, number, number]; to: [number, number, number]; fromId: string; toId: string }[] = [];
    ARCH_NODES.forEach((node) => {
      node.connections.forEach((targetId) => {
        const target = ARCH_NODES.find((n) => n.id === targetId);
        if (target) {
          list.push({
            from: node.position,
            to: target.position,
            fromId: node.id,
            toId: target.id
          });
        }
      });
    });
    return list;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle camera motion & micro-parallax through architecture space
      const targetRotY = pointer.x * 0.25 + Math.sin(t * 0.2) * 0.05;
      const targetRotX = -pointer.y * 0.2 + Math.cos(t * 0.25) * 0.04;
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, 3, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 3, delta);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Dynamic Connection Lines */}
      {edges.map((edge, idx) => {
        const isHighlighted =
          activeNodeId === edge.fromId || activeNodeId === edge.toId;
        const lineColor = isHighlighted ? '#a855f7' : '#3f3f46';
        const lineWidth = isHighlighted ? 2.5 : 1;

        return (
          <Line
            key={`${edge.fromId}-${edge.toId}-${idx}`}
            points={[edge.from, edge.to]}
            color={lineColor}
            lineWidth={lineWidth}
            transparent
            opacity={isHighlighted ? 0.95 : 0.4}
          />
        );
      })}

      {/* 3D Nodes */}
      {ARCH_NODES.map((node) => {
        const isHovered = activeNodeId === node.id;
        const isConnected =
          activeNodeId !== null &&
          (ARCH_NODES.find((n) => n.id === activeNodeId)?.connections.includes(node.id) ||
            node.connections.includes(activeNodeId));
        const highlighted = isHovered || isConnected;

        return (
          <Float
            key={node.id}
            position={node.position}
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <group
              onPointerOver={(e) => {
                e.stopPropagation();
                onHoverNode(node);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                onHoverNode(null);
              }}
            >
              {/* Central Sphere Node */}
              <mesh scale={isHovered ? 1.35 : highlighted ? 1.15 : 1}>
                <sphereGeometry args={[0.22, 32, 32]} />
                <meshStandardMaterial
                  color={highlighted ? '#c084fc' : '#27272a'}
                  emissive={highlighted ? '#9333ea' : '#09090b'}
                  emissiveIntensity={highlighted ? 0.8 : 0.1}
                  roughness={0.2}
                  metalness={0.8}
                />
              </mesh>

              {/* Pulsing Outer Wireframe Ring */}
              <mesh scale={isHovered ? 1.5 : 1.25}>
                <torusGeometry args={[0.3, 0.015, 16, 48]} />
                <meshBasicMaterial
                  color={highlighted ? '#e9d5ff' : '#52525b'}
                  transparent
                  opacity={highlighted ? 0.9 : 0.3}
                />
              </mesh>

              {/* Node Title Text */}
              <Text
                position={[0, 0.46, 0]}
                fontSize={0.17}
                color={highlighted ? '#ffffff' : '#a1a1aa'}
                anchorX="center"
                anchorY="middle"
                font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mDoQDjQSkFqMM3Js7Jet5-Hg.woff"
              >
                {node.label}
              </Text>

              {/* Node Subtitle Micro-Text */}
              <Text
                position={[0, 0.3, 0]}
                fontSize={0.10}
                color={highlighted ? '#d8b4fe' : '#71717a'}
                anchorX="center"
                anchorY="middle"
              >
                {node.sublabel}
              </Text>
            </group>
          </Float>
        );
      })}
    </group>
  );
};

export const ArchitectureGraph3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeNode, setActiveNode] = useState<ArchNode | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointer({ x, y });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      className={`relative w-full h-[450px] sm:h-[520px] lg:h-[600px] rounded-3xl bg-[#09090b] border border-white/10 overflow-hidden select-none ${className}`}
    >
      {/* Background Subtle Coordinate Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      {/* Top Header Annotations */}
      <div className="absolute top-5 left-6 right-6 z-10 flex items-center justify-between text-xs font-mono pointer-events-none">
        <div className="flex items-center gap-2 text-purple-400">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          <span>INTERACTIVE 3D SYSTEM TOPOLOGY // OPUS</span>
        </div>
        <span className="text-neutral-500 hidden sm:inline">HOVER NODES TO INSPECT DATA BUS</span>
      </div>

      {/* 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5.6], fov: 46 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.5} color="#e4e4e7" />
        <pointLight position={[-6, -4, 4]} intensity={0.9} color="#a855f7" />
        <React.Suspense fallback={null}>
          <GraphScene
            activeNodeId={activeNode?.id || null}
            onHoverNode={setActiveNode}
            pointer={pointer}
          />
        </React.Suspense>
      </Canvas>

      {/* Live Node Telemetry Tooltip Panel */}
      <div className="absolute bottom-5 left-6 right-6 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono">
        <div>
          <span className="text-neutral-500 uppercase">ACTIVE NODE: </span>
          <span className="text-purple-300 font-bold ml-1">
            {activeNode ? activeNode.label : 'ALL SYSTEMS CONNECTED (IDLE)'}
          </span>
          {activeNode && (
            <span className="text-neutral-400 ml-2 hidden sm:inline">— {activeNode.sublabel}</span>
          )}
        </div>

        <div className="flex items-center gap-4 text-[11px] text-neutral-400">
          <div>
            <span className="text-neutral-500">ENGINE: </span>
            <span className="text-white">{activeNode ? activeNode.tech : 'Gemini + Node IPC'}</span>
          </div>
          <div>
            <span className="text-neutral-500">LATENCY: </span>
            <span className="text-emerald-400 font-bold">{activeNode ? activeNode.latency : '&lt; 150ms'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArchitectureGraph3D;
