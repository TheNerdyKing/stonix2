"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Search, Target, Palette, BarChart3, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function Services() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        // Title: staggered "generating" reveal
        gsap.fromTo(titleRef.current?.children || [],
            { opacity: 0, y: 35 },
            {
                opacity: 1, y: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
                scrollTrigger: { trigger: titleRef.current, start: "top 80%" }
            }
        );

        // Service cards: slide in from left → right, staggered
        const cards = cardsRef.current?.querySelectorAll(".service-card");
        cards?.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, x: -70 },
                {
                    opacity: 1, x: 0, duration: 0.75, ease: "expo.out",
                    scrollTrigger: { trigger: card, start: "top 87%" },
                    delay: i * 0.1,
                }
            );
        });

        ScrollTrigger.refresh();
    }, { scope: sectionRef });

    const ArrowIcon = dir === "rtl" ? ArrowLeft : ArrowRight;
    const colors = ["#F97316", "#F59E0B", "#A78BFA", "#34D399"];
    const icons = [Target, BarChart3, Palette, Search];

    return (
        <section ref={sectionRef} id="services" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {dict.services.preTitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        {dict.services.title1}
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        {dict.services.title2}
                    </h2>
                    <p className="mt-6 text-lg max-w-xl leading-relaxed" style={{ color: "#94A3B8" }}>
                        {dict.services.desc}
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
                    {dict.services.list.map((s, i) => {
                        const Icon = icons[i] || Target;
                        const color = colors[i] || "#F97316";
                        return (
                            <div key={s.id} className="service-card group rounded-[2rem] p-8 transition-all duration-500 cursor-pointer"
                                style={{
                                    background: "#0E1118",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${color}33`;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${color}15`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                }}>
                                <div className={`flex items-start justify-between mb-8 ${dir === "rtl" ? "" : "flex-row-reverse"}`}>
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                                        <Icon className="w-6 h-6" style={{ color: color }} />
                                    </div>
                                    <div className={dir === "rtl" ? "text-left" : "text-right"}>
                                        <div className="text-2xl font-black" style={{ color: color }}>{s.mockMetric}</div>
                                        <div className="text-xs mt-0.5" style={{ color: "#475569" }}>{language === 'he' ? 'תוצאה ממוצעת' : 'Average Result'}</div>
                                    </div>
                                </div>

                                <div className={dir === "rtl" ? "text-right" : "text-left"}>
                                    <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: color }}>
                                        {s.subtitle}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                                    <p className="text-base leading-relaxed mb-6" style={{ color: "#94A3B8" }}>{s.desc}</p>

                                    <ul className="flex flex-col gap-2">
                                        {s.perks.map((p) => (
                                            <li key={p} className={`flex items-center gap-2 ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
                                                <span className="text-sm" style={{ color: "#94A3B8" }}>{p}</span>
                                                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: color }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="flex justify-center mt-12">
                    <a href="#contact">
                        <button className={`btn-primary ${dir === "ltr" ? "flex-row-reverse" : ""}`}>
                            {dict.services.cta}
                            <ArrowIcon className="w-4 h-4" />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
