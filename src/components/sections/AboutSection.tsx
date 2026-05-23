"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  return (
    <section className="mx-auto grid w-[92%] max-w-7xl gap-10 py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
        <SectionTitle title={siteData.nav[1].label} description={siteData.about.intro} />
        <div className="mt-8 space-y-6">
          {siteData.about.timeline.map((item) => (
            <motion.div key={item.year} variants={fadeUp} className="border-s-2 border-brand-primary/45 ps-4">
              <p className="text-sm text-brand-primary">{item.year}</p>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-zinc-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative min-h-96 overflow-hidden border border-brand-primary/30 bg-zinc-900"
      >
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(166,214,50,0.28),transparent_40%),linear-gradient(310deg,rgba(125,167,22,0.22),transparent_60%)]" />
        <div className="absolute inset-10 border border-zinc-600/80" />
        <div className="absolute inset-20 border border-brand-primary/60" />
      </motion.div>
    </section>
  );
}
