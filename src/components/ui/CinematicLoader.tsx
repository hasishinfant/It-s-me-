import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CinematicLoaderProps {
  onComplete: () => void;
}

export const CinematicLoader: React.FC<CinematicLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: 'blur(12px)' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-between p-8 md:p-16 select-none overflow-hidden raw-grid scanline-overlay"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-cyan-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Floating Fragments Particles Simulation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-white/30 animate-pulse"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              />
            ))}
          </div>

          {/* Top Status — Brutalist Mono */}
          <div className="w-full flex items-center justify-between text-xs font-mono text-white/40 uppercase tracking-[0.3em] relative z-10">
            <span className="brutalist-border-amber px-3 py-1">HASISH INFANT</span>
            <span>SYS.INIT &bull; 2026</span>
          </div>

          {/* Center Logo & Progress Text */}
          <div className="flex flex-col items-center text-center relative z-10">
            {/* Logo Assembly — Brutalist Text Stroke */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(10px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              className="relative mb-6"
            >
              <span className="font-brutalist font-bold text-7xl md:text-9xl text-stroke tracking-[-4px]">
                HI
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            </motion.div>

            {/* Tagline — Brutalist Mono */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xs md:text-sm font-mono tracking-[0.25em] uppercase text-white/50 mb-8"
            >
              EXPERIENCES_BEFORE_WEBSITES
            </motion.p>

            {/* Percentage Number — Glitch Effect */}
            <div className="font-brutalist font-bold text-6xl md:text-8xl text-white/90 tracking-tight glitch-text">
              {String(progress).padStart(3, '0')}
            </div>
            <div className="font-mono text-[10px] text-white/30 mt-2 tracking-widest">
              // LOADING_SCENE_GRAPH
            </div>
          </div>

          {/* Bottom Progress Bar — Brutalist */}
          <div className="w-full max-w-md relative z-10">
            <div className="w-full h-[3px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-400 via-white to-cyan-400 transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-white/30 uppercase tracking-widest">
              <span>GPU.ACCELERATED</span>
              <span>{progress}% COMPLETE</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
