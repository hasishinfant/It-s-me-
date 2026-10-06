import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy, Calendar, Send, ShieldCheck, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../ui/SocialIcons';
import { PERSONAL_DATA } from '../../data/portfolioData';

const PROJECT_TYPES = [
  'Autonomous AI Swarm',
  'Full Stack Enterprise',
  'Spatial 3D / WebGL',
  'High-Scale Architecture',
  'R&D / Technical Advisory',
];

const TIMELINE_OPTIONS = [
  'Rapid Sprint (2–4 wks)',
  'Standard Build (1–3 mos)',
  'Quarterly Retainer',
];

const BUDGET_RANGES = ['< $5k', '$5k - $15k', '$15k - $30k', '$30k+'];

export const ContactSectionDark: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('Autonomous AI Swarm');
  const [selectedTimeline, setSelectedTimeline] = useState<string>('Standard Build (1–3 mos)');
  const [selectedBudget, setSelectedBudget] = useState<string>('$5k - $15k');
  const [ndaRequired, setNdaRequired] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#09090c] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* ── LEFT COLUMN: EDITORIAL HEADING & DIRECT CHANNELS (Frame 17: 34s) ── */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[11px] font-mono uppercase tracking-widest text-neutral-300 mb-4 border border-white/10">
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                <span>COMMISSION TERMINAL // DIRECT PROTOCOL</span>
              </div>
              <h2 className="text-5xl sm:text-7xl font-normal tracking-tight text-white leading-[0.95]">
                <span className="font-grotesk font-semibold block">Let's</span>
                <span className="font-editorial italic font-normal text-neutral-200 block mt-1">
                  talk.
                </span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-md">
              Accepting select engineering commissions, venture partnerships, and autonomous AI system
              architectures worldwide. Reach out directly or dispatch a brief through the agency terminal.
            </p>

            {/* Direct Email with 1-Click Copy */}
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                  Direct Channel
                </div>
                <div className="text-sm sm:text-base font-mono font-medium text-white mt-1">
                  {PERSONAL_DATA.socials.email}
                </div>
              </div>
              <button
                onClick={copyEmail}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Channels */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                Direct Channels & Calendar
              </div>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={PERSONAL_DATA.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_DATA.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={PERSONAL_DATA.socials.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium flex items-center gap-2 text-neutral-300 hover:text-white transition-colors"
                >
                  <TwitterIcon className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                </a>
                <a
                  href={PERSONAL_DATA.socials.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium flex items-center gap-2 text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Schedule Call</span>
                </a>
              </div>
            </div>

            {/* Location / Availability */}
            <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for select projects worldwide • Bengaluru & Remote</span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: BOLD AGENCY COMMISSION TERMINAL (Frames 18–19) ── */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] bg-white/[0.03] border border-white/10 p-8 sm:p-12 backdrop-blur-md relative">
              {/* Exposed Corner Crosshairs */}
              <div className="absolute top-4 left-4 text-xs font-mono text-neutral-700 font-bold select-none">+</div>
              <div className="absolute top-4 right-4 text-xs font-mono text-neutral-700 font-bold select-none">+</div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-700 font-bold select-none">+</div>
              <div className="absolute bottom-4 right-4 text-xs font-mono text-neutral-700 font-bold select-none">+</div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-grotesk font-bold text-white">Commission Brief Received</h3>
                  <p className="text-sm text-neutral-400 max-w-sm mx-auto font-light">
                    Thank you, {formState.name}. The studio has received your project parameters.
                    We will review the architectural scope and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-mono uppercase text-white transition-colors"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Project Type Chips */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                      <span>01 / System Scope</span>
                      <span className="text-[10px] text-neutral-500">[SELECT ONE]</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => {
                        const active = selectedType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setSelectedType(type)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                              active
                                ? 'bg-white text-neutral-950 font-bold shadow-sm'
                                : 'bg-white/5 hover:bg-white/10 text-neutral-400 border border-white/10'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timeline Selection */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                      <span>02 / Delivery Velocity</span>
                      <span className="text-[10px] text-neutral-500">[TIMELINE]</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIMELINE_OPTIONS.map((time) => {
                        const active = selectedTimeline === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTimeline(time)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                              active
                                ? 'bg-amber-400 text-neutral-950 font-bold shadow-sm'
                                : 'bg-white/5 hover:bg-white/10 text-neutral-400 border border-white/10'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget / Scope Chips */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between">
                      <span>03 / Anticipated Capital</span>
                      <span className="text-[10px] text-neutral-500">[BUDGET]</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((b) => {
                        const active = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                              active
                                ? 'bg-purple-500 text-white font-bold shadow-sm'
                                : 'bg-white/5 hover:bg-white/10 text-neutral-400 border border-white/10'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Principal Contact Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Mercer"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 text-sm font-sans"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                        Corporate / Personal Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 text-sm font-sans"
                      />
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Technical Brief & Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline target problem, existing infrastructure, scale goals, and architectural challenges..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-white/30 text-sm font-sans resize-none"
                    />
                  </div>

                  {/* NDA Requirement Toggle Checkbox */}
                  <div className="flex items-center gap-3 pt-1">
                    <button
                      type="button"
                      onClick={() => setNdaRequired(!ndaRequired)}
                      className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                        ndaRequired ? 'bg-purple-600 border-purple-500' : 'bg-white/5 border-white/20'
                      }`}
                    >
                      {ndaRequired && <Check className="w-3.5 h-3.5 text-white" />}
                    </button>
                    <span
                      onClick={() => setNdaRequired(!ndaRequired)}
                      className="text-xs font-mono text-neutral-400 cursor-pointer select-none flex items-center gap-1.5"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-500" />
                      <span>Require mutual Non-Disclosure Agreement (NDA) prior to technical briefing</span>
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-white text-neutral-950 font-grotesk font-semibold text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 active:scale-[0.99] shadow-lg shadow-white/5"
                  >
                    <span>TRANSMIT COMMISSION BRIEF</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSectionDark;
