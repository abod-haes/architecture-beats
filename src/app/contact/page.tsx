import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: `${siteData.nav[4].label} | ${siteData.company.nameEn}`,
  description: siteData.hero.description,
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <ContactSection />
    </div>
  );
}
