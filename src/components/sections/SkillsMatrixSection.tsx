import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface TechItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend & AI' | 'Cloud & DevOps' | 'Databases & Tools';
  experience: string;
  whyIUseIt: string;
  projects: string[];
}

const TECH_SYSTEM: TechItem[] = [
  { id: 'react', name: 'React 19', category: 'Frontend', experience: '4+ Years', whyIUseIt: 'Component-driven UI architecture, concurrent mode rendering, and seamless reactive state choreography.', projects: ['OPUS', 'NeoScholar AI', 'TravelSphere', 'Personal Portfolio'] },
  { id: 'typescript', name: 'TypeScript', category: 'Frontend', experience: '4+ Years', whyIUseIt: 'Strict static typing prevents entire classes of runtime bugs while enhancing IDE autocomplete and refactoring velocity.', projects: ['All Projects'] },
  { id: 'node', name: 'Node.js', category: 'Backend & AI', experience: '4+ Years', whyIUseIt: 'Non-blocking event loop for high-concurrency API gateways, WebSocket telemetry, and serverless microservices.', projects: ['OpportunX AI', 'AttendQ', 'TravelSphere'] },
  { id: 'python', name: 'Python', category: 'Backend & AI', experience: '4+ Years', whyIUseIt: 'The foundational language of artificial intelligence, PyTorch deep learning models, data science, and FastAPI services.', projects: ['OPUS', 'OceanRaksha AI', 'NeoScholar AI'] },
  { id: 'java', name: 'Java', category: 'Backend & AI', experience: '3+ Years', whyIUseIt: 'Enterprise object-oriented architecture, strong memory management concepts, and multi-threaded system pipelines.', projects: ['Academic System Compilers', 'Enterprise Backend Scrapers'] },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', experience: '3+ Years', whyIUseIt: 'Server-side rendering, App Router edge functions, automatic route optimization, and built-in SEO superiority.', projects: ['OpportunX AI', 'Enterprise Web Portals'] },
  { id: 'supabase', name: 'Supabase', category: 'Databases & Tools', experience: '3+ Years', whyIUseIt: 'Open-source Firebase alternative with native PostgreSQL, PGVector semantic embeddings, and row-level security.', projects: ['OpportunX AI', 'Realtime Collaboration Suites'] },
  { id: 'firebase', name: 'Firebase', category: 'Databases & Tools', experience: '3+ Years', whyIUseIt: 'Instant real-time Firestore synchronization, dynamic remote config, and friction-free user authentication.', projects: ['AttendQ', 'Rapid Prototype Apps'] },
  { id: 'aws', name: 'AWS', category: 'Cloud & DevOps', experience: '3+ Years', whyIUseIt: 'Global S3 asset distribution, Lambda Edge Functions, CloudFront CDN edge acceleration, and ECS container deployments.', projects: ['OPUS', 'OceanRaksha AI', 'Portfolio Assets'] },
  { id: 'docker', name: 'Docker', category: 'Cloud & DevOps', experience: '3+ Years', whyIUseIt: 'Containerized environment consistency ensures zero "it works on my machine" issues across local dev and cloud production.', projects: ['OPUS', 'OceanRaksha AI Pipeline'] },
  { id: 'git', name: 'Git', category: 'Databases & Tools', experience: '4+ Years', whyIUseIt: 'Atomic version control, feature branch isolation, interactive rebasing, and clean git history hygiene.', projects: ['All Repositories'] },
  { id: 'github', name: 'GitHub', category: 'Databases & Tools', experience: '4+ Years', whyIUseIt: 'GitHub Actions automated CI/CD deployment pipelines, pull request code reviews, and open-source collaboration.', projects: ['Public Repositories & Open Source'] },
  { id: 'openai', name: 'OpenAI API', category: 'Backend & AI', experience: '2+ Years', whyIUseIt: 'State-of-the-art LLMs, structured JSON function calling, embeddings generation, and multimodal inference.', projects: ['OPUS', 'NeoScholar AI', 'OpportunX AI'] },
  { id: 'langchain', name: 'LangChain', category: 'Backend & AI', experience: '2+ Years', whyIUseIt: 'Structuring autonomous multi-agent graphs, memory buffers, vector retrieval chains, and LLM tool execution.', projects: ['OPUS', 'NeoScholar AI'] },
];

export const SkillsMatrixSection: React.FC = () => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend & AI', 'Cloud & DevOps', 'Databases & Tools'];
  const filteredTech = activeCategory === 'All' ? TECH_SYSTEM : TECH_SYSTEM.filter((t) => t.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 raw-grid">
      {/* Watermark */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[18rem] top-20 right-0 opacity-[0.02]">
        STACK
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">006</span> — TECH_SYSTEM
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Interactive</span>
            <span className="block">Tech Matrix</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Click any technology node to reveal why I use it, experience level, and associated projects.
          </p>
        </div>

        {/* Category Filters — Brutalist */}
        <div className="flex flex-wrap gap-1 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className={`px-4 py-2.5 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-amber-400 text-black font-bold'
                  : 'brutalist-border text-white/50 hover:text-white hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technology Nodes Grid — Brutalist */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1">
          {filteredTech.map((tech, index) => (
            <motion.button
              key={tech.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              onClick={() => {
                playClick();
                setSelectedTech(tech);
              }}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              whileHover={{ scale: 1.04, y: -4 }}
              className="brutalist-card p-5 flex flex-col items-center justify-center text-center gap-2 cursor-pointer group min-h-[120px]"
            >
              <span className="font-brutalist font-bold text-lg text-white group-hover:text-amber-400 transition-colors uppercase tracking-tight">
                {tech.name}
              </span>
              <span className="text-[9px] font-mono text-white/40">{tech.experience}</span>
            </motion.button>
          ))}
        </div>

        {/* Expanded Tech Detail Modal — Brutalist */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="brutalist-card border-amber-400/30 p-8 max-w-lg w-full space-y-6 relative raw-grid-dense"
              >
                <button
                  onClick={() => {
                    playClick();
                    setSelectedTech(null);
                  }}
                  className="absolute top-6 right-6 p-2 brutalist-border text-white/80 hover:text-white hover:border-amber-400 cursor-pointer transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="space-y-1">
                  <span className="brutalist-tag text-amber-400 border-amber-400/40 inline-block mb-2">
                    {selectedTech.category} &bull; {selectedTech.experience}
                  </span>
                  <h3 className="font-brutalist font-bold text-4xl text-white uppercase tracking-tight">{selectedTech.name}</h3>
                </div>

                <div className="space-y-2 border-t-2 border-white/10 pt-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    WHY_I_USE_IT
                  </h4>
                  <p className="text-sm font-body font-light text-white/80 leading-relaxed">
                    "{selectedTech.whyIUseIt}"
                  </p>
                </div>

                <div className="space-y-2 border-t-2 border-white/10 pt-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    SHIPPED_PROJECTS
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedTech.projects.map((proj) => (
                      <span key={proj} className="brutalist-tag text-cyan-400 border-cyan-400/30">
                        ✦ {proj}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
