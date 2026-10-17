"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import VaarsaAtmosphericBackground from "../shared/VaarsaAtmosphericBackground";

// ─── Local Performance Data ───────────────────────────────────────────────────
const PERFORMANCES = [
  {
    id: "geet-govinda",
    title: "Geet Govinda",
    description:
      "Geet Govinda is a landmark classical performance by Myriad Arts that brings to life the lyrical poetry of the 12th-century poet Jayadeva. Performed in the tradition of Bharatanatyam and Odissi, this piece weaves together intricate footwork, expressive abhinaya, and evocative costumes to narrate the eternal love story of Radha and Krishna. A celebration of India's spiritual and artistic heritage.",
    date: "Aug 2025",
    category: "Classical Dance",
    cover: "/images/home/gallery-classical-performance.jpg",
    videoSrc: "/videos/GEET GOVINDA_1080p.mp4",
  },
  {
    id: "stage-showcase-2025",
    title: "Stage Showcase 2025",
    description:
      "The Stage Showcase 2025 is a high-energy live performance that captures the spirit and diversity of Myriad Arts. From Bollywood showstoppers to raw folk expressions and sharp contemporary choreography, this showcase is a testament to the breadth of talent within the Myriad Arts family. Featuring original choreography, stunning costumes, and an electrifying stage presence — a night to remember.",
    date: "Aug 2025",
    category: "Multi-Genre Performance",
    cover: "/images/home/gallery-stage-performance.jpg",
    videoSrc: "/videos/FilmForth QTTrim 2025_08_28_20_04_28.mp4",
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
function PlayIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
    </svg>
  );
}

function CalIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 opacity-50">
      <path fillRule="evenodd" d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3A2 2 0 0 1 14 5v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7Z" clipRule="evenodd" />
    </svg>
  );
}

// ─── Video Card ───────────────────────────────────────────────────────────────
function VideoCard({ perf, index, onClick }) {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);

  // Play silently on hover, pause (first frame stays visible) on leave
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    if (isHovered) {
      vid.play().catch(() => {});
    } else {
      vid.pause();
      // Stay at current time so first frame shows as poster
      vid.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(perf)}
      className="group relative flex flex-col border border-white/[0.07] rounded-xl overflow-hidden cursor-pointer hover:border-[#c1121f]/40 transition-all duration-500 hover:shadow-[0_8px_36px_rgba(193,18,31,0.2)] hover:-translate-y-1"
      role="button"
      aria-label={`Watch ${perf.title}`}
    >
      {/* ── Card thumbnail area ── */}
      <div className="relative w-full flex-shrink-0 overflow-hidden bg-black" style={{ aspectRatio: "16/5" }}>
        {/* Static image cover — always visible */}
        <img
          src={perf.cover}
          alt={perf.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />

        {/* Video overlay — fades in on hover, plays silently */}
        <video
          ref={videoRef}
          src={perf.videoSrc}
          muted
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent pointer-events-none z-10" />

        {/* Genre — plain text, top-left, no badge */}
        <span className="absolute top-3 left-3 z-20 text-white/75 text-[10px] font-bold tracking-[0.22em] uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          {perf.category}
        </span>

        {/* Play button — bottom right */}
        <div className="absolute bottom-3 right-3 z-20">
          <motion.div
            animate={{ opacity: isHovered ? 1 : 0.6, scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.25 }}
            className="w-8 h-8 rounded-full bg-[#c1121f]/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10"
          >
            <PlayIcon />
          </motion.div>
        </div>
      </div>

      {/* ── Slim info strip ── */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d0d]">
        <h3 className="type-heading-md text-white group-hover:text-[#c1121f] transition-colors duration-300 leading-none">
          {perf.title}
        </h3>
        <span className="type-meta text-white/30 text-[10px] tracking-wide whitespace-nowrap flex items-center gap-1.5 ml-4 flex-shrink-0">
          <CalIcon />
          {perf.date}
        </span>
      </div>
    </motion.article>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────
function VideoModal({ perf, onClose }) {
  useEffect(() => {
    const handler = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Hard-lock body scroll
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label={`Video: ${perf.title}`}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-lg" />

      <motion.div
        className="relative z-10 w-full max-w-5xl bg-[#0d0d0d] border border-white/[0.08] rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.95)] flex flex-col md:flex-row"
        initial={{ scale: 0.93, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button — above everything, above navbar */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/80 border border-white/15 backdrop-blur-md flex items-center justify-center text-white text-sm font-bold hover:bg-[#c1121f] hover:border-[#c1121f] transition-all duration-300 cursor-pointer shadow-2xl"
        >
          ✕
        </button>

        {/* Video player */}
        <div className="relative w-full md:w-[58%] flex-shrink-0 bg-black">
          <div className="relative w-full aspect-video">
            <video
              src={perf.videoSrc}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-contain bg-black"
            />
          </div>
        </div>

        {/* Info panel */}
        <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7 overflow-y-auto max-h-[40vh] md:max-h-none justify-center">
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-3">
            <span className="type-meta text-[#c1121f] uppercase tracking-[0.2em] text-[9px]">
              {perf.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
            <span className="type-meta text-white/40 text-[9px] tracking-wide flex items-center gap-1">
              <CalIcon />
              {perf.date}
            </span>
          </div>

          <h2 className="type-heading-lg text-white mb-4 leading-snug">
            {perf.title}
          </h2>

          <div className="w-10 h-[1.5px] bg-[#c1121f]/50 mb-4 flex-shrink-0" />

          <p className="type-body-sm text-white/60 leading-relaxed">
            {perf.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function PerformanceJourneySection() {
  const headingRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const [selectedPerf, setSelectedPerf] = useState(null);

  return (
    <>
      <section
        id="performance-journey"
        className="relative w-full bg-[#050505] py-16 md:py-20 overflow-hidden isolate"
      >
        <VaarsaAtmosphericBackground />

        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#050505] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none z-10" />

        <div
          className="absolute left-[5%] top-[30%] w-[35vw] h-[35vw] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"
          style={{ background: "radial-gradient(circle, #c1121f 0%, transparent 70%)" }}
        />

        <div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-6 md:px-10 lg:px-16">

          {/* ── Header ── */}
          <div ref={headingRef} className="mb-8 md:mb-10">
            <motion.span
              className="font-sans text-[#c1121f] text-[10px] font-bold tracking-[0.38em] uppercase block mb-3"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              Myriad Arts
            </motion.span>

            <motion.h2
              className="type-heading-xl text-white mb-3"
              initial={{ opacity: 0, y: 24 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Our <span className="text-[#c1121f]">Performance</span> Journey
            </motion.h2>

            <motion.p
              className="type-body-md text-white/50 max-w-xl"
              initial={{ opacity: 0, y: 18 }}
              animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Click any performance to watch the full video.
            </motion.p>

            <motion.div
              className="mt-5 w-12 h-[1.5px] bg-[#c1121f]"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isHeadingInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {PERFORMANCES.map((perf, index) => (
              <VideoCard
                key={perf.id}
                perf={perf}
                index={index}
                onClick={setSelectedPerf}
              />
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selectedPerf && (
          <VideoModal
            perf={selectedPerf}
            onClose={() => setSelectedPerf(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
