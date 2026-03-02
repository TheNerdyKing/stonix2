"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { ArrowLeft, TrendingUp, Target, Zap, BarChart3, CheckCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS = [
  { val: "4.8x", label: "ROAS ממוצע" },
  { val: "50K+", label: "לידים איכותיים" },
  { val: "-42%", label: "עלות לליד" },
  { val: "3x", label: "שיפור בהמרות" },
];

const CLIENTS = [
  "BRAND A", "BRAND B", "BRAND C", "BRAND D", "BRAND E",
];

export default function Hero() {
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

    // Subtle parallax glow on scroll
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
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: "#05060A" }}>
      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#F97316" }}>
            <span className="text-black font-black text-sm">SX</span>
          </div>
          <span className="font-black text-lg tracking-tight text-white">STONIX</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { href: "#services", label: "שירותים" },
            { href: "#results", label: "תוצאות" },
            { href: "#testimonials", label: "המלצות" },
            { href: "#contact", label: "יצירת קשר" },
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
        <a href="#contact">
          <button className="btn-primary px-5 py-2.5 text-sm">
            שיחת אסטרטגיה חינם
          </button>
        </a>
      </nav>

      {/* Background glows */}
      <div ref={glowRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #F97316, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #A78BFA, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 md:px-12 pt-12 pb-16 max-w-7xl mx-auto w-full">

        {/* Left side text */}
        <div className="flex-1 flex flex-col items-end text-right">
          <div ref={headlineRef} className="flex flex-col gap-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 self-end"
              style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F97316" }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F97316" }}>שיווק ביצועים מהדור הבא</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter text-white">
              תוצאות.
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tighter ember-text mt-1">
              לא רק שיווק.
            </h1>

            <p className="mt-6 text-lg md:text-xl leading-relaxed max-w-md" style={{ color: "#94A3B8" }}>
              אנחנו לא סוכנות רגילה. אנחנו שותפים לצמיחה שלכם — עם נתונים, יצירתיות ואסטרטגיה שמניחים על השולחן תוצאות מדידות.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap justify-end">
              <a href="#contact">
                <button className="btn-primary">
                  שיחת אסטרטגיה חינם
                  <ArrowLeft className="w-4 h-4" />
                </button>
              </a>
              <a href="#results">
                <button className="btn-ghost">
                  ראו תוצאות
                </button>
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6 justify-end">
              {["ניסיון של 5+ שנים", "100+ לקוחות", "ללא התחייבות"].map((b) => (
                <div key={b} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" style={{ color: "#F97316" }} />
                  <span className="text-sm" style={{ color: "#94A3B8" }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div ref={statsRef} className="grid grid-cols-4 gap-4 mt-12 w-full">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-end p-4 rounded-2xl"
                style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="text-2xl md:text-3xl font-black ember-text">{s.val}</span>
                <span className="text-xs mt-1 text-right" style={{ color: "#94A3B8" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Dashboard frame */}
        <div className="w-full lg:w-[48%] relative flex-shrink-0" ref={frameRef}>
          {/* Glow aura behind frame */}
          <div className="absolute inset-0 rounded-[2rem] blur-[60px] opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #F97316, #F59E0B, transparent 70%)", transform: "scale(1.2)" }} />

          {/* Browser frame */}
          <div className="relative rounded-[2rem] overflow-hidden" style={{
            background: "#0E1118",
            border: "1px solid rgba(249,115,22,0.2)",
            boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)"
          }}>
            {/* Browser bar */}
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.02)" }}>
              <div className="flex gap-2">
                {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                ))}
              </div>
              <div className="px-4 py-1.5 rounded-full text-xs font-mono flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.04)", color: "#475569" }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#F97316" }} />
                dashboard.stonix.co.il
              </div>
              <div className="w-20" />
            </div>

            {/* Dashboard content */}
            <div className="p-6 flex flex-col gap-5">

              {/* Row 1: 3 KPI cards */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "ROAS החודש", val: "4.8x", icon: TrendingUp, up: true },
                  { label: "עלות לליד", val: "₪42", icon: Target, up: false },
                  { label: "המרות", val: "3,241", icon: Zap, up: true },
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

              {/* Chart area */}
              <div className="rounded-2xl p-4" style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest" style={{ color: "#475569" }}>הכנסות חודשיות</span>
                  <span className="text-xs font-bold" style={{ color: "#22c55e" }}>+147% YoY</span>
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

              {/* Recent activity */}
              <div className="rounded-2xl p-4" style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="text-xs uppercase tracking-widest mb-3" style={{ color: "#475569" }}>פעילות אחרונה</div>
                {[
                  { label: "קמפיין Meta – לידים", val: "+23 לידים", time: "לפני 2 דק'" },
                  { label: "Google Search – המרה", val: "עסקה חדשה", time: "לפני 8 דק'" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2.5 border-b last:border-0"
                    style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ background: "#F97316" }} />
                      <span className="text-sm text-white">{row.label}</span>
                    </div>
                    <div className="text-left">
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

      {/* Client logos row */}
      <div className="relative z-10 border-t px-6 md:px-12 py-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs uppercase tracking-widest" style={{ color: "#475569" }}>עובדים עם מותגים מובילים</span>
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
