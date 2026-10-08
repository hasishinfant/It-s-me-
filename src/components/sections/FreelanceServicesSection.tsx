import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import { FREELANCE_SERVICES, FREELANCE_PROCESS } from '../../data/portfolioData';

interface FreelanceServicesSectionProps {
  onStartProjectClick?: () => void;
}

export const FreelanceServicesSection: React.FC<FreelanceServicesSectionProps> = ({ onStartProjectClick }) => {
  const scrollToContact = () => {
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="w-full px-4 sm:px-8 py-24 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b-2 border-black">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-grotesk tracking-tight text-black uppercase">
              SERVICES
            </h2>
            <p className="mt-2 text-base sm:text-lg font-body text-neutral-800 font-medium">
              High-performance web applications, fast landing pages, and AI-powered product integrations.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="comic-btn-yellow px-5 py-3 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 5 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FREELANCE_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_#000] transition-all flex flex-col justify-between ${
                idx === 2 ? 'md:col-span-2 lg:col-span-1 bg-[#FAFF00]/15' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 bg-black text-[#FAFF00] border-2 border-black flex items-center justify-center font-mono font-black text-sm">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-black font-grotesk text-black mb-3">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm font-body text-neutral-800 font-medium mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1.5 pt-4 border-t border-neutral-200">
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-800">
                      <span className="w-1.5 h-1.5 bg-[#FF0000]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-black flex items-center justify-end font-mono text-xs font-bold">
                <button
                  onClick={scrollToContact}
                  className="text-black hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  DISCUSS <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4-Step Process Strip */}
        <div className="bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b-2 border-black">
            <div>
              <h3 className="text-2xl sm:text-4xl font-black font-grotesk text-black uppercase">
                THE 4-STEP SHIP PROCESS
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-mono font-bold text-neutral-600 max-w-xs">
              Fast, communicative, and zero guesswork from first idea to live URL.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FREELANCE_PROCESS.map((step, sIdx) => (
              <div
                key={sIdx}
                className="p-4 bg-[#F4F4F0] border-2 border-black shadow-[3px_3px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-black font-grotesk text-black">
                      {step.step}
                    </span>
                    <span className="w-2.5 h-2.5 bg-[#FAFF00] border border-black" />
                  </div>
                  <div className="font-mono text-sm font-black text-black uppercase mb-1.5">
                    {step.title}
                  </div>
                  <p className="text-xs font-body text-neutral-700 font-medium">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] p-6 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-black font-grotesk text-black uppercase">
              HAVE A PROJECT YOU WANT TO BUILD?
            </h3>
            <p className="text-sm font-body text-neutral-900 font-semibold max-w-xl">
              Whether you need an MVP built in two weeks, a bold landing page designed to convert, or an AI feature integrated into your product, let's talk.
            </p>
          </div>

          <button
            onClick={scrollToContact}
            className="comic-btn-black px-6 py-3.5 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shrink-0"
          >
            <span>GET IN TOUCH</span>
            <Send className="w-4 h-4 text-[#FAFF00]" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default FreelanceServicesSection;
