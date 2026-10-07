import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { PlayfulCursor } from './components/ui/PlayfulCursor';
import { EditorialNavbar } from './components/ui/EditorialNavbar';
import { ScrollAnnotations } from './components/ui/ScrollAnnotations';

import { EditorialHero } from './components/sections/EditorialHero';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { ProjectIndexSection } from './components/sections/ProjectIndexSection';
import { FreelanceServicesSection } from './components/sections/FreelanceServicesSection';
import { StackSection } from './components/sections/StackSection';
import { AboutSection } from './components/sections/AboutSection';
import { LetsBuildSection } from './components/sections/LetsBuildSection';
import { FooterSection } from './components/sections/FooterSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for physical, snappy momentum
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F0] flex flex-col items-center justify-start text-[#000000] selection:bg-[#FAFF00] selection:text-[#000000] antialiased">
      {/* Precision Playful Desktop Cursor */}
      <PlayfulCursor />

      {/* Top Scroll Indicator (Electric Yellow discreet bar) */}
      <ScrollAnnotations />

      {/* ── COMIC-BRUTALIST VIEWPORT CONTAINER (1440px Max Width) ── */}
      <div className="viewport-shell w-full max-w-[1440px] relative transition-all duration-300">
        {/* Navigation Bar */}
        <EditorialNavbar onContactClick={() => handleScrollToSection('contact')} />

        {/* ── COMIC-BRUTALIST PERSONAL BRAND PORTFOLIO ── */}
        <main className="relative w-full overflow-hidden">
          {/* 01: HERO — Headline, 3 CTA Buttons, Signature 3D Kinetic Object */}
          <EditorialHero
            onExploreClick={() => handleScrollToSection('work')}
            onTalkClick={() => handleScrollToSection('contact')}
          />

          {/* 02: SELECTED WORK — OpportunX, Rakshatantra AI, TravelSphere, Videoy, OceanRaksha */}
          <SelectedWorkSection />

          {/* 03: PROJECT ARCHIVE — Table of Builds with Direct Repo Links */}
          <ProjectIndexSection />

          {/* 04: FREELANCE SERVICES — 5 Client Services, 4-Step Ship Process, Ready to Ship CTA */}
          <FreelanceServicesSection onStartProjectClick={() => handleScrollToSection('contact')} />

          {/* 05: TECHNICAL ARSENAL — Categorized Skills (Languages, Frontend, Backend, Cloud, AI, CS) */}
          <StackSection />

          {/* 06: ABOUT HASISH — Builder Identity, Benchmarks & Proof of Work, Leadership & Education */}
          <AboutSection />

          {/* 07: LET'S CREATE SOMETHING BOLD — Contact Hub & Direct Form */}
          <LetsBuildSection />

          {/* 08: FOOTER — Comic-Brutalist Footer with Socials & Top Return */}
          <FooterSection onScrollToTop={() => handleScrollToSection('hero')} />
        </main>
      </div>
    </div>
  );
};
export default App;
