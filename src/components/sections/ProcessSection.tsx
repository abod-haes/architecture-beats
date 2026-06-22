"use client";

import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProcessSection() {
  const content = useSiteContent();

  return (
    <section className="site-section section-surface py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-7xl">
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
                className="group relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-5 pt-10 backdrop-blur transition-colors duration-300 hover:border-brand-primary sm:p-6 sm:pt-11"
              >
                <div className="pointer-events-none absolute end-4 top-3 text-6xl font-black leading-none text-brand-secondary opacity-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-20 sm:end-5 sm:top-4 sm:text-7xl">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="relative mb-4 h-px w-14 bg-brand-primary" />
                <Icon className="relative mb-4 h-7 w-7 text-brand-secondary" />
                <h3 className="relative text-lg font-black text-brand-dark">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-7 text-brand-gray">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}