import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Flame, Users, Sparkles, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
    title: '1st Place Grand Winner',
    organization: 'National AI Innovation Hackathon',
    description:
      'Engineered OceanRaksha AI satellite marine plastic detection under 36-hour sprint constraints, competing against 450+ engineering teams.',
    year: '2025',
    metric: 'National Champion',
  },
  {
    icon: <Users className="w-5 h-5 text-purple-400" />,
    title: 'Scaled to 12,000+ Builders',
    organization: 'OpportunX Ecosystem',
    description:
      'Architected semantic vector search matching developers with grants and hackathons globally with 85% verified precision.',
    year: '2024–2026',
    metric: '12K+ Users',
  },
  {
    icon: <Flame className="w-5 h-5 text-rose-400" />,
    title: 'Autonomous Multi-Agent Benchmark',
    organization: 'OPUS Architecture',
    description:
      'Pioneered 10x faster execution and 99.4% precision with self-correcting DAG state machines and zero memory deadlocks.',
    year: '2026',
    metric: '99.4% Precision',
  },
  {
    icon: <Star className="w-5 h-5 text-emerald-400" />,
    title: 'Top Open Source Contributor',
    organization: 'AI Community & Tools',
    description:
      'Authored open-source 3D knowledge graph visualizers and RAG retrieval pipelines adopted by hundreds of developers.',
    year: '2023–2026',
    metric: '15+ Shipped Apps',
  },
];

export const BraggingRightsSection: React.FC = () => {
  return (
    <section
      id="bragging-rights"
      className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#0c0c0e] text-white border-y border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header (Frame 14: 28s) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-300 mb-3 border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>08 / PROOF POINTS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white">
              <span className="font-grotesk font-semibold">Bragging</span>{' '}
              <span className="font-editorial italic text-neutral-200">rights.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-neutral-400 font-light leading-relaxed">
            Measurable traction, competitive hackathon milestones, and verifiable benchmarks.
          </p>
        </div>

        {/* ── KEY METRICS BAR ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-20 border-b border-white/10">
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-white">12,000+</div>
            <div className="text-xs font-mono text-neutral-400 uppercase mt-2">Active Platform Users</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-purple-400">99.4%</div>
            <div className="text-xs font-mono text-neutral-400 uppercase mt-2">Multi-Agent Accuracy</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-amber-400">#1</div>
            <div className="text-xs font-mono text-neutral-400 uppercase mt-2">National Hackathon Champion</div>
          </div>
          <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-grotesk font-bold text-emerald-400">15+</div>
            <div className="text-xs font-mono text-neutral-400 uppercase mt-2">Production Systems Shipped</div>
          </div>
        </div>

        {/* ── 4 PROOF CARDS (Frame 14–15) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/10">{item.icon}</div>
                    <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      {item.organization}
                    </span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-neutral-200">
                    {item.year}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-grotesk font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span>VERIFIED HIGHLIGHT</span>
                <span className="text-neutral-300 font-semibold">{item.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default BraggingRightsSection;
