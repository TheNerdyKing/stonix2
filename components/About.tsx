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
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        gsap.fromTo(contentRef.current?.children || [],
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: contentRef.current, start: "top 80%" }
            }
        );
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="about" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${dir === "rtl" ? "" : "lg:flex-row-reverse"}`}>

                    {/* Visual / Graphic element */}
                    <div className="relative aspect-square rounded-[3rem] overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-violet-500/20 z-0" />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="w-2/3 h-2/3 rounded-full bg-orange-500/10 blur-[60px] animate-pulse" />
                            <div className="text-9xl font-black text-white/5 select-none">STONIX</div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <div className="p-12 text-center">
                                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    {language === 'he' ? 'אנחנו לא עושים שיווק.' : "We don't just market."}
                                    <br />
                                    <span className="ember-text">{language === 'he' ? 'אנחנו מייצרים צמיחה.' : "We drive growth."}</span>
                                </h3>
                            </div>
                        </div>
                        {/* Decorative borders */}
                        <div className="absolute inset-4 border border-white/5 rounded-[2.5rem]" />
                        <div className="absolute inset-8 border border-white/5 rounded-[2rem]" />
                    </div>

                    {/* Content */}
                    <div ref={contentRef} className={`flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                            {dict.about.subtitle}
                        </p>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                            {dict.about.title1}
                        </h2>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text mb-8">
                            {dict.about.title2}
                        </h2>

                        <div className="space-y-6">
                            <p className="text-lg leading-relaxed" style={{ color: "#F8FAFC" }}>{dict.about.p1}</p>
                            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p2}</p>
                            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p3}</p>
                            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>{dict.about.p4}</p>
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
