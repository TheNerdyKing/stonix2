"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function Methodology() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        gsap.fromTo(titleRef.current?.children || [],
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: titleRef.current, start: "top 80%" }
            }
        );

        const steps = stepsRef.current?.querySelectorAll(".step-card");
        steps?.forEach((step, i) => {
            gsap.fromTo(step,
                { opacity: 0, x: dir === "rtl" ? 50 : -50 },
                {
                    opacity: 1, x: 0, duration: 0.8, ease: "expo.out",
                    scrollTrigger: { trigger: step, start: "top 85%" },
                    delay: i * 0.1,
                }
            );
        });
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="methodology" className="section-pad" style={{ background: "#08090E" }}>
            <div className="max-w-7xl mx-auto px-6">

                <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {dict.methodology.preTitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        {dict.methodology.title1}
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        {dict.methodology.title2}
                    </h2>
                    <p className="mt-6 text-lg max-w-xl leading-relaxed" style={{ color: "#94A3B8" }}>
                        {dict.methodology.desc}
                    </p>
                </div>

                <div ref={stepsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {dict.methodology.steps.map((step, i) => (
                        <div key={i} className="step-card group relative p-8 rounded-[2rem] overflow-hidden"
                            style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.06)" }}>

                            {/* Number BG */}
                            <div className="absolute top-[-20px] right-[-20px] text-8xl font-black text-white/[0.03] select-none group-hover:text-orange-500/[0.05] transition-colors duration-500">
                                {step.num}
                            </div>

                            <div className={`relative z-10 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/20">
                                    <span className="text-orange-500 font-black">{step.num}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                                    {step.desc}
                                </p>
                            </div>

                            {/* Hover glow */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
