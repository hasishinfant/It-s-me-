import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

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
    <header className="sticky top-4 sm:top-6 z-50 w-full px-4 sm:px-8 max-w-[1360px] mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between py-2.5 px-4 sm:px-6 rounded-full transition-all duration-300 border ${
          scrolled
            ? 'bg-[#f6f5f1]/90 backdrop-blur-md border-black/10 shadow-sm text-neutral-900'
            : 'bg-transparent border-black/5 text-neutral-900'
        }`}
      >
        {/* Name / Studio Monogram */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2.5 text-left text-xs sm:text-sm font-semibold tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-grotesk tracking-widest text-neutral-950 group-hover:opacity-70 transition-opacity">
            HASISH INFANT // STUDIO
          </span>
          <span className="hidden lg:inline-block text-[10px] text-neutral-400 font-mono tracking-normal">
            [EST. 2024]
          </span>
        </button>

        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono uppercase tracking-wider text-neutral-700">
          <button
            onClick={() => scrollTo('projects-reveal')}
            className="hover:text-black transition-colors relative py-1"
          >
            WORK
          </button>
          <button
            onClick={() => scrollTo('collective')}
            className="hover:text-black transition-colors relative py-1 flex items-center gap-1"
          >
            <span className="text-purple-600 font-bold">●</span>
            <span>COLLECTIVE</span>
          </button>
          <button
            onClick={() => scrollTo('studies')}
            className="hover:text-black transition-colors relative py-1"
          >
            STUDIES
          </button>
          <button
            onClick={() => scrollTo('my-craft')}
            className="hover:text-black transition-colors relative py-1"
          >
            CRAFT
          </button>
          <button
            onClick={() => scrollTo('things-built')}
            className="hover:text-black transition-colors relative py-1"
          >
            ARCHIVE
          </button>
          <button
            onClick={() => scrollTo('bragging-rights')}
            className="hover:text-black transition-colors relative py-1"
          >
            PROOF
          </button>
        </nav>

        {/* Agency Commission Pill CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo('contact');
            }}
            className="group relative flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-950 text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-sm hover:shadow active:scale-95 border border-white/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 transition-transform group-hover:rotate-12" />
            <span>COMMISSION</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default EditorialNavbar;
