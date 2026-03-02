"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { href: "#services", label: "שירותים" },
  { href: "#results", label: "תוצאות" },
  { href: "#testimonials", label: "המלצות" },
  { href: "#pricing", label: "תמחור" },
  { href: "#faq", label: "שאלות" },
  { href: "#contact", label: "צרו קשר" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#05060A", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-end text-right">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-black text-xl text-white">STONIX</span>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#F97316" }}>
                <span className="text-black font-black text-sm">SX</span>
              </div>
            </div>
            <p className="text-sm max-w-xs text-right leading-relaxed" style={{ color: "#475569" }}>
              שיווק ביצועים מהדור הבא. תוצאות מדידות לכל עסק.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="mailto:a.s.mediagroup2023@gmail.com"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <Mail className="w-4 h-4" style={{ color: "#94A3B8" }} />
              </a>
              <a href="tel:0552664456"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <Phone className="w-4 h-4" style={{ color: "#94A3B8" }} />
              </a>
              <a href="https://wa.me/972552664456" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: "rgba(255,255,255,0.05)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(249,115,22,0.15)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
                <MessageCircle className="w-4 h-4" style={{ color: "#94A3B8" }} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}
                className="text-sm text-right font-medium transition-colors"
                style={{ color: "#475569" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F97316")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA pill */}
          <div className="flex flex-col items-end gap-4">
            <p className="text-sm text-right" style={{ color: "#94A3B8" }}>מוכנים לצמוח?</p>
            <a href="https://wa.me/972552664456" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary text-sm px-6 py-3">
                שיחה חינם
              </button>
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#22c55e" }} />
            <span className="text-xs uppercase tracking-widest font-bold" style={{ color: "#475569" }}>מערכות פעילות</span>
          </div>
          <p className="text-xs uppercase tracking-widest font-bold" style={{ color: "#475569" }}>
            ©2025 STONIX. כל הזכויות שמורות.
          </p>
          <div className="flex gap-6">
            {["מדיניות פרטיות", "תנאי שימוש"].map((l) => (
              <a key={l} href="#" className="text-xs transition-colors" style={{ color: "#475569" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#94A3B8")}
                onMouseLeave={e => (e.currentTarget.style.color = "#475569")}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
