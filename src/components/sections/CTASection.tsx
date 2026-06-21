"use client";

import GlowButton from "../ui/GlowButton";
import { useSiteContent } from "@/context/LocaleContext";

export default function CTASection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <div className="border border-brand-dark/15 bg-brand-dark p-10 text-center text-white">
        <h2 className="text-3xl font-black md:text-4xl">{content.cta.title}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-white">{content.cta.description}</p>
        <div className="mt-8">
          <GlowButton label={content.cta.button} href="/contact" />
        </div>
      </div>
    </section>
  );
}
