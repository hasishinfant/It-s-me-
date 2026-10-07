import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Sparkles } from 'lucide-react';
import { LEADERSHIP_DATA, PERSONAL_DATA } from '../../data/portfolioData';

export const LeadershipEducationSection: React.FC = () => {
  return (
    <section id="leadership" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-[#FAFF00] border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <Users className="w-3.5 h-3.5" />
              <span>LEADERSHIP & ACADEMICS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-grotesk tracking-tight text-black uppercase">
              COMMUNITY & EDUCATION
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-body text-neutral-700">
            Guiding peers in modern web engineering, building grassroots tech communities, and maintaining strong academic rigor.
          </p>
        </div>

        {/* Leadership & Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 1. Co-Lead SIG Web App */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-[#FAFF00] border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black uppercase">
                  {LEADERSHIP_DATA[0]?.badge || 'UNIVERSITY LEADERSHIP'}
                </span>
                <Users className="w-5 h-5 text-black" />
              </div>

              <div className="font-mono text-xs font-bold text-neutral-500 uppercase mb-1">
                {LEADERSHIP_DATA[0]?.role} · ALLIANCE UNIVERSITY
              </div>
              <h3 className="text-2xl font-black font-grotesk text-black mb-3">
                {LEADERSHIP_DATA[0]?.org}
              </h3>
              <p className="text-sm font-body text-neutral-800 leading-relaxed font-medium">
                {LEADERSHIP_DATA[0]?.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-neutral-700">
              FOCUS: WORKSHOPS, CODE REVIEWS & SPRINTS
            </div>
          </motion.div>

          {/* 2. Founder Tech^Ferrs Community */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-[#FF0000] text-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold uppercase">
                  {LEADERSHIP_DATA[1]?.badge || 'FOUNDER'}
                </span>
                <Sparkles className="w-5 h-5 text-black" />
              </div>

              <div className="font-mono text-xs font-bold text-neutral-500 uppercase mb-1">
                COMMUNITY BUILDER
              </div>
              <h3 className="text-2xl font-black font-grotesk text-black mb-3">
                {LEADERSHIP_DATA[1]?.org}
              </h3>
              <p className="text-sm font-body text-neutral-800 leading-relaxed font-medium">
                {LEADERSHIP_DATA[1]?.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black/10 font-mono text-xs font-bold text-neutral-700">
              FOCUS: INDUSTRY MENTORSHIP & HACKATHONS
            </div>
          </motion.div>

          {/* 3. Alliance University Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-6 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] flex flex-col justify-between md:col-span-2 lg:col-span-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_#000] text-xs font-mono font-bold text-black uppercase">
                  EDUCATION · {PERSONAL_DATA.education.duration}
                </span>
                <GraduationCap className="w-6 h-6 text-black" />
              </div>

              <div className="font-mono text-xs font-bold text-black uppercase mb-1">
                {PERSONAL_DATA.education.institution.toUpperCase()} · BENGALURU
              </div>
              <h3 className="text-2xl font-black font-grotesk text-black mb-1">
                {PERSONAL_DATA.education.degree}
              </h3>
              <div className="inline-block px-2.5 py-1 bg-black text-[#FAFF00] font-mono text-xs font-black uppercase my-2">
                BENGALURU, INDIA · 2024–2028
              </div>
              <p className="text-sm font-body text-neutral-900 leading-relaxed font-medium">
                Strong focus on Data Structures & Algorithms, Object-Oriented System Design, Cloud Architecture, and Operating Systems.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-black/20 font-mono text-xs font-bold text-black flex items-center justify-between">
              <span>STATUS: 3RD YEAR UNDERGRAD</span>
              <span>{PERSONAL_DATA.education.location.toUpperCase()}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default LeadershipEducationSection;
