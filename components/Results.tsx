"use client";

import { useRef } from "react";


import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { TrendingUp } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";


export default function Results() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        gsap.fromTo(titleRef.current?.children || [],
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: titleRef.current, start: "top 80%" }
            }
        );

        const cards = sectionRef.current?.querySelectorAll(".case-card");
        cards?.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: "expo.out",
                    scrollTrigger: { trigger: card, start: "top 90%" },
                    delay: i * 0.1,
                }
            );
        });
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    const colors = ["#F97316", "#F59E0B", "#A78BFA"];

    return (
        <section ref={sectionRef} id="results" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {dict.results.preTitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        {dict.results.title1}
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        {dict.results.title2}
                    </h2>
                    <p className="mt-6 text-lg max-w-xl leading-relaxed" style={{ color: "#94A3B8" }}>
                        {dict.results.desc}
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {dict.results.cases.map((c: any, i: number) => {
                        const color = colors[i] || "#F97316";
                        return (
                            <div key={i} className="case-card rounded-[2rem] p-8 md:p-10"
                                style={{ background: "rgba(14,17,24,0.7)", border: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(10px)" }}>

                                <div className={`flex flex-col md:flex-row gap-8 md:gap-16 ${dir === "rtl" ? "" : "md:flex-row-reverse"}`}>

                                    {/* Info side */}
                                    <div className={`flex-1 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                                        <div className={`flex items-center gap-3 mb-6 ${dir === "rtl" ? "flex-row-reverse" : "flex-row"}`}>
                                            <div className={`flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                                                <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "#475569" }}>{c.industry}</div>
                                                <div className="text-lg font-bold text-white">{c.client}</div>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                                style={{ background: `${color}18` }}>
                                                <TrendingUp className="w-5 h-5" style={{ color: color }} />
                                            </div>
                                        </div>

                                        <div className="mb-4 p-5 rounded-xl w-full" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                            <span className="text-xs uppercase tracking-widest block mb-1.5 font-bold" style={{ color: "#475569" }}>{dict.results.challengeLabel}</span>
                                            <p className="text-sm md:text-base leading-relaxed" style={{ color: "#94A3B8" }}>{c.challenge}</p>
                                        </div>

                                        <div className="p-5 rounded-xl w-full" style={{ background: `${color}0D`, border: `1px solid ${color}25` }}>
                                            <span className="text-xs uppercase tracking-widest block mb-1.5 font-bold" style={{ color: color }}>{dict.results.resultLabel}</span>
                                            <p className="text-base md:text-lg font-black text-white">{c.result}</p>
                                        </div>
                                    </div>

                                    {/* Metrics side */}
                                    <div className="grid grid-cols-2 gap-3 md:w-80 flex-shrink-0">
                                        {c.metrics.map((m: any) => (
                                            <div key={m.label} className={`p-4 rounded-2xl flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}
                                                style={{
                                                    background: m.bad ? "rgba(239,68,68,0.06)" : "rgba(255,255,255,0.03)",
                                                    border: `1px solid ${m.bad ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)"}`,
                                                }}>
                                                <div className="text-xl md:text-2xl font-black" style={{ color: m.bad ? "#f87171" : color }}>{m.val}</div>
                                                <div className="text-[10px] mt-1 font-bold uppercase tracking-wider" style={{ color: "#475569" }}>{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
