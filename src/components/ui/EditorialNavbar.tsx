import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface EditorialNavbarProps {
  onContactClick?: () => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-3 sm:top-5 z-50 w-full px-4 sm:px-8 max-w-[1440px] mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#F4F3EF]/90 backdrop-blur-md border-black/10 shadow-sm text-neutral-900'
            : 'bg-transparent border-black/5 text-neutral-900'
        }`}
      >
        {/* Name Monogram */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2.5 text-left text-xs sm:text-sm font-semibold tracking-wider uppercase cursor-pointer"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-grotesk font-bold tracking-widest text-neutral-950 group-hover:opacity-70 transition-opacity">
            {PERSONAL_DATA.name.toUpperCase()}
          </span>
        </button>

        {/* Center Links (WORK, ABOUT, EXPERIMENTS, CONTACT) */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-700">
          <button
            onClick={() => scrollTo('work')}
            className="hover:text-black transition-colors relative py-1 cursor-pointer"
          >
            WORK
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-black transition-colors relative py-1 cursor-pointer"
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollTo('experiments')}
            className="hover:text-black transition-colors relative py-1 cursor-pointer"
          >
            EXPERIMENTS
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-black transition-colors relative py-1 cursor-pointer"
          >
            CONTACT
          </button>
        </nav>

        {/* Right Status Badge & Dark Rounded CTA */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 border border-black/5 text-[10px] font-mono text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>AVAILABLE FOR INTERNSHIPS</span>
          </div>

          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo('contact');
            }}
            className="group relative flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-grotesk font-semibold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default EditorialNavbar;
