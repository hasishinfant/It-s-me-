import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { usePortfolio } from '../../context/PortfolioContext';

export const CustomCursor: React.FC = () => {
  const { cursorType } = usePortfolio();
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    document.body.classList.add('custom-cursor-active');

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const isHovered = cursorType !== 'default';

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer Liquid Glass Aura Ring */}
      <motion.div
        animate={{
          scale: isHovered ? 2.2 : 1,
          opacity: isHovered ? 0.8 : 0.4,
          borderColor: cursorType === 'view' ? '#38bdf8' : cursorType === 'drag' ? '#a855f7' : '#ffffff',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center backdrop-blur-[2px] transition-colors"
      >
        {cursorType !== 'default' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[8px] font-mono tracking-widest text-white uppercase font-bold"
          >
            {cursorType}
          </motion.span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        animate={{
          scale: isHovered ? 0.4 : 1,
          backgroundColor: cursorType === 'view' ? '#38bdf8' : '#ffffff',
        }}
        className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]"
      />
    </motion.div>
  );
};
