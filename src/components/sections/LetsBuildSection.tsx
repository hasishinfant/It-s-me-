import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Compass } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { OutroIdentity3D } from '../canvas/OutroIdentity3D';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const LetsBuildSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 sm:py-44 px-4 sm:px-8 bg-[#080808] text-white border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background Subtle Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#18181b_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10 space-y-10">
        {/* Returning Signature 3D Identity Object (Completes the Visual Loop) */}
        <div className="relative flex items-center justify-center">
          <OutroIdentity3D />
        </div>

        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300 border border-white/10"
        >
          <Compass className="w-3.5 h-3.5 text-purple-400" />
          <span>SECTION 11 // FINAL COMMISSIONS</span>
        </motion.div>

        {/* Giant Editorial Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold font-grotesk tracking-tight text-white leading-[0.92] select-none uppercase"
        >
          <span className="block">LET'S BUILD</span>
          <span className="block text-neutral-200">SOMETHING</span>
          <span className="font-editorial italic font-normal text-neutral-300 block lowercase text-6xl sm:text-8xl md:text-9xl lg:text-[9.5rem] mt-1">
            good.
          </span>
        </motion.h2>

        {/* Small Supporting Copy */}
        <p className="max-w-xl text-sm sm:text-base md:text-lg text-neutral-400 font-light leading-relaxed">
          "Have an idea, opportunity, internship, collaboration, or weird problem worth exploring?"
        </p>

        {/* ── 3 EDITORIAL ACTION BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <a
            href={`mailto:${PERSONAL_DATA.socials.email}`}
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white text-neutral-950 font-grotesk font-bold text-xs uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_10px_35px_rgba(255,255,255,0.12)] active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_DATA.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-grotesk font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LINKEDIN</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_DATA.socials.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 font-grotesk font-semibold text-xs uppercase tracking-wider transition-all active:scale-95"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GITHUB</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* Identity & Status Tag */}
        <div className="pt-8 text-xs font-mono text-neutral-400 space-y-1">
          <div className="font-bold text-white tracking-widest uppercase">{PERSONAL_DATA.name}</div>
          <div>{PERSONAL_DATA.location.toUpperCase()}</div>
          <div className="text-emerald-400 font-semibold">{PERSONAL_DATA.status}</div>
        </div>
      </div>
    </section>
  );
};
export default LetsBuildSection;
