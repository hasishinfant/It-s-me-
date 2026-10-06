import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CursorPointerMesh: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Follow cursor with subtle lag & tilt
      const targetX = mousePos.x * 1.2;
      const targetY = mousePos.y * 0.8;
      groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 5, delta);
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 5, delta);

      const targetRotZ = -mousePos.x * 0.35 + Math.sin(t * 1.5) * 0.08;
      const targetRotX = mousePos.y * 0.35;
      groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 4, delta);
      groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, 4, delta);
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Sleek 3D Pointer / Arrow Geometry */}
        <mesh ref={meshRef} castShadow>
          <coneGeometry args={[0.55, 1.2, 4]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.15}
            metalness={0.8}
            clearcoat={1}
            clearcoatRoughness={0.1}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Subtle Glow Ring */}
      <mesh position={[0, -0.6, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.4, 0.45, 32]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
};

export const InteractiveCursor3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setMousePos({ x, y });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative pointer-events-auto select-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[4, 6, 4]} intensity={2.2} color="#ffffff" />
        <pointLight position={[-3, -3, 2]} intensity={1.2} color="#ec4899" />
        <spotLight position={[0, 4, 2]} intensity={1.5} color="#a855f7" />

        <React.Suspense fallback={null}>
          <CursorPointerMesh mousePos={mousePos} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default InteractiveCursor3D;
