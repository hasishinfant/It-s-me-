import React from 'react';
import { motion } from 'framer-motion';

const MARQUEE_ITEMS_1 = [
  '✦ CREATIVE ENGINEERING',
  '✺ AUTONOMOUS AI AGENTS',
  '✶ SPATIAL 3D WEBGL',
  '✱ RESILIENT FULL-STACK',
  '✦ GENERATIVE PIPELINES',
  '✺ DETERMINISTIC DAGS',
  '✶ HIGH-THROUGHPUT QUEUES',
  '✱ ZERO-REGRET CRAFT',
];

const MARQUEE_ITEMS_2 = [
  '⚡ HIGH VELOCITY PRODUCTION',
  '◈ NEXT.JS & TYPESCRIPT',
  '⌘ THREE.JS SHADERS',
  '✦ SUPABASE & PGVECTOR',
  '⚡ 99.4% AGENT PRECISION',
  '◈ 12K+ ACTIVE BUILDERS',
  '⌘ NATIONAL HACKATHON CHAMPION',
  '✦ BENGALURU & WORLDWIDE',
];

export const KineticAgencyMarquee: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden py-6 bg-neutral-950 text-white border-y border-white/10 select-none">
      {/* Subtle Scanline Texture Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] pointer-events-none opacity-20" />

      {/* Row 1: Leftward Infinite Drift */}
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
          className="flex items-center gap-8 text-xs sm:text-sm font-mono tracking-widest uppercase font-semibold shrink-0"
        >
          {[...MARQUEE_ITEMS_1, ...MARQUEE_ITEMS_1].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 hover:text-amber-300 transition-colors">
              <span className="text-neutral-200">{item}</span>
              <span className="text-neutral-600">//</span>
            </span>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Rightward Infinite Drift with Muted Contrast */}
      <div className="flex whitespace-nowrap overflow-hidden mt-3 pt-3 border-t border-white/5">
        <motion.div
          animate={{ x: ['-50%', '0%'] }}
          transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
          className="flex items-center gap-8 text-[11px] sm:text-xs font-mono tracking-wider uppercase text-neutral-400 shrink-0"
        >
          {[...MARQUEE_ITEMS_2, ...MARQUEE_ITEMS_2].map((item, idx) => (
            <span key={idx} className="flex items-center gap-8 hover:text-purple-400 transition-colors">
              <span>{item}</span>
              <span className="text-neutral-700">✦</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
export default KineticAgencyMarquee;
