import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Calendar } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/portfolioData';

export const LetsBuildSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hasishinfant005@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Hi Hasish,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
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
        <div className="max-w-4xl space-y-4">
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-grotesk tracking-tight text-black leading-[0.95] uppercase">
            LET'S CREATE{' '}
            <span className="inline-block px-3 sm:px-4 py-0.5 sm:py-1 bg-[#FF0000] text-white border-2 sm:border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-2deg]">
              SOMETHING BOLD
            </span>
          </h2>

          <p className="text-base sm:text-xl font-body font-bold text-neutral-900 max-w-2xl leading-relaxed">
            Got an internship opportunity, a freelance project, or want to collaborate? Drop me a line.
          </p>
        </div>

        {/* Contact Grid: Details on Left, Form on Right (Matching BRUTAL reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Direct Details Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-6">
              <div className="space-y-4 font-mono text-xs font-bold">
                {/* Email */}
                <div>
                  <span className="text-neutral-500 block mb-1 uppercase">EMAIL:</span>
                  <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 truncate">
                      <Mail className="w-4 h-4 text-black shrink-0" />
                      <span className="truncate">hasishinfant005@gmail.com</span>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="px-2.5 py-1 bg-white border border-black text-[10px] hover:bg-[#FAFF00] active:scale-95 shrink-0 flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'COPIED!' : 'COPY'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <span className="text-neutral-500 block mb-1 uppercase">PHONE:</span>
                  <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-black shrink-0" />
                      <span>+91 93608 07471</span>
                    </div>
                    <a
                      href="tel:+919360807471"
                      className="px-2.5 py-1 bg-white border border-black text-[10px] hover:bg-[#FAFF00] active:scale-95 shrink-0"
                    >
                      CALL
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div>
                  <span className="text-neutral-500 block mb-1 uppercase">LOCATION:</span>
                  <div className="p-3 bg-[#F4F4F0] border-2 border-black flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-black shrink-0" />
                    <span>BENGALURU, KARNATAKA, INDIA</span>
                  </div>
                </div>
              </div>

              {/* Social / Calendar CTAs */}
              <div className="pt-4 border-t-2 border-black flex flex-wrap gap-2.5 font-mono text-xs font-bold">
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

          {/* Interactive Form Card (Matching BRUTAL: NAME, EMAIL, MESSAGE, SEND MESSAGE) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 bg-white border-2 sm:border-[3px] border-black shadow-[8px_8px_0px_#000] space-y-5"
            >
              <h3 className="font-grotesk font-black text-2xl sm:text-3xl text-black uppercase pb-3 border-b-2 border-black">
                GET IN TOUCH
              </h3>

              {/* Name */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold uppercase text-black">
                  YOUR NAME:
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold uppercase text-black">
                  YOUR EMAIL:
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="block font-mono text-xs font-bold uppercase text-black">
                  MESSAGE:
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project, role, or what you want to build..."
                  className="w-full px-4 py-3 bg-[#F4F4F0] border-2 border-black font-mono text-xs text-black font-bold focus:outline-none focus:bg-white focus:shadow-[2px_2px_0px_#000]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full comic-btn-yellow py-4 text-xs sm:text-sm font-mono font-black uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SEND MESSAGE →</span>
              </button>

              {submitted && (
                <div className="p-3 bg-emerald-100 border-2 border-black font-mono text-xs font-bold text-emerald-900 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span>Opening your email client... Thank you!</span>
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
