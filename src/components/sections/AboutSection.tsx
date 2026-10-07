import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Trophy, Users, GraduationCap } from 'lucide-react';
import { LinkedinIcon } from '../ui/SocialIcons';
import { PROOF_METRICS } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b-2 border-black">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-grotesk tracking-tight text-black uppercase">
              ABOUT ME
            </h2>
            <p className="mt-2 text-base sm:text-lg font-body text-neutral-800 font-medium">
              Computer Science student at Alliance University in Bengaluru who believes in shipping real software.
            </p>
          </div>
          <div className="font-mono text-xs font-bold text-neutral-600">
            BENGALURU, INDIA · 2024–2028
          </div>
        </div>

        {/* Main Narrative Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-10 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-6"
        >
          <h3 className="text-2xl sm:text-4xl font-black font-grotesk text-black leading-tight">
            "I learn by building. Some projects are serious. Some are experiments. Some fail. That is usually where the interesting part starts."
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base sm:text-lg font-body text-neutral-800 font-medium leading-relaxed">
            <p>
              I'm a Computer Science undergraduate at Alliance University in Bengaluru. Rather than just memorizing theory, I believe in writing code, deploying to real cloud infrastructure, testing under pressure in hackathons, and delivering software for clients.
            </p>
            <p>
              Whether engineering AWS serverless architectures for career matching, orchestrating real-time SFU media streams in WebRTC, or designing high-converting web apps, I take complete end-to-end ownership.
            </p>
          </div>

          <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold">
            <span className="text-neutral-600">HASISH INFANT · ALLIANCE UNIVERSITY</span>
            <a
              href="https://www.linkedin.com/posts/hasish-infant_traveltech-ai-productengineering-activity-7434099428321394688-Ibyq"
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn-yellow px-3.5 py-2 flex items-center gap-1.5 cursor-pointer"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>READ JOURNEY ON LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Stats Grid (Matching BRUTAL reference stats) */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-black font-grotesk text-black uppercase mb-6">
            BENCHMARKS & PROOF OF WORK
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {PROOF_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`p-5 border-2 sm:border-[3px] border-black ${
                  idx === 0
                    ? 'bg-[#FAFF00] shadow-[5px_5px_0px_#000]'
                    : 'bg-white shadow-[4px_4px_0px_#000]'
                }`}
              >
                <div className="text-3xl sm:text-4xl font-black font-grotesk text-black mb-1">
                  {metric.value}
                </div>
                <div className="font-mono text-xs font-black uppercase text-black mb-1">
                  {metric.label}
                </div>
                <div className="font-body text-xs text-neutral-700">
                  {metric.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* SIG Web App */}
          <div className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                  CO-LEAD
                </span>
                <Users className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xl font-black font-grotesk text-black mb-2">
                SIG Web App & UI/UX
              </h4>
              <p className="text-xs sm:text-sm font-body text-neutral-800">
                Mentoring peers in modern React, UI/UX systems, testing, and production deployment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 font-mono text-xs font-bold text-neutral-600">
              ALLIANCE UNIVERSITY
            </div>
          </div>

          {/* Tech^Ferrs Community */}
          <div className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-neutral-500 uppercase">
                  FOUNDER
                </span>
                <Trophy className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xl font-black font-grotesk text-black mb-2">
                Tech^Ferrs Community
              </h4>
              <p className="text-xs sm:text-sm font-body text-neutral-800">
                Founded a developer community connecting students with seasoned software architects and AI engineers.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-200 font-mono text-xs font-bold text-neutral-600">
              STUDENT COMMUNITY
            </div>
          </div>

          {/* Education */}
          <div className="p-6 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-black uppercase">
                  EDUCATION
                </span>
                <GraduationCap className="w-5 h-5 text-black" />
              </div>
              <h4 className="text-xl font-black font-grotesk text-black mb-1">
                Alliance University
              </h4>
              <p className="text-xs sm:text-sm font-body text-neutral-900 font-medium">
                B.Tech Computer Science and Engineering (2024 — 2028). Focus on Algorithms, Cloud Architecture, and Operating Systems.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-black/20 font-mono text-xs font-bold text-black">
              BENGALURU, INDIA
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
