import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveCursor3D } from '../canvas/InteractiveCursor3D';
import { ArrowDownRight, Sparkles } from 'lucide-react';

interface LetsBuildSectionProps {
  onTalkClick?: () => void;
}

export const LetsBuildSection: React.FC<LetsBuildSectionProps> = ({ onTalkClick }) => {
  return (
    <section className="relative py-32 sm:py-44 px-4 sm:px-8 bg-[#0c0c0e] text-white border-t border-white/10 overflow-hidden flex flex-col items-center justify-center text-center">
      {/* ── MASSIVE TYPOGRAPHY WITH 3D CURSOR INTERSECTION (Frame 16: 32s) ── */}
      <div className="relative max-w-5xl mx-auto flex flex-col items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-mono uppercase tracking-widest text-neutral-300 mb-8 border border-white/10"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>COLLABORATION & NEW BUILDS</span>
        </motion.div>

        {/* Headline with 3D Object Intersecting */}
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight text-white leading-[0.95] select-none"
          >
            <span className="font-grotesk font-bold block">Let's build</span>
            <span className="font-editorial italic font-normal text-neutral-100 block mt-2">
              something.
            </span>
          </motion.h2>

          {/* 3D Floating Cursor Intersecting the Typography (Frame 16: 32s) */}
          <div className="absolute -top-12 -right-8 sm:-right-16 md:-right-24 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 pointer-events-none">
            <InteractiveCursor3D className="w-full h-full" />
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-8 max-w-lg text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
          Got an ambitious product idea, an autonomous AI workflow, or a high-craft web application
          ready to ship? Let's bring it to life.
        </p>

        {/* Interactive Magnetic CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12"
        >
          <button
            onClick={() => {
              if (onTalkClick) onTalkClick();
              else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-neutral-950 font-grotesk font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all shadow-[0_10px_35px_rgba(255,255,255,0.15)] active:scale-95"
          >
            <span>START A CONVERSATION</span>
            <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default LetsBuildSection;
