import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { siteData } from "@/data/siteData";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(siteData.nav[3].label, siteData.hero.description, "/projects");

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsSection />
      <CTASection />
    </div>
  );
}
