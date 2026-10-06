import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, Html } from '@react-three/drei';
import * as THREE from 'three';
import { usePortfolio } from '../../context/PortfolioContext';

export const FloatingRoomScene: React.FC<{ position?: [number, number, number] }> = ({ position = [0, 0, 0] }) => {
  const { setCursorType, playHover } = usePortfolio();
  const groupRef = useRef<THREE.Group>(null!);
  const screenLightRef = useRef<THREE.PointLight>(null!);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time * 0.3) * 0.1;
      groupRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.15;
    }
    if (screenLightRef.current) {
      screenLightRef.current.intensity = 1.5 + Math.sin(time * 3) * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Platform Desk Base */}
      <mesh position={[0, -0.6, 0]} receiveShadow>
        <boxGeometry args={[4.2, 0.15, 2.4]} />
        <meshPhysicalMaterial
          color="#0f172a"
          roughness={0.2}
          metalness={0.8}
          clearcoat={0.6}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Desk Metallic Support Legs */}
      <mesh position={[-1.9, -1.3, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.2]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[1.9, -1.3, 0]}>
        <cylinderGeometry args={[0.04, 0.04, 1.2]} />
        <meshStandardMaterial color="#334155" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Developer Laptop */}
      <group
        position={[0, -0.45, 0.2]}
        onPointerOver={(e) => { e.stopPropagation(); setCursorType('hover'); playHover(); setActiveItem('Laptop — M3 Max & Neovim Setup'); }}
        onPointerOut={() => { setCursorType('default'); setActiveItem(null); }}
      >
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.1, 0.03, 0.75]} />
          <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Laptop Screen Lid */}
        <group position={[0, 0.015, -0.37]} rotation={[-0.3, 0, 0]}>
          <mesh position={[0, 0.38, 0]}>
            <boxGeometry args={[1.1, 0.72, 0.02]} />
            <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
          </mesh>
          {/* Glowing Code Screen */}
          <mesh position={[0, 0.38, 0.012]}>
            <planeGeometry args={[1.04, 0.66]} />
            <meshBasicMaterial color="#030712" />
          </mesh>
          {/* Code Text Content */}
          <Text
            position={[-0.46, 0.62, 0.015]}
            fontSize={0.032}
            color="#38bdf8"
            anchorX="left"
            anchorY="top"
            font="monospace"
          >
            {`import { AIArchitect } from '@hasish/core';\n\nconst agent = new AIArchitect({\n  craft: 'obsessive',\n  vision: 'reality',\n  speed: 'lightning'\n});\n\nawait agent.transformWorld();`}
          </Text>
          <pointLight ref={screenLightRef} position={[0, 0.38, 0.2]} color="#38bdf8" distance={2.5} />
        </group>
      </group>

      {/* Coffee Mug */}
      <group
        position={[1.3, -0.4, 0.4]}
        onPointerOver={(e) => { e.stopPropagation(); setCursorType('hover'); playHover(); setActiveItem('Espresso — Fueling late night AI builds'); }}
        onPointerOut={() => { setCursorType('default'); setActiveItem(null); }}
      >
        <mesh>
          <cylinderGeometry args={[0.12, 0.1, 0.28, 32]} />
          <meshStandardMaterial color="#1e293b" roughness={0.3} />
        </mesh>
        {/* Liquid Coffee */}
        <mesh position={[0, 0.12, 0]}>
          <cylinderGeometry args={[0.11, 0.11, 0.02, 32]} />
          <meshStandardMaterial color="#451a03" roughness={0.1} />
        </mesh>
      </group>

      {/* Leather Notebook */}
      <group
        position={[-1.2, -0.5, 0.3]}
        rotation={[0, 0.2, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setCursorType('hover'); playHover(); setActiveItem('Notebook — First Principles & System Sketches'); }}
        onPointerOut={() => { setCursorType('default'); setActiveItem(null); }}
      >
        <mesh>
          <boxGeometry args={[0.65, 0.04, 0.85]} />
          <meshStandardMaterial color="#78350f" roughness={0.7} />
        </mesh>
      </group>

      {/* Studio Headphones */}
      <group
        position={[-1.4, -0.45, -0.5]}
        rotation={[0, -0.4, 0]}
        onPointerOver={(e) => { e.stopPropagation(); setCursorType('hover'); playHover(); setActiveItem('Headphones — Deep Focus Synthwave'); }}
        onPointerOut={() => { setCursorType('default'); setActiveItem(null); }}
      >
        <mesh>
          <torusGeometry args={[0.22, 0.03, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#020617" roughness={0.2} metalness={0.9} />
        </mesh>
      </group>

      {/* Minimal Potted Plant */}
      <group position={[1.5, -0.35, -0.5]}>
        <mesh>
          <cylinderGeometry args={[0.16, 0.12, 0.35, 16]} />
          <meshStandardMaterial color="#334155" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.3, 0]}>
          <sphereGeometry args={[0.25, 8, 8]} />
          <meshStandardMaterial color="#10b981" roughness={0.8} />
        </mesh>
      </group>

      {/* Projected Holographic GitHub Feed Wall Behind Desk */}
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <group position={[0, 1.4, -1.2]}>
          {/* Glass Wall Surface */}
          <mesh>
            <planeGeometry args={[4.8, 2.2]} />
            <meshPhysicalMaterial
              color="#020617"
              transparent
              opacity={0.65}
              roughness={0.1}
              metalness={0.5}
              transmission={0.6}
            />
          </mesh>
          <Text
            position={[-2.2, 0.8, 0.02]}
            fontSize={0.11}
            color="#38bdf8"
            anchorX="left"
            font="monospace"
          >
            SYSTEM TELEMETRY // HASISH INFANT
          </Text>
          <Text
            position={[-2.2, 0.5, 0.02]}
            fontSize={0.075}
            color="#94a3b8"
            anchorX="left"
            font="monospace"
          >
            {`> GitHub Contributions: 1,420+ commits in 2026\n> Pinned: OPUS (Multi-Agent) | OpportunX AI (12k Users)\n> Core Languages: TypeScript • Python • Rust • GLSL\n> System Status: 100% Operational • Building in Public`}
          </Text>

          {/* Interactive Item Tooltip Popup */}
          {activeItem && (
            <Html position={[0, -0.9, 0.2]} center>
              <div className="px-4 py-2 rounded-full glass-panel border border-cyan-500/50 text-cyan-300 text-xs font-mono whitespace-nowrap shadow-[0_0_20px_rgba(56,189,248,0.4)] animate-fade-in">
                ✦ {activeItem}
              </div>
            </Html>
          )}
        </group>
      </Float>
    </group>
  );
};
