import React from "react";
import PrivacyHero from "@/components/privacy-policy/hero";
import PrivacyContent from "@/components/privacy-policy/content";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#f7f9f6] min-h-screen font-sans pb-20">
      <PrivacyHero />
      <PrivacyContent />
    </div>
  );
}
