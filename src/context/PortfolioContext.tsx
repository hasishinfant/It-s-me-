import React, { createContext, useContext, useState, useEffect } from 'react';
import { sound } from '../utils/sound';
import type { Project } from '../data/portfolioData';

interface PortfolioContextType {
  isAudioMuted: boolean;
  toggleAudio: () => void;
  playHover: () => void;
  playClick: () => void;
  playWhoosh: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  cursorType: 'default' | 'hover' | 'drag' | 'view';
  setCursorType: (type: 'default' | 'hover' | 'drag' | 'view') => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isVideoModalOpen: boolean;
  setIsVideoModalOpen: (open: boolean) => void;
  isHireDrawerOpen: boolean;
  setIsHireDrawerOpen: (open: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAudioMuted, setIsAudioMuted] = useState(sound.getMuted());
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorType, setCursorType] = useState<'default' | 'hover' | 'drag' | 'view'>('default');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isHireDrawerOpen, setIsHireDrawerOpen] = useState(false);

  useEffect(() => {
    const handleFirstGesture = () => {
      sound.startAmbient();
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
    window.addEventListener('click', handleFirstGesture);
    window.addEventListener('keydown', handleFirstGesture);
    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const toggleAudio = () => {
    const muted = sound.toggleMute();
    setIsAudioMuted(muted);
  };

  const playHover = () => sound.playHover();
  const playClick = () => sound.playClick();
  const playWhoosh = () => sound.playWhoosh();

  return (
    <PortfolioContext.Provider
      value={{
        isAudioMuted,
        toggleAudio,
        playHover,
        playClick,
        playWhoosh,
        activeSection,
        setActiveSection,
        cursorType,
        setCursorType,
        selectedProject,
        setSelectedProject,
        isVideoModalOpen,
        setIsVideoModalOpen,
        isHireDrawerOpen,
        setIsHireDrawerOpen
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
