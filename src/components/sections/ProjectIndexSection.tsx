import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECT_INDEX_DATA } from '../../data/portfolioData';

export const ProjectIndexSection: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<typeof PROJECT_INDEX_DATA[0] | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="index"
      onMouseMove={handleMouseMove}
      className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3 border border-black/5">
              <span>SECTION 07 // ARCHIVE REPOSITORY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase">
              PROJECT INDEX
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase">
            Complete catalogue of builds, systems, and experiments
          </p>
        </div>

        {/* ── EDITORIAL INDEX TABLE ── */}
        <div className="border-t border-black/15 divide-y divide-black/10">
          {/* Table Header Row */}
          <div className="py-3 px-4 hidden md:grid grid-cols-12 text-[11px] font-mono uppercase tracking-wider text-neutral-400">
            <span className="col-span-5">PROJECT</span>
            <span className="col-span-2">YEAR</span>
            <span className="col-span-3">TYPE</span>
            <span className="col-span-2 text-right">ROLE</span>
          </div>

          {PROJECT_INDEX_DATA.map((row) => (
            <motion.div
              key={row.id}
              onMouseEnter={() => setHoveredProject(row)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group py-5 sm:py-6 px-4 grid grid-cols-2 md:grid-cols-12 items-center gap-2 sm:gap-4 transition-all duration-200 hover:bg-white/80 cursor-pointer rounded-xl"
            >
              {/* Project Name */}
              <div className="col-span-1 md:col-span-5 flex items-center gap-3">
                <span className="text-base sm:text-xl font-bold font-grotesk text-neutral-950 group-hover:text-black transition-colors">
                  {row.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              {/* Year */}
              <div className="hidden md:block col-span-2 text-xs font-mono text-neutral-500">
                {row.year}
              </div>

              {/* Type */}
              <div className="col-span-1 md:col-span-3 text-right md:text-left text-xs font-mono text-neutral-600 font-medium">
                {row.type}
              </div>

              {/* Role */}
              <div className="hidden md:block col-span-2 text-right text-xs font-mono text-neutral-500 uppercase">
                {row.role}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── FLOATING CURSOR-FOLLOWING THUMBNAIL PREVIEW ── */}
        <AnimatePresence>
          {hoveredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePos.x + 24,
                y: mousePos.y - 60,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
              className="fixed pointer-events-none z-50 hidden lg:block"
            >
              <div className="p-4 rounded-2xl bg-neutral-950 text-white border border-white/20 shadow-2xl backdrop-blur-md w-56 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="text-purple-400 font-bold">● {hoveredProject.year}</span>
                  <span>{hoveredProject.role}</span>
                </div>
                <div className="text-sm font-bold font-grotesk text-white">
                  {hoveredProject.name}
                </div>
                <div className="text-[11px] font-mono text-neutral-300">
                  {hoveredProject.type}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
export default ProjectIndexSection;
