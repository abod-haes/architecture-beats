"use client";

import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProcessSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={content.texts.processTitle} eyebrow="Process" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 md:grid-cols-5"
      >
        {content.process.map((item, idx) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article key={item.title} variants={fadeUp} className="border border-brand-dark/15 bg-white/80 p-5">
              <span className="mb-4 inline-block text-sm font-black text-brand-secondary">0{idx + 1}</span>
              <Icon className="mb-3 h-7 w-7 text-brand-secondary" />
              <h3 className="text-lg font-black text-brand-dark">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-brand-gray">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
