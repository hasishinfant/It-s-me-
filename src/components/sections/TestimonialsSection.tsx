import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../../data/portfolioData';
import { usePortfolio } from '../../context/PortfolioContext';

export const TestimonialsSection: React.FC = () => {
  const { setCursorType, playHover, playClick } = usePortfolio();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    playClick();
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    playClick();
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="relative min-h-[75vh] py-28 px-6 md:px-12 lg:px-16 z-10 flex items-center bg-black">
      {/* Watermark */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[20rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02]">
        WORDS
      </div>

      <div className="max-w-5xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">009</span> — ENDORSEMENTS
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            Peer Recognition
          </h2>
        </div>

        {/* Testimonial Card — Brutalist */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' as const }}
              onMouseEnter={() => {
                setCursorType('hover');
                playHover();
              }}
              onMouseLeave={() => setCursorType('default')}
              className="brutalist-card p-8 md:p-14 relative space-y-6"
            >
              {/* Large Brutalist Quote Mark */}
              <span className="font-brutalist font-bold text-[8rem] md:text-[12rem] leading-none text-white/5 absolute top-0 right-8 pointer-events-none select-none">
                "
              </span>

              {/* Index */}
              <div className="font-mono text-[10px] text-white/30 uppercase tracking-widest">
                TESTIMONIAL_{String(currentIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </div>

              <p className="font-heading italic text-2xl sm:text-4xl text-white/90 leading-relaxed max-w-3xl">
                "{current.content}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t-2 border-white/10">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 object-cover brutalist-border"
                />
                <div>
                  <h4 className="text-white font-brutalist font-bold text-sm uppercase">{current.name}</h4>
                  <p className="text-[10px] font-mono text-amber-400">
                    {current.role} &bull; {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls — Brutalist */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-1">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => {
                    playClick();
                    setCurrentIndex(idx);
                  }}
                  className={`h-1 transition-all cursor-pointer ${
                    idx === currentIndex ? 'bg-amber-400 w-10' : 'bg-white/15 hover:bg-white/30 w-4'
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-1">
              <button
                onClick={prevTestimonial}
                onMouseEnter={() => {
                  setCursorType('hover');
                  playHover();
                }}
                onMouseLeave={() => setCursorType('default')}
                className="p-3 brutalist-border text-white/60 hover:text-white hover:border-amber-400 cursor-pointer transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                onMouseEnter={() => {
                  setCursorType('hover');
                  playHover();
                }}
                onMouseLeave={() => setCursorType('default')}
                className="p-3 brutalist-border text-white/60 hover:text-white hover:border-amber-400 cursor-pointer transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
