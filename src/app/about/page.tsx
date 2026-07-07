import React from "react";
import AboutHero from "@/components/about/hero";
import AboutValues from "@/components/about/values";

export default function AboutPage() {
  return (
    <div className="bg-[#f7f9f6] min-h-screen font-sans">
      <AboutHero />
      <AboutValues />
    </div>
  );
}
