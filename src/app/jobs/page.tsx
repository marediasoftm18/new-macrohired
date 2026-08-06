import React from "react";
import JobsHero from "@/components/jobs/jobs-hero";
import JobsGrid from "@/components/jobs/jobs-grid";

export const metadata = {
  title: "Jobs - Macrohired",
  description: "Browse available job opportunities and find your next role.",
};

export default function JobsPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <JobsHero />
      <JobsGrid />
    </div>
  );
}
