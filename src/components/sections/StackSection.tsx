import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Cpu, Database, Cloud, Wrench, BookOpen } from 'lucide-react';
import { TECHNICAL_SKILLS } from '../../data/portfolioData';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  items: string[];
  color: string;
}

export const StackSection: React.FC = () => {
  const categories: SkillCategory[] = [
    {
      title: 'PROGRAMMING LANGUAGES',
      icon: <Code className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.languages,
      color: 'bg-white'
    },
    {
      title: 'FRONTEND ENGINEERING',
      icon: <Terminal className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.frontend,
      color: 'bg-white'
    },
    {
      title: 'BACKEND & REALTIME SFU',
      icon: <Database className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.backend,
      color: 'bg-white'
    },
    {
      title: 'CLOUD & SERVERLESS',
      icon: <Cloud className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.cloud,
      color: 'bg-[#FAFF00]'
    },
    {
      title: 'AI & TOOLING',
      icon: <Wrench className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.toolsAndAI,
      color: 'bg-white'
    },
    {
      title: 'CS FUNDAMENTALS',
      icon: <BookOpen className="w-4 h-4 text-black" />,
      items: TECHNICAL_SKILLS.fundamentals,
      color: 'bg-white'
    }
  ];

  return (
    <section id="stack" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#FAFF00] border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-grotesk tracking-tight text-black uppercase">
              WHAT I BUILD WITH
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs font-bold text-neutral-700">
            FOCUSED ON PRODUCTION RELIABILITY, STRICT TYPES & DETERMINISTIC LATENCY
          </p>
        </div>

        {/* 6 Comic Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`p-6 border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] ${cat.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-black">
                  <div className="flex items-center gap-2 font-mono text-xs font-black uppercase text-black">
                    {cat.icon}
                    <span>{cat.title}</span>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="px-2.5 py-1 bg-white border border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black hover:bg-[#FAFF00] transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-black/20 text-[11px] font-mono font-bold text-neutral-600 uppercase">
                {cat.items.length} TECHNOLOGIES MASTERED
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default StackSection;
