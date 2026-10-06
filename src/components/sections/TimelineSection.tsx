import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trophy } from 'lucide-react';
import { TIMELINE, type TimelineMilestone } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';

export const TimelineSection: React.FC = () => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(TIMELINE[0]);

  return (
    <section id="timeline" className="relative min-h-screen py-32 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <span className="px-3 py-1 rounded-full glass-panel border border-cyan-500/30 text-cyan-300 text-xs font-mono inline-flex items-center gap-2">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            SECTION 03 // INTERACTIVE JOURNEY ISLANDS
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif italic text-slate-100">
            Evolution of <span className="text-shimmer not-italic font-normal">Craft</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-light">
            Every year represents a distinct floating milestone island in Hasish Infant's software architecture genesis.
          </p>
        </div>

        {/* Timeline Year Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {TIMELINE.map((item) => {
            const isSelected = selectedMilestone.year === item.year;
            return (
              <motion.button
                key={item.year}
                onClick={() => { playClick(); setSelectedMilestone(item); }}
                onMouseEnter={() => { setCursorType('hover'); playHover(); }}
                onMouseLeave={() => setCursorType('default')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full text-xs font-mono font-bold tracking-widest transition-all ${
                  isSelected
                    ? 'bg-white text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.4)]'
                    : 'glass-panel text-slate-400 hover:text-slate-200 border-slate-800'
                }`}
              >
                {item.year}
                {isSelected && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Floating Journey Island Active Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMilestone.year}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-mono font-bold">
                  ISLAND {selectedMilestone.year}
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif italic text-white mt-2">
                  {selectedMilestone.title}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-400 block">{selectedMilestone.role}</span>
                <span className="text-xs font-mono text-cyan-400 font-semibold">{selectedMilestone.organization}</span>
              </div>
            </div>

            <p className="mt-6 text-slate-300 text-base md:text-lg font-light leading-relaxed">
              {selectedMilestone.description}
            </p>

            {/* Key Achievements Grid */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <Trophy className="w-4 h-4 text-cyan-400" />
                KEY MILESTONES & ACHIEVEMENTS
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedMilestone.achievements.map((ach, i) => (
                  <div key={i} className="p-4 rounded-2xl glass-card border border-slate-800 space-y-2">
                    <div className="w-6 h-6 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                      0{i + 1}
                    </div>
                    <p className="text-xs font-mono text-slate-200 leading-normal">{ach}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Category Badge */}
            <div className="mt-8 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>THEME: {selectedMilestone.islandTheme}</span>
              <span className="text-cyan-400 font-bold uppercase">{selectedMilestone.category}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
