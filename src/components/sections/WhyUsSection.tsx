"use client";

import { siteData } from "@/data/siteData";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function WhyUsSection() {
  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={siteData.texts.whyUsTitle} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {siteData.whyUs.map((item) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article key={item.title} variants={fadeUp} className="border border-zinc-700 bg-zinc-900/60 p-6">
              <Icon className="mb-4 h-7 w-7 text-brand-primary" />
              <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-300">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
