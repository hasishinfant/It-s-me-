import React from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Sparkles, Layout, ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';

interface Operator {
  id: string;
  code: string;
  name: string;
  role: string;
  avatarIcon: React.ReactNode;
  status: string;
  statusColor: string;
  description: string;
  skills: string[];
  metrics: string;
  githubUrl?: string;
}

const COLLECTIVE_OPERATORS: Operator[] = [
  {
    id: 'hasish',
    code: '[OP-01 // ARCHITECT]',
    name: 'Hasish Infant',
    role: 'Founder & Principal Architect',
    avatarIcon: <User className="w-5 h-5 text-neutral-900" />,
    status: 'AVAILABLE Q3/Q4',
    statusColor: 'text-emerald-500 bg-emerald-50 border-emerald-200',
    description:
      'Computer Science engineer with an obsession for end-to-end craft. Leading autonomous AI systems architecture, high-throughput web backends, and tactile interfaces.',
    skills: ['System Design', 'LLM Agents', 'Next.js / React', 'TypeScript', 'PostgreSQL'],
    metrics: '12k+ Users Scaled • 15+ Production Apps',
    githubUrl: 'https://github.com/hasishinfant',
  },
  {
    id: 'opus-swarm',
    code: '[OP-02 // AUTONOMOUS SWARM]',
    name: 'OPUS Agent Swarm',
    role: 'Autonomous Reasoning & Code Engine',
    avatarIcon: <Cpu className="w-5 h-5 text-purple-600" />,
    status: 'ACTIVE 24/7',
    statusColor: 'text-purple-600 bg-purple-50 border-purple-200',
    description:
      'Deterministic multi-agent subagent swarms that execute parallel micro-task parsing, automated AST code refactoring, and real-time DAG validation.',
    skills: ['LangChain', 'FastAPI', 'DAG State Machines', 'Vector Retrieval', 'Redis Queues'],
    metrics: '99.4% Precision • 10x Execution Speed',
    githubUrl: 'https://github.com/hasishinfant/opus-ai-agent',
  },
  {
    id: 'spatial-lab',
    code: '[OP-03 // SPATIAL & GLSL]',
    name: 'Spatial & Shader Lab',
    role: 'Real-Time 3D & Graphics Specialist',
    avatarIcon: <Sparkles className="w-5 h-5 text-amber-500" />,
    status: 'GPU PIPELINE',
    statusColor: 'text-amber-600 bg-amber-50 border-amber-200',
    description:
      'Translating spatial computing concepts into silky smooth 60 FPS WebGL experiences. Custom lighting models, generative noise meshes, and physics inertia.',
    skills: ['Three.js', 'React Three Fiber', 'GLSL Shaders', 'Instanced Meshes', 'WebGPU'],
    metrics: 'Sub-16ms Frame Times • Mobile Optimized',
    githubUrl: 'https://github.com/hasishinfant/neoscholar-ai',
  },
  {
    id: 'interface-craft',
    code: '[OP-04 // TACTILE HCI]',
    name: 'Interface & Motion Unit',
    role: 'Tactile UI & Interaction Engineer',
    avatarIcon: <Layout className="w-5 h-5 text-blue-600" />,
    status: 'INTERACTION LAB',
    statusColor: 'text-blue-600 bg-blue-50 border-blue-200',
    description:
      'Obsessive focus on human-computer interaction feel: magnetic button physics, scroll choreography, custom cursor states, and brutalist typographic systems.',
    skills: ['Framer Motion', 'Lenis Scroll', 'Tailwind CSS', 'Accessible DOM', 'Design Tokens'],
    metrics: '99+ Core Web Vitals • Zero Interaction Lag',
    githubUrl: 'https://github.com/hasishinfant',
  },
];

export const AgencyCollectiveSection: React.FC = () => {
  return (
    <section id="collective" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#f6f5f1] border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Brutalist Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-3 border border-black/5">
              <Terminal className="w-3.5 h-3.5 text-neutral-700" />
              <span>THE COLLECTIVE // MULTIDISCIPLINARY OPERATORS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-950">
              <span className="font-grotesk font-semibold">Core studio</span>{' '}
              <span className="font-editorial italic">operators.</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-neutral-600 leading-relaxed font-mono">
            Bridging human architectural ingenuity with automated AI swarms and spatial computing.
            Every operator brings specialized leverage to high-stakes product builds.
          </p>
        </div>

        {/* ── 4 OPERATOR CARDS WITH BRUTALIST GRID & CORNER CROSSHAIRS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COLLECTIVE_OPERATORS.map((op, idx) => (
            <motion.div
              key={op.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white border border-black/10 p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)] transition-all flex flex-col justify-between"
            >
              {/* Exposed Corner Crosshairs (+) */}
              <div className="absolute top-3 left-3 text-[10px] font-mono text-neutral-300 font-bold select-none">+</div>
              <div className="absolute top-3 right-3 text-[10px] font-mono text-neutral-300 font-bold select-none">+</div>
              <div className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-300 font-bold select-none">+</div>
              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-neutral-300 font-bold select-none">+</div>

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between pb-6 border-b border-black/5">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-neutral-100 group-hover:bg-neutral-950 group-hover:text-white transition-colors">
                      {op.avatarIcon}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-neutral-400 block tracking-wider">
                        {op.code}
                      </span>
                      <h3 className="text-xl font-grotesk font-bold text-neutral-950 tracking-tight">
                        {op.name}
                      </h3>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full border ${op.statusColor}`}>
                    {op.status}
                  </span>
                </div>

                {/* Role Title */}
                <div className="mt-5 text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                  {op.role}
                </div>

                {/* Bio / Mission */}
                <p className="mt-3 text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {op.description}
                </p>

                {/* Skills Chips */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {op.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 text-[10px] font-mono font-medium text-neutral-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Verified Metric & Link */}
              <div className="mt-8 pt-5 border-t border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-neutral-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="font-semibold">{op.metrics}</span>
                </div>

                {op.githubUrl && (
                  <a
                    href={op.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white transition-colors text-neutral-700"
                    title="Operator Repository / Profile"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default AgencyCollectiveSection;
