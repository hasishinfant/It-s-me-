import React, { useEffect, useRef } from 'react';
import { Globe, ArrowRight } from 'lucide-react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4';

const InstagramIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

export const AsmeHero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const opacityRef = useRef<number>(0);

  const fadeTo = (targetOpacity: number, durationMs: number, onComplete?: () => void) => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }

    const video = videoRef.current;
    if (!video) return;

    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;

      video.style.opacity = currentOpacity.toString();
      opacityRef.current = currentOpacity;

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(animate);
      } else {
        animFrameRef.current = null;
        if (onComplete) onComplete();
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.style.opacity = '0';
    opacityRef.current = 0;

    const handleLoadedData = () => {
      fadeTo(1, 500);
    };

    const handleTimeUpdate = () => {
      if (!video.duration || isNaN(video.duration)) return;
      const timeLeft = video.duration - video.currentTime;
      if (timeLeft <= 0.55 && !fadingOutRef.current) {
        fadingOutRef.current = true;
        fadeTo(0, 500);
      }
    };

    const handleEnded = () => {
      if (!videoRef.current) return;
      videoRef.current.style.opacity = '0';
      opacityRef.current = 0;

      setTimeout(() => {
        const v = videoRef.current;
        if (!v) return;
        v.currentTime = 0;
        fadingOutRef.current = false;
        v.play()
          .then(() => {
            fadeTo(1, 500);
          })
          .catch(() => {});
      }, 100);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    if (video.readyState >= 2) {
      fadeTo(1, 500);
    }

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden relative flex flex-col justify-between">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%] pointer-events-none z-0"
      />

      {/* Navigation Bar */}
      <header className="relative z-20 pl-6 pr-6 py-6">
        <div className="rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto liquid-glass">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <Globe size={24} className="text-white" />
              <span>Asme</span>
            </div>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#features"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium hover:text-white/80 transition-colors cursor-pointer">
              Sign Up
            </button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Built for the curious
        </h1>

        <div className="max-w-xl w-full space-y-4">
          {/* Email Bar */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent outline-none text-white placeholder:text-white/40 text-base"
            />
            <button
              type="submit"
              aria-label="Submit email"
              className="bg-white rounded-full p-3 text-black shrink-0 hover:bg-white/90 transition-colors cursor-pointer flex items-center justify-center"
            >
              <ArrowRight size={20} />
            </button>
          </form>

          {/* Subtitle */}
          <p className="text-white text-sm leading-relaxed px-4">
            Stay updated with the latest news and insights. Subscribe to our newsletter today and
            never miss out on exciting updates.
          </p>

          {/* Manifesto Button */}
          <div className="flex justify-center">
            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors cursor-pointer">
              Manifesto
            </button>
          </div>
        </div>
      </main>

      {/* Social Icons Footer */}
      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        <a
          href="#"
          aria-label="Instagram"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <InstagramIcon size={20} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <TwitterIcon size={20} />
        </a>
        <a
          href="#"
          aria-label="Website"
          className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all flex items-center justify-center"
        >
          <Globe size={20} />
        </a>
      </footer>
    </div>
  );
};
