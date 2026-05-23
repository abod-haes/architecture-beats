import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Hero from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import { siteData } from "@/data/siteData";

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ArchitecturalService",
    name: siteData.company.nameEn,
    alternateName: siteData.company.nameAr,
    description: siteData.seo.description,
    email: siteData.company.email,
    telephone: siteData.company.mobile,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.company.address,
      addressLocality: "حماة",
      addressCountry: "SY",
    },
    url: siteData.seo.siteUrl,
    areaServed: "SY",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <WhyUsSection />
      <ProcessSection />
      <ProjectsSection />
      <StatsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
