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

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set([headlineRef.current, statsRef.current, frameRef.current], { opacity: 1, y: 0 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });

    tl.fromTo(headlineRef.current?.children || [],
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" }
    );
    tl.fromTo(statsRef.current?.children || [],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
      "-=0.3"
    );
    tl.fromTo(frameRef.current,
      { opacity: 0, y: 50, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "expo.out" },
      "-=0.5"
    );

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
    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#05060A" }}>
      {/* Nav */}
      <nav className={`relative z-50 flex items-center justify-between px-6 md:px-12 py-5 ${dir === "rtl" ? "flex-row" : "flex-row-reverse"}`}>
        <a href="#contact">
          <button className="btn-primary px-5 py-2.5 text-sm">
            {dict.nav.call}
          </button>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#services", label: dict.nav.services },
            { href: "#results", label: dict.nav.results },
            { href: "#testimonials", label: dict.nav.testimonials },
            { href: "#contact", label: dict.nav.contact },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#94A3B8" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-black text-lg tracking-tight text-white">STONIX</span>
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#F97316" }}>
            <span className="text-black font-black text-sm">SX</span>
          </div>
        </div>
      </nav>

      {/* Background glows */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F97316, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Main content */}
      <div className={`relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto w-full ${dir === "rtl" ? "" : "lg:flex-row-reverse"}`}>

        {/* Text side */}
        <div className={`flex-1 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
          <div ref={headlineRef} className="flex flex-col gap-0">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 ${dir === "rtl" ? "self-end" : "self-start"}`}
              style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
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

            <div className={`flex gap-4 mt-8 flex-wrap ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
              <a href="#contact">
                <button className={`btn-primary ${dir === "ltr" ? "flex-row-reverse" : ""}`}>
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

          {/* Stats row */}
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

        {/* Dashboard frame */}
        <div className="w-full lg:w-[48%] relative flex-shrink-0" ref={frameRef}>
          <div className="absolute inset-0 rounded-[2rem] blur-[60px] opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #F97316, #F59E0B, transparent 70%)", transform: "scale(1.2)" }} />

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

            <div className={`p-6 flex flex-col gap-5 ${dir === "rtl" ? "text-right" : "text-left"}`}>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: dict.hero.dashboard.kpi1, val: "4.8x", icon: TrendingUp, up: true },
                  { label: dict.hero.dashboard.kpi2, val: "$42", icon: Target, up: false },
                  { label: dict.hero.dashboard.kpi3, val: "3,241", icon: Zap, up: true },
                ].map((k) => (
                  <div key={k.label} className="rounded-2xl p-4 flex flex-col gap-2"
                    style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex items-center justify-between">
                      <k.icon className="w-4 h-4" style={{ color: "#F97316" }} />
                      <span className="text-xs rounded-full px-2 py-0.5"
                        style={{
                          background: k.up ? "rgba(34,197,94,0.1)" : "rgba(249,115,22,0.1)",
                          color: k.up ? "#22c55e" : "#F97316"
                        }}>
                        {k.up ? "↑" : "↓"}
                      </span>
                    </div>
                    <div className="text-xl font-black text-white">{k.val}</div>
                    <div className="text-[10px] uppercase tracking-widest" style={{ color: "#475569" }}>{k.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-4" style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className={`flex items-center justify-between mb-4 ${dir === "rtl" ? "flex-row" : "flex-row-reverse"}`}>
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#475569" }}>{dict.hero.dashboard.chartTitle}</span>
                  <span className="text-xs font-bold" style={{ color: "#22c55e" }}>{dict.hero.dashboard.chartGrowth}</span>
                </div>
                <div className="flex items-end gap-1 h-20">
                  {[22, 35, 28, 45, 38, 55, 48, 65, 58, 72, 62, 80].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm transition-all"
                      style={{
                        height: `${h}%`,
                        background: i === 11 ? "#F97316" : i >= 9 ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.1)"
                      }} />
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-4" style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "#475569" }}>{dict.hero.dashboard.activityTitle}</div>
                {[
                  { label: dict.hero.dashboard.act1, val: dict.hero.dashboard.act1val, time: dict.hero.dashboard.act1time },
                  { label: dict.hero.dashboard.act2, val: dict.hero.dashboard.act2val, time: dict.hero.dashboard.act2time },
                ].map((row) => (
                  <div key={row.label} className={`flex items-center justify-between py-2.5 border-b last:border-0 ${dir === "rtl" ? "flex-row" : "flex-row-reverse"}`}
                    style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: "#F97316" }} />
                      <span className="text-sm text-white">{row.label}</span>
                    </div>
                    <div className={dir === "rtl" ? "text-left" : "text-right"}>
                      <div className="text-sm font-bold" style={{ color: "#F97316" }}>{row.val}</div>
                      <div className="text-[10px]" style={{ color: "#475569" }}>{row.time}</div>
                    </div>
                  </div>
                ))}
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
