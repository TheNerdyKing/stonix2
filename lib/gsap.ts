import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register plugins client-side (SSR guard for Vercel)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initGSAP() {
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ limitCallbacks: true });
}

export function refreshScrollTrigger() {
  if (typeof window === "undefined") return;
  // Use a slight timeout so DOM renders first
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 100);
}
