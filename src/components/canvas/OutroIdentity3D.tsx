import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const LoopSculpture: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerGyroRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const satelliteOrbRef = useRef<THREE.Mesh>(null);

  const obsidianMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#141416'),
      roughness: 0.22,
      metalness: 0.12,
      clearcoat: 0.92,
      clearcoatRoughness: 0.12,
      transmission: 0.04,
      ior: 1.52,
      reflectivity: 0.85,
    });
  }, []);

  const liquidChromeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e4e4e7'),
      metalness: 0.96,
      roughness: 0.08,
    });
  }, []);

  const smokedGlassMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#22222a'),
      roughness: 0.1,
      metalness: 0.2,
      transmission: 0.45,
      thickness: 0.8,
      ior: 1.6,
      transparent: true,
      opacity: 0.85,
    });
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.35) * 0.2;
      meshRef.current.rotation.y += delta * 0.35;
    }

    if (outerGyroRef.current) {
      outerGyroRef.current.rotation.z += delta * 0.18;
      outerGyroRef.current.rotation.x = Math.cos(t * 0.4) * 0.2;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.12;
    }

    if (satelliteOrbRef.current) {
      satelliteOrbRef.current.position.x = Math.cos(t * 0.7) * 1.35;
      satelliteOrbRef.current.position.y = Math.sin(t * 0.7) * 0.65;
      satelliteOrbRef.current.position.z = Math.sin(t * 0.7) * 0.75;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Tactile Sculptural Body */}
      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} material={obsidianMaterial} castShadow receiveShadow>
          <torusKnotGeometry args={[0.85, 0.26, 120, 32, 2, 3]} />
        </mesh>
      </Float>

      {/* Orbiting Precision Liquid Chrome Gyro Ring */}
      <mesh ref={outerGyroRef} material={liquidChromeMaterial}>
        <torusGeometry args={[1.48, 0.022, 24, 100]} />
      </mesh>

      {/* Secondary Smoked Translucent Orbit Plane */}
      <mesh ref={innerRingRef} material={smokedGlassMaterial}>
        <torusGeometry args={[1.25, 0.035, 24, 80]} />
      </mesh>

      {/* Satellite Liquid Chrome Sensor Orb */}
      <mesh ref={satelliteOrbRef} material={liquidChromeMaterial}>
        <sphereGeometry args={[0.13, 32, 32]} />
      </mesh>

      {/* Studio Floor Contact Shadow */}
      <ContactShadows
        position={[0, -1.48, 0]}
        opacity={0.38}
        scale={4.2}
        blur={1.8}
        far={2.5}
        color="#08080a"
      />
    </group>
  );
};

export const OutroIdentity3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] select-none ${className}`}>
      <Canvas camera={{ position: [0, 0, 3.8], fov: 40 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.75} />
        <directionalLight position={[6, 9, 6]} intensity={2.0} color="#ffffff" />
        <directionalLight position={[-6, -4, -4]} intensity={0.7} color="#d4d4d8" />
        <pointLight position={[0, -2, 3]} intensity={0.6} color="#e4e4e7" />
        <React.Suspense fallback={null}>
          <LoopSculpture />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default OutroIdentity3D;
