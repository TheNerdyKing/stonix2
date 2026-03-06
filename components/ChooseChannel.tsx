"use client";

import { useEffect, useRef } from "react";


import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/gsap";
import { 
  Search, 
  Target, 
  Palette, 
  Settings, 
  Users, 
  Zap, 
  Camera, 
  Image, 
  Video, 
  PenTool, 
  LineChart, 
  Package 
} from "lucide-react";



export default function ChooseChannel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion()) return;

    gsap.fromTo(
      headlineRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const cards = cardsRef.current?.querySelectorAll(".feature-card");
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[60vh] bg-[#050505] py-32 overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-3/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
              Services &amp; Specializations
            </p>
            <h2
              ref={headlineRef}
              className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]"
            >
              Full-Stack <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Marketing.</span>
            </h2>
          </div>
          <p className="text-white/30 text-lg md:text-xl font-light max-w-sm italic">
            Everything you need to build a winning brand and acquire more customers.
          </p>
        </div>

        <div ref={cardsRef} className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { title: "Social Media Management", desc: "Consistent, professional management of your digital channels.", icon: Users },
            { title: "Meta Paid Ads", desc: "Precision campaigns on Facebook and Instagram.", icon: Target },
            { title: "Google Paid Ads", desc: "Capture intent-driven searches from people looking for you.", icon: Search },
            { title: "AI Integration", desc: "Leverage AI tooling to streamline processes and creative workflows.", icon: Zap },
            { title: "Photo Studio", desc: "Brand and product photography at the highest standard.", icon: Camera },
            { title: "On-Location Shoots", desc: "Impressive photo productions in hand-picked locations.", icon: Image },
            { title: "Video Editing", desc: "Videos that stop the scroll and convert viewers.", icon: Video },
            { title: "Copywriting", desc: "Persuasive marketing copy that moves customers to act.", icon: PenTool },
            { title: "Strategic Consulting", desc: "Hands-on advisory to break through your next growth ceiling.", icon: LineChart },
            { title: "Full Marketing Bundle", desc: "A complete, end-to-end solution across all marketing channels.", icon: Package },
          ].map((item, i) => (
            <div
              key={i}
              className="feature-card group p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-orange-500/20 hover:bg-orange-500/[0.03] transition-all duration-700"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/10 transition-all duration-700 border border-white/5">
                <item.icon className="w-5 h-5 text-white group-hover:text-orange-500 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h4>
              <p className="text-white/40 text-sm leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
