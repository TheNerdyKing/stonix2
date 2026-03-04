"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function Contact() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const [submitted, setSubmitted] = useState(false);

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

    const contactInfo = [
        { icon: MapPin, label: dict.contact.addressTitle, val: dict.contact.addressValue },
        { icon: Phone, label: dict.contact.phoneTitle, val: dict.contact.phoneValue },
        { icon: Mail, label: dict.contact.emailTitle, val: dict.contact.emailValue },
    ];

    return (
        <section ref={sectionRef} id="contact" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-7xl mx-auto px-6">
                <div ref={titleRef} className={`mb-12 md:mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {dict.contact.preTitle}
                    </p>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                        {dict.contact.title1}
                    </h2>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter ember-text">
                        {dict.contact.title2}
                    </h2>
                </div>

                <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${dir === "rtl" ? "" : "lg:flex-row-reverse"}`}>

                    {/* Info Column */}
                    <div className={`flex flex-col gap-4 md:gap-6 ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                        {contactInfo.map((item, i) => (
                            <div key={i} className={`flex items-center gap-4 p-5 md:p-6 rounded-2xl md:rounded-3xl w-full ${dir === "rtl" ? "flex-row-reverse" : ""}`}
                                style={{ background: "rgba(14,17,24,0.6)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0"
                                    style={{ background: "rgba(249,115,22,0.1)", border: "1px solid rgba(249,115,22,0.2)" }}>
                                    <item.icon className="w-5 h-5" style={{ color: "#F97316" }} />
                                </div>
                                <div className={dir === "rtl" ? "text-right" : "text-left"}>
                                    <div className="text-[10px] md:text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#475569" }}>{item.label}</div>
                                    <div className="text-base md:text-lg text-white font-medium">{item.val}</div>
                                </div>
                            </div>
                        ))}

                        <div className={`mt-4 md:mt-8 p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] w-full ${dir === "rtl" ? "text-right" : "text-left"}`} style={{ background: "linear-gradient(135deg, rgba(249,115,22,0.1) 0%, rgba(167,139,250,0.1) 100%)", border: "1px solid rgba(255,255,255,0.05)" }}>
                            <h3 className="text-2xl font-black text-white mb-4">{language === 'he' ? 'בואו נדבר תכלס.' : "Let's talk business."}</h3>
                            <p className="leading-relaxed" style={{ color: "#94A3B8" }}>
                                {language === 'he'
                                    ? 'אנחנו לא מחפשים למכור לכם חלומות. אנחנו מחפשים שותפים שרוצים לגדול איתנו. השאירו פרטים ונתחיל לעבוד.'
                                    : "We're not looking to sell you dreams. We're looking for partners who want to grow with us. Leave your details and let's get to work."}
                            </p>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="p-6 md:p-12 rounded-2xl md:rounded-[2.5rem]" style={{ background: "#0E1118", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {!submitted ? (
                            <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                <div className={`grid md:grid-cols-2 gap-6`}>
                                    <div className={`flex flex-col gap-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                        <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: "#475569" }}>{dict.contact.formName}</label>
                                        <input required type="text" className="contact-input" placeholder={language === 'he' ? "ישראל ישראלי" : "John Doe"} />
                                    </div>
                                    <div className={`flex flex-col gap-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                        <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: "#475569" }}>{dict.contact.formPhone}</label>
                                        <input required type="tel" className="contact-input" placeholder="050-0000000" />
                                    </div>
                                </div>

                                <div className={`flex flex-col gap-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                    <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: "#475569" }}>{dict.contact.formBusiness}</label>
                                    <input required type="text" className="contact-input" placeholder={language === 'he' ? "שם העסק שלך" : "Your Business Name"} />
                                </div>

                                <div className={`flex flex-col gap-2 ${dir === "rtl" ? "text-right" : "text-left"}`}>
                                    <label className="text-xs font-bold uppercase tracking-widest px-1" style={{ color: "#475569" }}>{dict.contact.formEmail}</label>
                                    <input required type="email" className="contact-input" placeholder="email@example.com" />
                                </div>

                                <label className={`flex items-start gap-3 cursor-pointer group mt-2 ${dir === "rtl" ? "flex-row-reverse text-right" : "text-left"}`}>
                                    <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-800 bg-gray-900 checked:bg-orange-500 transition-all" />
                                    <span className="text-xs leading-relaxed" style={{ color: "#475569" }}>{dict.contact.agreed}</span>
                                </label>

                                <button type="submit" className={`btn-primary w-full mt-4 flex items-center justify-center gap-3 py-6 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                                    {dict.contact.formSubmit}
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        ) : (
                            <div className="py-20 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-10 h-10 text-orange-500" />
                                </div>
                                <h3 className="text-3xl font-black text-white mb-4">{language === 'he' ? 'הפרטים התקבלו!' : 'Details Received!'}</h3>
                                <p className="text-lg max-w-sm" style={{ color: "#94A3B8" }}>
                                    {dict.contact.successText}
                                </p>
                                <button onClick={() => setSubmitted(false)} className="mt-8 text-sm font-bold uppercase tracking-widest text-orange-500 hover:text-orange-400 transition-colors">
                                    {language === 'he' ? 'שליחת טופס נוסף' : 'Send another form'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
