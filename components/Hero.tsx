"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { ArrowLeft, ArrowRight, TrendingUp, Target, Zap, CheckCircle } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

const CLIENTS = [
  "BRAND A", "BRAND B", "BRAND C", "BRAND D", "BRAND E",
];

export default function Hero() {
  const { language, dir } = useLanguage();
  const dict = getDictionary(language);

  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const mainBlobRef = useRef<HTMLDivElement>(null);
  const pulsePillRef = useRef<HTMLDivElement>(null);
  const btnGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set(
        [headlineRef.current, statsRef.current, frameRef.current, btnGroupRef.current],
        { opacity: 1, x: 0, y: 0 }
      );
      return;
    }

    const tl = gsap.timeline({
      delay: 0.2, // Small delay to ensure hydration/DOM transition is complete
    });

    // ── Headline: fade + slide-up
    const headlineItems = headlineRef.current?.children;
    if (headlineItems) {
      tl.fromTo(
        headlineItems,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.75, stagger: 0.1, ease: "power3.out" }
      );
    }

    // ── Buttons: slide in from left → right, staggered
    tl.fromTo(
      btnGroupRef.current?.children || [],
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.55, stagger: 0.15, ease: "power2.out" },
      "-=0.3"
    );

    // ── Stats cards: slide in from left → right, staggered
    tl.fromTo(
      statsRef.current?.children || [],
      { opacity: 0, x: -60 },
      { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: "power2.out" },
      "-=0.25"
    );

    // ── Dashboard frame: slide in from left → right
    tl.fromTo(
      frameRef.current,
      { opacity: 0, x: -90, scale: 0.96 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "expo.out" },
      "-=0.55"
    );

    // ── Parallax glow on scroll
    gsap.to(glowRef.current, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    // ── Infinite Horizontal Wave for the main glowing blob
    gsap.to(mainBlobRef.current, {
      x: "-60vw",
      duration: 5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#05060A" }}>
      {/* Background glows */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none">
        <div ref={mainBlobRef} className="absolute top-[-10%] right-[-10%] w-[900px] h-[900px] rounded-full opacity-60 mix-blend-screen"
          style={{ background: "radial-gradient(circle, #F97316, transparent 65%)", filter: "blur(90px)" }} />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Wavy Background Layers at bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Deepest slow wave */}
        <svg
          className="absolute bottom-[-20px] left-0 w-[200%] h-80 opacity-[0.15] animate-wave-slow"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F97316"
          />
        </svg>
        {/* Middle wave */}
        <svg
          className="absolute bottom-[-10px] left-[-30%] w-[200%] h-64 opacity-[0.12] animate-wave-mid"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F59E0B"
            transform="scale(1, -1) translate(0, -120)"
          />
        </svg>
        {/* Front fast wave */}
        <svg
          className="absolute bottom-0 left-[-50%] w-[200%] h-48 opacity-[0.08] animate-wave-fast"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.36,147.54,16.88,218.2,35.26,69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#F97316"
          />
        </svg>
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto w-full ${dir === "rtl" ? "" : "lg:flex-row-reverse"}`}>

        {/* Text side */}
        <div className={`flex-1 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
          <div ref={headlineRef} className="flex flex-col gap-0">
            {/* Pulse pill with orbiting border */}
            <div
              ref={pulsePillRef}
              className={`pulse-pill-orbit inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${dir === "rtl" ? "self-end" : "self-start"}`}
              style={{ background: "rgba(249,115,22,0.1)" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F97316" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F97316" }}>{dict.hero.pulse}</span>
            </div>

            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
              {dict.hero.title1}
            </h1>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter ember-text mt-1">
              {dict.hero.title2}
            </h1>

            <p className="mt-6 text-base md:text-xl leading-relaxed max-w-md" style={{ color: "#94A3B8" }}>
              {dict.hero.subtitle}
            </p>

            {/* CTA Buttons – slide in from left → right */}
            <div ref={btnGroupRef} className={`flex gap-4 mt-8 flex-wrap ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
              <a href="#contact">
                <button className={`btn-primary border-8 border-[#F97316] ${dir === "ltr" ? "flex-row-reverse" : ""}`}>
                  {dict.hero.ctaPrimary}
                  <ArrowIcon className="w-4 h-4" />
                </button>
              </a>
              <a href="#results">
                <button className="btn-ghost">
                  {dict.hero.ctaSecondary}
                </button>
              </a>
            </div>

            {/* Trust badges */}
            <div className={`mt-8 flex items-center gap-4 md:gap-6 flex-wrap ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
              {dict.hero.badges.map((b) => (
                <div key={b} className="flex items-center gap-1.5 whitespace-nowrap">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#F97316" }} />
                  <span className="text-xs md:text-sm" style={{ color: "#94A3B8" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row – each card slides in from left → right */}
          <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-12 w-full">
            {dict.hero.stats.map((s) => (
              <div key={s.label} className={`flex flex-col ${dir === "rtl" ? "items-end" : "items-start"} p-4 rounded-2xl`}
                style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-2xl md:text-3xl font-black ember-text">{s.val}</span>
                <span className={`text-[10px] md:text-xs mt-1 ${dir === "rtl" ? "text-right" : "text-left"}`} style={{ color: "#94A3B8" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard frame – slides in from left → right */}
        <div className="w-full lg:w-[48%] relative flex-shrink-0" ref={frameRef}>
          <div className="absolute inset-0 rounded-[2rem] blur-[60px] opacity-30 pointer-events-none animate-glow-wave"
            style={{ background: "radial-gradient(ellipse, #F97316, #F59E0B, transparent 70%)" }} />

          <div className="relative rounded-[2rem] overflow-hidden" style={{
            background: "#0E1118",
            border: "1px solid rgba(249,115,22,0.2)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)"
          }}>
            <div className={`flex items-center justify-between px-5 py-4 border-b ${dir === "rtl" ? "" : "flex-row-reverse"}`}
              style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
              <div className="flex gap-2">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="px-4 py-1.5 rounded-full text-xs font-mono flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.04)", color: "#475569" }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#F97316" }} />
                {dict.hero.dashboard.domain}
              </div>
              <div className="w-20" />
            </div>

            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <img src="/dashboard.png" alt="Stonix Performance Dashboard" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1118] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/5">
                <div className={`flex items-center justify-between ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex flex-col ${dir === "rtl" ? "items-end" : "items-start"}`}>
                    <span className="text-[10px] uppercase tracking-widest text-muted">{dict.hero.stats[0].label}</span>
                    <span className="text-xl font-black text-white">{dict.hero.stats[0].val}</span>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div className={`flex flex-col ${dir === "rtl" ? "items-end" : "items-start"}`}>
                    <span className="text-[10px] uppercase tracking-widest text-muted">{dict.hero.stats[1].label}</span>
                    <span className="text-xl font-black text-white">{dict.hero.stats[1].val}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands row */}
      <div className="relative z-10 border-t px-6 md:px-12 py-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className={`max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4 ${dir === "rtl" ? "" : "flex-row-reverse"}`}>
          <span className="text-xs uppercase tracking-widest" style={{ color: "#475569" }}>{dict.hero.clientsLabel}</span>
          <div className="flex items-center gap-8 flex-wrap">
            {CLIENTS.map((c) => (
              <span key={c} className="text-sm font-bold opacity-25 hover:opacity-50 transition-opacity cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
