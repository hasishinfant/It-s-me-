import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowRight } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';

export const ProjectRevealSection: React.FC = () => {
  // Focus on top 4 flagship showcase projects
  const revealProjects = PROJECTS.slice(0, 4);

  return (
    <section
      id="projects-reveal"
      className="relative py-20 sm:py-28 px-4 sm:px-8 border-t border-black/5 bg-[#f6f5f1]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/70 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3">
              <span>02 / SHOWCASE</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-neutral-950">
              <span className="font-grotesk font-semibold">Selected</span>{' '}
              <span className="font-editorial italic">productions.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-neutral-600 leading-relaxed">
            High-leverage applications engineered with autonomous AI agents, spatial computing,
            and high-throughput backend pipelines.
          </p>
        </div>

        {/* ── PROJECT SHOWCASE ROW 1 & 2 (Frames 05–07: 08s–14s) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {revealProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between rounded-3xl bg-white border border-black/10 p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 preserve-3d"
            >
              {/* Card Media Preview Canvas */}
              <div className="relative w-full h-56 sm:h-64 lg:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 text-white p-6 flex flex-col justify-between group-hover:scale-[1.01] transition-transform duration-300">
                {/* Visual Decorative Gradient & Background Mesh */}
                <div
                  className="absolute inset-0 opacity-25 mix-blend-screen pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${project.planetColor}, transparent 60%)`,
                  }}
                />

                {/* Top Badge Info */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Center Visual Mockup Accent */}
                <div className="relative z-10 my-auto text-left">
                  <div className="text-2xl sm:text-3xl font-grotesk font-bold tracking-tight text-white flex items-center gap-2">
                    <span>{project.name}</span>
                    <Sparkles className="w-4 h-4 text-amber-300" />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 mt-2 line-clamp-2 max-w-sm">
                    {project.tagline}
                  </p>
                </div>

                {/* Bottom Card Metric Pill */}
                <div className="relative z-10 flex items-center gap-2">
                  {project.metrics[0] && (
                    <span className="px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-[11px] font-mono text-emerald-300">
                      ✦ {project.metrics[0]}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Meta & Typography Details Below */}
              <div className="mt-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-grotesk font-semibold text-neutral-900 group-hover:text-black transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & View Details */}
                <div className="mt-5 pt-4 border-t border-black/5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-neutral-100 text-[10px] font-mono text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.demoUrl || project.githubUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 hover:text-purple-600 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectRevealSection;
