import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Layers, Sparkles, Workflow } from 'lucide-react';

interface CraftCluster {
  id: string;
  number: string;
  title: string;
  italicWord: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  visualAccent: string;
  stats: string;
}

const CRAFT_CLUSTERS: CraftCluster[] = [
  {
    id: 'ai-agents',
    number: '01',
    title: 'Autonomous',
    italicWord: 'AI Agents.',
    description:
      'Designing deterministic multi-agent orchestration swarms that reason, self-correct, and execute complex workflows without hallucination deadlocks.',
    icon: <Bot className="w-5 h-5 text-purple-600" />,
    tags: ['LangChain', 'OpenAI API', 'Vector RAG', 'DAG Workflows', 'FastAPI'],
    visualAccent: 'from-purple-900/40 via-indigo-900/30 to-purple-950/50',
    stats: '99.4% Multi-Agent Precision',
  },
  {
    id: 'full-stack',
    number: '02',
    title: 'Scalable',
    italicWord: 'Full Stack.',
    description:
      'Architecting resilient modern web platforms with Next.js, TypeScript, PostgreSQL, and Supabase that effortlessly support thousands of daily active users.',
    icon: <Layers className="w-5 h-5 text-blue-600" />,
    tags: ['Next.js 15', 'TypeScript', 'PostgreSQL', 'Supabase', 'Tailwind CSS'],
    visualAccent: 'from-blue-900/40 via-cyan-900/30 to-blue-950/50',
    stats: '12,000+ Active Users Scaled',
  },
  {
    id: 'creative-3d',
    number: '03',
    title: 'Tactile',
    italicWord: '3D & WebGL.',
    description:
      'Crafting spatial web experiences, interactive shader physics, and fluid scroll choreography with Three.js and React Three Fiber.',
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    tags: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'Framer Motion', 'Lenis'],
    visualAccent: 'from-amber-900/30 via-orange-900/20 to-neutral-950/50',
    stats: '60 FPS Physics & Motion',
  },
  {
    id: 'automation-swarms',
    number: '04',
    title: 'Resilient',
    italicWord: 'Automation.',
    description:
      'Building asynchronous worker queues, distributed web scrapers with proxy rotation, and computer vision pipelines.',
    icon: <Workflow className="w-5 h-5 text-emerald-600" />,
    tags: ['Python', 'Docker', 'Redis Queues', 'PyTorch / OpenCV', 'Edge APIs'],
    visualAccent: 'from-emerald-900/30 via-teal-900/20 to-neutral-950/50',
    stats: 'Sub-second Data Pipelines',
  },
];

export const MyCraftSection: React.FC = () => {
  return (
    <section id="my-craft" className="relative py-24 sm:py-32 px-4 sm:px-8 bg-[#f6f5f1]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header (Frame 09: 18s) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-4">
            <span>04 / SPECIALITIES</span>
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-950">
            <span className="font-grotesk font-semibold">My cup of</span>{' '}
            <span className="font-editorial italic">tea. ☕</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-lg mx-auto">
            Visual clusters of disciplines and problem spaces I obsess over daily.
          </p>
        </div>

        {/* ── 4 ART-DIRECTED EDITORIAL CLUSTERS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CRAFT_CLUSTERS.map((cluster, i) => (
            <motion.div
              key={cluster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-3xl bg-white border border-black/10 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header within cluster */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                      {cluster.icon}
                    </div>
                    <span className="text-xs font-mono font-semibold text-neutral-400">
                      [{cluster.number}]
                    </span>
                  </div>
                  <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    {cluster.stats}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl sm:text-3xl font-normal text-neutral-900 tracking-tight">
                  <span className="font-grotesk font-semibold">{cluster.title}</span>{' '}
                  <span className="font-editorial italic">{cluster.italicWord}</span>
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  {cluster.description}
                </p>
              </div>

              {/* Visual Mini Collage Simulation */}
              <div className="mt-8 pt-6 border-t border-black/5">
                <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider mb-3">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {cluster.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-neutral-100/90 hover:bg-neutral-200/80 text-xs font-medium text-neutral-800 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MyCraftSection;
