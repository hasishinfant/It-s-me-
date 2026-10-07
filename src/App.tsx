import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { PlayfulCursor } from './components/ui/PlayfulCursor';
import { EditorialNavbar } from './components/ui/EditorialNavbar';
import { ScrollAnnotations } from './components/ui/ScrollAnnotations';

import { EditorialHero } from './components/sections/EditorialHero';
import { WhatIBuildSection } from './components/sections/WhatIBuildSection';
import { StackSection } from './components/sections/StackSection';
import { BuildingInPublicSection } from './components/sections/BuildingInPublicSection';
import { ProofOfWorkSection } from './components/sections/ProofOfWorkSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { ProjectIndexSection } from './components/sections/ProjectIndexSection';
import { OpusCaseStudySection } from './components/sections/OpusCaseStudySection';
import { ExperimentsLabSection } from './components/sections/ExperimentsLabSection';
import { SocialCommunitySection } from './components/sections/SocialCommunitySection';
import { AboutSection } from './components/sections/AboutSection';
import { LetsBuildSection } from './components/sections/LetsBuildSection';
import { FooterSection } from './components/sections/FooterSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for physical, luxurious momentum
    const lenis = new Lenis({
      duration: 1.2,
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
    <div className="min-h-screen bg-[#F4F3EF] flex flex-col items-center justify-start text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-white antialiased">
      {/* Precision Playful Desktop Cursor with Floating 3D Previews */}
      <PlayfulCursor />

      {/* Modern Web Guidance: Scroll Progress Bar & Studio Coordinates */}
      <ScrollAnnotations />

      {/* ── ART-DIRECTED VIEWPORT SHELL (1440px Max Width) ── */}
      <div className="viewport-shell w-full max-w-[1440px] relative transition-all duration-300">
        {/* Restrained Edge Rails */}
        <div className="accent-rail-left hidden sm:block" />
        <div className="accent-rail-right hidden sm:block" />

        {/* Minimal Editorial Top Navigation Bar */}
        <EditorialNavbar onContactClick={() => handleScrollToSection('contact')} />

        {/* ── SEAMLESS NARRATIVE CHAPTERS IN INTENTIONAL LIGHT / DARK RHYTHM ── */}
        <main className="relative w-full overflow-hidden">
          {/* 01: [LIGHT] HERO — Identity, Original Headline & Signature 3D Identity Object */}
          <EditorialHero
            onExploreClick={() => handleScrollToSection('what-i-build')}
            onTalkClick={() => handleScrollToSection('contact')}
          />

          {/* 02: [LIGHT] WHAT I BUILD — Editorial Typography with Interactive Hover Artifacts */}
          <WhatIBuildSection />

          {/* 03: [LIGHT] STACK SECTION — Restrained Minimalist Technical Index */}
          <StackSection />

          {/* 04: [LIGHT] BUILDING IN PUBLIC — "I don't just build. I share the process." Retros & Takeaways */}
          <BuildingInPublicSection />

          {/* 05: [DARK] PROOF OF WORK — Exhibition Wall with Vertical Timeline */}
          <ProofOfWorkSection />

          {/* 06: [LIGHT] SELECTED WORK — Oversized Dimensional Cards (OpportunX, OPUS, NeoScholar, TravelSphere, CivicFlow) */}
          <SelectedWorkSection />

          {/* 07: [LIGHT] PROJECT INDEX — Editorial Archive Table with Cursor-Following Previews */}
          <ProjectIndexSection />

          {/* 08: [DARK] FEATURED CASE STUDY — OPUS: "My attempt at building Jarvis" + Interactive 3D Architecture Graph */}
          <OpusCaseStudySection />

          {/* 09: [LIGHT] EXPERIMENTS — "Things I'm still figuring out" Irregular Laboratory Bench */}
          <ExperimentsLabSection />

          {/* 10: [LIGHT] SOCIAL & COMMUNITY — Clean Monochrome Ecosystem Marks */}
          <SocialCommunitySection />

          {/* 11: [LIGHT] ABOUT — "Still learning. Still building." Human First-Person Statement */}
          <AboutSection />

          {/* 12: [DARK] LET'S BUILD / FINAL CTA — Giant Editorial CTA with Returning 3D Identity Object */}
          <LetsBuildSection />

          {/* 13: [DARK] FOOTER — Minimalist Editorial Footer with Verified Public Links */}
          <FooterSection onScrollToTop={() => handleScrollToSection('hero')} />
        </main>
      </div>
    </div>
  );
};
export default App;
