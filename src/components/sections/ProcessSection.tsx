"use client";

import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProcessSection() {
  const content = useSiteContent();

  return (
    <section className="site-section mx-auto w-[92%] max-w-7xl py-16 sm:py-20">
      <SectionTitle title={content.texts.processTitle} eyebrow="Process" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-5 md:gap-5"
      >
        {content.process.map((item, idx) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6, rotate: idx % 2 === 0 ? 0.7 : -0.7 }}
              data-cursor="active"
              className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur"
            >
              <div className="absolute -top-8 end-4 text-7xl font-black text-brand-primary/10">0{idx + 1}</div>
              <span className="relative mb-4 inline-block text-sm font-black text-brand-secondary">0{idx + 1}</span>
              <Icon className="relative mb-3 h-7 w-7 text-brand-secondary" />
              <h3 className="relative text-lg font-black text-brand-dark">{item.title}</h3>
              <p className="relative mt-2 text-sm leading-7 text-brand-gray">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
