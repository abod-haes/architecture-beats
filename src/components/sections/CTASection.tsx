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
        className="relative overflow-hidden border border-[var(--cta-border)] bg-[linear-gradient(135deg,var(--cta-bg)_0%,var(--cta-bg-soft)_58%,var(--cta-bg)_100%)] px-6 py-12 text-center text-[var(--cta-text)] shadow-[0_28px_90px_var(--cta-glow)] sm:px-10 sm:py-14"
      >
        <div className="blueprint-grid absolute inset-0 opacity-20" />
        <div className="absolute -start-20 -top-20 h-56 w-56 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute -bottom-24 -end-24 h-64 w-64 rounded-full bg-brand-primary/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mx-auto mb-4 w-fit border border-[var(--cta-border)] bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.32em] text-brand-primary">
            Architecture Beats
          </p>
          <h2 className="text-3xl font-black leading-tight md:text-5xl">
            {content.cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--cta-muted)] sm:text-lg">
            {content.cta.description}
          </p>
          <div className="mt-8 flex justify-center">
            <GlowButton label={content.cta.button} href="/contact" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
