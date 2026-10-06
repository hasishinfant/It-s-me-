import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS, type SkillItem } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';

const SkillHologramItem: React.FC<{
  skill: SkillItem;
  position: [number, number, number];
  index: number;
}> = ({ skill, position, index }) => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * (hovered ? 1.2 : 0.4);
      meshRef.current.rotation.y += delta * (hovered ? 1.5 : 0.5);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5} position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => { e.stopPropagation(); setHovered(true); setCursorType('hover'); playHover(); }}
        onPointerOut={() => { setHovered(false); setCursorType('default'); }}
        onClick={(e) => { e.stopPropagation(); playClick(); }}
      >
        {index % 3 === 0 ? (
          <icosahedronGeometry args={[0.65, 0]} />
        ) : index % 3 === 1 ? (
          <octahedronGeometry args={[0.65, 0]} />
        ) : (
          <dodecahedronGeometry args={[0.65, 0]} />
        )}
        <meshPhysicalMaterial
          color={skill.color}
          wireframe={!hovered}
          roughness={0.1}
          metalness={0.9}
          transmission={0.8}
          thickness={0.5}
          emissive={skill.color}
          emissiveIntensity={hovered ? 0.8 : 0.25}
        />
      </mesh>

      <Text
        position={[0, -0.95, 0]}
        fontSize={0.18}
        color={hovered ? "#38bdf8" : "#ffffff"}
        anchorX="center"
        anchorY="top"
        font="monospace"
      >
        {skill.name}
      </Text>

      {hovered && (
        <Html position={[0, 1.1, 0]} center pointerEvents="none">
          <div className="px-3 py-2 rounded-lg glass-panel border border-cyan-500/50 text-slate-100 text-xs font-mono w-48 shadow-2xl">
            <div className="text-cyan-400 font-bold mb-1">{skill.name}</div>
            <div className="text-[10px] text-slate-400">Exp: {skill.experienceYears} • Mastery: {skill.level}%</div>
            <div className="mt-1 flex flex-wrap gap-1">
              {skill.favoriteFeatures.slice(0, 2).map((feat, fIdx) => (
                <span key={fIdx} className="px-1.5 py-0.5 rounded bg-slate-800 text-[9px] text-cyan-300">
                  {feat}
                </span>
              ))}
            </div>
          </div>
        </Html>
      )}
    </Float>
  );
};

export const HologramSkillsScene: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const positions: [number, number, number][] = [
    [-3.5, 1.2, 0],
    [-1.2, 1.4, 1],
    [1.2, 1.4, 1],
    [3.5, 1.2, 0],
    [-3.5, -1.2, 0],
    [-1.2, -1.4, 1],
    [1.2, -1.4, 1],
    [3.5, -1.2, 0]
  ];

  return (
    <group position={position}>
      {SKILLS.map((skill, index) => (
        <SkillHologramItem
          key={skill.id}
          skill={skill}
          position={positions[index % positions.length]}
          index={index}
        />
      ))}
    </group>
  );
};
