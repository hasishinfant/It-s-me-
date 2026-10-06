import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface IdentitySculptureProps {
  pointer: { x: number; y: number };
}

const IdentitySculpture: React.FC<IdentitySculptureProps> = ({ pointer }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const floatingOrbRef = useRef<THREE.Mesh>(null);

  // Studio material configuration
  const ceramicMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1c1c20'),
      roughness: 0.25,
      metalness: 0.1,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      transmission: 0.05,
      ior: 1.5,
      reflectivity: 0.9,
    });
  }, []);

  const iridescentRingMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#3b2d54'),
      roughness: 0.2,
      metalness: 0.7,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
  }, []);

  const chromeAccentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#e0e0e0'),
      metalness: 0.95,
      roughness: 0.1,
    });
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    if (meshRef.current) {
      // Smooth continuous rotational drift + pointer parallax
      const targetRotX = pointer.y * 0.45 + Math.sin(t * 0.5) * 0.1;
      const targetRotY = pointer.x * 0.6 + t * 0.25;

      meshRef.current.rotation.x = THREE.MathUtils.damp(meshRef.current.rotation.x, targetRotX, 4, delta);
      meshRef.current.rotation.y = THREE.MathUtils.damp(meshRef.current.rotation.y, targetRotY, 4, delta);
    }

    if (outerRingRef.current) {
      const targetRingRotZ = t * 0.15;
      const targetRingRotX = pointer.y * 0.25 + Math.cos(t * 0.4) * 0.15;
      outerRingRef.current.rotation.z = THREE.MathUtils.damp(outerRingRef.current.rotation.z, targetRingRotZ, 3, delta);
      outerRingRef.current.rotation.x = THREE.MathUtils.damp(outerRingRef.current.rotation.x, targetRingRotX, 3, delta);
    }

    if (floatingOrbRef.current) {
      floatingOrbRef.current.position.y = 0.9 + Math.sin(t * 1.5) * 0.12;
      floatingOrbRef.current.position.x = Math.cos(t * 1.2) * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central Tactile Identity Object */}
      <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={meshRef} material={ceramicMaterial} castShadow receiveShadow>
          <torusKnotGeometry args={[0.85, 0.28, 128, 32, 2, 3]} />
        </mesh>
      </Float>

      {/* Orbiting Thin Iridescent Ring */}
      <mesh ref={outerRingRef} material={iridescentRingMaterial}>
        <torusGeometry args={[1.45, 0.025, 24, 100]} />
      </mesh>

      {/* Satellite Chrome Accent Element */}
      <mesh ref={floatingOrbRef} material={chromeAccentMaterial} position={[1.1, 0.9, 0.3]}>
        <sphereGeometry args={[0.16, 32, 32]} />
      </mesh>

      {/* Floor Contact Shadow */}
      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.35}
        scale={4.2}
        blur={1.8}
        far={2.5}
        color="#15121e"
      />
    </group>
  );
};

export const HeroIdentity3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    setPointer({ x, y });
  };

  const handlePointerLeave = () => {
    setPointer({ x: 0, y: 0 });
  };

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] select-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 3.8], fov: 42 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Soft Studio Lighting Rig */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 6]} intensity={1.8} color="#ffffff" castShadow />
        <directionalLight position={[-6, -4, -4]} intensity={0.6} color="#c084fc" />
        <pointLight position={[0, -2, 3]} intensity={0.5} color="#38bdf8" />
        <spotLight position={[3, 5, 2]} intensity={1.0} angle={0.6} penumbra={0.8} color="#ffffff" />

        <React.Suspense fallback={null}>
          <IdentitySculpture pointer={pointer} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default HeroIdentity3D;
