import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Feather } from 'lucide-react';

const ECOSYSTEM_PARTNERS = [
  { name: 'OpenAI', label: 'GPT-4o & Embeddings' },
  { name: 'Anthropic', label: 'Claude 3.7 & Tool Use' },
  { name: 'Vercel', label: 'Edge Network & Next.js' },
  { name: 'Supabase', label: 'PGVector & Auth' },
  { name: 'Hugging Face', label: 'Open Weights & Models' },
  { name: 'Docker', label: 'Microservice Containers' },
  { name: 'Redis', label: 'High-Throughput Queues' },
  { name: 'Three.js', label: 'Spatial WebGL Shaders' },
];

export const CompanyProofSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        {/* ── QUIET MONOCHROME LOGO / ECOSYSTEM GRID (Frame 08: 16s) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pb-16 sm:pb-20 border-b border-black/10">
          {ECOSYSTEM_PARTNERS.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group p-5 rounded-2xl bg-white/70 border border-black/5 hover:border-black/20 hover:bg-white transition-all flex flex-col items-center justify-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="font-grotesk font-semibold text-base sm:text-lg text-neutral-800 group-hover:text-black tracking-tight">
                {partner.name}
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-1 uppercase tracking-wider">
                {partner.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── EDITORIAL TWO-COLUMN MANIFESTO STATEMENT (Frame 08: 16s) ── */}
        <div className="pt-16 sm:pt-20 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Column: Bold statement */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">
              <Compass className="w-3.5 h-3.5 text-neutral-700" />
              <span>THE MANIFESTO</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-neutral-950 leading-snug">
              I build digital experiences that{' '}
              <span className="font-editorial italic font-medium underline decoration-neutral-300 underline-offset-4">
                refuse to be ignored.
              </span>{' '}
              Bridging the gap between obsessive design and the real world product.
            </h3>
          </div>

          {/* Right Column: Thoughtful rationale & signature motif */}
          <div className="flex flex-col justify-between h-full space-y-6">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              As an engineer + builder, I understand that aesthetics mean nothing if the underlying
              code isn’t production-grade, resilient, and blisteringly fast.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Over the years, I’ve built across the entire stack—from fine-tuning multi-agent LLM
              reasoning pipelines to crafting buttery smooth 60fps WebGL shaders and accessible
              interfaces.
            </p>

            {/* Sketched / Signature Icon Motif */}
            <div className="pt-4 flex items-center gap-4 text-neutral-400">
              <div className="p-2.5 rounded-full bg-neutral-200/60 border border-neutral-300 text-neutral-800">
                <Feather className="w-4 h-4" />
              </div>
              <div className="text-xs font-mono text-neutral-500">
                <span className="font-semibold text-neutral-900">Hasish Infant</span> — Engineering with intention.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CompanyProofSection;
