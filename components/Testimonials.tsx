"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { prefersReducedMotion } from "@/lib/gsap";
import { Star, Quote, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Yaron L.",
        company: "CEO, Software Company",
        text: "Working with STONIX proved that you can get real results without empty promises. Lead volume jumped significantly and the quality has been outstanding.",
        highlighted: false,
    },
    {
        name: "Dana K.",
        company: "Clinic Owner",
        text: "We were looking for someone to take full ownership of our marketing. Our revenue doubled in 3 months thanks to their precision campaigns and strategic guidance.",
        highlighted: true,
    },
    {
        name: "Amit B.",
        company: "VP of Marketing",
        text: "Having all services under one roof lets us move fast. They understand the market, read the data, and deliver remarkable stability for our growth.",
        highlighted: false,
    },
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    useGSAP(() => {
        if (prefersReducedMotion()) return;

        const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
        if (!cards) return;

        gsap.fromTo(
            cards,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
            }
        );

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            id="recommendations"
            className="relative min-h-screen bg-[#050505] py-24 px-4 md:px-8 overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/10 to-transparent" />

            <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
                <p className="text-orange-500 font-bold uppercase tracking-[0.25em] text-xs mb-4">
                    Client Success Stories
                </p>
                <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    The Results <span className="text-orange-500">Speak.</span>
                </h2>
                <p className="text-white/40 text-lg max-w-2xl mx-auto font-light">
                    Don't take our word for it. See what our clients say after working with us.
                </p>
            </div>

            <div
                ref={cardsRef}
                className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 relative z-10"
            >
                {testimonials.map((testi, index) => (
                    <div
                        key={testi.name}
                        className={`testimonial-card relative rounded-[3rem] p-10 flex flex-col justify-between border transition-all duration-500 ${testi.highlighted
                            ? "bg-[#0A0A0A] border-orange-500/30 shadow-[0_30px_60px_rgba(249,115,22,0.1)] scale-105 z-20"
                            : "bg-white/[0.02] border-white/5 hover:border-white/10"
                            } ${hoveredIndex === index ? "-translate-y-3" : ""}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="flex items-center gap-1 mb-8">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
                            ))}
                        </div>

                        <p className="text-white/80 text-lg leading-relaxed mb-10 flex-1 relative">
                            <Quote className="absolute -top-4 -right-4 w-12 h-12 text-white/5 rotate-180" />
                            "{testi.text}"
                        </p>

                        <div className="flex items-center gap-4 mt-auto">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex flex-shrink-0 items-center justify-center border border-white/10">
                                <Building2 className="w-5 h-5 text-white/40" />
                            </div>
                            <div className="text-right">
                                <h4 className="text-white font-bold">{testi.name}</h4>
                                <p className="text-white/40 text-sm">{testi.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
