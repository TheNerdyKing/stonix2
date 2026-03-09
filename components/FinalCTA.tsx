"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Flame, TrendingUp, Zap, Calendar, Clock, User, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function FinalCTA() {
  const { language, dir } = useLanguage();
  const dict = getDictionary(language);

  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) {
      gsap.set([containerRef.current, contentRef.current?.children || [], deviceRef.current], { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Container: slide in from left → right
      gsap.fromTo(
        containerRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Text elements: staggered "generating" reveal
      const elements = contentRef.current?.querySelectorAll(".cta-element");
      if (elements) {
        gsap.fromTo(
          elements,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
          }
        );
      }

      // Device mock: slide in from left → right
      gsap.fromTo(
        deviceRef.current,
        { x: -70, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );
    });

    mm.add("(max-width: 767px)", () => {
      gsap.set([containerRef.current], { opacity: 1, x: 0, scale: 1 });
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const icons = [Flame, TrendingUp, Zap];
  const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-8 overflow-hidden flex items-center"
    >
      {/* Deep Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-orange-600/5 rounded-full blur-[200px] pointer-events-none" />

      <div
        ref={containerRef}
        className="max-w-7xl mx-auto w-full bg-[#0A0A0A] rounded-[2rem] md:rounded-[3.5rem] border border-white/5 overflow-hidden relative shadow-3xl"
      >
        {/* Subtle top edge highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-[500px] bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none" />

        <div className={`relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 p-6 md:p-20 items-center ${dir === "rtl" ? "" : "lg:flex-row-reverse"}`}>

          {/* TEXT SIDE */}
          <div ref={contentRef} className={`flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
            <div className={`cta-element inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-500 text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 w-fit ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
              <Zap className="w-3 h-3" /> {dict.finalCTA.preTitle}
            </div>

            <h2 className="cta-element text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.1] tracking-tighter">
              {dict.finalCTA.title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {dict.finalCTA.title2}
              </span>
            </h2>

            <ul className="space-y-4 md:space-y-6 mb-10 md:mb-12 w-full">
              {dict.finalCTA.benefits.map((benefit, index) => {
                const Icon = icons[index] || Zap;
                return (
                  <li key={index} className={`cta-element flex items-center gap-4 md:gap-5 group ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all duration-300 shadow-lg">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-orange-500" />
                    </div>
                    <span className="text-white/60 text-lg md:text-xl font-light">{benefit}</span>
                  </li>
                );
              })}
            </ul>

            {/* Water-wave CTA button */}
            <div className="cta-element w-full md:w-auto">
              <button
                onClick={() => window.open('https://wa.me/972552664456', '_blank')}
                className={`cta-wave-bg flex items-center justify-center gap-3 w-full md:w-auto px-8 py-5 text-black rounded-full text-lg font-bold shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_45px_rgba(249,115,22,0.55)] hover:scale-105 active:scale-95 transition-shadow transition-transform duration-200 ${dir === "rtl" ? "flex-row-reverse" : ""}`}
              >
                <span>{dict.finalCTA.cta}</span>
                <ArrowIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* MOCK UI SIDE */}
          <div ref={deviceRef} className={`relative flex justify-center perspective-2000 ${dir === "rtl" ? "lg:justify-start" : "lg:justify-end"}`}>

            {/* The Booking Widget Mock */}
            <div className="relative w-full max-w-[440px] bg-[#111] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group transform hover:rotate-y-5 transition-transform duration-700">

              {/* Animated Aura inside frame */}
              <div className="absolute inset-x-0 -top-40 h-80 bg-orange-500/20 blur-3xl rounded-full opacity-50 pointer-events-none" />

              {/* Mac Header */}
              <div className={`absolute top-0 inset-x-0 h-14 border-b border-white/5 flex items-center px-6 gap-2 bg-white/[0.02] z-20 backdrop-blur-md ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className={`${dir === "rtl" ? "mr-auto" : "ml-auto"} text-[10px] text-white/30 uppercase tracking-widest font-mono`}>
                  STONIX_Session
                </div>
              </div>

              {/* Calendar / Form Content */}
              <div className="relative z-10 pt-20 pb-8 px-8 flex flex-col gap-6">

                {/* User Info Mock */}
                <div className={`flex items-center gap-4 pb-6 border-b border-white/5 ${dir === "rtl" ? "flex-row-reverse text-right" : ""}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <User className="w-8 h-8 text-black" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{dict.finalCTA.mock.title}</h4>
                    <p className="text-white/40 text-sm">{dict.finalCTA.mock.subtitle}</p>
                  </div>
                </div>

                {/* Inputs Mock */}
                <div className="space-y-4">
                  <div className={`h-14 w-full bg-[#1A1A1A] rounded-2xl border border-white/5 px-5 flex items-center group-hover:border-orange-500/30 transition-colors ${dir === "rtl" ? "justify-end text-right" : ""}`}>
                    <span className="text-white/20 text-sm">{dict.finalCTA.mock.email}</span>
                  </div>
                  <div className={`h-14 w-full bg-[#1A1A1A] rounded-2xl border border-white/5 px-5 flex items-center group-hover:border-orange-500/30 transition-colors ${dir === "rtl" ? "justify-end text-right" : ""}`}>
                    <span className="text-white/20 text-sm">{dict.finalCTA.mock.website}</span>
                  </div>
                </div>

                {/* Date/Time Mock */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-24 bg-orange-500/5 rounded-2xl border border-orange-500/20 p-4 flex flex-col justify-center items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="text-white font-bold text-sm">{dict.finalCTA.mock.tomorrow}</span>
                  </div>
                  <div className="h-24 bg-white/[0.02] rounded-2xl border border-white/5 p-4 flex flex-col justify-center items-center gap-2">
                    <Clock className="w-5 h-5 text-white/40" />
                    <span className="text-white/40 font-bold text-sm">{dict.finalCTA.mock.time}</span>
                  </div>
                </div>

                {/* Water-wave book button inside mock widget */}
                <div
                  onClick={() => window.open('https://wa.me/972552664456', '_blank')}
                  className="wave-btn-inner mt-4 h-14 w-full rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.2)] flex items-center justify-center cursor-pointer"
                >
                  <span className="text-black font-bold">{dict.finalCTA.cta}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
