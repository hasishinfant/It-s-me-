import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Calendar,
  Send,
  Sparkles,
  Download,
  Play,
  Briefcase,
  UserCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { usePortfolio } from '../../context/PortfolioContext';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { playClick, setIsHireDrawerOpen, setIsVideoModalOpen } = usePortfolio();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrCompany: '',
    interest: 'client',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', roleOrCompany: '', interest: 'client', message: '' });
    }, 1200);
  };

  const handleDownloadResume = () => {
    playClick();
    alert('Hasish Infant Resume PDF download initiated.');
  };

  const handleWatchVideo = () => {
    playClick();
    setIsVideoModalOpen(true);
  };

  const handleBookCall = () => {
    playClick();
    setIsHireDrawerOpen(true);
  };

  return (
    <section id="contact" className="relative min-h-screen py-28 px-6 md:px-12 lg:px-16 z-10 bg-black raw-grid">
      {/* Watermark */}
      <div className="watermark-text text-[8rem] md:text-[14rem] lg:text-[20rem] top-20 left-0 opacity-[0.02]">
        LET'S_TALK
      </div>

      <div className="max-w-7xl mx-auto w-full relative">
        {/* Section Header — Brutalist */}
        <div className="mb-16">
          <div className="section-marker mb-6">
            <span className="text-amber-400">011</span> — CONTACT
          </div>

          <h2 className="font-brutalist font-bold text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-[-3px] text-white uppercase">
            <span className="text-stroke-thin block">Let's Build</span>
            <span className="block">Something People</span>
            <span className="text-stroke-amber block">Remember.</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-white/50 font-mono max-w-xl leading-relaxed">
            // Whether you're hiring or launching a product — choose your path below.
          </p>
        </div>

        {/* Dual Split Cards — Brutalist */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mb-16">
          
          {/* FOR RECRUITERS */}
          <div className="brutalist-card p-8 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-bold mb-3">
                <UserCheck size={16} />
                <span>FOR_RECRUITERS</span>
              </div>
              <h3 className="font-brutalist font-bold text-2xl md:text-3xl text-white uppercase leading-tight">
                Hiring an AI Engineer & Full-Stack Architect?
              </h3>
              <p className="mt-3 text-xs text-white/50 font-mono leading-relaxed">
                Direct access to verified credentials, video intro, code repos, and fast scheduling.
              </p>

              <div className="mt-8 space-y-1">
                <button
                  onClick={handleDownloadResume}
                  className="w-full brutalist-card p-4 flex items-center justify-between text-xs font-mono text-white hover:border-amber-400/50 transition-all cursor-pointer group/btn"
                >
                  <div className="flex items-center gap-3">
                    <Download size={18} className="text-amber-400" />
                    <span className="font-bold uppercase">Download Resume (PDF)</span>
                  </div>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-amber-400" />
                </button>

                <button
                  onClick={handleWatchVideo}
                  className="w-full brutalist-card p-4 flex items-center justify-between text-xs font-mono text-white hover:border-cyan-400/50 transition-all cursor-pointer group/btn"
                >
                  <div className="flex items-center gap-3">
                    <Play size={18} className="text-cyan-400 fill-cyan-400" />
                    <span className="font-bold uppercase">Watch Video Resume (2:30)</span>
                  </div>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-cyan-400" />
                </button>

                <div className="grid grid-cols-3 gap-1 pt-2">
                  <a
                    href={PERSONAL_DATA.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-card p-3 flex flex-col items-center justify-center text-center text-[9px] font-mono text-white/60 hover:text-white"
                  >
                    <LinkedinIcon className="w-5 h-5 text-cyan-400 mb-1" />
                    <span>LINKEDIN</span>
                  </a>
                  <a
                    href={PERSONAL_DATA.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-card p-3 flex flex-col items-center justify-center text-center text-[9px] font-mono text-white/60 hover:text-white"
                  >
                    <GithubIcon className="w-5 h-5 text-amber-400 mb-1" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_DATA.socials.email}`}
                    className="brutalist-card p-3 flex flex-col items-center justify-center text-center text-[9px] font-mono text-white/60 hover:text-white"
                  >
                    <Mail className="w-5 h-5 text-purple-400 mb-1" />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-white/10 text-[9px] font-mono text-white/30 flex justify-between items-center uppercase tracking-wider">
              <span>RESPONSE: &lt; 6 HOURS</span>
              <span className="text-emerald-400 font-bold">● OPEN_TO_ROLES</span>
            </div>
          </div>

          {/* FOR CLIENTS */}
          <div className="brutalist-card p-8 border-amber-400/20 flex flex-col justify-between group">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold mb-3">
                <Briefcase size={16} />
                <span>FOR_CLIENTS</span>
              </div>
              <h3 className="font-brutalist font-bold text-2xl md:text-3xl text-white uppercase leading-tight">
                Want a World-Class Website or AI Product Built?
              </h3>
              <p className="mt-3 text-xs text-white/50 font-mono leading-relaxed">
                From restaurant motion websites to autonomous AI products. Let's scope and build.
              </p>

              <div className="mt-8 space-y-1">
                <button
                  onClick={handleBookCall}
                  className="w-full brutalist-card p-4 border-amber-400/30 flex items-center justify-between text-xs font-mono text-amber-400 hover:border-amber-400 transition-all cursor-pointer group/btn"
                >
                  <div className="flex items-center gap-3">
                    <Calendar size={18} />
                    <span className="font-bold uppercase">Book 15-Min Discovery Call</span>
                  </div>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={handleBookCall}
                  className="w-full brutalist-card p-4 flex items-center justify-between text-xs font-mono text-white hover:border-purple-400/50 transition-all cursor-pointer group/btn"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles size={18} className="text-purple-400" />
                    <span className="font-bold uppercase">Request Custom Proposal</span>
                  </div>
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-purple-400" />
                </button>

                <div className="grid grid-cols-2 gap-1 pt-2">
                  <a
                    href="https://wa.me/919000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="brutalist-card p-3 flex items-center justify-center gap-2 text-[9px] font-mono text-white/60 hover:text-white"
                  >
                    <MessageSquare size={16} className="text-emerald-400" />
                    <span>WHATSAPP</span>
                  </a>
                  <a
                    href={`mailto:${PERSONAL_DATA.socials.email}?subject=Project%20Inquiry%20from%20Website`}
                    className="brutalist-card p-3 flex items-center justify-center gap-2 text-[9px] font-mono text-white/60 hover:text-white"
                  >
                    <Mail size={16} className="text-amber-400" />
                    <span>EMAIL</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t-2 border-white/10 text-[9px] font-mono text-white/30 flex justify-between items-center uppercase tracking-wider">
              <span>TIMELINES: 1-4 WEEKS</span>
              <span className="text-amber-400 font-bold">● Q3 LIMITED_SLOTS</span>
            </div>
          </div>
        </div>

        {/* Direct Contact Form — Brutalist */}
        <div className="brutalist-card p-8 md:p-12 relative">
          {/* LET'S TALK watermark behind form */}
          <div className="absolute top-4 right-8 brutalist-index text-[6rem] md:text-[10rem]">
            ✉
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <h3 className="font-brutalist font-bold text-3xl md:text-4xl text-white text-center uppercase tracking-tight">
              Send a Direct Message
            </h3>
            <p className="text-[10px] font-mono text-white/40 text-center mt-2 mb-8 uppercase tracking-widest">
              MESSAGES GO TO HASISH INFANT'S PRIORITY INBOX
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="brutalist-card p-8 text-center border-emerald-400/30 space-y-4"
              >
                <CheckCircle2 size={48} className="text-emerald-400 mx-auto" />
                <h4 className="font-brutalist font-bold text-3xl text-white uppercase">Message Transmitted!</h4>
                <p className="text-xs font-mono text-white/60">
                  RESPONSE_ETA: &lt; 6 HOURS
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="brutalist-btn text-xs py-2 px-5 cursor-pointer"
                >
                  SEND_ANOTHER
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-white/40 tracking-widest mb-2">
                      YOUR_NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="brutalist-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-white/40 tracking-widest mb-2">
                      EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@company.com"
                      className="brutalist-input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-white/40 tracking-widest mb-2">
                      COMPANY
                    </label>
                    <input
                      type="text"
                      value={formData.roleOrCompany}
                      onChange={(e) => setFormData({ ...formData, roleOrCompany: e.target.value })}
                      placeholder="e.g. OpenAI / Restaurant Brand"
                      className="brutalist-input"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-white/40 tracking-widest mb-2">
                      CONTACT_TYPE
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="brutalist-input bg-black cursor-pointer"
                    >
                      <option value="client">Business Client / Founder</option>
                      <option value="recruiter">Recruiter / Engineering Manager</option>
                      <option value="collaborator">Open Source / Collaboration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-white/40 tracking-widest mb-2">
                    MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project scope, timeline, or open role..."
                    className="brutalist-input resize-none"
                    style={{ borderBottom: '2px solid rgba(255,255,255,0.2)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full brutalist-btn-amber py-4 text-sm flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT_MESSAGE'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Credits — Brutalist */}
        <div className="mt-16 pt-8 border-t-2 border-white/10 flex flex-col sm:flex-row items-center justify-between text-[9px] font-mono text-white/30 uppercase tracking-widest gap-4">
          <span>© 2026 HASISH INFANT. ALL_RIGHTS_RESERVED.</span>
          <span>BUILT_WITH: REACT &bull; THREE.JS &bull; FRAMER_MOTION &bull; BRUTALIST_DESIGN</span>
        </div>
      </div>
    </section>
  );
};
