import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { usePortfolio } from '../../context/PortfolioContext';

export const CameraController: React.FC = () => {
  const { activeSection } = usePortfolio();
  const { camera } = useThree();

  const targetPosition = useRef(new THREE.Vector3(0, 0, 8));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state, delta) => {
    // Determine target camera parameters based on active section
    switch (activeSection) {
      case 'hero':
        targetPosition.current.set(0, 0, 7.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'who-i-am':
        targetPosition.current.set(0, 0.8, 4.2);
        targetLookAt.current.set(0, 0.4, 0);
        break;
      case 'timeline':
        targetPosition.current.set(0, 1.5, 9);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'projects':
        targetPosition.current.set(0, 2, 10.5);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'process':
        targetPosition.current.set(0, 0, 8);
        targetLookAt.current.set(0, 0, 0);
        break;
      case 'skills':
        targetPosition.current.set(0, 0, 7);
        targetLookAt.current.set(0, 0, 0);
        break;
      default:
        targetPosition.current.set(0, 0, 7.5);
        targetLookAt.current.set(0, 0, 0);
        break;
    }

    // Add subtle parallax mouse float effect
    const mouseX = (state.pointer.x * 0.4);
    const mouseY = (state.pointer.y * 0.4);

    const lerpSpeed = delta * 2.5;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetPosition.current.x + mouseX, lerpSpeed);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetPosition.current.y + mouseY, lerpSpeed);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetPosition.current.z, lerpSpeed);

    camera.lookAt(targetLookAt.current);
  });

  return null;
};
