import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Terminal, ChevronRight } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  const { setCursorType, playHover, playClick, setActiveSection } = usePortfolio();

  const scrollToNext = () => {
    playClick();
    setActiveSection('who-i-am');
    const el = document.getElementById('who-i-am');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden z-10"
    >
      {/* Top Ambient Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-wrap items-center gap-3 max-w-7xl mx-auto w-full"
      >
        <span className="px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          AVAILABLE FOR HIGH-IMPACT ROLES & PROJECTS
        </span>
        <span className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-mono flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-slate-400" />
          AI & FULL STACK ARCHITECT
        </span>
      </motion.div>

      {/* Main Editorial Hero Content */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-slate-400 mb-4"
        >
          {PERSONAL_DATA.name} — PERSONAL UNIVERSE
        </motion.p>

        {/* Large Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif italic text-slate-100 tracking-tight leading-[0.95] max-w-5xl"
        >
          "My work begins where <span className="text-shimmer not-italic font-normal">ideas</span> become products."
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 text-lg sm:text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed"
        >
          {PERSONAL_DATA.mission}
        </motion.p>

        {/* Interactive Magnetic CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <motion.button
            onClick={scrollToNext}
            onMouseEnter={() => { setCursorType('hover'); playHover(); }}
            onMouseLeave={() => setCursorType('default')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-full bg-white text-slate-950 text-sm font-mono uppercase font-bold tracking-widest flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] transition-all group"
          >
            <span>Explore Experience</span>
            <ChevronRight className="w-4 h-4 text-cyan-600 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <a
            href="#video-resume"
            onClick={() => playClick()}
            onMouseEnter={() => { setCursorType('hover'); playHover(); }}
            onMouseLeave={() => setCursorType('default')}
            className="px-6 py-4 rounded-full glass-button text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2 hover:text-white"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Watch Video Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="max-w-7xl mx-auto w-full flex items-center justify-between border-t border-slate-800/60 pt-6 text-xs font-mono text-slate-500"
      >
        <span>SCROLL TO TRAVERSE UNIVERSE</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center gap-2 text-slate-400"
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
        <span>60 FPS GPU ACCELERATED</span>
      </motion.div>
    </section>
  );
};
