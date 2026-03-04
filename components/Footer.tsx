"use client";

import { useLanguage } from "./LanguageProvider";
import { getDictionary } from "@/lib/i18n";

export default function Footer() {
  const { language, dir } = useLanguage();
  const dict = getDictionary(language);

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#05060A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className={`flex flex-col ${dir === "rtl" ? "items-end text-right" : "items-start text-left"}`}>
          <div className="text-2xl font-black text-white mb-2">STONIX<span className="text-orange-500">2</span></div>
          <p className="text-sm" style={{ color: "#475569" }}>{dict.footer.rights} &copy; {new Date().getFullYear()}</p>
        </div>

        <div className={`flex gap-8 text-sm font-medium ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{dict.footer.privacy}</a>
          <a href="#" className="text-slate-400 hover:text-white transition-colors">{dict.footer.terms}</a>
        </div>
      </div>
    </footer>
  );
}
