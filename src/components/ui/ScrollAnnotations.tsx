import React, { useState, useEffect } from 'react';

export const ScrollAnnotations: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentSection, setCurrentSection] = useState('SECTION 01 / 11');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const pct = Math.min(100, Math.max(0, Math.round((scrolled / (scrollTotal || 1)) * 100)));
      setScrollPercent(pct);

      // Section detection
      const sections = [
        { id: 'hero', label: 'SECTION 01 / 11 • HERO' },
        { id: 'what-i-build', label: 'SECTION 02 / 11 • CAPABILITIES' },
        { id: 'stack', label: 'SECTION 03 / 11 • STACK' },
        { id: 'building-in-public', label: 'SECTION 04 / 11 • PROCESS' },
        { id: 'proof', label: 'SECTION 05 / 11 • PROOF' },
        { id: 'work', label: 'SECTION 06 / 11 • WORK' },
        { id: 'index', label: 'SECTION 07 / 11 • INDEX' },
        { id: 'opus-study', label: 'SECTION 08 / 11 • OPUS DOSSIER' },
        { id: 'experiments', label: 'SECTION 09 / 11 • LAB' },
        { id: 'community', label: 'SECTION 10 / 11 • ECOSYSTEM' },
        { id: 'contact', label: 'SECTION 11 / 11 • COMMISSION' },
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
      {/* ── TOP ULTRA-THIN PROGRESS RAIL (Modern Web Guidance Compliant) ── */}
      <div
        id="scroll-progress-bar"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-neutral-900 z-50 origin-left transition-transform duration-75 pointer-events-none"
        style={{ transform: `scaleX(${scrollPercent / 100})` }}
      />

      {/* ── FIXED STUDIO CORNER ANNOTATIONS (Non-Intrusive, Desktop) ── */}
      <div className="fixed bottom-4 left-6 z-40 hidden xl:flex items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span>{currentSection}</span>
        <span className="text-neutral-300">|</span>
        <span>OBJECT 01 • SCULPTURE</span>
      </div>

      <div className="fixed bottom-4 right-6 z-40 hidden xl:flex items-center gap-3 text-[10px] font-mono text-neutral-500 uppercase tracking-wider bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-xs pointer-events-none">
        <span>BLR [12.9716° N, 77.5946° E]</span>
        <span className="text-neutral-300">|</span>
        <span className="text-neutral-900 font-bold">{scrollPercent}% SCROLLED</span>
      </div>
    </>
  );
};
export default ScrollAnnotations;
