import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { PROJECTS } from '../../data/portfolioData';

export const SelectedWorkSection: React.FC = () => {
  return (
    <section id="work" className="w-full px-4 sm:px-8 py-24 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-grotesk tracking-tight text-black uppercase">
              THINGS I'VE BUILT
            </h2>
            <p className="mt-2 text-base sm:text-lg font-body text-neutral-800 font-medium">
              Production web applications, hackathon-winning architectures, and AI systems.
            </p>
          </div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] p-6 sm:p-10 relative overflow-hidden"
            >
              {/* Top Meta Strip */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-bold text-neutral-600 uppercase tracking-wider">
                  {project.category} · {project.year}
                </span>
                <span className="font-mono text-xs font-black text-black">
                  0{idx + 1}
                </span>
              </div>

              {/* Title & Tagline */}
              <div className="mb-4">
                <h3 className="text-3xl sm:text-5xl font-black font-grotesk text-black uppercase tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs sm:text-sm font-bold text-neutral-600 uppercase">
                  {project.tagline}
                </p>
              </div>

              {/* Descriptions & Architecture */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-base sm:text-lg font-body text-neutral-900 leading-relaxed font-medium">
                    {project.longDescription || project.description}
                  </p>

                  {/* Architecture Highlight Box */}
                  <div className="p-4 bg-[#F4F4F0] border-2 border-black shadow-[3px_3px_0px_#000]">
                    <div className="font-mono text-xs font-bold text-neutral-800 uppercase flex items-center gap-1.5 mb-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>ARCHITECTURE:</span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono text-neutral-800">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Right Column: Highlights & Stack */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="space-y-2">
                    {project.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-center gap-2 px-3 py-1.5 bg-white border border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 bg-white border border-black text-xs font-mono font-bold text-black shadow-[1px_1px_0px_#000]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="mt-8 pt-6 border-t-2 border-black flex flex-wrap items-center gap-3 font-mono text-xs font-bold">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn-yellow px-4 py-2.5 flex items-center gap-2"
                  >
                    <span>VISIT LIVE DEMO</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn-black px-4 py-2.5 flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW GITHUB REPO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
                  </a>
                )}

                {project.linkedinPostUrl && (
                  <a
                    href={project.linkedinPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn-white px-4 py-2.5 flex items-center gap-2"
                  >
                    <span>READ LINKEDIN POST</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.devpostUrl && (
                  <a
                    href={project.devpostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="comic-btn-white px-4 py-2.5 flex items-center gap-2"
                  >
                    <span>VIEW DEVPOST</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SelectedWorkSection;
