"use client";

import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function WhyUsSection() {
  const content = useSiteContent();

  return (
    <section className="site-section mx-auto w-[92%] max-w-7xl py-16 sm:py-20">
      <SectionTitle title={content.texts.whyUsTitle} eyebrow="Why Architecture Beats" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
      >
        {content.whyUs.map((item) => {
          const Icon = item.icon as ComponentType<{ className?: string }>;
          return (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              data-cursor="active"
              className="border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur transition hover:border-brand-primary sm:p-6"
            >
              <div className="mb-4 grid h-11 w-11 place-items-center border border-brand-primary/45 bg-brand-primary/15">
                <Icon className="h-6 w-6 text-brand-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-black text-brand-dark">{item.title}</h3>
              <p className="leading-7 text-brand-gray">{item.description}</p>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
