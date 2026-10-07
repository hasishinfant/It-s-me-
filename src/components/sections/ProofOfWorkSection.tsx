import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { PROOF_OF_WORK_TIMELINE } from '../../data/portfolioData';

export const ProofOfWorkSection: React.FC = () => {
  return (
    <section id="proof" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#080808] text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Exhibition Wall) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 sm:mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-300 mb-4 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>SECTION 05 // EXHIBITION WALL</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-grotesk tracking-tight text-white uppercase leading-[0.92]">
              PROOF OF WORK
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-neutral-400 font-mono">
            A chronological timeline of shipped prototypes, competitive hackathons, and technical community benchmarks.
          </p>
        </div>

        {/* ── VERTICAL TIMELINE EXHIBITION WALL ── */}
        <div className="relative border-l border-white/15 pl-6 sm:pl-10 ml-2 sm:ml-4 space-y-12 sm:space-y-16">
          {PROOF_OF_WORK_TIMELINE.map((item, idx) => (
            <motion.div
              key={`${item.title}-${idx}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-neutral-900 border-2 border-purple-500 group-hover:scale-125 transition-transform" />

              <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all duration-300">
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="text-purple-400 font-bold">{item.year}</span>
                    <span className="text-neutral-500">•</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-neutral-200">
                      {item.type}
                    </span>
                  </div>
                  {item.metrics && (
                    <span className="text-neutral-400 font-medium text-[11px]">
                      {item.metrics}
                    </span>
                  )}
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl sm:text-3xl font-bold font-grotesk tracking-tight text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-light max-w-3xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProofOfWorkSection;
