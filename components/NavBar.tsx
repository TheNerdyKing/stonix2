"use client";

import { useState } from "react";
import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const { language, dir } = useLanguage();
  const dict = getDictionary(language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fallbacks in case dictionary is missing some translation keys initially.
  // Ideally, these come from dict.nav.*
  const links = [
    { href: "#services", label: dict?.nav?.services || "Services" },
    { href: "#results", label: dict?.nav?.results || "Results" },
    { href: "#testimonials", label: dict?.nav?.testimonials || "Testimonials" },
    { href: "#contact", label: dict?.nav?.contact || "Contact" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className={`flex items-center justify-between px-6 md:px-12 py-4 bg-white/[0.03] backdrop-blur-[12px] border-b border-white/[0.08] ${dir === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
        <div className="flex items-center">
          <div className="relative bg-white rounded-xl px-2 py-1 shadow-md">
            <Image
              src="/assets/stonix-logo.jpg"
              alt="STONIX – Results, Not Marketing"
              width={120}
              height={52}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 ${dir === "ltr" ? "flex-row" : "flex-row-reverse"}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: "#94A3B8" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F8FAFC")}
              onMouseLeave={e => (e.currentTarget.style.color = "#94A3B8")}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden md:flex">
          <button className="btn-primary px-5 py-2.5 text-sm">
            {dict?.nav?.call || "Book Call"}
          </button>
        </a>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white hover:text-orange-500 transition-colors focus:outline-none p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute left-0 w-full bg-[#0E1118]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl z-40 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col px-6 py-6 gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-bold text-white transition-colors hover:text-orange-500 ${dir === "ltr" ? "text-left" : "text-right"}`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className={`mt-4 ${dir === "ltr" ? "text-left" : "text-right"}`}
          >
            <button className="btn-primary w-full py-4 text-base shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              {dict?.nav?.call || "Book Call"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}