import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Terminal } from 'lucide-react';
import { LAB_EXPERIMENTS } from '../../data/portfolioData';

export const ExperimentsLabSection: React.FC = () => {
  return (
    <section id="experiments" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <FlaskConical className="w-3.5 h-3.5 text-neutral-600" />
              <span>SECTION 08 // EXPERIMENTAL BENCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase leading-tight">
              THINGS I'M STILL FIGURING OUT
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-neutral-600 font-mono">
            An irregular laboratory workbench of code fragments, mathematical prototypes, and ongoing investigations.
          </p>
        </div>

        {/* ── IRREGULAR LABORATORY LAYOUT (MASONRY-STYLE BENCH) ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {/* Card 1: Agent Cycle Guard (Code Fragment & Terminal) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white border border-white/10 flex flex-col justify-between shadow-md font-mono"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 text-purple-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>{LAB_EXPERIMENTS[0].category}</span>
                </div>
                <span className="text-neutral-500">{LAB_EXPERIMENTS[0].annotation}</span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-bold font-grotesk tracking-tight text-white">
                {LAB_EXPERIMENTS[0].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                {LAB_EXPERIMENTS[0].description}
              </p>

              {/* Code Snippet Box */}
              <div className="mt-5 p-4 rounded-xl bg-black/60 border border-white/10 text-[11px] text-neutral-300 overflow-x-auto">
                <pre>{LAB_EXPERIMENTS[0].codeSnippet}</pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-neutral-500">
              <span>STATUS: {LAB_EXPERIMENTS[0].status}</span>
              <span className="text-purple-400">CYCLE-FREE GUARANTEE</span>
            </div>
          </motion.div>

          {/* Card 2: 3D Spherical Projection Math */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 flex flex-col justify-between shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/5 text-xs font-mono">
                <span className="text-blue-600 font-bold">{LAB_EXPERIMENTS[1].category}</span>
                <span className="text-neutral-400">{LAB_EXPERIMENTS[1].annotation}</span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-bold font-grotesk tracking-tight text-neutral-950">
                {LAB_EXPERIMENTS[1].title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                {LAB_EXPERIMENTS[1].description}
              </p>

              {/* Math Snippet Box */}
              <div className="mt-5 p-3.5 rounded-xl bg-neutral-100 font-mono text-[10px] text-neutral-800 leading-relaxed overflow-x-auto">
                <pre>{LAB_EXPERIMENTS[1].codeSnippet}</pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>ORBITAL PHYSICS</span>
              <span className="text-neutral-900 font-bold">R3F SHADERS</span>
            </div>
          </motion.div>

          {/* Card 3: Resilient Scraper Rotation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-white border border-black/10 flex flex-col justify-between shadow-sm font-mono text-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-black/5">
                <span className="text-emerald-600 font-bold">{LAB_EXPERIMENTS[2].category}</span>
                <span className="text-neutral-400">{LAB_EXPERIMENTS[2].annotation}</span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-bold font-grotesk tracking-tight text-neutral-950">
                {LAB_EXPERIMENTS[2].title}
              </h3>
              <p className="mt-2 text-neutral-600 font-light leading-relaxed">
                {LAB_EXPERIMENTS[2].description}
              </p>

              <div className="mt-4 p-3.5 rounded-xl bg-neutral-900 text-neutral-200 text-[10px] overflow-x-auto">
                <pre>{LAB_EXPERIMENTS[2].codeSnippet}</pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-neutral-500">
              <span>STATUS: {LAB_EXPERIMENTS[2].status}</span>
              <span className="text-emerald-700 font-bold">99.8% SUCCESS RATE</span>
            </div>
          </motion.div>

          {/* Card 4: Multi-Criteria Decision Scoring Vector Math */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-neutral-900 text-white border border-white/10 flex flex-col justify-between shadow-md font-mono text-xs"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-amber-400 font-bold">{LAB_EXPERIMENTS[3].category}</span>
                <span className="text-neutral-400">{LAB_EXPERIMENTS[3].annotation}</span>
              </div>

              <h3 className="mt-5 text-xl sm:text-2xl font-bold font-grotesk tracking-tight text-white">
                {LAB_EXPERIMENTS[3].title}
              </h3>
              <p className="mt-2 text-neutral-400 font-light leading-relaxed">
                {LAB_EXPERIMENTS[3].description}
              </p>

              <div className="mt-4 p-3.5 rounded-xl bg-black/70 border border-white/10 text-neutral-300 text-[10px] overflow-x-auto">
                <pre>{LAB_EXPERIMENTS[3].codeSnippet}</pre>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-neutral-500">
              <span>STATUS: {LAB_EXPERIMENTS[3].status}</span>
              <span className="text-amber-300 font-bold">NORMALIZED PERCENTILE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ExperimentsLabSection;
