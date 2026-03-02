"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { TrendingUp } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CASES = [
    {
        industry: "מסחר אלקטרוני",
        client: "חנות אופנה",
        challenge: "ROAS נמוך של 1.2x עם תקציב של ₪15K/חודש",
        result: "ROAS 5.4x תוך 60 יום",
        metrics: [
            { label: "ROAS לפני", val: "1.2x", bad: true },
            { label: "ROAS אחרי", val: "5.4x", bad: false },
            { label: "עלייה בהכנסות", val: "+340%" },
            { label: "זמן לתוצאה", val: "60 יום" },
        ],
        color: "#F97316",
    },
    {
        industry: "שירותים מקצועיים",
        client: "קליניקה רפואית",
        challenge: "עלות גבוהה לליד – ₪380 לליד, מספר לידים נמוך",
        result: "₪97 לליד, 4x יותר לידים",
        metrics: [
            { label: "עלות לליד לפני", val: "₪380", bad: true },
            { label: "עלות לליד אחרי", val: "₪97", bad: false },
            { label: "גידול בלידים", val: "+320%" },
            { label: "תקציב", val: "ללא שינוי" },
        ],
        color: "#F59E0B",
    },
    {
        industry: "SaaS / טכנולוגיה",
        client: "פלטפורמת B2B",
        challenge: "שיעור המרה של 0.8% בדף הנחיתה",
        result: "שיעור המרה 3.7% לאחר CRO",
        metrics: [
            { label: "המרה לפני", val: "0.8%", bad: true },
            { label: "המרה אחרי", val: "3.7%", bad: false },
            { label: "עלייה", val: "+362%" },
            { label: "ללא שינוי בתנועה", val: "✓" },
        ],
        color: "#A78BFA",
    },
];

export default function Results() {
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
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="results" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className="text-right mb-16 flex flex-col items-end">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        קייס סטאדיז
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        תוצאות אמיתיות
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        למותגים אמיתיים.
                    </h2>
                    <p className="mt-6 text-lg max-w-xl text-right leading-relaxed" style={{ color: "#94A3B8" }}>
                        לפני / אחרי – בלי עיגולים, בלי עמימות. רק מספרים.
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    {CASES.map((c, i) => (
                        <div key={i} className="case-card rounded-[2rem] p-8 md:p-10"
                            style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.06)" }}>

                            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">

                                {/* Left: info */}
                                <div className="flex-1 text-right">
                                    <div className="flex items-center justify-end gap-3 mb-4">
                                        <div>
                                            <div className="text-xs uppercase tracking-widest font-bold" style={{ color: "#475569" }}>{c.industry}</div>
                                            <div className="text-lg font-bold text-white">{c.client}</div>
                                        </div>
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                                            style={{ background: `${c.color}18` }}>
                                            <TrendingUp className="w-5 h-5" style={{ color: c.color }} />
                                        </div>
                                    </div>

                                    <div className="mb-4 p-4 rounded-xl text-right" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                        <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: "#475569" }}>האתגר</span>
                                        <p className="text-sm" style={{ color: "#94A3B8" }}>{c.challenge}</p>
                                    </div>

                                    <div className="p-4 rounded-xl text-right" style={{ background: `${c.color}0D`, border: `1px solid ${c.color}25` }}>
                                        <span className="text-xs uppercase tracking-widest block mb-1" style={{ color: c.color }}>התוצאה</span>
                                        <p className="text-base font-bold text-white">{c.result}</p>
                                    </div>
                                </div>

                                {/* Right: metrics grid */}
                                <div className="grid grid-cols-2 gap-3 md:w-80 flex-shrink-0">
                                    {c.metrics.map((m) => (
                                        <div key={m.label} className="p-4 rounded-2xl text-right"
                                            style={{
                                                background: (m as any).bad ? "rgba(239,68,68,0.06)" : "#12151F",
                                                border: `1px solid ${(m as any).bad ? "rgba(239,68,68,0.15)" : "rgba(255,255,255,0.05)"}`,
                                            }}>
                                            <div className="text-xl font-black" style={{ color: (m as any).bad ? "#f87171" : c.color }}>{m.val}</div>
                                            <div className="text-xs mt-1" style={{ color: "#475569" }}>{m.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
