import React from 'react';
import { motion } from 'framer-motion';
import { HeroIdentity3D } from '../canvas/HeroIdentity3D';
import { ArrowDown, Sparkles, Terminal, Layers, Cpu, Compass } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface EditorialHeroProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreClick, onTalkClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-12 overflow-hidden bg-[#F4F3EF]"
    >
      {/* ── TOP STUDIO BAR (Frame 01: 00s) ── */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between py-3 border-b border-black/5 text-xs font-mono">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-grotesk font-bold tracking-wider text-neutral-950 uppercase">
            {PERSONAL_DATA.name}
          </span>
          <span className="hidden sm:inline text-neutral-400 font-normal">
            — BENGALURU, IN [12.9716° N, 77.5946° E]
          </span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono text-neutral-800 border border-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            <span>{PERSONAL_DATA.status}</span>
          </div>

          <button
            onClick={() => {
              if (onTalkClick) onTalkClick();
              else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-4 py-1.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-grotesk font-semibold tracking-wider uppercase transition-all shadow-sm active:scale-95"
          >
            LET'S TALK
          </button>
        </div>
      </div>

      {/* ── TOP COMPOSITION: 3D SIGNATURE IDENTITY OBJECT & SURROUNDING ANCHORS ── */}
      <div className="relative w-full flex flex-col items-center justify-center mt-6 sm:mt-10">
        <div className="relative flex items-center justify-center">
          {/* Central 3D Canvas */}
          <HeroIdentity3D className="z-10" />

          {/* Micro Orbit Badge 1: Top Left - AI Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-3 left-4 sm:-left-6 md:-left-12 z-20 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-purple-600 transition-colors" />
            <span className="sr-only">AI Systems</span>
          </motion.div>

          {/* Micro Orbit Badge 2: Bottom Left - Full Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-6 left-2 sm:-left-10 md:-left-16 z-20 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-blue-600 transition-colors" />
            <span className="sr-only">Full Stack</span>
          </motion.div>

          {/* Micro Orbit Badge 3: Top Right - Experiments */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-2 right-4 sm:-right-6 md:-right-12 z-20 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-emerald-600 transition-colors" />
            <span className="sr-only">Experiments</span>
          </motion.div>

          {/* Micro Orbit Badge 4: Bottom Right - Craft */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 right-2 sm:-right-10 md:-right-16 z-20 flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-800 group-hover:text-amber-500 transition-colors" />
            <span className="sr-only">Craft</span>
          </motion.div>
        </div>
      </div>

      {/* ── CENTER COMPOSITION: ENORMOUS EDITORIAL HEADLINE & STATEMENT ── */}
      <div className="relative w-full max-w-6xl mx-auto text-center flex flex-col items-center mt-4 sm:mt-6 z-20">
        {/* Tiny Studio Category Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-4 sm:mb-6"
        >
          <Compass className="w-3.5 h-3.5 text-neutral-800" />
          <span>SECTION 01 // EXHIBITION ENTRANCE</span>
        </motion.div>

        {/* Enormous Original Headline (clamp up to 180px) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] font-bold tracking-tight text-neutral-950 leading-[0.90] select-none font-grotesk uppercase"
        >
          <span className="block">BUILDING THINGS</span>
          <span className="block text-neutral-900">THAT SHOULDN'T</span>
          <span className="font-editorial italic font-normal tracking-tight text-neutral-800 block mt-1 lowercase text-5xl sm:text-7xl md:text-9xl lg:text-[8.5rem]">
            exist yet.
          </span>
        </motion.h1>

        {/* Understated Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 sm:mt-8 max-w-2xl text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed text-center px-4"
        >
          {PERSONAL_DATA.heroSubheadline}
        </motion.p>
      </div>

      {/* ── BOTTOM EXPLORATION STRIP & PEEK TEASER ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative w-full max-w-6xl mx-auto mt-10 sm:mt-14 flex flex-col items-center"
      >
        <button
          onClick={onExploreClick}
          className="group flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-950 transition-colors mb-6 cursor-pointer"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-neutral-700">
            SCROLL TO ENTER EXHIBITION
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-neutral-800" />
          </motion.div>
        </button>

        {/* Peek Cards Strip - Project Teaser Previews */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-14 sm:h-18 rounded-2xl bg-white border border-black/10 shadow-sm p-3 flex items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">OPUS</span>
            <span className="text-[10px] font-mono text-neutral-400">01 / AI OS</span>
          </div>
          <div className="h-14 sm:h-18 rounded-2xl bg-white border border-black/10 shadow-sm p-3 flex items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">OpportunX</span>
            <span className="text-[10px] font-mono text-neutral-400">02 / PLATFORM</span>
          </div>
          <div className="hidden md:flex h-14 sm:h-18 rounded-2xl bg-white border border-black/10 shadow-sm p-3 items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">NeoScholar AI</span>
            <span className="text-[10px] font-mono text-neutral-400">03 / NEO4J GRAPH</span>
          </div>
          <div className="hidden md:flex h-14 sm:h-18 rounded-2xl bg-white border border-black/10 shadow-sm p-3 items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">TravelSphere</span>
            <span className="text-[10px] font-mono text-neutral-400">04 / INTELLIGENCE</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default EditorialHero;
