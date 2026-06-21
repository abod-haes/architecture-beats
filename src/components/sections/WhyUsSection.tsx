"use client";

import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function WhyUsSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={content.texts.whyUsTitle} eyebrow="Why Architecture Beats" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {content.whyUs.map((item) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article key={item.title} variants={fadeUp} className="border border-brand-dark/15 bg-white/75 p-6 transition hover:border-brand-primary">
              <Icon className="mb-4 h-7 w-7 text-brand-secondary" />
              <h3 className="mb-2 text-xl font-black text-brand-dark">{item.title}</h3>
              <p className="leading-7 text-brand-gray">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
