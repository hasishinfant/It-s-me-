import React from 'react';
import { motion } from 'framer-motion';
import { RECRUITER_SNAPSHOT, PERSONAL_DATA } from '../../data/portfolioData';
import { FileText, Calendar, ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

export const RecruiterSnapshotSection: React.FC = () => {
  return (
    <section
      id="recruiter-snapshot"
      className="w-full px-4 sm:px-8 py-16 bg-[#F4F4F0] border-b-2 border-black"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF0000] text-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>55% RECRUITER · 5-SECOND SCAN</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-grotesk tracking-tight text-black">
              RECRUITER SNAPSHOT
            </h2>
            <p className="mt-1 text-sm sm:text-base font-body text-neutral-700">
              Everything an engineering manager or technical recruiter needs to know in under 10 seconds.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold">
            <span className="px-3 py-1.5 bg-[#FAFF00] border-2 border-black shadow-[2px_2px_0px_#000]">
              STATUS: OPEN TO INTERNSHIPS
            </span>
          </div>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {RECRUITER_SNAPSHOT.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className={`p-5 border-2 sm:border-[3px] border-black transition-all ${
                item.highlight
                  ? 'bg-[#FAFF00] shadow-[5px_5px_0px_#000]'
                  : 'bg-white shadow-[4px_4px_0px_#000]'
              }`}
            >
              <div className="flex items-center justify-between font-mono text-xs font-bold text-neutral-600 mb-2">
                <span>{item.label}</span>
                {item.highlight && (
                  <span className="px-1.5 py-0.5 bg-black text-white text-[10px]">
                    KEY
                  </span>
                )}
              </div>
              <div className="text-xl sm:text-2xl font-black font-grotesk text-black">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Context Bar */}
        <div className="mt-6 p-5 sm:p-6 bg-white border-2 sm:border-[3px] border-black shadow-[5px_5px_0px_#000] flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-black text-[#FAFF00] flex items-center justify-center font-black font-grotesk text-xl border-2 border-black shrink-0">
              HI
            </div>
            <div>
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-neutral-500 uppercase">
                <GraduationCap className="w-4 h-4 text-black" />
                <span>Alliance University · Alliance School of Advanced Computing (2024–2028)</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold font-grotesk text-black mt-0.5">
                B.Tech Computer Science & Engineering — Current CGPA 8.02 / 10
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-body mt-1">
                Active student leader, Co-Lead for Special Interest Group in Web Applications & UI/UX, Founder of Tech^Ferrs community. Proven hackathon competitor with national placements.
              </p>
            </div>
          </div>

          {/* Quick Action Links for Recruiters */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0 font-mono text-xs font-bold w-full md:w-auto">
            <a
              href={PERSONAL_DATA.socials.resumeUrl}
              className="comic-btn-yellow px-3.5 py-2 flex items-center gap-1.5 grow sm:grow-0 justify-center"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>VIEW RESUME</span>
            </a>
            <a
              href={PERSONAL_DATA.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn-black px-3.5 py-2 flex items-center gap-1.5 grow sm:grow-0 justify-center"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400" />
            </a>
            <a
              href={PERSONAL_DATA.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn-white px-3.5 py-2 flex items-center gap-1.5 grow sm:grow-0 justify-center"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
            <a
              href={PERSONAL_DATA.socials.topmate}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn-white px-3.5 py-2 flex items-center gap-1.5 grow sm:grow-0 justify-center"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>TOPMATE</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RecruiterSnapshotSection;
