import React from 'react';
import { motion } from 'framer-motion';
import { FadingVideo } from './FadingVideo';
import { BlurText } from './BlurText';
import { ArrowUpRight, Play, ClockIcon, GlobeIcon } from './Icons';

const HERO_VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4';

const motionProps = (delay: number) => ({
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
});

export const HeroSection: React.FC = () => {
  const navLinks = ['Work', 'Studio', 'Services', 'Journal', 'Contact'];
  const trustLogos = ['Aeon', 'Vela', 'Apex', 'Orbit', 'Zeno'];

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col">
      {/* Background Video */}
      <FadingVideo
        src={HERO_VIDEO_URL}
        className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
        style={{ width: '120%', height: '120%' }}
      />

      {/* Hero Content Overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <header className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
          {/* Brand Circle */}
          <a
            href="#"
            className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-105"
            aria-label="Logo"
          >
            <span className="font-heading italic text-2xl text-white">a</span>
          </a>

          {/* Navigation Links Pill */}
          <nav className="hidden md:flex items-center gap-1 liquid-glass rounded-full px-1.5 py-1.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-white text-black rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1.5 font-body hover:bg-white/90 transition-colors ml-1"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
          </nav>

          {/* Spacer div */}
          <div className="h-12 w-12" />
        </header>

        {/* Main Content Centered */}
        <main className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
          {/* Badge */}
          <motion.div {...motionProps(0.4)}>
            <div className="liquid-glass rounded-full px-4 py-1.5 inline-flex items-center gap-2 text-xs font-body">
              <span className="bg-white text-black text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full tracking-wide">
                New
              </span>
              <span className="text-white/90">
                Booking Q3 2026 engagements &mdash; limited capacity
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div className="mt-6 max-w-3xl">
            <BlurText
              text="Crafted Digital Experiences Built to Outlast Trends"
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
              delayOffset={0.4}
            />
          </div>

          {/* Subtext */}
          <motion.p
            {...motionProps(0.8)}
            className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
          >
            We are a small studio of designers and engineers shaping brand-defining websites for
            ambitious companies. Precise typography, cinematic motion, and code you can be proud
            of.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div {...motionProps(1.1)} className="mt-6 flex items-center gap-6">
            <a
              href="#contact"
              className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-body font-medium text-white hover:opacity-90 transition-opacity"
            >
              Start a Project
              <ArrowUpRight size={16} />
            </a>
            <button
              type="button"
              className="flex items-center gap-2 text-sm font-body font-medium text-white hover:text-white/80 transition-colors cursor-pointer"
            >
              <Play size={14} />
              Watch Showreel
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div {...motionProps(1.3)} className="mt-8 flex gap-4">
            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <ClockIcon className="text-white/80" size={20} />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                6 Weeks
              </div>
              <div className="text-xs text-white/70 font-body mt-1">
                Average End-to-End Launch Time
              </div>
            </div>

            <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
              <GlobeIcon className="text-white/80" size={20} />
              <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4 text-white">
                140+
              </div>
              <div className="text-xs text-white/70 font-body mt-1">
                Brands Shipped Across Four Continents
              </div>
            </div>
          </motion.div>
        </main>

        {/* Bottom Trust Bar */}
        <motion.div
          {...motionProps(1.4)}
          className="flex flex-col items-center gap-4 pb-8 text-center"
        >
          <div className="liquid-glass rounded-full px-4 py-1.5 text-xs text-white/80 font-body">
            Trusted by founders, operators, and creative directors worldwide
          </div>

          <div className="flex items-center gap-12 md:gap-16">
            {trustLogos.map((logo) => (
              <span
                key={logo}
                className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/90"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
