import React from "react";
import TermsHero from "@/components/terms-and-conditions/hero";
import TermsContent from "@/components/terms-and-conditions/content";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#f7f9f6] min-h-screen font-sans pb-20">
      <TermsHero />
      <TermsContent />
    </div>
  );
}
