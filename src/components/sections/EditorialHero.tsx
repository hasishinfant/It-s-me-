import React from 'react';
import { motion } from 'framer-motion';
import { HeroIdentity3D } from '../canvas/HeroIdentity3D';
import { ArrowDown, Sparkles, Terminal, Layers, Cpu, MousePointer } from 'lucide-react';

interface EditorialHeroProps {
  onExploreClick?: () => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-[96vh] flex flex-col justify-between items-center px-4 sm:px-8 pt-6 pb-12 overflow-hidden"
    >
      {/* ── TOP COMPOSITION: 3D IDENTITY OBJECT & 4 FLOATING CIRCULAR BUBBLES ── */}
      <div className="relative w-full flex flex-col items-center justify-center mt-2 sm:mt-4">
        {/* Floating Circular UI Badges Orbiting the Identity Object (Frames 01-04) */}
        <div className="relative flex items-center justify-center">
          {/* Central 3D Canvas */}
          <HeroIdentity3D className="z-10" />

          {/* Bubble 1: Top Left - AI Systems */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -top-2 left-2 sm:-left-8 md:-left-16 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Cpu className="w-5 h-5 text-neutral-800 group-hover:text-purple-600 transition-colors" />
            <span className="sr-only">AI Systems</span>
          </motion.div>

          {/* Bubble 2: Bottom Left - Full Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute bottom-6 left-0 sm:-left-12 md:-left-20 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Layers className="w-5 h-5 text-neutral-800 group-hover:text-blue-600 transition-colors" />
            <span className="sr-only">Full Stack</span>
          </motion.div>

          {/* Bubble 3: Top Right - Playful Cursor Motif & 3D Web */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -top-1 right-2 sm:-right-8 md:-right-16 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Terminal className="w-5 h-5 text-neutral-800 group-hover:text-emerald-600 transition-colors" />
            {/* Playful Floating Cursor Pointer Icon (Frames 01-04) */}
            <motion.div
              animate={{ y: [0, -4, 0], x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 p-1 rounded-full bg-neutral-900 text-white shadow-sm"
            >
              <MousePointer className="w-3 h-3" />
            </motion.div>
          </motion.div>

          {/* Bubble 4: Bottom Right - Craft / Sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-8 right-0 sm:-right-12 md:-right-20 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:scale-110 transition-transform cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-neutral-800 group-hover:text-amber-500 transition-colors" />
            <span className="sr-only">Craft</span>
          </motion.div>
        </div>
      </div>

      {/* ── CENTER COMPOSITION: EYEBROW & MASSIVE EDITORIAL HEADLINE ── */}
      <div className="relative w-full max-w-5xl mx-auto text-center flex flex-col items-center mt-2 sm:mt-4 z-20">
        {/* Tiny Eyebrow Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/60 border border-neutral-300/80 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-700 mb-4 sm:mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
          <span>AI ENGINEER & FULL STACK ARCHITECT • 2026</span>
        </motion.div>

        {/* Giant Headline: Grotesk Sans + Italic Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-neutral-950 leading-[0.92] select-none"
        >
          <span className="font-grotesk font-semibold block">Our paths</span>
          <span className="font-editorial italic font-normal tracking-tight text-neutral-900 block mt-1">
            just crossed.
          </span>
        </motion.h1>

        {/* Positioning Statement */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 sm:mt-8 max-w-xl text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed text-center px-4"
        >
          I build digital experiences that refuse to be ignored. Bridging autonomous AI intelligence,
          obsessively refined UI, and resilient full-stack systems.
        </motion.p>
      </div>

      {/* ── BOTTOM TEASER: PROJECT STRIP PARTIALLY VISIBLE (Frame 04: 06s) ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="relative w-full max-w-6xl mx-auto mt-12 sm:mt-16 flex flex-col items-center"
      >
        <button
          onClick={onExploreClick}
          className="group flex flex-col items-center gap-1.5 text-neutral-500 hover:text-neutral-950 transition-colors mb-6"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 group-hover:text-neutral-700">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-neutral-700" />
          </motion.div>
        </button>

        {/* Peek Cards Strip - Physical cards entering the stage */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 opacity-75 hover:opacity-100 transition-opacity">
          <div className="h-14 sm:h-20 rounded-2xl bg-white border border-black/10 shadow-sm p-3 flex items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">OPUS</span>
            <span className="text-[10px] font-mono text-neutral-400">01 / AI AGENTS</span>
          </div>
          <div className="h-14 sm:h-20 rounded-2xl bg-white border border-black/10 shadow-sm p-3 flex items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">OpportunX</span>
            <span className="text-[10px] font-mono text-neutral-400">02 / PLATFORM</span>
          </div>
          <div className="hidden md:flex h-14 sm:h-20 rounded-2xl bg-white border border-black/10 shadow-sm p-3 items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">OceanRaksha</span>
            <span className="text-[10px] font-mono text-neutral-400">03 / VISION AI</span>
          </div>
          <div className="hidden md:flex h-14 sm:h-20 rounded-2xl bg-white border border-black/10 shadow-sm p-3 items-center justify-between">
            <span className="text-xs font-semibold font-grotesk text-neutral-900">NeoScholar</span>
            <span className="text-[10px] font-mono text-neutral-400">04 / 3D GRAPH</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default EditorialHero;
