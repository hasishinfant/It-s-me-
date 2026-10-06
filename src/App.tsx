import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { PlayfulCursor } from './components/ui/PlayfulCursor';
import { EditorialNavbar } from './components/ui/EditorialNavbar';
import { KineticAgencyMarquee } from './components/ui/KineticAgencyMarquee';
import { EditorialHero } from './components/sections/EditorialHero';
import { ProjectRevealSection } from './components/sections/ProjectRevealSection';
import { CompanyProofSection } from './components/sections/CompanyProofSection';
import { MyCraftSection } from './components/sections/MyCraftSection';
import { SelectedWorkSection } from './components/sections/SelectedWorkSection';
import { FeaturedCaseStudiesSection } from './components/sections/FeaturedCaseStudiesSection';
import { AgencyCollectiveSection } from './components/sections/AgencyCollectiveSection';
import { ThingsIveBuiltSection } from './components/sections/ThingsIveBuiltSection';
import { BraggingRightsSection } from './components/sections/BraggingRightsSection';
import { CaseStudySpotlightSection } from './components/sections/CaseStudySpotlightSection';
import { LetsBuildSection } from './components/sections/LetsBuildSection';
import { ContactSectionDark } from './components/sections/ContactSectionDark';
import { LoopOutroSection } from './components/sections/LoopOutroSection';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll for physical, luxurious momentum
    const lenis = new Lenis({
      duration: 1.25,
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
    <div className="min-h-screen bg-[#ebeae5] p-2 sm:p-4 lg:p-6 flex flex-col items-center justify-start text-neutral-900 selection:bg-neutral-900 selection:text-white antialiased">
      {/* Precision Playful Cursor with Floating 3D Previews & Magnetic Ring */}
      <PlayfulCursor />

      {/* ── ART-DIRECTED VIEWPORT SHELL (Frames 01 to 23) ── */}
      <div className="viewport-shell w-full max-w-[1440px] relative transition-all duration-300">
        {/* Restrained Magenta/Violet Accent Rails on Viewport Edges */}
        <div className="accent-rail-left hidden sm:block" />
        <div className="accent-rail-right hidden sm:block" />

        {/* Minimal Editorial Top Navigation Bar */}
        <EditorialNavbar onContactClick={() => handleScrollToSection('contact')} />

        {/* 12 Seamless Sequential Chapters Blended with Creative Agency & Brutalist Elements */}
        <main className="relative w-full overflow-hidden">
          {/* 01: Hero / First Impression & 3D Identity Object */}
          <EditorialHero onExploreClick={() => handleScrollToSection('projects-reveal')} />

          {/* Kinetic Motion Marquee (Brutalist Agency Ticker) */}
          <KineticAgencyMarquee />

          {/* 02: Project Reveal */}
          <ProjectRevealSection />

          {/* 03: Company / Client Marquee & Editorial Manifesto */}
          <CompanyProofSection />

          {/* 04: "My cup of tea" Skills & Speciality Clusters */}
          <MyCraftSection />

          {/* 05: Selected Work Filterable Editorial Grid */}
          <SelectedWorkSection />

          {/* 06: Featured Case Studies Interactive Dossiers */}
          <FeaturedCaseStudiesSection />

          {/* Agency Collective: Core Operators Team Showcase */}
          <AgencyCollectiveSection />

          {/* 07: Things I've Built List with 3D Floating Window Previews */}
          <ThingsIveBuiltSection />

          {/* 08: Bragging Rights Dark Section */}
          <BraggingRightsSection />

          {/* 09: Case Study Spotlight Dark Architecture */}
          <CaseStudySpotlightSection />

          {/* 10: "Let's build something" Massive Typographic CTA + 3D Motif */}
          <LetsBuildSection onTalkClick={() => handleScrollToSection('contact')} />

          {/* 11: Commission Contact Terminal "Let's talk." Dark Interface */}
          <ContactSectionDark />

          {/* 12: Outro Loop Back to Hero */}
          <LoopOutroSection onLoopToTop={() => handleScrollToSection('hero')} />
        </main>
      </div>
    </div>
  );
};
export default App;
