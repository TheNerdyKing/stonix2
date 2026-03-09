"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { Play, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function MediaTestimonials() {
    const { language, dir } = useLanguage();
    const dict = getDictionary(language);
    const [activeVideo, setActiveVideo] = useState<string | null>(null);
    const [activeImage, setActiveImage] = useState<{ src: string; name: string } | null>(null);
    const [showAll, setShowAll] = useState(true);

    const sectionRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

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

        // Media cards: slide in from left → right, staggered
        const cards = gridRef.current?.querySelectorAll(".media-card");
        cards?.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, x: -55 },
                {
                    opacity: 1, x: 0, duration: 0.75, ease: "expo.out",
                    scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
                    delay: i * 0.07,
                }
            );
        });

        ScrollTrigger.refresh();
    }, { scope: sectionRef, dependencies: [showAll] });

    const displayedReviews = showAll ? dict.testimonials.mediaReviews : dict.testimonials.mediaReviews.slice(0, 5);

    return (
        <section ref={sectionRef} id="media-testimonials" className="section-pad" style={{ background: "#05060A" }}>
            <div className="max-w-[1600px] mx-auto px-6">

                <div ref={titleRef} className={`mb-16 flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: "#F97316" }}>
                        {language === 'he' ? 'סיפורי הצלחה' : 'Success Stories'}
                    </p>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
                        {language === 'he' ? 'ראו את הדיגיטל' : 'Experience the Digital'}
                    </h2>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter ember-text">
                        {language === 'he' ? 'שלכם מתעורר לחיים.' : 'Impact in Motion.'}
                    </h2>
                </div>

                <div className="relative group">
                    <div
                        ref={gridRef}
                        className="flex overflow-x-auto gap-6 pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {dict.testimonials.mediaReviews.map((m, i) => (
                            <div
                                key={i}
                                className="media-card flex-shrink-0 w-[280px] md:w-[350px] snap-start"
                                onClick={() => {
                                    if (m.type === "video") {
                                        setActiveVideo(m.src);
                                    } else {
                                        setActiveImage({ src: m.src, name: m.name });
                                    }
                                }}
                            >
                                <div className="group relative rounded-[2.5rem] overflow-hidden bg-[#0E1118] border border-white/5 shadow-2xl transition-all duration-500 hover:border-orange-500/20 hover:scale-[1.02] cursor-pointer">
                                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                                        {m.type === "image" ? (
                                            <Image
                                                src={m.src}
                                                alt={m.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={m.thumbnail || "/assets/IMG_9310.jpg"}
                                                    alt={m.name}
                                                    fill
                                                    className="object-cover"
                                                />
                                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors z-10">
                                                    <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                                                        <Play className="w-6 h-6 text-black fill-current ml-0.5" />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-0" />
                                        <div className={`absolute bottom-6 left-6 right-6 ${dir === "rtl" ? "text-right" : "text-left"} z-10`}>
                                            <div className="mb-2 inline-block px-2 py-1 rounded bg-orange-500/20 backdrop-blur-md border border-orange-500/20">
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500">
                                                    {m.type === "video" ? (language === 'he' ? 'וידאו' : 'VIDEO') : (language === 'he' ? 'צילום מסך' : 'SCREENSHOT')}
                                                </span>
                                            </div>
                                            <p className="text-white text-lg font-black leading-tight mb-1">{m.name}</p>
                                            <p className="text-xs font-medium opacity-60" style={{ color: "#94A3B8" }}>{m.role}</p>
                                            <p className="mt-3 text-xs leading-relaxed line-clamp-2 text-white/70 italic">"{m.text}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Overlays */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between px-4 z-20">
                        <button
                            onClick={() => gridRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-orange-500 hover:border-orange-500 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                        </button>
                        <button
                            onClick={() => gridRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                            className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-orange-500 hover:border-orange-500 transition-all opacity-0 group-hover:opacity-100"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>


                {/* Image Lightbox */}
                {activeImage && (
                    <div
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm"
                        onClick={() => setActiveImage(null)}
                    >
                        <button
                            onClick={() => setActiveImage(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div
                            className="relative max-w-3xl max-h-[85vh] w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-white/5"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={activeImage.src}
                                alt={activeImage.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                )}

                {/* Video Modal (Full Screen) */}
                {activeVideo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-sm transition-opacity">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-[101]"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
                            {activeVideo.startsWith('http') ? (
                                <iframe
                                    src={`${activeVideo}?autoplay=1`}
                                    className="w-full h-full"
                                    allow="autoplay; fullscreen"
                                    frameBorder="0"
                                />
                            ) : (
                                <video
                                    src={encodeURI(activeVideo)}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="w-full h-full"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
