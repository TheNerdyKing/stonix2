"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { CheckCircle, Zap } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function Pricing() {
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
    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  const colors = ["#F59E0B", "#F97316", "#A78BFA"];

  return (
    <section ref={sectionRef} id="pricing" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto">

        <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
            {dict.pricing.preTitle}
          </p>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            {dict.pricing.title1}
          </h2>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
            {dict.pricing.title2}
          </h2>
          <p className={`mt-6 text-lg max-w-xl leading-relaxed ${dir === "rtl" ? "text-right" : "text-left"}`} style={{ color: "#94A3B8" }}>
            {dict.pricing.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {dict.pricing.plans.map((p: any, i: number) => {
            const isPopular = p.name === "Growth";
            const color = colors[i];

            return (
              <div key={p.name} className="plan-card rounded-[2rem] p-8 flex flex-col relative overflow-hidden h-full"
                style={{
                  background: isPopular ? "#0E1118" : "rgba(14,17,24,0.5)",
                  border: isPopular ? `1px solid rgba(249,115,22,0.4)` : "1px solid rgba(255,255,255,0.06)",
                  boxShadow: isPopular ? "0 0 80px rgba(249,115,22,0.1)" : "none",
                }}>

                {isPopular && (
                  <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #F97316, transparent)" }} />
                )}

                {isPopular && (
                  <div className={`flex items-center mb-4 ${dir === "rtl" ? "justify-end" : "justify-start"}`}>
                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(249,115,22,0.1)", color: "#F97316", border: "1px solid rgba(249,115,22,0.25)" }}>
                      <Zap className="w-3 h-3" />
                      {dict.pricing.popularLabel}
                    </span>
                  </div>
                )}

                <div className={`${dir === "rtl" ? "text-right" : "text-left"} mb-6`}>
                  <div className="text-xs uppercase tracking-widest mb-1" style={{ color: color }}>{p.name}</div>
                  <h3 className="text-2xl font-black text-white mb-2">{p.nameDisplay}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>{p.desc}</p>
                </div>

                <div className={`flex items-baseline gap-1 mb-8 ${dir === "rtl" ? "justify-end flex-row-reverse" : "justify-start"}`}>
                  <span className="text-4xl font-black text-white">{p.price}</span>
                  <span className="text-base" style={{ color: "#94A3B8" }}>{p.period}</span>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {p.perks.map((perk: string) => (
                    <li key={perk} className={`flex items-center gap-2.5 ${dir === "rtl" ? "justify-end flex-row" : "justify-start flex-row-reverse"}`}>
                      <span className="text-sm" style={{ color: "#94A3B8" }}>{perk}</span>
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: color }} />
                    </li>
                  ))}
                </ul>

                <a href="#contact" className="w-full">
                  <button className="w-full py-3.5 rounded-xl font-bold text-sm transition-all"
                    style={isPopular ? {
                      background: "#F97316",
                      color: "#000",
                      boxShadow: "0 0 30px rgba(249,115,22,0.3)",
                    } : {
                      background: "rgba(255,255,255,0.05)",
                      color: "#F8FAFC",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={e => !isPopular && ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                    onMouseLeave={e => !isPopular && ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)")}
                  >
                    {p.cta}
                  </button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
