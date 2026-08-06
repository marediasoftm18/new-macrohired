import React from "react";
import ServicesHero from "@/components/services/services-hero";
import ServicesGrid from "@/components/services/services-grid";
import ServicesProcess from "@/components/services/services-process";
import ServicesTicker from "@/components/services/services-ticker";
import ServicesContact from "@/components/services/services-contact";

export default function ServicesPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <ServicesTicker />
      <ServicesContact />
    </div>
  );
}
