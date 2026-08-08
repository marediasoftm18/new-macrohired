import React from "react";
import BlogHero from "@/components/blog/blog-hero";
import BlogContent from "@/components/blog/blog-content";

export const metadata = {
  title: "Blog - Macrohired",
  description: "Explore the latest insights, news, and guides on HR consulting, workforce planning, employee engagement, and recruitment strategy.",
};

export default function BlogPage() {
  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <BlogHero />
      <BlogContent />
    </div>
  );
}
