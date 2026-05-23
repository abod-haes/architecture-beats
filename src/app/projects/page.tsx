import type { Metadata } from "next";
import CTASection from "@/components/sections/CTASection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteData.nav[3].label} | ${siteData.company.nameEn}`,
  description: siteData.hero.description,
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsSection />
      <CTASection />
    </div>
  );
}
