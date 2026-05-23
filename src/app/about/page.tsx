import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteData.nav[1].label} | ${siteData.company.nameEn}`,
  description: siteData.about.intro,
};

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
