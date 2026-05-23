import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteData.nav[2].label} | ${siteData.company.nameEn}`,
  description: siteData.hero.description,
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
      <CTASection />
    </div>
  );
}
