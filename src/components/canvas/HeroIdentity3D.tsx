import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

interface IdentitySculptureProps {
  pointer: { x: number; y: number };
  scrollOffset?: number;
}

const IdentitySculpture: React.FC<IdentitySculptureProps> = ({ pointer, scrollOffset = 0 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const outerGyroRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const satelliteOrbRef = useRef<THREE.Mesh>(null);

  // Studio physical materials: Matte obsidian ceramic + Liquid chrome + Translucent dark smoked glass
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
      envMapIntensity: 1.2,
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

    // Group-level scroll response: rotation + translation
    if (groupRef.current) {
      const scrollRotY = scrollOffset * 1.5;
      const scrollPosY = -scrollOffset * 0.8;
      groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, scrollPosY, 3, delta);
      groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, scrollRotY, 3, delta);
    }

    // Core sculpted body: pointer parallax + subtle continuous rotational drift
    if (coreMeshRef.current) {
      const targetRotX = pointer.y * 0.5 + Math.sin(t * 0.4) * 0.12;
      const targetRotY = pointer.x * 0.7 + t * 0.22;
      coreMeshRef.current.rotation.x = THREE.MathUtils.damp(coreMeshRef.current.rotation.x, targetRotX, 4, delta);
      coreMeshRef.current.rotation.y = THREE.MathUtils.damp(coreMeshRef.current.rotation.y, targetRotY, 4, delta);
    }

    // Outer machined chrome ring: inverted precession
    if (outerGyroRef.current) {
      const gyroRotZ = t * 0.18 + pointer.x * 0.3;
      const gyroRotX = Math.cos(t * 0.35) * 0.18 + pointer.y * 0.2;
      outerGyroRef.current.rotation.z = THREE.MathUtils.damp(outerGyroRef.current.rotation.z, gyroRotZ, 3, delta);
      outerGyroRef.current.rotation.x = THREE.MathUtils.damp(outerGyroRef.current.rotation.x, gyroRotX, 3, delta);
    }

    // Inner smoked ring: slow harmonic wobble
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = -t * 0.15;
      innerRingRef.current.rotation.x = Math.sin(t * 0.5) * 0.2;
    }

    // Satellite chrome sensor orb: subtle orbit
    if (satelliteOrbRef.current) {
      satelliteOrbRef.current.position.x = Math.cos(t * 0.8) * 1.35;
      satelliteOrbRef.current.position.y = Math.sin(t * 0.8) * 0.65 + Math.cos(t * 1.2) * 0.1;
      satelliteOrbRef.current.position.z = Math.sin(t * 0.8) * 0.8;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Tactile Sculptural Body */}
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.35}>
        <mesh ref={coreMeshRef} material={obsidianMaterial} castShadow receiveShadow>
          <torusKnotGeometry args={[0.76, 0.23, 140, 36, 2, 3]} />
        </mesh>
      </Float>

      {/* Orbiting Precision Liquid Chrome Gyro Ring */}
      <mesh ref={outerGyroRef} material={liquidChromeMaterial}>
        <torusGeometry args={[1.36, 0.02, 24, 120]} />
      </mesh>

      {/* Secondary Smoked Translucent Orbit Plane */}
      <mesh ref={innerRingRef} material={smokedGlassMaterial}>
        <torusGeometry args={[1.15, 0.03, 24, 96]} />
      </mesh>

      {/* Satellite Liquid Chrome Sensor Orb */}
      <mesh ref={satelliteOrbRef} material={liquidChromeMaterial}>
        <sphereGeometry args={[0.12, 32, 32]} />
      </mesh>

      {/* Studio Floor Contact Shadow */}
      <ContactShadows
        position={[0, -1.45, 0]}
        opacity={0.35}
        scale={4.2}
        blur={2.0}
        far={2.8}
        color="#08080a"
      />
    </group>
  );
};

export const HeroIdentity3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [pointer, setPointer] = React.useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = React.useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = window.innerHeight;
      const current = Math.min(1, Math.max(0, window.scrollY / (maxScroll || 1)));
      setScrollOffset(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      className={`relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px] select-none ${className}`}
    >
      <Canvas
        camera={{ position: [0, 0, 4.4], fov: 38 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Balanced Studio Lighting Rig */}
        <ambientLight intensity={0.75} />
        <directionalLight position={[6, 9, 6]} intensity={2.0} color="#ffffff" castShadow />
        <directionalLight position={[-6, -4, -4]} intensity={0.7} color="#d4d4d8" />
        <pointLight position={[0, -2.5, 3]} intensity={0.6} color="#e4e4e7" />
        <spotLight position={[3, 6, 3]} intensity={1.2} angle={0.55} penumbra={0.8} color="#ffffff" />

        <React.Suspense fallback={null}>
          <IdentitySculpture pointer={pointer} scrollOffset={scrollOffset} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};
export default HeroIdentity3D;
