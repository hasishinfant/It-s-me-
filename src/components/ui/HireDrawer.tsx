import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { usePortfolio } from '../../context/PortfolioContext';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const HireDrawer: React.FC = () => {
  const { isHireDrawerOpen, setIsHireDrawerOpen, playClick, playHover } = usePortfolio();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [booked, setBooked] = useState(false);

  const availableSlots = [
    "09:00 AM EST", "11:30 AM EST", "02:00 PM EST", "04:30 PM EST", "07:00 PM EST"
  ];

  const handleBooking = () => {
    playClick();
    setBooked(true);
    setTimeout(() => {
      setBooked(false);
      setSelectedTime(null);
      setIsHireDrawerOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isHireDrawerOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-md flex justify-end"
          onClick={() => setIsHireDrawerOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md h-full bg-[#050b14] border-l border-white/10 p-8 flex flex-col justify-between overflow-y-auto space-y-8 shadow-2xl relative"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                  SCHEDULE 1-ON-1 WITH HASISH
                </span>
              </div>
              <button
                onClick={() => { playClick(); setIsHireDrawerOpen(false); }}
                className="p-1 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6 my-auto">
              <div className="space-y-2">
                <h3 className="text-2xl font-serif italic text-white">Let's Discuss Your Product</h3>
                <p className="text-xs font-mono text-slate-400 leading-relaxed">
                  Select an available 30-minute slot for a technical introductory call or project code review.
                </p>
              </div>

              {booked ? (
                <div className="p-6 rounded-2xl glass-card border border-cyan-500/50 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                  <h4 className="text-lg font-serif italic text-white">Session Confirmed!</h4>
                  <p className="text-xs font-mono text-slate-300">
                    A calendar invitation has been sent to your email for {selectedTime}.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>TOMORROW — UPCOMING SLOTS</span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {availableSlots.map((slot) => {
                      const isSelected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => { playClick(); setSelectedTime(slot); }}
                          onMouseEnter={() => playHover()}
                          className={`w-full p-3.5 rounded-2xl text-xs font-mono flex items-center justify-between transition-all ${
                            isSelected
                              ? 'bg-cyan-500 text-slate-950 font-bold border border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.4)]'
                              : 'glass-card text-slate-300 hover:text-white border-slate-800'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {slot}
                          </span>
                          <span>{isSelected ? 'SELECTED' : 'SELECT'}</span>
                        </button>
                      );
                    })}
                  </div>

                  {selectedTime && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      onClick={handleBooking}
                      className="w-full py-4 rounded-2xl bg-white text-slate-950 font-mono text-xs font-bold uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-xl"
                    >
                      Confirm {selectedTime} Meeting
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            {/* Footer Direct Mail Link */}
            <div className="pt-4 border-t border-slate-800/80 text-center">
              <a
                href={PERSONAL_DATA.socials.calendly}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-cyan-400 hover:underline flex items-center justify-center gap-1.5"
              >
                <span>Open Full Calendly Page</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
