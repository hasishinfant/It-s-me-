import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Feather } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#F4F3EF] border-t border-black/5">
      <div className="max-w-5xl mx-auto">
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-200/80 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-8 border border-black/5">
          <Compass className="w-3.5 h-3.5 text-neutral-700" />
          <span>SECTION 10 // PERSONAL MANIFESTO</span>
        </div>

        {/* Large Understated Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold font-grotesk tracking-tight text-neutral-950 uppercase leading-[0.95]"
        >
          <span className="block">{PERSONAL_DATA.bioStatement.split('.')[0]}.</span>
          <span className="font-editorial italic font-normal text-neutral-800 block mt-1 lowercase text-5xl sm:text-7xl md:text-8xl">
            {PERSONAL_DATA.bioStatement.split('.')[1]?.trim().toLowerCase() || 'still building'}.
          </span>
        </motion.h2>

        {/* Authentic Human First-Person Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10 sm:mt-14 max-w-2xl space-y-6 text-base sm:text-lg md:text-xl text-neutral-700 font-normal leading-relaxed"
        >
          <p>{PERSONAL_DATA.bioDescription}</p>

          <div className="pt-6 flex items-center gap-4 text-xs font-mono text-neutral-500">
            <div className="p-2.5 rounded-full bg-neutral-200 text-neutral-800">
              <Feather className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-neutral-950">{PERSONAL_DATA.name}</span> — {PERSONAL_DATA.role}
              <div className="text-[11px] text-neutral-400">Bengaluru, India</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default AboutSection;
