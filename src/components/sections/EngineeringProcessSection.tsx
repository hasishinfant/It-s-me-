import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Brain, Code, Cpu, Eye, Zap, Layers, Gauge } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface PhilosophyTopic {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  editorialQuote: string;
  description: string;
  principles: string[];
}

const PHILOSOPHIES: PhilosophyTopic[] = [
  {
    id: 'thinking',
    title: 'Thinking',
    subtitle: 'First Principles & Systems Mindset',
    icon: <Brain className="w-5 h-5 text-white" />,
    editorialQuote: 'Software starts in thought before it is ever committed to code.',
    description:
      'I break down complex requirements to their absolute fundamental truths. By eliminating assumptions early, we build systems that scale cleanly without legacy baggage.',
    principles: ['First Principles Analysis', 'Mental Model Mapping', 'Trade-off Evaluation'],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    subtitle: 'Relentless Pragmatic Ingenuity',
    icon: <Cpu className="w-5 h-5 text-white" />,
    editorialQuote: 'The best code is often the code you never had to write.',
    description:
      'Whether resolving non-deterministic LLM loops or optimizing 3D spatial culling, every technical roadblock has a deterministic, elegant solution.',
    principles: ['Root Cause Diagnosis', 'Deterministic Fallbacks', 'Simple Over Complex'],
  },
  {
    id: 'clean-code',
    title: 'Clean Code',
    subtitle: 'Readable, Type-Safe & Modular',
    icon: <Code className="w-5 h-5 text-white" />,
    editorialQuote: 'Write code for humans to read, and for systems to execute flawlessly.',
    description:
      'Enforcing strict TypeScript static types, modular architecture, explicit naming contracts, and zero memory leaks so teams enjoy extending the codebase.',
    principles: ['Strict Type Systems', 'Modular Abstraction', 'Self-Documenting Code'],
  },
  {
    id: 'user-experience',
    title: 'User Experience',
    subtitle: 'Tactile Motion & Visual Hierarchy',
    icon: <Eye className="w-5 h-5 text-white" />,
    editorialQuote: 'A great interface feels like an extension of thought.',
    description:
      'Crafting dark luxury interfaces with liquid glass depth, subtle reflections, micro-animations, and instant feedback that turns software into an experience.',
    principles: ['Micro-Interactions', 'Fluid Motion', 'Editorial Typography'],
  },
  {
    id: 'ai',
    title: 'AI',
    subtitle: 'Autonomous Multi-Agent Orchestration',
    icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    editorialQuote: 'AI is not a feature; it is a fundamental shift in user capability.',
    description:
      'Designing vector RAG pipelines, multi-agent task execution graphs, and custom model fine-tuning that solve real human productivity bottlenecks.',
    principles: ['Multi-Agent DAGs', 'Semantic Embedding Search', 'Structured Guardrails'],
  },
  {
    id: 'automation',
    title: 'Automation',
    subtitle: 'Eliminating Friction & Human Errors',
    icon: <Layers className="w-5 h-5 text-white" />,
    editorialQuote: 'Automate repetitive complexity to liberate creative focus.',
    description:
      'Building asynchronous task queues, web scraping data pipelines, and CI/CD workflows that run silently with zero downtime.',
    principles: ['Event-Driven Pipelines', 'Zero-Touch Scrapers', 'Self-Healing Workflows'],
  },
  {
    id: 'performance',
    title: 'Performance',
    subtitle: 'GPU Accelerated & 60 FPS Smooth',
    icon: <Zap className="w-5 h-5 text-white" />,
    editorialQuote: 'Speed is not a luxury; speed is the core feature.',
    description:
      'Optimizing WebGL shader matrix buffers, lazy loading dynamic components, minimizing bundle size, and maintaining 95+ Lighthouse scores.',
    principles: ['60 FPS Rendering', 'Asset Compression', 'Sub-100ms Latency'],
  },
  {
    id: 'accessibility',
    title: 'Accessibility',
    subtitle: 'Universal Inclusive Engineering',
    icon: <Gauge className="w-5 h-5 text-white" />,
    editorialQuote: 'World-class digital products must be accessible to everyone.',
    description:
      'Semantic HTML5 structure, ARIA roles, keyboard navigation traps, contrast compliance, and screen reader compatibility across every viewport.',
    principles: ['Semantic Hierarchy', 'Keyboard Navigation', 'ARIA Standards'],
  },
];

export const EngineeringProcessSection: React.FC = () => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const [activeTopic, setActiveTopic] = useState<PhilosophyTopic>(PHILOSOPHIES[0]);

  return (
    <section id="philosophy" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10">
      {/* Watermark */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[18rem] top-20 left-0 opacity-[0.02]">
        PHILOSOPHY
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">005</span> — PHILOSOPHY
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Principles</span>
            <span className="block">That Guide My Craft</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Large editorial typography, minimal text, and unyielding commitment to software excellence.
          </p>
        </div>

        {/* Philosophy Topic Selector — Brutalist Tabs */}
        <div className="flex flex-wrap gap-1 mb-12">
          {PHILOSOPHIES.map((topic, idx) => {
            const isSelected = activeTopic.id === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => {
                  playClick();
                  setActiveTopic(topic);
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
                <span>{topic.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Philosophy Card — Brutalist */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTopic.id}
            initial={{ opacity: 0, y: 25, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -25, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: 'easeOut' as const }}
            className="brutalist-card p-8 md:p-14 relative"
          >
            {/* Header Quote */}
            <div className="border-b-2 border-white/10 pb-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 brutalist-border flex items-center justify-center">
                  {activeTopic.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    {activeTopic.subtitle}
                  </span>
                  <h3 className="font-brutalist font-bold text-3xl md:text-5xl text-white uppercase tracking-tight">
                    {activeTopic.title}
                  </h3>
                </div>
              </div>

              <p className="font-heading italic text-2xl md:text-4xl text-white/80 leading-tight mt-4">
                "{activeTopic.editorialQuote}"
              </p>
            </div>

            {/* Description & Principles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <p className="text-base md:text-lg text-white/70 font-body font-light leading-relaxed">
                  {activeTopic.description}
                </p>
              </div>

              <div className="lg:col-span-5 space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-3">
                  TACTICAL_EXECUTION
                </h4>
                {activeTopic.principles.map((p, i) => (
                  <div
                    key={i}
                    className="brutalist-card p-3.5 text-xs font-mono text-white flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-amber-400" />
                    <span>{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
