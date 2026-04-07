"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import BentoCards from "@/components/BentoCards";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Results from "@/components/Results";
import MediaTestimonials from "@/components/MediaTestimonials";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <BentoCards />
      <Services />
      <Methodology />
      <Results />
      <MediaTestimonials />
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
