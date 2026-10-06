import React, { useEffect, useRef, useState } from 'react';

interface FadingVideoProps {
  src: string | string[];
  className?: string;
  style?: React.CSSProperties;
}

export const FadingVideo: React.FC<FadingVideoProps> = ({ src, className, style }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [opacity, setOpacity] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const animFrameRef = useRef<number | null>(null);
  const isFadingOutRef = useRef<boolean>(false);
  const isFadingInRef = useRef<boolean>(false);

  const sources = Array.isArray(src) ? src : [src];
  const currentSrc = sources[currentIndex % sources.length];

  // Helper for rAF fade
  const cancelFade = () => {
    if (animFrameRef.current !== null) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  };

  const fadeIn = (durationMs = 500) => {
    cancelFade();
    isFadingOutRef.current = false;
    isFadingInRef.current = true;
    const startTime = performance.now();
    const startOpacity = opacity;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const newOpacity = startOpacity + (1 - startOpacity) * progress;
      setOpacity(newOpacity);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setOpacity(1);
        isFadingInRef.current = false;
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const fadeOut = (durationMs = 550) => {
    if (isFadingOutRef.current) return;
    cancelFade();
    isFadingInRef.current = false;
    isFadingOutRef.current = true;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const newOpacity = 1 - progress;
      setOpacity(Math.max(newOpacity, 0));

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(step);
      } else {
        setOpacity(0);
        isFadingOutRef.current = false;
        animFrameRef.current = null;
      }
    };

    animFrameRef.current = requestAnimationFrame(step);
  };

  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay policy fallback
      });
    }
    fadeIn(500);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const remainingTime = video.duration - video.currentTime;
    if (remainingTime <= 0.55 && !isFadingOutRef.current && !isFadingInRef.current && opacity > 0.1) {
      fadeOut(550);
    }
  };

  const handleEnded = () => {
    cancelFade();
    if (sources.length > 1) {
      setCurrentIndex((prev) => (prev + 1) % sources.length);
    } else {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        video.play().catch(() => {});
        fadeIn(500);
      }
    }
  };

  useEffect(() => {
    return () => {
      cancelFade();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{
        ...style,
        opacity,
        transition: 'none', // opacity driven by requestAnimationFrame
      }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};
