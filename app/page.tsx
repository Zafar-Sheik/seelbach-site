// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Destinations from "./components/Destinations";
import About from "./components/About";
import CTA from "./components/CTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Iptgsa from "./components/Iptgsa";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Hero />
      <Features />
      <Destinations />
      <About />
      <Testimonials />
      <Iptgsa />
      <CTA />
      <ContactSection />
    </div>
  );
}
