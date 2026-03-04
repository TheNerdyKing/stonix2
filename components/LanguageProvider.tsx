"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "he" | "en";

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    dir: "rtl" | "ltr";
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("he");

    useEffect(() => {
        // Try to get saved language on mount
        const saved = localStorage.getItem("language") as Language;
        if (saved === "he" || saved === "en") {
            setLanguage(saved);
        }
    }, []);

    useEffect(() => {
        // Save language and update body dir and lang attributes
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
        document.documentElement.dir = language === "he" ? "rtl" : "ltr";
    }, [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, dir: language === "he" ? "rtl" : "ltr" }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
