"use client";

import { useRef } from "react";


import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";



export default function Testimonials() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        gsap.fromTo(titleRef.current?.children || [],
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
                scrollTrigger: { trigger: titleRef.current, start: "top 80%" }
            }
        );

        const cards = cardsRef.current?.querySelectorAll(".testi-card");
        cards?.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40, scale: 0.97 },
                {
                    opacity: 1, y: 0, scale: 1, duration: 0.65, ease: "expo.out",
                    scrollTrigger: { trigger: cardsRef.current, start: "top 85%" },
                    delay: i * 0.12,
                }
            );
        });
        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="testimonials" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {dict.testimonials.preTitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        {dict.testimonials.title1}
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        {dict.testimonials.title2}
                    </h2>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
                    {dict.testimonials.reviews.map((t: any, i: number) => (
                        <div key={i} className="testi-card rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-300"
                            style={{
                                background: "rgba(14,17,24,0.6)",
                                border: "1px solid rgba(255,255,255,0.06)",
                            }}>

                            <div>
                                <div className={`flex items-center gap-1 mb-6 ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
                                    {Array(5).fill(0).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F97316" }} />
                                    ))}
                                </div>

                                <div className="relative mb-6">
                                    <Quote className={`absolute -top-3 w-10 h-10 opacity-5 rotate-180 ${dir === "rtl" ? "-right-3" : "-left-3"}`} />
                                    <p className={`text-base leading-relaxed ${dir === "rtl" ? "text-right" : "text-left"}`} style={{ color: "#94A3B8" }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                </div>
                            </div>

                            <div className={`flex items-center gap-3 pt-6 border-t ${dir === "rtl" ? "justify-end flex-row" : "justify-start flex-row-reverse"}`} style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                                <div className={dir === "rtl" ? "text-right" : "text-left"}>
                                    <div className="font-bold text-white">{t.name}</div>
                                    <div className="text-sm" style={{ color: "#475569" }}>{t.role}</div>
                                </div>
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm"
                                    style={{ background: "rgba(249,115,22,0.15)", color: "#F97316" }}>
                                    {t.name[0]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
