"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import BentoCards from "@/components/BentoCards";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoCards />
      <Services />
      <Results />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Contact />
      <Footer />
      <LanguageSwitcher />
    </main>
  );
}
