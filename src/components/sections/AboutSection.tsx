"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto grid w-[92%] max-w-7xl gap-10 py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.22 }} variants={staggerContainer}>
        <SectionTitle title={content.nav[1].label} description={content.about.intro} eyebrow="About" />
        <div className="mt-8 space-y-6">
          {content.about.timeline.map((item) => (
            <motion.div key={item.year} variants={fadeUp} className="border-s-2 border-brand-primary ps-4">
              <p className="text-sm font-black text-brand-secondary">{item.year}</p>
              <h3 className="text-xl font-black text-brand-dark">{item.title}</h3>
              <p className="text-brand-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="relative min-h-96 overflow-hidden border border-brand-dark/15 bg-white/75"
      >
        <div className="absolute inset-0 blueprint-grid opacity-70" />
        <div className="absolute inset-8 border border-brand-dark/20" />
        <div className="absolute inset-16 border border-brand-primary/70" />
        <div className="absolute bottom-8 right-8 max-w-xs border border-brand-dark/15 bg-[#f5f1e8]/90 p-5">
          <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">Design to Delivery</p>
          <p className="mt-3 text-2xl font-black text-brand-dark">{content.company.nameEn}</p>
        </div>
      </motion.div>
    </section>
  );
}
