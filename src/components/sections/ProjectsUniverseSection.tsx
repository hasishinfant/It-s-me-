import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Cpu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';

export const ProjectsUniverseSection: React.FC = () => {
  const { setCursorType, playHover, playClick, selectedProject, setSelectedProject } =
    usePortfolio();

  return (
    <section id="projects" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10">
      {/* Watermark */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[18rem] top-16 right-0 opacity-[0.02]">
        WORK
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">003</span> — CASE_STUDIES
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Featured</span>
            <span className="block">Case Studies</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Each project is built from scratch as an end-to-end experience. Click to open the deep architectural case study.
          </p>
        </div>

        {/* Projects Grid — Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => {
                playClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => {
                setCursorType('view');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-card p-7 min-h-[400px] flex flex-col justify-between group cursor-pointer relative"
            >
              {/* Large Background Index */}
              <div className="absolute top-3 right-4 brutalist-index text-[5rem] md:text-[7rem]">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Top Meta */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="brutalist-tag group-hover:border-amber-400 group-hover:text-amber-400">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/20 group-hover:text-amber-400 transition-colors" />
                </div>

                <h3 className="font-brutalist font-bold text-3xl md:text-4xl tracking-[-1px] text-white group-hover:text-amber-400 transition-colors leading-none uppercase glitch-text">
                  {project.name}
                </h3>
                <p className="text-xs font-mono text-white/50 leading-relaxed">
                  {project.tagline}
                </p>

                {/* Tech Stack — Brutalist Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {project.techStack.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-mono text-white/40 border border-white/10 px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[9px] font-mono text-white/30 border border-white/10 px-2 py-0.5">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Metric & Trigger */}
              <div className="mt-8 pt-4 border-t-2 border-white/10 flex items-center justify-between text-[10px] font-mono relative z-10">
                <span className="text-amber-400">✦ {project.metrics[0]}</span>
                <span className="text-white/30 group-hover:text-white uppercase tracking-wider transition-colors">
                  OPEN_STUDY →
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Deep-Dive Case Study Modal — Brutalist */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="brutalist-card border-amber-400/30 p-6 md:p-10 max-w-3xl w-full max-h-[85vh] overflow-y-auto space-y-8 relative raw-grid-dense"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    playClick();
                    setSelectedProject(null);
                  }}
                  className="absolute top-6 right-6 p-2 brutalist-border text-white/80 hover:text-white hover:border-amber-400 cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="brutalist-tag text-amber-400 border-amber-400/40">
                      {selectedProject.category}
                    </span>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      CASE_STUDY
                    </span>
                  </div>
                  <h2 className="font-brutalist font-bold text-4xl sm:text-6xl tracking-[-2px] text-white uppercase">
                    {selectedProject.name}
                  </h2>
                  <p className="text-sm text-white/70 font-body font-light leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Live Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClick()}
                      className="brutalist-btn-amber text-xs flex items-center gap-2 py-3 px-5"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LAUNCH_DEMO</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClick()}
                      className="brutalist-btn text-xs flex items-center gap-2 py-3 px-5"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>VIEW_CODE</span>
                    </a>
                  )}
                </div>

                {/* Performance Metrics */}
                <div className="space-y-3">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                    PROVEN_IMPACT
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {selectedProject.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="brutalist-card p-3 text-xs font-mono text-white/80"
                      >
                        ✦ {m}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architecture Breakdown */}
                <div className="space-y-4 pt-4 border-t-2 border-white/10">
                  <div className="space-y-2">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/50 flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-cyan-400" />
                      SYSTEM_ARCHITECTURE
                    </h4>
                    <p className="text-xs font-body text-white/70 leading-relaxed">
                      {selectedProject.architecture}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="brutalist-card p-4 space-y-1 border-amber-400/20">
                      <span className="text-[9px] font-mono text-amber-400 uppercase font-bold tracking-wider">
                        CHALLENGES
                      </span>
                      <p className="text-xs font-body text-white/70">
                        {selectedProject.challenges}
                      </p>
                    </div>
                    <div className="brutalist-card p-4 space-y-1 border-emerald-400/20">
                      <span className="text-[9px] font-mono text-emerald-400 uppercase font-bold tracking-wider">
                        LESSONS
                      </span>
                      <p className="text-xs font-body text-white/70">{selectedProject.lessons}</p>
                    </div>
                  </div>
                </div>

                {/* Full Tech Stack */}
                <div className="space-y-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    TECH_STACK
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech, i) => (
                      <span key={i} className="brutalist-tag text-cyan-400 border-cyan-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
