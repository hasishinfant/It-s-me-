import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home', idx: '00' },
  { id: 'who-i-am', label: 'Journey', idx: '01' },
  { id: 'projects', label: 'Projects', idx: '02' },
  { id: 'services', label: 'Services', idx: '03' },
  { id: 'philosophy', label: 'Philosophy', idx: '04' },
  { id: 'skills', label: 'Skills', idx: '05' },
  { id: 'github', label: 'GitHub', idx: '06' },
  { id: 'achievements', label: 'Awards', idx: '07' },
  { id: 'video-resume', label: 'Recruiter', idx: '08' },
  { id: 'contact', label: 'Contact', idx: '09' },
];

export const Navbar: React.FC = () => {
  const {
    isAudioMuted,
    toggleAudio,
    playHover,
    playClick,
    activeSection,
    setActiveSection,
    setCursorType,
    setIsHireDrawerOpen,
  } = usePortfolio();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar — Brutalist */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 pointer-events-none pt-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Left Brand — Brutalist */}
          <motion.button
            onClick={() => scrollToSection('hero')}
            onMouseEnter={() => {
              setCursorType('hover');
              playHover();
            }}
            onMouseLeave={() => setCursorType('default')}
            className="h-12 w-12 brutalist-border flex items-center justify-center cursor-pointer transition-all hover:border-amber-400 hover:scale-105 bg-black/50 backdrop-blur-md"
            aria-label="Hasish Infant Brand Logo"
          >
            <span className="font-brutalist font-bold text-xl text-white">H</span>
          </motion.button>

          {/* Center Floating Glass Navigation Pill (Desktop) */}
          <nav
            className={`hidden md:flex items-center gap-0.5 px-2 py-1.5 transition-all duration-500 ${
              scrolled ? 'liquid-glass-strong shadow-2xl rounded-none brutalist-border' : 'liquid-glass rounded-none'
            }`}
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  onMouseEnter={() => {
                    setCursorType('hover');
                    playHover();
                  }}
                  onMouseLeave={() => setCursorType('default')}
                  className={`relative px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-amber-400 font-medium' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPillActive"
                      className="absolute inset-0 bg-white/5 border-b-2 border-amber-400 -z-10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="text-white/20 mr-1">{item.idx}.</span>
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-2">
            {/* Audio Toggle */}
            <button
              onClick={toggleAudio}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-border h-10 px-3 flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white hover:border-amber-400 cursor-pointer bg-black/50 backdrop-blur-md transition-all"
              title={isAudioMuted ? 'Unmute Ambient Soundscape' : 'Mute Ambient Soundscape'}
            >
              {isAudioMuted ? (
                <VolumeX className="w-3.5 h-3.5 text-white/50" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              )}
              <span className="hidden sm:inline text-[10px]">
                {isAudioMuted ? 'OFF' : 'SND'}
              </span>
            </button>

            {/* Connect CTA Button — Brutalist */}
            <button
              onClick={() => {
                playClick();
                setIsHireDrawerOpen(true);
              }}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="bg-amber-400 text-black px-4 py-2 text-xs font-brutalist font-bold uppercase tracking-wider flex items-center gap-1.5 hover:bg-white transition-all cursor-pointer"
            >
              <span>Connect</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden brutalist-border h-10 w-10 flex items-center justify-center text-white cursor-pointer bg-black/50 backdrop-blur-md"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — Brutalist Full Screen */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-black/95 backdrop-blur-xl md:hidden flex flex-col p-6 pt-8 raw-grid"
          >
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-4 border-b border-white/10 flex items-baseline gap-4 group ${
                  activeSection === item.id ? 'text-amber-400' : 'text-white/70'
                }`}
              >
                <span className="font-mono text-[10px] text-white/30 w-6">{String(i).padStart(2, '0')}</span>
                <span className="font-brutalist text-2xl font-bold uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                  {item.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
