import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { siteData } from "@/data/siteData";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata(siteData.nav[4].label, siteData.hero.description, "/contact");

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
