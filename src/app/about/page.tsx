import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { siteData } from "@/data/siteData";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(siteData.nav[1].label, siteData.about.intro, "/about");

export default function AboutPage() {
  return (
    <div className="pt-24">
      <AboutSection />
      <WhyUsSection />
      <ProcessSection />
      <StatsSection />
    </div>
  );
}
