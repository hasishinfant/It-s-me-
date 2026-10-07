import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Code2, Zap, Flame } from 'lucide-react';
import { PROOF_METRICS } from '../../data/portfolioData';

const METRIC_ICONS: Record<string, React.ReactNode> = {
  '50+': <Code2 className="w-5 h-5 text-black" />,
  '4x': <Flame className="w-5 h-5 text-black" />,
  '1x': <Trophy className="w-5 h-5 text-black" />,
  'BRONZE': <Award className="w-5 h-5 text-black" />,
  'TOP 52': <Zap className="w-5 h-5 text-black" />
};

export const ProofOfWorkSection: React.FC = () => {
  return (
    <section id="proof" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF0000] text-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>COMPETITIVE BENCHMARKS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-grotesk tracking-tight text-black uppercase">
              I BUILD TO LEARN.
            </h2>
            <p className="mt-1 font-mono text-xs sm:text-sm font-bold text-neutral-700">
              HERE IS THE PROOF OF WORK & SPRINT EXECUTION.
            </p>
          </div>
          <div className="max-w-xs font-mono text-xs font-bold text-neutral-800">
            Hackathons test speed, architecture decisions, and high-pressure delivery. I consistently take ideas to working prototypes.
          </div>
        </div>

        {/* 5 Comic Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`p-6 border-2 sm:border-[3px] border-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] ${
                idx === 0
                  ? 'bg-[#FAFF00] shadow-[6px_6px_0px_#000]'
                  : idx === 3
                  ? 'bg-white shadow-[6px_6px_0px_#000] border-t-8 border-t-[#FF0000]'
                  : idx === 4
                  ? 'bg-white shadow-[6px_6px_0px_#000] border-t-8 border-t-[#0044FF]'
                  : 'bg-white shadow-[6px_6px_0px_#000]'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-white border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center">
                  {METRIC_ICONS[metric.value] || <Zap className="w-5 h-5 text-black" />}
                </div>
                <span className="font-mono text-xs font-bold text-neutral-500">
                  BENCHMARK 0{idx + 1}
                </span>
              </div>

              <div className="text-4xl sm:text-5xl font-black font-grotesk text-black tracking-tight mb-2">
                {metric.value}
              </div>

              <div className="font-mono text-xs font-black uppercase text-black mb-1">
                {metric.label}
              </div>

              <p className="font-body text-xs sm:text-sm text-neutral-700 font-medium">
                {metric.detail}
              </p>
            </motion.div>
          ))}

          {/* Bonus Summary Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="p-6 bg-black text-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between"
          >
            <div>
              <span className="inline-block px-2 py-0.5 bg-[#FAFF00] text-black font-mono text-[10px] font-bold uppercase mb-3">
                ENGINEERING ETHOS
              </span>
              <h3 className="text-2xl font-black font-grotesk text-white mb-2">
                VELOCITY & OWNERSHIP
              </h3>
              <p className="text-xs sm:text-sm font-mono text-neutral-300">
                "Code works or it doesn't. Theory is good, but shipping deployed systems to production is where real engineering begins."
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-700 font-mono text-xs text-[#FAFF00] font-bold">
              HASISH INFANT · BENGALURU
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ProofOfWorkSection;
