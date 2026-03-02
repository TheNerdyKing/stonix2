"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { ArrowLeft, MessageCircle, Phone, Mail, Clock } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;
        gsap.fromTo(cardRef.current,
            { opacity: 0, y: 60, scale: 0.97 },
            {
                opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "expo.out",
                scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
            }
        );
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} id="contact" className="section-pad" style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="max-w-6xl mx-auto">

                <div ref={cardRef} className="rounded-[3rem] overflow-hidden relative"
                    style={{ background: "#0E1118", border: "1px solid rgba(249,115,22,0.2)" }}>

                    {/* top glow line */}
                    <div className="absolute top-0 inset-x-0 h-px" style={{ background: "linear-gradient(90deg, transparent, #F97316 50%, transparent)" }} />

                    {/* ambient glow */}
                    <div className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none"
                        style={{ background: "linear-gradient(to top, rgba(249,115,22,0.04), transparent)" }} />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-0">

                        {/* Left: CTA copy */}
                        <div className="p-10 md:p-16 flex flex-col justify-center text-right">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full self-end mb-8"
                                style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.25)" }}>
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#F97316" }} />
                                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#F97316" }}>מוכנים לצמוח?</span>
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
                                בואו נבנה
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text mb-8">
                                ביחד.
                            </h2>

                            <p className="text-lg leading-relaxed mb-10" style={{ color: "#94A3B8" }}>
                                שיחת אסטרטגיה ראשונה – בחינם, ללא התחייבות. נבין את האתגרים שלכם ונציג תכנית פעולה ברורה.
                            </p>

                            <div className="flex flex-col gap-4 mb-10">
                                {[
                                    { icon: Clock, text: "תוך 24 שעות נחזור אליכם" },
                                    { icon: MessageCircle, text: "זמינים גם בוואטסאפ" },
                                    { icon: Phone, text: "055-2664456" },
                                    { icon: Mail, text: "a.s.mediagroup2023@gmail.com" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center justify-end gap-3">
                                        <span className="text-sm" style={{ color: "#94A3B8" }}>{item.text}</span>
                                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                                            style={{ background: "rgba(249,115,22,0.1)" }}>
                                            <item.icon className="w-4 h-4" style={{ color: "#F97316" }} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 justify-end flex-wrap">
                                <a href="https://wa.me/972552664456" target="_blank" rel="noopener noreferrer">
                                    <button className="btn-primary">
                                        וואטסאפ עכשיו
                                        <ArrowLeft className="w-4 h-4" />
                                    </button>
                                </a>
                                <a href="tel:0552664456">
                                    <button className="btn-ghost">
                                        התקשרו אלינו
                                    </button>
                                </a>
                            </div>
                        </div>

                        {/* Right: Mock booking card */}
                        <div className="p-10 md:p-16 flex items-center justify-center lg:border-r"
                            style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <div className="w-full max-w-sm rounded-[2rem] overflow-hidden"
                                style={{ background: "#12151F", border: "1px solid rgba(255,255,255,0.07)" }}>

                                <div className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <h3 className="text-lg font-black text-white text-right mb-1">שיחת אסטרטגיה</h3>
                                    <p className="text-sm text-right" style={{ color: "#94A3B8" }}>30 דקות · חינם · ללא התחייבות</p>
                                </div>

                                <div className="p-6 flex flex-col gap-4">
                                    {[
                                        { label: "שם מלא", placeholder: "ישראל ישראלי" },
                                        { label: "חברה", placeholder: "שם החברה שלכם" },
                                        { label: "מספר טלפון", placeholder: "05X-XXXXXXX" },
                                        { label: "תקציב חודשי", placeholder: "₪15,000+" },
                                    ].map((f) => (
                                        <div key={f.label}>
                                            <label className="block text-right text-xs mb-1.5 font-medium" style={{ color: "#94A3B8" }}>{f.label}</label>
                                            <div className="h-11 w-full rounded-xl px-4 flex items-center text-right"
                                                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                                                <span className="text-sm w-full text-right" style={{ color: "#475569" }}>{f.placeholder}</span>
                                            </div>
                                        </div>
                                    ))}

                                    <a href="https://wa.me/972552664456" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <button className="btn-primary w-full justify-center mt-2" style={{ borderRadius: "12px" }}>
                                            שלחו פרטים
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
