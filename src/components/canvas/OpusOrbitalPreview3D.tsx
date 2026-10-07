import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

interface OrbitalNode {
  id: string;
  name: string;
  orbitRadius: number;
  speed: number;
  offset: number;
  tilt: number;
  tech: string;
}

const ORBITAL_NODES: OrbitalNode[] = [
  { id: 'voice', name: 'VOICE INTENT', orbitRadius: 1.8, speed: 0.6, offset: 0, tilt: 0.2, tech: 'Streaming VAD' },
  { id: 'macos', name: 'MACOS BRIDGE', orbitRadius: 2.3, speed: 0.45, offset: 1.8, tilt: -0.3, tech: 'Native IPC' },
  { id: 'agent', name: 'AGENT GRAPH', orbitRadius: 2.0, speed: 0.55, offset: 3.4, tilt: 0.4, tech: 'DAG Executor' },
  { id: 'apps', name: 'APP LAUNCHER', orbitRadius: 2.5, speed: 0.38, offset: 4.8, tilt: -0.2, tech: 'Spotlight Tool' },
];

const OrbitalSystem: React.FC<{ onHoverNode: (n: OrbitalNode | null) => void; hoveredNodeId: string | null }> = ({
  onHoverNode,
  hoveredNodeId,
}) => {
  const centralCoreRef = useRef<THREE.Mesh>(null);
  const nodeRefs = useRef<(THREE.Group | null)[]>([]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (centralCoreRef.current) {
      centralCoreRef.current.rotation.y += delta * 0.4;
      centralCoreRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }

    ORBITAL_NODES.forEach((node, i) => {
      const group = nodeRefs.current[i];
      if (group) {
        const angle = t * node.speed + node.offset;
        group.position.x = Math.cos(angle) * node.orbitRadius;
        group.position.z = Math.sin(angle) * node.orbitRadius;
        group.position.y = Math.sin(angle * 2) * 0.35 + node.tilt;
      }
    });
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Autonomous Core */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={centralCoreRef}>
          <icosahedronGeometry args={[0.65, 2]} />
          <meshStandardMaterial
            color="#9333ea"
            emissive="#581c87"
            emissiveIntensity={0.8}
            roughness={0.15}
            metalness={0.85}
            wireframe={false}
          />
        </mesh>
      </Float>

      {/* Thin Orbital Track Rings */}
      {[1.8, 2.0, 2.3, 2.5].map((radius, idx) => (
        <mesh key={radius} rotation={[Math.PI / 2 + idx * 0.1, 0, idx * 0.2]}>
          <torusGeometry args={[radius, 0.008, 16, 100]} />
          <meshBasicMaterial color="#71717a" transparent opacity={0.25} />
        </mesh>
      ))}

      {/* Orbiting Satellite Operational Nodes */}
      {ORBITAL_NODES.map((node, i) => {
        const isHovered = hoveredNodeId === node.id;
        return (
          <group
            key={node.id}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              onHoverNode(node);
            }}
            onPointerOut={(e) => {
              e.stopPropagation();
              onHoverNode(null);
            }}
          >
            <mesh scale={isHovered ? 1.4 : 1}>
              <sphereGeometry args={[0.16, 24, 24]} />
              <meshStandardMaterial
                color={isHovered ? '#ffffff' : '#e4e4e7'}
                emissive={isHovered ? '#a855f7' : '#3f3f46'}
                emissiveIntensity={isHovered ? 1.2 : 0.2}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>

            <Text
              position={[0, 0.32, 0]}
              fontSize={0.14}
              color={isHovered ? '#f5f3ff' : '#a1a1aa'}
              anchorX="center"
              anchorY="middle"
            >
              {node.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

export const OpusOrbitalPreview3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [hoveredNode, setHoveredNode] = useState<OrbitalNode | null>(null);

  return (
    <div className={`relative w-full h-[320px] sm:h-[380px] rounded-2xl bg-black/60 border border-white/10 overflow-hidden select-none ${className}`}>
      {/* Top Banner Tag */}
      <div className="absolute top-3.5 left-4 right-4 z-10 flex items-center justify-between text-[11px] font-mono text-neutral-400 pointer-events-none">
        <span className="text-purple-400 font-semibold">● 3D ORBITAL CONTROL PLANE</span>
        <span>{hoveredNode ? `${hoveredNode.name} [${hoveredNode.tech}]` : 'AUTONOMOUS CORE IDLE'}</span>
      </div>

      <Canvas camera={{ position: [0, 2.2, 4.2], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[5, 6, 5]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-5, -4, 4]} intensity={0.8} color="#a855f7" />
        <React.Suspense fallback={null}>
          <OrbitalSystem onHoverNode={setHoveredNode} hoveredNodeId={hoveredNode?.id || null} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default OpusOrbitalPreview3D;
