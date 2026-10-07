import React, { useState, useEffect } from 'react';

export const ScrollAnnotations: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / (scrollTotal || 1)) * 100)));
      setScrollPercent(pct);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── TOP COMIC PROGRESS BAR (ELECTRIC YELLOW WITH BLACK BORDER) ── */}
      <div
        id="scroll-progress-bar"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[4px] bg-[#FAFF00] border-b border-black z-50 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollPercent / 100})` }}
      />
    </>
  );
};
export default ScrollAnnotations;
