"use client";

import { useLanguage } from "./LanguageProvider";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === "he" ? "en" : "he")}
            className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all bg-[#12151F] border border-white/10 shadow-2xl hover:bg-white/5 hover:border-orange-500/50 group"
            title={language === "he" ? "Switch to English" : "החלף לעברית"}
        >
            <Globe className="w-5 h-5 text-slate-400 group-hover:text-orange-500 transition-colors" />
            <span className="absolute -top-8 bg-[#0E1118] text-white/70 text-xs px-2 py-1 rounded border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                {language === "he" ? "English" : "עברית"}
            </span>
        </button>
    );
}
