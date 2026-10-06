import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const LoopSculpture: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.4) * 0.3;
      meshRef.current.rotation.y += delta * 0.4;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.2;
      ringRef.current.rotation.x = Math.cos(t * 0.5) * 0.25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[0.8, 0.26, 100, 24, 2, 3]} />
          <meshPhysicalMaterial
            color="#1c1c20"
            roughness={0.25}
            metalness={0.15}
            clearcoat={0.9}
            clearcoatRoughness={0.15}
            transmission={0.05}
            ior={1.5}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef}>
        <torusGeometry args={[1.35, 0.02, 24, 80]} />
        <meshPhysicalMaterial color="#4c1d95" metalness={0.8} roughness={0.2} clearcoat={1} />
      </mesh>

      <ContactShadows position={[0, -1.35, 0]} opacity={0.3} scale={3.8} blur={1.6} far={2.2} color="#15121e" />
    </group>
  );
};

export const OutroIdentity3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] select-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 3.6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 6]} intensity={1.8} color="#ffffff" />
        <directionalLight position={[-5, -4, -4]} intensity={0.6} color="#c084fc" />
        <pointLight position={[0, -2, 3]} intensity={0.5} color="#38bdf8" />
        <React.Suspense fallback={null}>
          <LoopSculpture />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default OutroIdentity3D;
