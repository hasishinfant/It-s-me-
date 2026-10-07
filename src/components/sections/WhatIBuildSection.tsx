import React from 'react';
import { motion } from 'framer-motion';
import { CURRENT_EXPLORATIONS } from '../../data/portfolioData';
import { Layers, Cpu, Compass, Sparkles, Workflow, ArrowUpRight } from 'lucide-react';

const ICONS: Record<string, React.ReactNode> = {
  'full-stack': <Layers className="w-6 h-6 text-black" />,
  'ai-systems': <Cpu className="w-6 h-6 text-black" />,
  'product-dev': <Compass className="w-6 h-6 text-black" />,
  '3d-web': <Sparkles className="w-6 h-6 text-black" />,
  'automation': <Workflow className="w-6 h-6 text-black" />
};

export const WhatIBuildSection: React.FC = () => {
  return (
    <section
      id="what-i-build"
      className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#FAFF00] border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <span>ENGINEERING DOMAINS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-grotesk tracking-tight text-black">
              WHAT I'M BUILDING RIGHT NOW
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-body text-neutral-700">
            A mix of commercial client builds, full-stack systems, hackathon sprints, and machine learning experiments.
          </p>
        </div>

        {/* 5 Comic Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CURRENT_EXPLORATIONS.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000] transition-all flex flex-col justify-between ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 bg-[#FAFF00]/15' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white border-2 border-black shadow-[3px_3px_0px_#000] flex items-center justify-center">
                    {ICONS[domain.id] || <Layers className="w-6 h-6 text-black" />}
                  </div>
                  <span className="px-2.5 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-[10px] font-mono font-bold text-black uppercase">
                    {domain.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black font-grotesk text-black mb-3">
                  {domain.title}
                </h3>

                <p className="text-sm sm:text-base font-body text-neutral-800 leading-relaxed">
                  {domain.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black/10 flex items-center justify-between text-xs font-mono font-bold text-black">
                <span className="uppercase tracking-wider">DOMAIN {String(index + 1).padStart(2, '0')}</span>
                <span className="inline-flex items-center gap-1 hover:underline">
                  EXPLORE IN WORK <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhatIBuildSection;
