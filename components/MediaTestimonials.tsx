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

                <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
                    {displayedReviews.map((m, i) => (
                        <div
                            key={i}
                            className="media-card group relative rounded-3xl overflow-hidden bg-[#0E1118] border border-white/5 shadow-xl transition-all duration-500 hover:border-orange-500/20 hover:scale-[1.05] cursor-pointer"
                            onClick={() => {
                                if (m.type === "video") {
                                    setActiveVideo(m.src);
                                } else {
                                    setActiveImage({ src: m.src, name: m.name });
                                }
                            }}
                        >
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
                                            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                                                <Play className="w-5 h-5 text-black fill-current ml-0.5" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0E1118] to-transparent opacity-80 z-0" />
                                <div className={`absolute bottom-3 left-3 right-3 ${dir === "rtl" ? "text-right" : "text-left"} z-10`}>
                                    <p className="text-white text-xs font-bold truncate">{m.name}</p>
                                    <p className="text-[10px] truncate" style={{ color: "#94A3B8" }}>{m.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show More Button */}
                {dict.testimonials.mediaReviews.length > 5 && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn-ghost px-10 py-4 text-lg group relative overflow-hidden"
                        >
                            <span className="relative z-10">
                                {showAll
                                    ? (language === 'he' ? 'הצג פחות' : 'Show Less')
                                    : (language === 'he' ? 'הצג עוד המלצות' : 'See More Testimonials')}
                            </span>
                            <div className="absolute inset-0 bg-orange-500/5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                        </button>
                    </div>
                )}

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
