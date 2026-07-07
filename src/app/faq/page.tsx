import React from "react";
import FAQHero from "@/components/faq/hero";
import FAQAccordion from "@/components/faq/accordion";

export default function FAQPage() {
  return (
    <div className="bg-[#f7f9f6] min-h-screen font-sans pb-20">
      <FAQHero />
      <FAQAccordion />
    </div>
  );
}
