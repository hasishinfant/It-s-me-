import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ArrowDown } from 'lucide-react';
import { FadingVideo } from '../FadingVideo';
import { usePortfolio } from '../../context/PortfolioContext';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4';

const motionProps = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 25 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
});

export const HeroSection: React.FC = () => {
  const { setCursorType, playHover, playClick, setActiveSection, setIsHireDrawerOpen } =
    usePortfolio();

  const scrollToProjects = () => {
    playClick();
    setActiveSection('projects');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const openStartProject = () => {
    playClick();
    setIsHireDrawerOpen(true);
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-between raw-grid"
    >
      {/* Background Video with Volumetric Fading */}
      <FadingVideo
        src={HERO_VIDEO_URL}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0 opacity-60"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Volumetric Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black pointer-events-none z-[1]" />

      {/* Scanline Overlay */}
      <div className="absolute inset-0 scanline-overlay pointer-events-none z-[2]" />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col h-full justify-between px-6 md:px-12 lg:px-16 pt-28 pb-8 max-w-7xl mx-auto w-full">
        {/* Top Status Badge — Brutalist */}
        <motion.div {...motionProps(0.3)} className="flex items-center gap-4">
          <div className="section-marker">
            <span className="text-amber-400">001</span> — HERO
          </div>
          <div className="hidden sm:flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-widest">
            <span className="w-2 h-2 bg-amber-400 animate-pulse" />
            <span>HASISH INFANT &bull; CREATIVE DEV & AI ENGINEER</span>
          </div>
        </motion.div>

        {/* Main Center Content — Brutalist Massive Typography */}
        <div className="my-auto py-6">
          {/* Brutalist Watermark Number */}
          <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 brutalist-index text-[12rem] md:text-[20rem] lg:text-[28rem] opacity-[0.03] z-0">
            01
          </div>

          {/* Subtitle Label — Monospace */}
          <motion.p
            {...motionProps(0.4)}
            className="text-[10px] md:text-xs font-mono tracking-[0.4em] uppercase text-amber-400/80 mb-6"
          >
            // EXPERIENCES_BEFORE_WEBSITES
          </motion.p>

          {/* Master Headline — Brutalist Text Stroke + Filled Hybrid */}
          <motion.div {...motionProps(0.6)} className="max-w-6xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem] font-brutalist font-bold text-white leading-[0.9] tracking-[-4px] uppercase">
              <span className="text-stroke block">I BUILD</span>
              <span className="block text-white">DIGITAL</span>
              <span className="text-stroke-amber block">EXPERIENCES</span>
            </h1>
          </motion.div>

          {/* Subheading — Clean Body Font */}
          <motion.p
            {...motionProps(0.9)}
            className="mt-8 text-sm md:text-lg text-white/60 font-body font-light max-w-xl leading-relaxed"
          >
            I combine design, engineering, multi-agent AI, and cinematic motion to help ambitious startups and brands stand out.
          </motion.p>

          {/* Action Buttons — Brutalist Style */}
          <motion.div {...motionProps(1.2)} className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToProjects}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-btn-amber flex items-center gap-3 text-sm cursor-pointer group"
            >
              <span>Explore My World</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openStartProject}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-btn flex items-center gap-3 text-sm cursor-pointer group"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-black transition-colors" />
              <span>Start A Project</span>
            </button>
          </motion.div>
        </div>

        {/* Bottom Trust & Scroll Bar — Brutalist */}
        <motion.div
          {...motionProps(1.5)}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t-2 border-white/10 pt-4 text-[10px] font-mono text-white/40 uppercase tracking-widest"
        >
          <div className="flex items-center gap-3">
            <span className="font-brutalist font-bold text-sm text-amber-400">HI.</span>
            <span className="text-white/20">|</span>
            <span>Bangalore, India</span>
          </div>

          <div className="flex items-center gap-2 animate-bounce">
            <ArrowDown className="w-3.5 h-3.5 text-amber-400" />
            <span>SCROLL_INTO_SCENE</span>
          </div>

          <div className="hidden sm:block text-white/30">
            60FPS &bull; WEBGL &bull; GPU_ACCELERATED
          </div>
        </motion.div>
      </div>
    </section>
  );
};
