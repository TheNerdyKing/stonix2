"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function About() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion() || !visualRef.current || !contentRef.current) {
            // If reduced motion or weird state, ensure elements are visible
            if (visualRef.current) gsap.set(visualRef.current, { opacity: 1, x: 0, scale: 1 });
            if (contentRef.current) {
                const els = contentRef.current.querySelectorAll('.gen-text');
                gsap.set(els, { opacity: 1, y: 0 });
            }
            return;
        }

        // Hard refresh on mount for accurate calculations
        ScrollTrigger.refresh();

        // 1. Visual Block (Slide in from outside)
        gsap.fromTo(visualRef.current,
            {
                opacity: 0,
                x: dir === "rtl" ? 100 : -100,
                scale: 0.9,
                filter: "blur(10px)",
            },
            {
                opacity: 1,
                x: 0,
                scale: 1,
                filter: "blur(0px)",
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: visualRef.current,
                    start: "top 90%",
                    toggleActions: "play none none none",
                    once: true,
                }
            }
        );

        // 2. Text Generation (Staggered reveal)
        const contentElements = contentRef.current.querySelectorAll('.gen-text');
        if (contentElements.length > 0) {
            gsap.fromTo(contentElements,
                {
                    opacity: 0,
                    y: 30,
                    filter: "blur(10px)",
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                        once: true,
                    }
                }
            );
        }

        // Catch-all refresh
        const timer = setTimeout(() => ScrollTrigger.refresh(), 500);
        return () => clearTimeout(timer);
    }, { scope: sectionRef, dependencies: [language, dir] });

    return (
        <section ref={sectionRef} id="about" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${dir === "ltr" ? "lg:flex-row-reverse" : ""}`}>

                    {/* Visual / Graphic element (Right side in layout) */}
                    <div ref={visualRef} className="relative w-full lg:w-1/2 aspect-square rounded-[3rem] overflow-hidden group shadow-2xl shadow-orange-500/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-violet-500/20 z-0" />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-2/3 h-2/3 rounded-full bg-orange-500/10 blur-[80px] animate-pulse" />
                            <div className="text-9xl font-black text-white/5 select-none tracking-tighter">STONIX</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="p-12 text-center">
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-2xl">
                                    {language === 'he' ? 'אנחנו לא עושים שיווק.' : "We don't just market."}
                                    <br />
                                    <span className="ember-text">{language === 'he' ? 'אנחנו מייצרים צמיחה.' : "We drive growth."}</span>
                                </h3>
                            </div>
                        </div>
                        {/* Decorative borders with subtle glowing animation */}
                        <div className="absolute inset-4 border border-white/5 rounded-[2.5rem] group-hover:border-orange-500/20 transition-colors duration-700" />
                        <div className="absolute inset-8 border border-white/5 rounded-[2rem] group-hover:border-violet-500/20 transition-colors duration-1000" />
                    </div>

                    {/* Content (Left side in layout) */}
                    <div ref={contentRef} className={`flex flex-col w-full lg:w-1/2 ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                        <p className="gen-text text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                            {dict.about.subtitle}
                        </p>
                        <h2 className="gen-text text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
                            {dict.about.title1}
                        </h2>
                        <h2 className="gen-text text-4xl md:text-6xl font-black tracking-tighter ember-text mb-8">
                            {dict.about.title2}
                        </h2>

                        <div className="space-y-6">
                            <p className="gen-text text-lg leading-relaxed font-medium" style={{ color: "#F8FAFC" }}>{dict.about.p1}</p>
                            <p className="gen-text text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p2}</p>
                            <p className="gen-text text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p3}</p>
                            <p className="gen-text text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p4}</p>
                        </div>

                        <div className="mt-10">
                            <a href="#contact" className="btn-primary">
                                {dict.nav.call}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
