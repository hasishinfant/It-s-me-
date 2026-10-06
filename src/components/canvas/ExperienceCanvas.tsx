import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { StarfieldParticles } from './StarfieldParticles';
import { FloatingRoomScene } from './FloatingRoomScene';
import { PlanetsScene } from './PlanetsScene';
import { HologramSkillsScene } from './HologramSkillsScene';
import { CameraController } from './CameraController';
import { usePortfolio } from '../../context/PortfolioContext';

export const ExperienceCanvas: React.FC = () => {
  const { activeSection } = usePortfolio();

  return (
    <div className="fixed inset-0 pointer-events-auto z-0 overflow-hidden bg-black">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <CameraController />
        
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} color="#ffffff" castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
        <pointLight position={[10, -5, 5]} intensity={0.5} color="#a855f7" />

        <Suspense fallback={null}>
          {/* Universal Starfield */}
          <StarfieldParticles count={3500} />

          {/* Section 2 Workstation 3D Scene */}
          {activeSection === 'who-i-am' && (
            <FloatingRoomScene position={[0, 0, 0]} />
          )}

          {/* Section 4 Orbital Planets Scene */}
          {activeSection === 'projects' && (
            <PlanetsScene position={[0, 0, 0]} />
          )}

          {/* Section 6 Hologram Skills Matrix Scene */}
          {activeSection === 'skills' && (
            <HologramSkillsScene position={[0, 0, 0]} />
          )}
        </Suspense>
      </Canvas>

      {/* Subtle Noise Vignette Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]" />
    </div>
  );
};
