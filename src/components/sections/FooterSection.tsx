import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface FooterSectionProps {
  onScrollToTop?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onScrollToTop }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 sm:py-20 px-4 sm:px-8 bg-[#080808] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        {/* Left Monogram */}
        <div className="space-y-1">
          <div className="font-grotesk font-bold text-sm tracking-widest uppercase text-white">
            {PERSONAL_DATA.name}
          </div>
          <div className="text-xs font-mono text-neutral-500">
            AI + FULL-STACK + EXPERIMENTS
          </div>
        </div>

        {/* Center Navigation */}
        <nav className="flex flex-wrap items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <button onClick={() => scrollTo('work')} className="hover:text-white transition-colors cursor-pointer">
            WORK
          </button>
          <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">
            ABOUT
          </button>
          <button onClick={() => scrollTo('experiments')} className="hover:text-white transition-colors cursor-pointer">
            EXPERIMENTS
          </button>
          <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">
            CONTACT
          </button>
        </nav>

        {/* Right Verified Links & Copyright */}
        <div className="flex flex-col sm:items-end gap-2 text-xs font-mono text-neutral-500">
          <div className="flex items-center gap-5 text-neutral-300">
            <a
              href={PERSONAL_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GITHUB
            </a>
            <a
              href={PERSONAL_DATA.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              LINKEDIN
            </a>
            <a
              href={PERSONAL_DATA.socials.topmate}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              TOPMATE
            </a>
            <button
              onClick={handleTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2 cursor-pointer"
              title="Return to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
          <div>2026 © {PERSONAL_DATA.name.toUpperCase()}</div>
        </div>
      </div>
    </footer>
  );
};
export default FooterSection;
