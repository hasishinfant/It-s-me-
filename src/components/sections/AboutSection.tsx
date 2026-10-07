import React from 'react';
import { motion } from 'framer-motion';
import { User, ArrowUpRight, MapPin } from 'lucide-react';
import { LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-8 py-20 bg-[#F4F4F0] border-b-2 border-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF0000] text-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-bold uppercase mb-3">
              <User className="w-3.5 h-3.5" />
              <span>THE BUILDER IDENTITY</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-grotesk tracking-tight text-black uppercase">
              WHO IS HASISH?
            </h2>
          </div>
          <div className="font-mono text-xs font-bold text-neutral-600 flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-black" />
            <span>BENGALURU, INDIA · 12.9716° N, 77.5946° E</span>
          </div>
        </div>

        {/* Comic Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Manifesto Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 p-6 sm:p-10 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              {PERSONAL_DATA.bioTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#FAFF00] border border-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_#000]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-grotesk text-black leading-snug">
              "I learn by building. Some projects are serious. Some are experiments. Some fail. That is usually where the interesting part starts."
            </h3>

            <p className="font-body text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
              I'm a 3rd-year Computer Science undergraduate at Alliance University in Bengaluru. Rather than just memorizing theory, I believe in writing code, deploying services to real infrastructure, testing them under pressure in hackathons, and delivering commercial software for clients.
            </p>

            <p className="font-body text-base sm:text-lg text-neutral-800 leading-relaxed font-medium">
              Whether building AWS serverless architectures for career matching, orchestrating real-time SFU media streams in WebRTC, or designing high-converting web apps for freelance clients, I take complete end-to-end ownership.
            </p>

            <div className="pt-4 border-t-2 border-black flex flex-wrap items-center justify-between gap-4 font-mono text-xs font-bold">
              <span className="text-neutral-600">HASISH INFANT · ALLIANCE UNIVERSITY</span>
              <a
                href="https://www.linkedin.com/posts/hasish-infant_traveltech-ai-productengineering-activity-7434099428321394688-Ibyq"
                target="_blank"
                rel="noopener noreferrer"
                className="comic-btn-yellow px-3 py-1.5 flex items-center gap-1.5 cursor-pointer"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>READ JOURNEY ON LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Comic Persona Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Stats Box */}
            <div className="p-6 bg-[#FAFF00] border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] space-y-4">
              <span className="inline-block px-2 py-0.5 bg-black text-white font-mono text-xs font-bold uppercase">
                THE MINDSET
              </span>
              <h4 className="text-xl font-black font-grotesk text-black">
                SYSTEMS ARCHITECTURE & CRAFT
              </h4>
              <p className="text-xs font-body text-neutral-900 font-semibold leading-relaxed">
                Serious enough to understand distributed systems, data structures, and cloud architecture. Scrappy and creative enough to ship client websites, bold landing pages, and rapid MVPs.
              </p>
            </div>

            {/* Quick Principles */}
            <div className="p-6 bg-white border-2 sm:border-[3px] border-black shadow-[6px_6px_0px_#000] space-y-3 font-mono text-xs font-bold">
              <span className="text-neutral-500 uppercase">CORE VALUES:</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FF0000]" />
                <span>SPEED & ITERATION OVER OVERTHINKING</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-black" />
                <span>FULL-STACK PRODUCT OWNERSHIP</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#FAFF00] border border-black" />
                <span>BUILD IN PUBLIC & SHARE LEARNINGS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
