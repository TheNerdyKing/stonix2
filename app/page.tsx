"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
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
      <About />
      <BentoCards />
      <Services />
      <Methodology />
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
