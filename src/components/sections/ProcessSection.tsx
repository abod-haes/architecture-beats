"use client";

import { siteData } from "@/data/siteData";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProcessSection() {
  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={siteData.texts.processTitle} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 md:grid-cols-5"
      >
        {siteData.process.map((item, idx) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article key={item.title} variants={fadeUp} className="relative border border-brand-primary/25 bg-zinc-900 p-5">
              <span className="mb-4 inline-block text-sm text-brand-primary">0{idx + 1}</span>
              <Icon className="mb-3 h-7 w-7 text-brand-primary" />
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
