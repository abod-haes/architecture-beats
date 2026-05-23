import GlowButton from "../ui/GlowButton";
import { siteData } from "@/data/siteData";

export default function CTASection() {
  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <div className="border border-brand-primary/35 bg-[linear-gradient(120deg,rgba(166,214,50,0.16),rgba(25,25,25,0.9))] p-10 text-center">
        <h2 className="text-3xl font-black text-white md:text-4xl">{siteData.cta.title}</h2>
        <div className="mt-8">
          <GlowButton label={siteData.cta.button} href={`https://wa.me/${siteData.company.whatsapp}`} />
        </div>
      </div>
    </section>
  );
}
