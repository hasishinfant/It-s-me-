import React from 'react';
import { motion } from 'framer-motion';
import { HeroIdentity3D } from '../canvas/HeroIdentity3D';
import { ArrowDown, ArrowUpRight, Cpu, Layers, Terminal, Sparkles, FileText, CheckCircle2 } from 'lucide-react';
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
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-10 overflow-hidden bg-[#F4F4F0]"
    >
      {/* ── TOP COMIC STATUS STRIP ── */}
      <div className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 py-2.5 px-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono font-bold">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-emerald-500 animate-ping" />
          <span className="uppercase text-black">
            {PERSONAL_DATA.name.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-neutral-500 font-normal">
            — {PERSONAL_DATA.location.toUpperCase()}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FAFF00] border border-black text-[11px] font-mono font-bold text-black">
            <span>55% RECRUITER · 45% FREELANCE</span>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] text-neutral-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>CGPA: {PERSONAL_DATA.education.cgpa}</span>
          </span>
        </div>
      </div>

      {/* ── MAIN HERO STAGE ── */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center text-center mt-6 sm:mt-10 z-10">
        {/* Top Comic Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono font-bold uppercase tracking-wider text-black mb-5"
        >
          <span className="w-2 h-2 bg-[#FF0000]" />
          <span>FULL-STACK DEVELOPER · AI BUILDER · FREELANCER</span>
        </motion.div>

        {/* Comic Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
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
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl font-body text-neutral-800 max-w-2xl font-medium leading-relaxed"
        >
          3rd-year Computer Science undergraduate from Bengaluru building scalable full-stack applications, intelligent AI systems, and shipping high-converting products for clients.
        </motion.p>

        {/* Action Button Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider"
        >
          {/* 1. Primary: VIEW MY WORK */}
          <button
            onClick={() => {
              if (onExploreClick) onExploreClick();
              else scrollTo('work');
            }}
            className="comic-btn-black px-5 py-3 flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW MY WORK</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* 2. Secondary: WORK WITH ME */}
          <button
            onClick={() => {
              if (onTalkClick) onTalkClick();
              else scrollTo('contact');
            }}
            className="comic-btn-yellow px-5 py-3 flex items-center gap-2 cursor-pointer"
          >
            <span>WORK WITH ME</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* 3. Utility: DOWNLOAD RESUME */}
          <a
            href={PERSONAL_DATA.socials.resumeUrl}
            className="comic-btn-white px-5 py-3 flex items-center gap-2 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>DOWNLOAD RESUME</span>
          </a>
        </motion.div>
      </div>

      {/* ── 3D SIGNATURE IDENTITY OBJECT WITH COMIC ORBIT TAGS ── */}
      <div className="relative w-full max-w-3xl flex items-center justify-center mt-6 sm:mt-8">
        <div className="relative flex items-center justify-center">
          {/* Central 3D Canvas */}
          <HeroIdentity3D className="z-10" />

          {/* Orbit Tag 1: Top Left - AI Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -top-1 left-2 sm:-left-8 md:-left-12 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-[11px] font-mono font-bold text-black"
          >
            <Cpu className="w-3.5 h-3.5 text-purple-600" />
            <span>AI SYSTEMS</span>
          </motion.div>

          {/* Orbit Tag 2: Bottom Left - Full Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="absolute bottom-6 left-0 sm:-left-10 md:-left-16 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-[11px] font-mono font-bold text-black"
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>FULL-STACK</span>
          </motion.div>

          {/* Orbit Tag 3: Top Right - Live Ship */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-1 right-2 sm:-right-8 md:-right-12 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-[#FAFF00] border-2 border-black shadow-[3px_3px_0px_#000] text-[11px] font-mono font-bold text-black"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>FAST SHIPPER</span>
          </motion.div>

          {/* Orbit Tag 4: Bottom Right - WebRTC SFU */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-6 right-0 sm:-right-10 md:-right-16 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-[11px] font-mono font-bold text-black"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-600" />
            <span>WEBRTC SFU</span>
          </motion.div>
        </div>
      </div>

      {/* ── BOTTOM CREDENTIAL TICKER ── */}
      <div className="w-full max-w-7xl mx-auto mt-6 pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-bold text-black">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span className="px-2 py-1 bg-white border border-black shadow-[2px_2px_0px_#000]">
            📍 BENGALURU, INDIA
          </span>
          <span className="px-2 py-1 bg-white border border-black shadow-[2px_2px_0px_#000]">
            🎓 ALLIANCE UNIVERSITY · 8.02 CGPA
          </span>
          <span className="px-2 py-1 bg-[#FAFF00] border border-black shadow-[2px_2px_0px_#000]">
            ⚡ 50+ DSA PROBLEMS
          </span>
          <span className="px-2 py-1 bg-white border border-black shadow-[2px_2px_0px_#000]">
            🏆 4X FINALIST · 1X WINNER
          </span>
        </div>

        <button
          onClick={() => scrollTo('recruiter-snapshot')}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-800 hover:text-black hover:underline cursor-pointer"
        >
          <span>QUICK RECRUITER SNAPSHOT</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
export default EditorialHero;
