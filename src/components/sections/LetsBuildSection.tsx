import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight, Sparkles, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const LetsBuildSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [intent, setIntent] = useState<'recruiter' | 'client' | 'collab'>('recruiter');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hasishinfant005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      intent === 'recruiter'
        ? `[Opportunity] Connecting with Hasish Infant`
        : intent === 'client'
        ? `[Project] Inquiry from ${formData.name || 'Client'}`
        : `[Collaboration] Reaching out to Hasish Infant`
    );
    const body = encodeURIComponent(
      `Hi Hasish,\n\nName: ${formData.name}\nEmail: ${formData.email}\nIntent: ${intent}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:hasishinfant005@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full px-4 sm:px-8 py-24 bg-[#FAFF00] border-t-4 border-black text-black relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border-2 border-black shadow-[3px_3px_0px_#000] font-mono text-xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GET IN TOUCH · OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-grotesk tracking-tight text-black leading-[1.05] uppercase">
            LET'S CREATE{' '}
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 bg-[#FF0000] text-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-2deg]">
              SOMETHING BOLD
            </span>
          </h2>

          <p className="text-base sm:text-xl font-body font-bold text-neutral-900 max-w-2xl mx-auto leading-relaxed">
            Got an internship opportunity, a freelance project in mind, or want to build something wild together? Drop me a line.
          </p>
        </div>

        {/* 3 Intent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Recruiter Intent */}
          <div
            onClick={() => setIntent('recruiter')}
            className={`p-6 border-2 sm:border-[3px] border-black cursor-pointer transition-all ${
              intent === 'recruiter'
                ? 'bg-white shadow-[8px_8px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                : 'bg-white/80 shadow-[4px_4px_0px_#000] hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 bg-[#FF0000] text-white font-mono text-[10px] font-black uppercase">
                OPPORTUNITIES
              </span>
              <span className="font-mono text-xs font-black">01</span>
            </div>
            <h3 className="text-xl font-black font-grotesk text-black mb-2">
              DISCUSS A ROLE OR INTERNSHIP?
            </h3>
            <p className="text-xs sm:text-sm font-body text-neutral-800 font-medium">
              Open to software engineering and AI internships. Let's discuss where I can add immediate value to your engineering team.
            </p>
          </div>

          {/* 2. Client Intent */}
          <div
            onClick={() => setIntent('client')}
            className={`p-6 border-2 sm:border-[3px] border-black cursor-pointer transition-all ${
              intent === 'client'
                ? 'bg-white shadow-[8px_8px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                : 'bg-white/80 shadow-[4px_4px_0px_#000] hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 bg-black text-[#FAFF00] font-mono text-[10px] font-black uppercase">
                PROJECT INQUIRY
              </span>
              <span className="font-mono text-xs font-black">02</span>
            </div>
            <h3 className="text-xl font-black font-grotesk text-black mb-2">
              HAVE AN APP TO SHIP?
            </h3>
            <p className="text-xs sm:text-sm font-body text-neutral-800 font-medium">
              Need a modern web app, high-converting landing page, or custom AI features built and deployed? Let's discuss scope.
            </p>
          </div>

          {/* 3. Collab Intent */}
          <div
            onClick={() => setIntent('collab')}
            className={`p-6 border-2 sm:border-[3px] border-black cursor-pointer transition-all ${
              intent === 'collab'
                ? 'bg-white shadow-[8px_8px_0px_#000] translate-x-[-2px] translate-y-[-2px]'
                : 'bg-white/80 shadow-[4px_4px_0px_#000] hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-2 py-0.5 bg-neutral-200 text-black border border-black font-mono text-[10px] font-black uppercase">
                COLLABORATION
              </span>
              <span className="font-mono text-xs font-black">03</span>
            </div>
            <h3 className="text-xl font-black font-grotesk text-black mb-2">
              LET'S HACK TOGETHER
            </h3>
            <p className="text-xs sm:text-sm font-body text-neutral-800 font-medium">
              Want to collaborate on open-source AI projects, enter hackathons, or just connect? Drop me a note.
            </p>
          </div>
        </div>

        {/* Contact Form & Direct Access Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Direct Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-5">
              <span className="inline-block px-2.5 py-0.5 bg-black text-[#FAFF00] font-mono text-xs font-black uppercase">
                DIRECT CHANNELS
              </span>

              <div className="space-y-4 font-mono text-xs font-bold">
                {/* Email Chip */}
                <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-4 h-4 text-black shrink-0" />
                    <span className="truncate">hasishinfant005@gmail.com</span>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="px-2 py-1 bg-white border border-black text-[10px] hover:bg-[#FAFF00] active:scale-95 shrink-0 flex items-center gap-1 cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'COPIED!' : 'COPY'}</span>
                  </button>
                </div>

                {/* Phone Chip */}
                <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-black shrink-0" />
                    <span>+91 93608 07471</span>
                  </div>
                  <a
                    href="tel:+919360807471"
                    className="px-2 py-1 bg-white border border-black text-[10px] hover:bg-[#FAFF00] active:scale-95 shrink-0"
                  >
                    CALL
                  </a>
                </div>

                {/* Location Chip */}
                <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  <span>BENGALURU, KARNATAKA, INDIA</span>
                </div>
              </div>

              {/* Social / Calendar CTAs */}
              <div className="pt-3 border-t-2 border-black flex flex-wrap gap-2 font-mono text-xs font-bold">
                <a
                  href={PERSONAL_DATA.socials.topmate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-yellow px-3.5 py-2 flex items-center gap-1.5 grow justify-center"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>BOOK 1:1 CALL</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_DATA.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-white px-3.5 py-2 flex items-center gap-1.5 grow justify-center"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LINKEDIN</span>
                </a>
                <a
                  href={PERSONAL_DATA.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="comic-btn-black px-3.5 py-2 flex items-center gap-1.5 grow justify-center"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GITHUB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Form Card */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b-2 border-black">
                <span className="font-grotesk font-black text-xl text-black uppercase">
                  DROP A MESSAGE
                </span>
                <span className="px-2 py-0.5 bg-[#FAFF00] border border-black font-mono text-[10px] font-black uppercase">
                  INTENT: {intent.toUpperCase()}
                </span>
              </div>

              {/* Intent Selection Pills */}
              <div className="space-y-1">
                <label className="block font-mono text-xs font-bold uppercase text-neutral-700">
                  I AM REACHING OUT AS:
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setIntent('recruiter')}
                    className={`px-3 py-1.5 border-2 border-black font-mono text-xs font-bold cursor-pointer ${
                      intent === 'recruiter' ? 'bg-black text-white shadow-[2px_2px_0px_#000]' : 'bg-[#F4F4F0] text-black hover:bg-neutral-200'
                    }`}
                  >
                    OPPORTUNITIES
                  </button>
                  <button
                    type="button"
                    onClick={() => setIntent('client')}
                    className={`px-3 py-1.5 border-2 border-black font-mono text-xs font-bold cursor-pointer ${
                      intent === 'client' ? 'bg-[#FAFF00] text-black shadow-[2px_2px_0px_#000]' : 'bg-[#F4F4F0] text-black hover:bg-neutral-200'
                    }`}
                  >
                    PROJECT INQUIRY
                  </button>
                  <button
                    type="button"
                    onClick={() => setIntent('collab')}
                    className={`px-3 py-1.5 border-2 border-black font-mono text-xs font-bold cursor-pointer ${
                      intent === 'collab' ? 'bg-[#FF0000] text-white shadow-[2px_2px_0px_#000]' : 'bg-[#F4F4F0] text-black hover:bg-neutral-200'
                    }`}
                  >
                    COLLABORATION
                  </button>
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-700">
                    YOUR NAME:
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen"
                    className="w-full px-3 py-2.5 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block font-mono text-xs font-bold uppercase text-neutral-700">
                    YOUR EMAIL:
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-3 py-2.5 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                  />
                </div>
              </div>

              {/* Message text area */}
              <div className="space-y-1">
                <label className="block font-mono text-xs font-bold uppercase text-neutral-700">
                  MESSAGE / PROJECT DETAILS:
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    intent === 'recruiter'
                      ? 'Tell me about the role, team, and internship timeline...'
                      : intent === 'client'
                      ? 'Describe your project, desired features, and target launch date...'
                      : 'What would you like to build or hack on together?'
                  }
                  className="w-full px-3 py-2.5 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full comic-btn-yellow py-3.5 text-xs sm:text-sm font-mono font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE DIRECTLY</span>
              </button>

              {submitted && (
                <div className="p-2.5 bg-emerald-100 border-2 border-black font-mono text-xs font-bold text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Opening your mail client... Thank you for reaching out!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default LetsBuildSection;
