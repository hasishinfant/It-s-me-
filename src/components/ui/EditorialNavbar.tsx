import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { PERSONAL_DATA } from '../../data/portfolioData';

interface EditorialNavbarProps {
  onContactClick?: () => void;
}

export const EditorialNavbar: React.FC<EditorialNavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-6 max-w-[1440px] mx-auto pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between py-2.5 px-3 sm:px-5 border-2 border-black transition-all duration-200 ${
          scrolled
            ? 'bg-white shadow-[4px_4px_0px_#000000]'
            : 'bg-[#F4F4F0] shadow-[3px_3px_0px_#000000]'
        }`}
      >
        {/* Name Logo Box */}
        <button
          onClick={() => scrollTo('hero')}
          className="group flex items-center gap-2 px-3 py-1 bg-black text-white border-2 border-black shadow-[2px_2px_0px_#000] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer text-left"
        >
          <span className="w-2 h-2 bg-[#FAFF00] animate-pulse" />
          <span className="font-grotesk font-black text-sm tracking-wider uppercase">
            {PERSONAL_DATA.name.toUpperCase()}
          </span>
        </button>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono font-bold uppercase tracking-wider text-black">
          <button
            onClick={() => scrollTo('work')}
            className="hover:bg-[#FAFF00] px-2 py-1 border border-transparent hover:border-black transition-all cursor-pointer"
          >
            WORK
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:bg-[#FAFF00] px-2 py-1 border border-transparent hover:border-black transition-all cursor-pointer"
          >
            SERVICES
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="hover:bg-[#FAFF00] px-2 py-1 border border-transparent hover:border-black transition-all cursor-pointer"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:bg-[#FAFF00] px-2 py-1 border border-transparent hover:border-black transition-all cursor-pointer"
          >
            ABOUT
          </button>
          <a
            href={PERSONAL_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:bg-[#FAFF00] px-2 py-1 border border-transparent hover:border-black transition-all cursor-pointer"
          >
            GITHUB
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={PERSONAL_DATA.socials.resumeUrl}
            className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 bg-white text-black text-xs font-mono font-bold uppercase border-2 border-black shadow-[2px_2px_0px_#000] hover:bg-neutral-100 active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>RESUME</span>
          </a>

          <button
            onClick={() => {
              if (onContactClick) onContactClick();
              else scrollTo('contact');
            }}
            className="comic-btn-yellow px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 bg-white border-2 border-black text-black shadow-[2px_2px_0px_#000] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto md:hidden mt-2 p-4 bg-white border-2 border-black shadow-[6px_6px_0px_#000] flex flex-col gap-3 font-mono text-xs font-bold uppercase">
          <button
            onClick={() => scrollTo('work')}
            className="text-left py-2 px-3 hover:bg-[#FAFF00] border border-black"
          >
            01. WORK
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="text-left py-2 px-3 hover:bg-[#FAFF00] border border-black"
          >
            02. SERVICES
          </button>
          <button
            onClick={() => scrollTo('stack')}
            className="text-left py-2 px-3 hover:bg-[#FAFF00] border border-black"
          >
            03. SKILLS
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="text-left py-2 px-3 hover:bg-[#FAFF00] border border-black"
          >
            04. ABOUT
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="text-left py-2 px-3 bg-[#FAFF00] text-black border-2 border-black shadow-[3px_3px_0px_#000]"
          >
            LET'S TALK →
          </button>
        </div>
      )}
    </header>
  );
};
export default EditorialNavbar;
