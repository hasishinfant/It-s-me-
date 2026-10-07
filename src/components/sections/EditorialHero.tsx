import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface EditorialHeroProps {
  onExploreClick?: () => void;
  onTalkClick?: () => void;
}

const HERO_PHOTOS = [
  {
    src: '/images/hasish-presenting.jpg',
    alt: 'Hasish presenting NeoScholar AI',
    caption: 'PRESENTING',
    badgeColor: 'bg-[#FAFF00] text-black',
  },
  {
    src: '/images/hasish-speaking.jpg',
    alt: 'Hasish speaking at tech event',
    caption: 'SPEAKER',
    badgeColor: 'bg-black text-[#FAFF00]',
  },
  {
    src: '/images/hasish-microsoft.jpg',
    alt: 'Hasish at Microsoft Copilot',
    caption: 'MICROSOFT',
    badgeColor: 'bg-[#FF0000] text-white',
  },
  {
    src: '/images/hasish-uipath.jpg',
    alt: 'Hasish at UiPath Agent Builders Day Chennai',
    caption: 'UIPATH AGENTS',
    badgeColor: 'bg-white text-black',
  },
];

export const EditorialHero: React.FC<EditorialHeroProps> = ({ onExploreClick, onTalkClick }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-between items-center px-4 sm:px-8 pt-4 pb-12 overflow-hidden bg-[#F4F4F0]"
    >
      {/* ── TOP CLEAN BAR ── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between py-3 px-4 bg-white border-2 border-black shadow-[3px_3px_0px_#000] text-xs font-mono font-bold">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 bg-emerald-500 animate-ping" />
          <span className="uppercase text-black">
            {PERSONAL_DATA.name.toUpperCase()}
          </span>
          <span className="hidden sm:inline text-neutral-500 font-normal">
            — BENGALURU, INDIA
          </span>
        </div>

        <button
          onClick={() => {
            if (onTalkClick) onTalkClick();
            else scrollTo('contact');
          }}
          className="px-3 py-1 bg-[#FAFF00] text-black border border-black hover:bg-black hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold"
        >
          LET'S TALK →
        </button>
      </div>

      {/* ── MAIN HERO CONTENT: TEXT LEFT + 2x2 PHOTO GRID RIGHT ── */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-14 mt-8 sm:mt-12 z-10">
        {/* Left: Headline, Subtitle, CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black font-grotesk tracking-tight text-black leading-[1.05]"
          >
            I BUILD DIGITAL PRODUCTS AND{' '}
            <span className="relative inline-block px-2 sm:px-3 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-1deg] text-black">
              EXPERIMENT
            </span>{' '}
            WITH AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg md:text-xl font-body text-neutral-800 max-w-2xl font-medium leading-relaxed"
          >
            Computer Science student and full-stack developer from Bengaluru building web applications, AI systems, and shipping products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4 font-mono font-bold text-xs sm:text-sm uppercase tracking-wider"
          >
            <button
              onClick={() => {
                if (onExploreClick) onExploreClick();
                else scrollTo('work');
              }}
              className="comic-btn-black px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW WORK</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                if (onTalkClick) onTalkClick();
                else scrollTo('contact');
              }}
              className="comic-btn-yellow px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={PERSONAL_DATA.socials.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-btn-white px-6 py-3 flex items-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </a>
          </motion.div>
        </div>

        {/* Right: Neo-Brutalist 2x2 Photo Collage */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex-shrink-0 w-full max-w-[420px] lg:max-w-[460px]"
        >
          <div className="grid grid-cols-2 gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000]">
            {HERO_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden border-2 border-black shadow-[3px_3px_0px_#000] bg-neutral-100"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-[155px] sm:h-[185px] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  loading="eager"
                />
                <div
                  className={`absolute bottom-2 left-2 px-2 py-0.5 border border-black font-mono text-[9px] font-black uppercase shadow-[1px_1px_0px_#000] ${photo.badgeColor}`}
                >
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2.5 flex items-center justify-between font-mono text-[10px] font-bold text-neutral-600 uppercase tracking-wider">
            <span>HASISH INFANT</span>
            <span>BUILDER IN PUBLIC · BENGALURU</span>
          </div>
        </motion.div>
      </div>

      {/* ── CLEAN BOTTOM SCROLL HINT ── */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-center mt-8">
        <button
          onClick={() => scrollTo('work')}
          className="font-mono text-xs font-bold text-neutral-600 hover:text-black flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
};
export default EditorialHero;
