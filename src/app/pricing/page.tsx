import React from "react";
import PricingHero from "@/components/pricing/pricing-hero";
import PricingPlans from "@/components/pricing/pricing-plans";
import PricingTicker from "@/components/pricing/pricing-ticker";
import PricingFaq from "@/components/pricing/pricing-faq";
import PricingContact from "@/components/pricing/pricing-contact";

export const metadata = {
  title: "Pricing Plan - Macrohired",
  description: "Affordable HR and recruitment pricing plans for your team.",
};

export default function PricingPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <PricingHero />
      <PricingPlans />
      <PricingTicker />
      <PricingFaq />
      <PricingContact />
    </div>
  );
}
