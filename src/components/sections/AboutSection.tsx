"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function AboutSection() {
  const content = useSiteContent();

  return (
    <section id="about" className="site-section section-panel py-16 sm:py-20">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.22 }} variants={staggerContainer}>
          <SectionTitle title={content.nav[1].label} description={content.about.intro} eyebrow="About" />
          <div className="mt-8 space-y-5 sm:space-y-6">
            {content.about.timeline.map((item) => (
              <motion.div key={item.year} variants={fadeUp} data-cursor="active" className="border-s-2 border-brand-primary bg-[var(--site-card)] p-4 ps-5 shadow-[0_14px_34px_var(--site-shadow)] backdrop-blur">
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
          className="site-card relative min-h-80 overflow-hidden p-3 sm:min-h-96 sm:p-5"
          data-cursor="active"
        >
          <div className="blueprint-grid blueprint-drift absolute inset-0 opacity-45" />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, -1.2, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="brand-media-frame relative"
          >
            <Image src="/about-interior.jpg" alt={content.about.intro} width={1600} height={1067} className="h-[360px] w-full object-cover sm:h-[470px]" />
            <div className="absolute bottom-4 end-4 z-10 max-w-xs border border-[var(--site-inverse-border)] bg-[var(--site-inverse-muted)] p-5 text-[var(--site-inverse-text)] backdrop-blur sm:bottom-6 sm:end-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-primary">Design to Delivery</p>
              <p className="mt-3 text-2xl font-black text-[var(--site-inverse-text)]">{content.company.nameEn}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
