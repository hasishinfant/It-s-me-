import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Html } from '@react-three/drei';
import * as THREE from 'three';
import { PROJECTS, type Project } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';

const SinglePlanet: React.FC<{
  project: Project;
  position: [number, number, number];
  index: number;
}> = ({ project, position, index }) => {
  const { setCursorType, playHover, playClick, setSelectedProject } = usePortfolio();
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (hovered ? 0.8 : 0.2);
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.1;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <group position={position}>
      {/* Planetary Body */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); setCursorType('view'); playHover(); }}
        onPointerOut={() => { setHovered(false); setCursorType('default'); }}
        onClick={(e) => { e.stopPropagation(); playClick(); setSelectedProject(project); }}
      >
        <sphereGeometry args={[0.95, 32, 32]} />
        <meshStandardMaterial
          color={project.planetColor}
          roughness={project.planetTextureType === 'ocean' ? 0.1 : 0.4}
          metalness={project.planetTextureType === 'cyber' ? 0.8 : 0.2}
          emissive={project.planetColor}
          emissiveIntensity={hovered ? 0.6 : 0.15}
        />
      </mesh>

      {/* Planetary Glow Atmosphere Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <ringGeometry args={[1.25, 1.55, 32]} />
        <meshBasicMaterial
          color={project.planetColor}
          side={THREE.DoubleSide}
          transparent
          opacity={hovered ? 0.6 : 0.25}
        />
      </mesh>

      {/* Floating Project Label */}
      <Text
        position={[0, -1.4, 0]}
        fontSize={0.22}
        color={hovered ? "#38bdf8" : "#ffffff"}
        anchorX="center"
        anchorY="top"
        font="monospace"
      >
        {project.name.toUpperCase()}
      </Text>
      <Text
        position={[0, -1.75, 0]}
        fontSize={0.12}
        color="#94a3b8"
        anchorX="center"
        anchorY="top"
        font="sans-serif"
      >
        {project.category}
      </Text>

      {/* Hover Info Badge */}
      {hovered && (
        <Html position={[0, 1.4, 0]} center pointerEvents="none">
          <div className="px-3 py-1.5 rounded-lg glass-panel border border-cyan-500/40 text-cyan-200 text-xs font-mono whitespace-nowrap shadow-xl">
            Click to Zoom & Explore
          </div>
        </Html>
      )}
    </group>
  );
};

export const PlanetsScene: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  const radius = 6.2;
  const projectPositions = PROJECTS.map((_, i) => {
    const angle = (i / PROJECTS.length) * Math.PI * 2;
    return [
      Math.cos(angle) * radius,
      Math.sin(i * 1.5) * 0.6,
      Math.sin(angle) * radius
    ] as [number, number, number];
  });

  return (
    <group ref={groupRef} position={position}>
      {PROJECTS.map((project, i) => (
        <SinglePlanet
          key={project.id}
          project={project}
          position={projectPositions[i]}
          index={i}
        />
      ))}
    </group>
  );
};
