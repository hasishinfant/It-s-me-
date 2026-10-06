import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';

const CATEGORIES = ['All', 'AI & ML', 'Full Stack', 'ClimateTech', 'EdTech', 'Automation'] as const;

export const SelectedWorkSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="selected-work" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header & Category Filters (Frame 10: 20s) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3">
              <span>05 / ARCHIVE INDEX</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-950">
              <span className="font-grotesk font-semibold">Selected</span>{' '}
              <span className="font-editorial italic">works.</span>
            </h2>
          </div>

          {/* Understated Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                    active
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'bg-white/80 hover:bg-white text-neutral-600 hover:text-neutral-950 border border-black/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── RESPONSIVE VISUAL PROJECT GRID ── */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-white border border-black/10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Header / Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-950 p-5 flex flex-col justify-between text-white">
                  <div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${project.planetColor}, transparent 65%)`,
                    }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-neutral-300">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                          title="Code"
                        >
                          <GithubIcon className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <div className="text-xl font-grotesk font-semibold tracking-tight text-white flex items-center gap-2">
                      <span>{project.name}</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    </div>
                    <div className="text-xs text-neutral-400 mt-1 line-clamp-1">{project.tagline}</div>
                  </div>

                  {project.metrics[0] && (
                    <div className="relative z-10 text-[10px] font-mono text-emerald-400">
                      ✦ {project.metrics[0]}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-black/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-neutral-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.demoUrl || project.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 group-hover:text-purple-600 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default SelectedWorkSection;
