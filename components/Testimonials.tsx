"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { Star, Quote } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
    {
        name: "ירון ל.",
        role: "מנכ\"ל, חברת תוכנה",
        text: "STONIX הפכו את השיווק שלנו מהוצאה לנכס. כמות הלידים הוכפלה תוך 45 יום והאיכות גבוהה בצורה שלא ראינו קודם. הם לא מוכרים הבטחות – הם מוכרים תוצאות.",
        highlight: false,
        rating: 5,
    },
    {
        name: "דנה כ.",
        role: "בעלת קליניקה, חיפה",
        text: "חיפשתי מישהו שייקח בעלות מלאה על השיווק. תוך 3 חודשים המחזור שלנו הוכפל. הם ניתחו, בנו, בדקו – ורק אז ביצעו. זה שינה הכל.",
        highlight: true,
        rating: 5,
    },
    {
        name: "עמית ב.",
        role: "סמנכ\"ל שיווק, SaaS",
        text: "עבדנו עם סוכנויות רבות לפני STONIX. הם הראשונים שדיברו איתנו על מטריקות שבאמת חשובות – ROAS, LTV, CAC. לא סתם impressions.",
        highlight: false,
        rating: 5,
    },
];

export default function Testimonials() {
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
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="testimonials" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className="text-right mb-16 flex flex-col items-end">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        לקוחות ממליצים
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        הם אמרו את זה,
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        לא אנחנו.
                    </h2>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-3 gap-6">
                    {TESTIMONIALS.map((t, i) => (
                        <div key={i} className="testi-card rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-300"
                            style={{
                                background: t.highlight ? "#0E1118" : "rgba(14,17,24,0.6)",
                                border: t.highlight ? "1px solid rgba(249,115,22,0.3)" : "1px solid rgba(255,255,255,0.06)",
                                boxShadow: t.highlight ? "0 0 60px rgba(249,115,22,0.08)" : "none",
                                transform: t.highlight ? "scale(1.02)" : "scale(1)",
                            }}>

                            <div>
                                <div className="flex items-center gap-1 mb-6">
                                    {Array(t.rating).fill(0).map((_, j) => (
                                        <Star key={j} className="w-4 h-4 fill-current" style={{ color: "#F97316" }} />
                                    ))}
                                </div>

                                <div className="relative mb-6">
                                    <Quote className="absolute -top-3 -right-3 w-10 h-10 opacity-5 rotate-180" />
                                    <p className="text-base leading-relaxed text-right" style={{ color: "#94A3B8" }}>
                                        &ldquo;{t.text}&rdquo;
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-end gap-3 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                                <div className="text-right">
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
