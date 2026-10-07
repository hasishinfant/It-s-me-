import React, { useState, useEffect } from 'react';

export const ScrollAnnotations: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentSection, setCurrentSection] = useState('01 HERO');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / (scrollTotal || 1)) * 100)));
      setScrollPercent(pct);

      // Section detection
      const sections = [
        { id: 'hero', label: '01 HERO' },
        { id: 'overview', label: '02 AT A GLANCE' },
        { id: 'what-i-build', label: '03 DOMAINS' },
        { id: 'work', label: '04 SELECTED WORK' },
        { id: 'index', label: '05 ARCHIVE' },
        { id: 'proof', label: '06 PROOF OF WORK' },
        { id: 'leadership', label: '07 LEADERSHIP' },
        { id: 'services', label: '08 SERVICES' },
        { id: 'stack', label: '09 TECHNICAL ARSENAL' },
        { id: 'about', label: '10 ABOUT HASISH' },
        { id: 'contact', label: '11 CREATE SOMETHING BOLD' },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setCurrentSection(sections[i].label);
            break;
          }
        }
      }
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

      {/* ── FIXED COMIC CORNER ANNOTATIONS (Desktop) ── */}
      <div className="fixed bottom-4 left-6 z-40 hidden xl:flex items-center gap-3 text-[11px] font-mono font-bold text-black uppercase tracking-wider bg-white px-3.5 py-1.5 border-2 border-black shadow-[3px_3px_0px_#000] pointer-events-none">
        <span className="w-2 h-2 bg-[#FAFF00] border border-black animate-pulse" />
        <span>{currentSection}</span>
        <span className="text-neutral-400">|</span>
        <span>HASISH INFANT</span>
        <span className="text-neutral-400">|</span>
        <span>{scrollPercent}% READ</span>
      </div>
    </>
  );
};
export default ScrollAnnotations;
