import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface JourneyStage {
  id: string;
  stage: string;
  year: string;
  title: string;
  subtitle: string;
  story: string;
  takeaway: string;
  tags: string[];
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'beginning',
    stage: 'Beginning',
    year: '2021',
    title: 'First Lines of Code',
    subtitle: 'The spark of creation',
    story:
      'My journey began with raw curiosity. Writing my first lines of Python and HTML felt less like typing syntax and more like discovering a superpower — the ability to turn abstract thought into interactive reality.',
    takeaway: 'Code is software craft, not just instructions for a machine.',
    tags: ['Python', 'Linux', 'Terminal', 'HTML/CSS'],
  },
  {
    id: 'curiosity',
    stage: 'Curiosity',
    year: '2022',
    title: 'Deconstructing Systems',
    subtitle: 'Understanding how everything connects',
    story:
      'I became obsessed with how complex platforms are built under the hood. From Linux kernel customization to building compilers and database engines from scratch, I sought to master foundational engineering principles.',
    takeaway: 'Deep fundamentals allow you to solve any modern framework problem.',
    tags: ['Data Structures', 'Networking', 'Compilers', 'Algorithms'],
  },
  {
    id: 'learning',
    stage: 'Learning',
    year: '2023',
    title: 'Modern Web & React Architecture',
    subtitle: 'Crafting responsive digital interfaces',
    story:
      'Mastered modern React, TypeScript, and state management. Focused heavily on interface performance, typography, design systems, and frame-rate optimization.',
    takeaway: 'Great software requires both engineering precision and visual soul.',
    tags: ['React', 'TypeScript', 'TailwindCSS', 'Node.js'],
  },
  {
    id: 'hackathons',
    stage: 'Hackathons',
    year: '2024',
    title: 'Building Under Pressure',
    subtitle: '36-hour sprint victories',
    story:
      'Entered high-stakes national hackathons, leading teams to build complete production-grade applications under strict time limits. Won 1st place building OceanRaksha AI and NeoScholar AI.',
    takeaway: 'Constraints trigger the highest level of creative and engineering focus.',
    tags: ['National Winner', 'Rapid Prototyping', 'Team Lead', '36-Hour Builds'],
  },
  {
    id: 'failures',
    stage: 'Failures',
    year: '2024',
    title: 'Pivots & Lessons Learned',
    subtitle: 'The crucible of real-world scale',
    story:
      'Not every initial architecture scaled smoothly. Encountering LLM non-determinism, WebGL matrix memory overflows, and database scraper rate limits taught me resilience and robust fallback design.',
    takeaway: 'Every bug and structural failure is a blueprint for resilient architecture.',
    tags: ['Fallback DAGs', 'Token Budgets', 'Rate Limits', 'Memory Profiling'],
  },
  {
    id: 'open-source',
    stage: 'Open Source',
    year: '2025',
    title: 'Building in Public & Ecosystem Growth',
    subtitle: 'Sharing tools with the global community',
    story:
      'Launched OpportunX AI to help over 12,000 students and developers find hackathons and career opportunities. Contributed to open-source AI frameworks and published interactive research visualizers.',
    takeaway: 'True impact comes from empowering thousands of other builders.',
    tags: ['12,000+ Users', 'Open Source', 'Community Lead', 'Public Building'],
  },
  {
    id: 'ai',
    stage: 'AI',
    year: '2025',
    title: 'Multi-Agent Orchestration & RAG',
    subtitle: 'Pioneering autonomous intelligence',
    story:
      'Architected OPUS — an autonomous multi-agent AI framework executing parallel task graphs with vector indexing and live fallback. Bridged generative AI models with real-world enterprise automation.',
    takeaway: 'AI agents will redefine how humans interact with complex software.',
    tags: ['LangChain', 'Vector Search', 'Multi-Agent Systems', 'LLM Fine-Tuning'],
  },
  {
    id: 'today',
    stage: 'Today',
    year: '2026',
    title: 'AI Engineer & Product Architect',
    subtitle: 'Designing world-class digital products',
    story:
      'Today, I partner with ambitious startups and teams to craft brand-defining web applications, multi-agent AI ecosystems, and cinematic interactive experiences.',
    takeaway: 'I build products that combine design, engineering, and automation.',
    tags: ['AI Architect', 'Full Stack', 'Liquid UI', 'Production Ready'],
  },
];

const STATS = [
  { value: '7+', label: 'Projects Shipped' },
  { value: '12K+', label: 'Users Served' },
  { value: '1,420', label: 'Contributions' },
  { value: '1st', label: 'National Hackathon' },
  { value: '48', label: 'Day Streak' },
  { value: '99+', label: 'Lighthouse Score' },
];

export const WhoIAmSection: React.FC = () => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const [activeStage, setActiveStage] = useState<JourneyStage>(JOURNEY_STAGES[0]);

  return (
    <section id="who-i-am" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 raw-grid">
      {/* Watermark Background Text */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[18rem] top-20 left-0 opacity-[0.02]">
        WHO_I_AM
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-12">
          <div className="section-marker mb-6">
            <span className="text-amber-400">002</span> — CREATOR_PROFILE
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">The Story</span>
            <span className="block">Of My Craft</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // A linear progression through curiosity, relentless building, failure, open source, and AI engineering.
          </p>
        </div>

        {/* Stats Ticker — Brutalist */}
        <div className="stats-ticker mb-12">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Timeline Node Selector — Brutalist Tabs */}
        <div className="flex flex-wrap items-center gap-1 mb-12">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isSelected = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  playClick();
                  setActiveStage(stage);
                }}
                onMouseEnter={() => {
                  setCursorType('hover');
                  playHover();
                }}
                onMouseLeave={() => setCursorType('default')}
                className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-amber-400 text-black font-bold'
                    : 'brutalist-border text-white/50 hover:text-white hover:border-white/40'
                }`}
              >
                <span className={isSelected ? 'text-black/50' : 'text-white/20'}>{String(idx + 1).padStart(2, '0')}</span>
                <span>{stage.stage}</span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Details Card — Brutalist */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="brutalist-card p-8 md:p-12 relative"
          >
            {/* Large Background Index */}
            <div className="absolute top-4 right-6 brutalist-index text-[6rem] md:text-[10rem]">
              {String(JOURNEY_STAGES.findIndex(s => s.id === activeStage.id) + 1).padStart(2, '0')}
            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 border-b-2 border-white/10 pb-6 mb-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-amber-400 bg-amber-400/10 px-3 py-1 brutalist-border-amber">
                    {activeStage.year}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    {activeStage.subtitle}
                  </span>
                </div>
                <h3 className="font-brutalist font-bold text-3xl sm:text-5xl tracking-[-1px] text-white uppercase">
                  {activeStage.title}
                </h3>
              </div>

              {/* Tags — Brutalist */}
              <div className="flex flex-wrap gap-1.5">
                {activeStage.tags.map((tag) => (
                  <span key={tag} className="brutalist-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Story Text */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8">
                <p className="text-base md:text-lg text-white/80 font-body font-light leading-relaxed">
                  "{activeStage.story}"
                </p>
              </div>

              <div className="lg:col-span-4 brutalist-card p-6 border-amber-400/20">
                <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 mb-3 uppercase tracking-widest">
                  <span className="w-2 h-2 bg-amber-400" />
                  CORE_TAKEAWAY
                </div>
                <p className="text-sm font-heading italic text-white leading-snug">
                  {activeStage.takeaway}
                </p>
              </div>
            </div>

            {/* Next Stage Teaser */}
            <div className="mt-10 pt-6 border-t-2 border-white/10 flex items-center justify-between text-[10px] font-mono text-white/40 uppercase tracking-widest">
              <span>STAGE: {activeStage.stage.toUpperCase()}</span>
              <button
                onClick={() => {
                  const currentIndex = JOURNEY_STAGES.findIndex((s) => s.id === activeStage.id);
                  const nextIndex = (currentIndex + 1) % JOURNEY_STAGES.length;
                  setActiveStage(JOURNEY_STAGES[nextIndex]);
                }}
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>NEXT_CHAPTER</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
