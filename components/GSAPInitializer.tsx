"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export function GSAPInitializer() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
            // Force a refresh after a small delay to ensure initial layout is captured
            const timer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    return null;
}
