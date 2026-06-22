import { notFound } from "next/navigation";
import { projectSlugs } from "@/data/projectDetails";
import ProjectDetailPageClient from "./ProjectDetailPageClient";

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!projectSlugs.includes(slug as (typeof projectSlugs)[number])) {
    notFound();
  }

  return <ProjectDetailPageClient slug={slug} />;
}
