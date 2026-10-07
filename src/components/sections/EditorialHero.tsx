import React from 'react';
import { motion } from 'framer-motion';
import { HeroIdentity3D } from '../canvas/HeroIdentity3D';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface EditorialHeroProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreClick, onTalkClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-12 overflow-hidden bg-[#F4F4F0]"
    >
      {/* ── TOP CLEAN BAR ── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-3 px-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono font-bold">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-emerald-500 animate-ping" />
          <span className="uppercase text-black">
            {PERSONAL_DATA.name.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-neutral-500 font-normal">
            — BENGALURU, INDIA
          </span>
        </div>

        <button
          onClick={() => {
            if (onTalkClick) onTalkClick();
            else scrollTo('contact');
          }}
          className="px-3 py-1 bg-[#FAFF00] text-black border border-black hover:bg-black hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold"
        >
          LET'S TALK →
        </button>
      </div>

      {/* ── MAIN HERO STAGE ── */}
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-8 sm:mt-12 z-10">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-grotesk tracking-tight text-black leading-[1.05] max-w-5xl"
        >
          I BUILD DIGITAL PRODUCTS AND{' '}
          <span className="relative inline-block px-2 sm:px-3 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-1deg] text-black">
            EXPERIMENT
          </span>{' '}
          WITH AI.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg md:text-xl font-body text-neutral-800 max-w-2xl font-medium leading-relaxed"
        >
          Computer Science student and full-stack developer from Bengaluru building web applications, AI systems, and shipping products.
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider"
        >
          {/* 1. Primary: VIEW WORK */}
          <button
            onClick={() => {
              if (onExploreClick) onExploreClick();
              else scrollTo('work');
            }}
            className="comic-btn-black px-6 py-3 flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* 2. Secondary: LET'S TALK */}
          <button
            onClick={() => {
              if (onTalkClick) onTalkClick();
              else scrollTo('contact');
            }}
            className="comic-btn-yellow px-6 py-3 flex items-center gap-2 cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* 3. Utility: RESUME */}
          <a
            href={PERSONAL_DATA.socials.resumeUrl}
            className="comic-btn-white px-6 py-3 flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>RESUME</span>
          </a>
        </motion.div>
      </div>

      {/* ── CLEAN 3D KINETIC OBJECT (NO OVERLAY LABELS) ── */}
      <div className="relative w-full max-w-xl flex items-center justify-center my-8 sm:my-10">
        <HeroIdentity3D className="z-10" />
      </div>

      {/* ── CLEAN BOTTOM SCROLL HINT ── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center">
        <button
          onClick={() => scrollTo('work')}
          className="font-mono text-xs font-bold text-neutral-600 hover:text-black flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
export default EditorialHero;
