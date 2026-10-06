import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Sparkles, Terminal, Globe, Shield, Video, Compass } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';

const PROJECT_ICONS: Record<string, React.ReactNode> = {
  opus: <Terminal className="w-4 h-4 text-purple-600" />,
  opportunx: <Sparkles className="w-4 h-4 text-indigo-600" />,
  oceanraksha: <Globe className="w-4 h-4 text-emerald-600" />,
  neoscholar: <Code className="w-4 h-4 text-amber-600" />,
  travelsphere: <Compass className="w-4 h-4 text-pink-600" />,
  attendq: <Shield className="w-4 h-4 text-cyan-600" />,
  videoy: <Video className="w-4 h-4 text-rose-600" />,
};

const PROJECT_YEARS: Record<string, string> = {
  opus: '2026',
  opportunx: '2025',
  oceanraksha: '2025',
  neoscholar: '2024',
  travelsphere: '2024',
  attendq: '2023',
  videoy: '2024',
};

const PROJECT_ROLES: Record<string, string> = {
  opus: 'Lead AI Architect',
  opportunx: 'Founder & Full Stack Lead',
  oceanraksha: 'Computer Vision Lead',
  neoscholar: 'Core Engineer & R3F Lead',
  travelsphere: 'Product Engineer',
  attendq: 'Mobile AI Developer',
  videoy: 'Full Stack & WebAssembly',
};

export const ThingsIveBuiltSection: React.FC = () => {
  return (
    <section id="things-built" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        {/* Header (Frames 12–13: 24s–26s) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-3">
              <span>07 / CHRONOLOGICAL ARCHIVE</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-950">
              <span className="font-grotesk font-semibold">Things</span>{' '}
              <span className="font-editorial italic">I've built.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs sm:text-sm text-neutral-600 font-mono">
            Hover each row to inspect live metrics, architecture stack, and role highlights.
          </p>
        </div>

        {/* ── CLEAN INTERACTIVE ROW LIST WITH FLOATING PREVIEW (Frames 12–13) ── */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              data-interactive="true"
              data-preview-title={project.name}
              data-preview-category={project.category}
              data-preview-year={PROJECT_YEARS[project.id] || '2025'}
              data-preview-metrics={project.metrics[0] || ''}
              className="group py-6 sm:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-colors hover:bg-white/70 px-4 -mx-4 rounded-2xl cursor-pointer"
            >
              {/* Left Column: Icon + Name */}
              <div className="flex items-center gap-4 sm:gap-6 min-w-[260px]">
                <div className="p-2.5 rounded-xl bg-white border border-black/5 shadow-sm group-hover:scale-110 transition-transform">
                  {PROJECT_ICONS[project.id] || <Sparkles className="w-4 h-4 text-neutral-600" />}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-grotesk font-bold text-neutral-900 group-hover:text-black">
                    {project.name}
                  </h3>
                  <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Center Column: Role & Year */}
              <div className="hidden sm:flex flex-col text-left md:min-w-[200px]">
                <span className="text-xs font-semibold text-neutral-800">
                  {PROJECT_ROLES[project.id] || 'Full Stack Engineer'}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">
                  {PROJECT_YEARS[project.id] || '2025'}
                </span>
              </div>

              {/* Right Column: Stack Badges & Link */}
              <div className="flex items-center justify-between md:justify-end gap-4">
                <div className="flex flex-wrap gap-1.5 max-w-xs">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-neutral-100 text-[10px] font-mono text-neutral-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.demoUrl || project.githubUrl || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white border border-black/10 group-hover:bg-neutral-950 group-hover:text-white transition-all text-neutral-700 shadow-sm shrink-0"
                  title="Open Project"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ThingsIveBuiltSection;
