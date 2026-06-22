"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  const content = useSiteContent();

  return (
    <section id="about" className="site-section mx-auto grid w-[92%] max-w-7xl gap-10 py-16 sm:py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.22 }} variants={staggerContainer}>
        <SectionTitle title={content.nav[1].label} description={content.about.intro} eyebrow="About" />
        <div className="mt-8 space-y-5 sm:space-y-6">
          {content.about.timeline.map((item) => (
            <motion.div key={item.year} variants={fadeUp} data-cursor="active" className="border-s-2 border-brand-primary bg-[var(--site-card)] p-4 ps-5 backdrop-blur">
              <p className="text-sm font-black text-brand-secondary">{item.year}</p>
              <h3 className="text-xl font-black text-brand-dark">{item.title}</h3>
              <p className="leading-7 text-brand-gray">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.94, rotate: 1 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.7 }}
        className="site-card relative min-h-80 overflow-hidden sm:min-h-96"
        data-cursor="active"
      >
        <div className="blueprint-grid blueprint-drift absolute inset-0 opacity-70" />
        <div className="absolute inset-6 border border-[var(--site-border)] sm:inset-8" />
        <div className="absolute inset-12 border border-brand-primary/70 sm:inset-16" />
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 right-6 max-w-xs border border-[var(--site-border)] bg-[var(--site-bg)]/90 p-5 backdrop-blur sm:bottom-8 sm:right-8"
        >
          <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">Design to Delivery</p>
          <p className="mt-3 text-2xl font-black text-brand-dark">{content.company.nameEn}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
