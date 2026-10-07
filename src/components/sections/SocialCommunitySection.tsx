import React from 'react';
import { COMMUNITY_AFFILIATIONS } from '../../data/portfolioData';

export const SocialCommunitySection: React.FC = () => {
  return (
    <section id="community" className="relative py-20 sm:py-28 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-2 border border-black/5">
              <span>SECTION 09 // ECOSYSTEM & COMMUNITY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase">
              ECOSYSTEM NETWORK
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-500 uppercase">
            Active communities, hackathons, and learning networks
          </p>
        </div>

        {/* ── CLEAN MONOCHROME TYPOGRAPHIC MARKS (Frame 17) ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-black/10">
          {COMMUNITY_AFFILIATIONS.map((aff) => (
            <div
              key={aff.name}
              className="group p-5 rounded-2xl bg-white border border-black/5 hover:border-black/20 transition-all flex flex-col justify-between min-h-[110px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
            >
              <span className="font-grotesk font-bold text-sm sm:text-base text-neutral-900 group-hover:text-black tracking-tight leading-snug">
                {aff.name}
              </span>
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 mt-2">
                <span>{aff.category}</span>
                <span className="text-neutral-500">{aff.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SocialCommunitySection;
