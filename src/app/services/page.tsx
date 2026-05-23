import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";
import { siteData } from "@/data/siteData";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(siteData.nav[2].label, siteData.hero.description, "/services");

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <ServicesSection />
      <CTASection />
    </div>
  );
}
