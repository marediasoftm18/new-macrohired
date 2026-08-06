import React from "react";
import PortfolioHero from "@/components/portfolio/portfolio-hero";
import PortfolioGrid from "@/components/portfolio/portfolio-grid";

export const metadata = {
  title: "Portfolios - Macrohired",
  description: "Explore our portfolio of successful HR and staffing projects.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <PortfolioHero />
      <PortfolioGrid />
    </div>
  );
}
