"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

export default function ServicesSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={content.nav[2].label} description={content.hero.description} eyebrow="Services" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {content.services.map((service) => (
          <ServiceCard key={service.title} item={service} />
        ))}
      </motion.div>
    </section>
  );
}
