import React from 'react';
import { ArrowUp, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface FooterSectionProps {
  onScrollToTop?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onScrollToTop }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full px-4 sm:px-8 py-12 bg-black text-white border-t-4 border-black">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Branding */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FAFF00] border border-black animate-pulse" />
            <span className="font-grotesk font-black text-lg tracking-wider uppercase text-white">
              {PERSONAL_DATA.name.toUpperCase()}
            </span>
          </div>
          <div className="font-mono text-xs text-neutral-400">
            FULL-STACK DEVELOPER & AI BUILDER · BENGALURU, INDIA
          </div>
        </div>

        {/* Center Quick Navigation */}
        <nav className="flex flex-wrap items-center gap-4 font-mono text-xs font-bold uppercase tracking-wider text-neutral-300">
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-[#FAFF00] transition-colors cursor-pointer"
          >
            WORK
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-[#FAFF00] transition-colors cursor-pointer"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="hover:text-[#FAFF00] transition-colors cursor-pointer"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-[#FAFF00] transition-colors cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-[#FAFF00] hover:underline transition-colors cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Socials & Return to Top */}
        <div className="flex items-center gap-3 font-mono text-xs font-bold">
          <a
            href={PERSONAL_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900 border border-neutral-700 hover:bg-[#FAFF00] hover:text-black hover:border-black transition-all"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900 border border-neutral-700 hover:bg-[#FAFF00] hover:text-black hover:border-black transition-all"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_DATA.socials.topmate}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900 border border-neutral-700 hover:bg-[#FAFF00] hover:text-black hover:border-black transition-all"
            title="Topmate"
          >
            <Calendar className="w-4 h-4" />
          </a>
          <button
            onClick={handleTop}
            className="px-3 py-2 bg-[#FAFF00] text-black border-2 border-black shadow-[2px_2px_0px_#fff] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all flex items-center gap-1 cursor-pointer"
            title="Back to Top"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-neutral-500">
        <div>© 2026 HASISH INFANT. ALL RIGHTS RESERVED.</div>
        <div>DESIGNED IN COMIC NEO-BRUTALIST ARCHITECTURE.</div>
      </div>
    </footer>
  );
};
export default FooterSection;
