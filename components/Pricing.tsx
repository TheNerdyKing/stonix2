"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { CheckCircle, ArrowLeft, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PLANS = [
  {
    name: "Starter",
    nameHe: "סטארטר",
    desc: "לעסקים שמתחילים וצריכים בסיס חזק",
    price: "₪3,500",
    period: "/ חודש",
    perks: [
      "ניהול קמפיינים בפלטפורמה אחת",
      "עד ₪20K תקציב מדיה",
      "דו\"ח חודשי",
      "תמיכה בוואטסאפ",
    ],
    cta: "התחייבות מינימלית",
    isPopular: false,
    color: "#F59E0B",
  },
  {
    name: "Growth",
    nameHe: "צמיחה",
    desc: "לעסקים שצומחים ורוצים לשחק בליג אחר",
    price: "₪7,500",
    period: "/ חודש",
    perks: [
      "ניהול מלא – Meta + Google",
      "עד ₪60K תקציב מדיה",
      "CRO בסיסי + A/B Testing",
      "קריאייטיב – 8 קמפיינים",
      "דיווח שבועי + BI Dashboard",
      "מנהל חשבון ייעודי",
    ],
    cta: "הכי פופולרי",
    isPopular: true,
    color: "#F97316",
  },
  {
    name: "Scale",
    nameHe: "סקייל",
    desc: "לחברות שמוכנות לדחוף הכל עד הסוף",
    price: "מחיר מותאם",
    period: "",
    perks: [
      "אסטרטגיית שיווק מלאה",
      "תקציב ללא הגבלה",
      "CRO מתקדם + Funnel מלא",
      "קריאייטיב בלתי מוגבל",
      "דיווח יומי + Slack channel",
      "ליווי אסטרטגי C-level",
    ],
    cta: "נדבר על עסקה",
    isPopular: false,
    color: "#A78BFA",
  },
];

export default function Pricing() {
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

    const cards = sectionRef.current?.querySelectorAll(".plan-card");
    cards?.forEach((card, i) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "expo.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
          delay: i * 0.1,
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="pricing" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto">

        <div ref={titleRef} className="text-right mb-16 flex flex-col items-end">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
            תמחור ושקיפות
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            בחרו את המסלול
          </h2>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
            שמתאים לכם.
          </h2>
          <p className="mt-6 text-lg max-w-xl text-right leading-relaxed" style={{ color: "#94A3B8" }}>
            ללא הסתרה, ללא מחירים מפתיעים. רק ערך ברור לכל שקל.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((p) => (
            <div key={p.name} className="plan-card rounded-[2rem] p-8 flex flex-col relative overflow-hidden"
              style={{
                background: p.isPopular ? "#0E1118" : "rgba(14,17,24,0.5)",
                border: p.isPopular ? `1px solid rgba(249,115,22,0.4)` : "1px solid rgba(255,255,255,0.06)",
                boxShadow: p.isPopular ? "0 0 80px rgba(249,115,22,0.1)" : "none",
              }}>

              {p.isPopular && (
                <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #F97316, transparent)" }} />
              )}

              {p.isPopular && (
                <div className="flex items-center justify-end mb-4">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.25)" }}>
                    <Zap className="w-3 h-3" />
                    הכי פופולרי
                  </span>
                </div>
              )}

              <div className="text-right mb-6">
                <div className="text-xs uppercase tracking-widest mb-1" style={{ color: p.color }}>{p.name}</div>
                <h3 className="text-2xl font-black text-white mb-2">{p.nameHe}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{p.desc}</p>
              </div>

              <div className="flex items-baseline justify-end gap-1 mb-8">
                <span className="text-base" style={{ color: "#94A3B8" }}>{p.period}</span>
                <span className="text-4xl font-black text-white">{p.price}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-center justify-end gap-2.5">
                    <span className="text-sm text-right" style={{ color: "#94A3B8" }}>{perk}</span>
                    <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: p.color }} />
                  </li>
                ))}
              </ul>

              <a href="#contact" className="w-full">
                <button className="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
                  style={p.isPopular ? {
                    background: "#F97316",
                    color: "#000",
                    boxShadow: "0 0 30px rgba(249,115,22,0.3)",
                  } : {
                    background: "rgba(255,255,255,0.05)",
                    color: "#F8FAFC",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                  onMouseEnter={e => !p.isPopular && ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                  onMouseLeave={e => !p.isPopular && ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
                >
                  {p.cta}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
