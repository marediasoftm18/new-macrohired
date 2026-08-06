import React from "react";
import { notFound } from "next/navigation";
import JobDetailHero from "@/components/jobs/job-detail-hero";
import JobDetailContent, { JobDetail } from "@/components/jobs/job-detail-content";
import jobsData from "@/components/jobs/jobs-data.json";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const jobId = parseInt(id, 10);
  const job = jobsData.find((j) => j.id === jobId);

  if (!job) {
    return {
      title: "Job Not Found - Macrohired",
    };
  }

  return {
    title: `${job.title} - Macrohired`,
    description: job.descriptionParagraphs[0],
  };
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const jobId = parseInt(id, 10);
  const job = jobsData.find((j) => j.id === jobId) as JobDetail | undefined;

  if (!job) {
    // If invalid job ID, fallback to job 1 or 404
    const fallbackJob = jobsData[0] as JobDetail;
    return (
      <div className="bg-[#F6F5F2] min-h-screen font-sans">
        <JobDetailHero title={fallbackJob.title} />
        <JobDetailContent job={fallbackJob} />
      </div>
    );
  }

  return (
    <div className="bg-[#F6F5F2] min-h-screen font-sans">
      <JobDetailHero title={job.title} />
      <JobDetailContent job={job} />
    </div>
  );
}
