import React from 'react';
import { motion } from 'framer-motion';
import { Share2, BookOpen, ArrowUpRight } from 'lucide-react';
import { BUILDING_IN_PUBLIC_DATA, PERSONAL_DATA } from '../../data/portfolioData';

export const BuildingInPublicSection: React.FC = () => {
  return (
    <section id="building-in-public" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <Share2 className="w-3 h-3 text-neutral-600" />
              <span>SECTION 04 // LEARNING IN PUBLIC</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase leading-tight">
              {BUILDING_IN_PUBLIC_DATA.headline}
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-600 font-mono">
            {BUILDING_IN_PUBLIC_DATA.subheadline}
          </p>
        </div>

        {/* ── 4 EDITORIAL STORY FRAGMENTS (RETROS & TAKEAWAYS) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {BUILDING_IN_PUBLIC_DATA.fragments.map((frag, idx) => (
            <motion.div
              key={frag.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-black/5 text-xs font-mono">
                  <span className="px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 font-bold">
                    {frag.tag}
                  </span>
                  <span className="text-neutral-400 uppercase">{frag.topic}</span>
                </div>

                <h3 className="mt-5 text-xl sm:text-2xl font-bold font-grotesk tracking-tight text-neutral-950">
                  {frag.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {frag.note}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-neutral-400">
                <span>DOCUMENTED BUILD</span>
                <span className="text-neutral-900 font-medium">BENGALURU TECH</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SECONDARY METRICS BAR (STORY FIRST, METRICS SECONDARY) ── */}
        <div className="p-6 sm:p-8 rounded-3xl bg-neutral-100/80 border border-black/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-neutral-700" />
            <span className="text-xs sm:text-sm font-mono text-neutral-600">
              Read real-time development retrospectives on LinkedIn & GitHub:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono">
            {BUILDING_IN_PUBLIC_DATA.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-left">
                <span className="text-base sm:text-lg font-bold font-grotesk text-neutral-950">
                  {m.value}
                </span>{' '}
                <span className="text-neutral-500 uppercase text-[11px]">{m.label}</span>
              </div>
            ))}
            <a
              href={PERSONAL_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-950 text-white font-grotesk font-semibold text-xs uppercase hover:bg-neutral-800 transition-colors ml-auto"
            >
              <span>FOLLOW JOURNEY</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuildingInPublicSection;
