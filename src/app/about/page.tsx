import React from "react";
import AboutHero from "@/components/about/about-hero";
import AboutVision from "@/components/about/about-vision";
import AboutTeam from "@/components/about/about-team";
import AboutTicker from "@/components/about/about-ticker";
import AboutTestimonials from "@/components/about/about-testimonials";
import AboutAppBanner from "@/components/about/about-app-banner";
import AboutFaq from "@/components/about/about-faq";

export default function AboutPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <AboutHero />
      <AboutVision />
      <AboutTeam />
      <AboutTicker />
      <AboutTestimonials />
      <AboutAppBanner />
      <AboutFaq />
    </div>
  );
}
