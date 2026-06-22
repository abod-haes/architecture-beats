"use client";

import { motion } from "framer-motion";
import GlowButton from "../ui/GlowButton";
import { useSiteContent } from "@/context/LocaleContext";

export default function CTASection() {
  const content = useSiteContent();

  return (
    <section className="site-section mx-auto w-[92%] max-w-7xl py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.65 }}
        className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-inverse)] p-7 text-center text-[var(--site-inverse-text)] sm:p-10"
      >
        <div className="blueprint-grid absolute inset-0 opacity-25" />
        <div className="relative">
          <h2 className="text-3xl font-black md:text-4xl">{content.cta.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 opacity-80">{content.cta.description}</p>
          <div className="mt-8">
            <GlowButton label={content.cta.button} href="/contact" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
