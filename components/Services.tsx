"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { Search, Target, Palette, BarChart3, CheckCircle, ArrowLeft } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
    {
        id: "paid",
        icon: Target,
        title: "קידום ממומן",
        subtitle: "Meta · Google · TikTok",
        desc: "קמפיינים מדויקים שמביאים לידים איכותיים ולקוחות משלמים. ניהול מלא, אופטימיזציה יומית ודיווח שקוף.",
        perks: ["ניהול תקציב חכם", "טרגוט מדויק", "A/B Testing מתמיד"],
        color: "#F97316",
        mockMetric: "4.8x ROAS",
    },
    {
        id: "cro",
        icon: BarChart3,
        title: "CRO ואופטימיזציה",
        subtitle: "Landing Pages · Funnels",
        desc: "אנחנו הופכים קליקים להכנסות. ניתוח מעמיק של הפאנל, בניית דפי נחיתה שממירים ובדיקות שמשפרות תמיד.",
        perks: ["ניתוח התנהגות משתמשים", "בדיקות A/B", "שיפור מתמיד"],
        color: "#F59E0B",
        mockMetric: "3.2x המרות",
    },
    {
        id: "creative",
        icon: Palette,
        title: "קריאייטיב ומיתוג",
        subtitle: "Ads · Videos · Branding",
        desc: "קריאייטיב שנבנה לבידול אמיתי. סרטוני פרסומת, עיצוב גרפי ומסרים שגורמים לקהל היעד לבחור בכם.",
        perks: ["עיצוב גרפי", "הפקת סרטונים", "אסטרטגיית מסר"],
        color: "#A78BFA",
        mockMetric: "-38% CPM",
    },
    {
        id: "seo",
        icon: Search,
        title: "תוכן וSEO",
        subtitle: "Organic · Content · Authority",
        desc: "נוכחות אורגנית חזקה שמביאה תנועה איכותית לאורך זמן. אסטרטגיית תוכן, אופטימיזציה טכנית ובניית סמכות.",
        perks: ["אסטרטגיית מילות מפתח", "תוכן שממיר", "בניית קישורים"],
        color: "#34D399",
        mockMetric: "+148% תנועה",
    },
];

export default function Services() {
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

        const cards = cardsRef.current?.querySelectorAll(".service-card");
        cards?.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 40 },
                {
                    opacity: 1, y: 0, duration: 0.6, ease: "power2.out",
                    scrollTrigger: { trigger: card, start: "top 85%" },
                    delay: i * 0.08,
                }
            );
        });
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="services" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-7xl mx-auto">

                <div ref={titleRef} className="text-right mb-16 flex flex-col items-end">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        מה אנחנו עושים
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        מעטפת שיווקית
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        שעובדת בשבילכם.
                    </h2>
                    <p className="mt-6 text-lg max-w-xl text-right leading-relaxed" style={{ color: "#94A3B8" }}>
                        כל שירות בנוי סביב מדד אחד: תוצאות מדידות. אנחנו לא מוכרים שעות עבודה, אנחנו מוכרים צמיחה.
                    </p>
                </div>

                <div ref={cardsRef} className="grid md:grid-cols-2 gap-6">
                    {SERVICES.map((s) => {
                        const Icon = s.icon;
                        return (
                            <div key={s.id} className="service-card group rounded-[2rem] p-8 transition-all duration-500 cursor-pointer"
                                style={{
                                    background: "#0E1118",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = `${s.color}33`;
                                    (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${s.color}15`;
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                                }}>
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                                        style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                                        <Icon className="w-6 h-6" style={{ color: s.color }} />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-2xl font-black" style={{ color: s.color }}>{s.mockMetric}</div>
                                        <div className="text-xs mt-0.5" style={{ color: "#475569" }}>תוצאה ממוצעת</div>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: s.color }}>
                                        {s.subtitle}
                                    </div>
                                    <h3 className="text-2xl font-black text-white mb-3">{s.title}</h3>
                                    <p className="text-base leading-relaxed mb-6" style={{ color: "#94A3B8" }}>{s.desc}</p>

                                    <ul className="flex flex-col gap-2">
                                        {s.perks.map((p) => (
                                            <li key={p} className="flex items-center justify-end gap-2">
                                                <span className="text-sm" style={{ color: "#94A3B8" }}>{p}</span>
                                                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: s.color }} />
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
                        <button className="btn-primary">
                            קבלו הצעה מותאמת אישית
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
