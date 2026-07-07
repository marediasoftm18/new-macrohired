import React from "react";
import TeamHero from "@/components/team/hero";
import TeamMembers from "@/components/team/members";

export default function TeamPage() {
  return (
    <div className="bg-[#f7f9f6] min-h-screen font-sans pb-20">
      <TeamHero />
      <TeamMembers />
    </div>
  );
}
