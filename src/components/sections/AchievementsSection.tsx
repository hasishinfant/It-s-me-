import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, Users, Flame } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';

interface AchievementItem {
  id: string;
  category: 'Hackathons' | 'Open Source' | 'Certificates' | 'Community';
  title: string;
  subtitle: string;
  year: string;
  description: string;
  icon: React.ReactNode;
}

const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'hackathon-1',
    category: 'Hackathons',
    title: 'Grand Winner & 1st Place',
    subtitle: 'National AI Innovation Challenge 2025',
    year: '2025',
    description: 'Built OceanRaksha AI — a satellite deep learning plastic detection service under a 36-hour sprint. Awarded 1st place among 400+ national builder teams.',
    icon: <Trophy className="w-5 h-5 text-amber-400" />,
  },
  {
    id: 'hackathon-2',
    category: 'Hackathons',
    title: '1st Place — EdTech & AI Hackathon',
    subtitle: 'NeoScholar AI Synthesis Suite',
    year: '2025',
    description: 'Architected 3D force-directed academic literature knowledge graphs. Recognized for highest visual craft and real-time RAG literature search precision.',
    icon: <Award className="w-5 h-5 text-cyan-400" />,
  },
  {
    id: 'open-source-1',
    category: 'Open Source',
    title: 'OpportunX AI Platform Launch',
    subtitle: '12,000+ Active Builder Users',
    year: '2024',
    description: 'Created and open-sourced an intelligent opportunity discovery engine parsing thousands of hackathons, grants, and tech internships with personalized fit scoring.',
    icon: <Star className="w-5 h-5 text-purple-400" />,
  },
  {
    id: 'open-source-2',
    category: 'Open Source',
    title: 'OPUS Multi-Agent AI Framework',
    subtitle: 'Autonomous Workflow Orchestration',
    year: '2026',
    description: 'Published open-source Python & TypeScript multi-agent DAG execution framework used by 5+ early-stage AI startups.',
    icon: <Flame className="w-5 h-5 text-emerald-400" />,
  },
  {
    id: 'community-1',
    category: 'Community',
    title: 'Technical Speaker & Mentor',
    subtitle: '200+ Junior Developers Mentored',
    year: '2025',
    description: 'Hosted workshops on modern React, Three.js WebGL shaders, and LangChain multi-agent systems for university student developers.',
    icon: <Users className="w-5 h-5 text-white" />,
  },
];

export const AchievementsSection: React.FC = () => {
  const { setCursorType, playHover } = usePortfolio();

  return (
    <section id="achievements" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 raw-grid">
      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">008</span> — ACHIEVEMENTS
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Milestones</span>
            <span className="block">& Honors</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Hackathon victories, open-source milestones, and community impact.
          </p>
        </div>

        {/* Achievements Grid — Brutalist */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {ACHIEVEMENTS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' as const }}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-card p-7 flex flex-col justify-between group cursor-pointer relative"
            >
              {/* Large Background Index */}
              <div className="absolute top-3 right-4 brutalist-index text-[5rem]">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 brutalist-border flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="brutalist-tag">
                    {item.year}
                  </span>
                </div>

                <div>
                  <span className="text-[9px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-brutalist font-bold text-xl md:text-2xl text-white group-hover:text-amber-400 transition-colors mt-1 uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] font-mono text-white/50 mt-1">{item.subtitle}</p>
                </div>

                <p className="text-xs font-body font-light text-white/70 leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-white/10 text-[9px] font-mono text-white/30 group-hover:text-white transition-colors uppercase tracking-widest">
                VERIFIED_ACHIEVEMENT →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
