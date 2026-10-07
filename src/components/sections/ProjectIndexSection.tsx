import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { PROJECT_INDEX_DATA } from '../../data/portfolioData';

export const ProjectIndexSection: React.FC = () => {
  return (
    <section id="index" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#FAFF00]" />
              <span>ARCHIVE & REPOSITORIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-grotesk tracking-tight text-black uppercase">
              PROJECT ARCHIVE
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-mono font-bold text-neutral-700">
            INDEX OF KEY BUILDS, CODE REPOSITORIES & ARCHITECTURES
          </p>
        </div>

        {/* Comic Table Container */}
        <div className="space-y-3 font-mono">
          {/* Header Bar */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-3 px-5 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_#000] text-xs font-black uppercase text-black">
            <span className="col-span-4">PROJECT NAME</span>
            <span className="col-span-2">YEAR</span>
            <span className="col-span-3">CATEGORY</span>
            <span className="col-span-3 text-right">STACK / GITHUB</span>
          </div>

          {/* Rows */}
          {PROJECT_INDEX_DATA.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.05 }}
              className="grid grid-cols-1 md:grid-cols-12 items-center gap-2 md:gap-4 p-4 sm:px-5 bg-white border-2 border-black shadow-[4px_4px_0px_#000] hover:bg-[#FAFF00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all cursor-pointer group"
            >
              <div className="col-span-4 flex items-center gap-2">
                <span className="text-base sm:text-lg font-black font-grotesk text-black">
                  {item.name}
                </span>
                <ArrowUpRight className="w-4 h-4 text-black opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <div className="col-span-2 text-xs font-bold text-neutral-600">
                <span className="md:hidden text-neutral-400 mr-2">YEAR:</span>
                {item.year}
              </div>

              <div className="col-span-3 text-xs font-bold text-neutral-800">
                <span className="md:hidden text-neutral-400 mr-2">CATEGORY:</span>
                <span className="px-2 py-0.5 bg-neutral-100 border border-black text-[10px]">
                  {item.type}
                </span>
              </div>

              <div className="col-span-3 text-xs font-bold text-neutral-700 md:text-right truncate">
                <span className="md:hidden text-neutral-400 mr-2">STACK:</span>
                {item.stack}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ProjectIndexSection;
