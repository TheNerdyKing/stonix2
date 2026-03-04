"use client";

import { useRef, useState } from "react";


import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Plus, Minus } from "lucide-react";



const FAQ_ITEMS = [
    {
        q: "כמה זמן לוקח עד שרואים תוצאות?",
        a: "בדרך כלל, לקוחות שלנו רואים תוצאות משמעותיות תוך 30–60 יום. הדק של הביצועים תלוי בתקציב, בתעשייה וב-baseline הנוכחי. אנחנו שקופים לחלוטין לאורך כל הדרך.",
    },
    {
        q: "האם אתם מנהלים גם את יצירת הקריאייטיב?",
        a: "כן. יש לנו צוות קריאייטיב פנימי שמייצר את כל החומרים – ממודעות בנות 5 שניות ועד סרטוני פרסומת מלאים. הכל כחלק מהחבילה.",
    },
    {
        q: "מה ההבדל בין STONIX לסוכנויות אחרות?",
        a: "אנחנו לא עובדים על מודל Volume. יש לנו מספר מוגבל של לקוחות כדי שכל אחד יקבל תשומת לב מלאה. אנחנו מדברים במטריקות שחשובות לעסק – ROAS, CAC, LTV – לא impressions ו-reach.",
    },
    {
        q: "מה קורה אם אני לא מרוצה?",
        a: "אין לנו חוזים ארוכי טווח. אנחנו עובדים על חוזים חודשיים עם הודעה מוקדמת של 30 יום. אנחנו בטוחים בתוצאות שלנו – לכן אין הגבלות.",
    },
    {
        q: "האם אתם עובדים עם כל סוגי עסקים?",
        a: "אנחנו מתמחים בעסקים עם תקציב שיווק של ₪15K+ לחודש. עובדים עם eCommerce, שירותים מקצועיים, SaaS ואנטרפרייז. לא עובדים עם alcohol, gambling ותחומים נוגדי חוק.",
    },
    {
        q: "האם אני שומר שליטה על החשבונות שלי?",
        a: "תמיד. כל חשבון – Meta, Google, וכדומה – שייך לכם 100%. אנחנו מקבלים גישת ניהול בלבד. אם קורה משהו ביננו, הכל נשאר אצלכם.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
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
      ScrollTrigger.refresh();
  }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="faq" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-4xl mx-auto">

                <div ref={titleRef} className="text-right mb-16 flex flex-col items-end">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>שאלות נפוצות</p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">יש לכם שאלות?</h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">יש לנו תשובות.</h2>
                </div>

                <div className="flex flex-col gap-3">
                    {FAQ_ITEMS.map((item, i) => (
                        <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
                            style={{
                                background: open === i ? "#0E1118" : "rgba(14,17,24,0.5)",
                                border: open === i ? "1px solid rgba(249,115,22,0.25)" : "1px solid rgba(255,255,255,0.06)",
                            }}
                            onClick={() => setOpen(open === i ? null : i)}>

                            <div className="flex items-center justify-between p-6">
                                <div style={{ color: open === i ? "#F97316" : "#94A3B8", transition: "color 0.2s" }}>
                                    {open === i
                                        ? <Minus className="w-5 h-5" />
                                        : <Plus className="w-5 h-5" />
                                    }
                                </div>
                                <h3 className="text-right font-bold text-white flex-1 mr-4">{item.q}</h3>
                            </div>

                            <div style={{
                                maxHeight: open === i ? "300px" : "0",
                                overflow: "hidden",
                                transition: "max-height 0.35s ease"
                            }}>
                                <p className="px-6 pb-6 text-right leading-relaxed" style={{ color: "#94A3B8" }}>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
