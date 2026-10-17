"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const videoRef = useRef(null);
  const fallbackTimerRef = useRef(null);
  const hasCompleted = useRef(false);
  const [isDismissing, setIsDismissing] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  const complete = () => {
    if (hasCompleted.current) return;
    hasCompleted.current = true;
    setIsDismissing(true);

    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    document.body.style.overflow = "";

    if (videoRef.current) {
      try {
        videoRef.current.pause();
      } catch (e) {}
    }

    onComplete?.();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser restricts autoplay, allow user tap to proceed
        });
      }
    }

    // Safety fallback: if video is unresponsive for 12 seconds, auto dismiss
    fallbackTimerRef.current = setTimeout(() => {
      complete();
    }, 12000);

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVideoPlaying = () => {
    setIsVideoReady(true);
    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
    }
  };

  const handleVideoError = () => {
    const video = videoRef.current;
    if (video && !video.src.includes("media.myriadarts.in")) {
      video.src = "https://media.myriadarts.in/splash/spash_screen.mp4";
      video.load();
      video.play().catch(() => complete());
    } else {
      complete();
    }
  };

  return (
    <motion.div
      onClick={complete}
      className={`fixed inset-0 z-[100000] bg-[#050505] flex items-center justify-center overflow-hidden cursor-pointer select-none ${
        isDismissing ? "pointer-events-none" : ""
      }`}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* ── 1. Theatrical Ambient Lighting & Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "radial-gradient(ellipse at center, transparent 35%, rgba(5,5,5,0.95) 100%)",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-[#c1121f]/15 rounded-full blur-[110px] pointer-events-none z-0 animate-pulse" />

      {/* ── 2. Instant Theatrical Brand Placeholder (Zero Blank Screen) ── */}
      <div 
        className={`absolute inset-0 flex flex-col items-center justify-center z-10 transition-opacity duration-700 ease-out ${
          isVideoReady ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
        }`}
      >
        <div className="relative flex flex-col items-center gap-6">
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-[#c1121f]/30 blur-xl animate-pulse" />
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/20 p-1 relative z-10 bg-black/60 backdrop-blur-md overflow-hidden shadow-2xl">
              <Image
                src="/logos/myriad-arts-logo.jpg"
                alt="Myriad Arts"
                width={96}
                height={96}
                priority
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
          <div className="text-center">
            <span className="type-heading-md text-white uppercase tracking-[0.2em] font-serif block">
              Myriad Arts
            </span>
            <span className="text-[11px] font-mono text-[#c1121f] uppercase tracking-widest mt-1 block">
              Where Tradition Meets Brilliance
            </span>
          </div>
        </div>
      </div>

      {/* ── 3. High-Speed Faststart Video Stream ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={handleVideoPlaying}
        onPlay={handleVideoPlaying}
        onPlaying={handleVideoPlaying}
        onLoadedData={handleVideoPlaying}
        onTimeUpdate={(e) => {
          if (e.currentTarget.currentTime > 0) setIsVideoReady(true);
        }}
        onEnded={complete}
        onError={handleVideoError}
        className={`w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] object-contain pointer-events-none relative z-20 transition-all duration-700 ease-out ${
          isVideoReady ? "opacity-100 scale-100" : "opacity-0 scale-98"
        }`}
      >
        {/* Fast Local Stream first */}
        <source src="/videos/splash/spash_screen.mp4" type="video/mp4" />
        {/* Fallback to Cloudflare CDN */}
        <source src="https://media.myriadarts.in/splash/spash_screen.mp4" type="video/mp4" />
      </video>

      {/* ── 4. Skip Indicator CTA ── */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 text-white/50 hover:text-white/80 text-[11px] uppercase tracking-[0.2em] font-mono z-30 transition-colors pointer-events-auto">
        <span>Click anywhere to skip</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </div>
    </motion.div>
  );
}
