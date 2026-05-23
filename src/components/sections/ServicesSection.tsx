"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

export default function ServicesSection() {
  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={siteData.nav[2].label} description={siteData.hero.description} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {siteData.services.map((service) => (
          <ServiceCard key={service.title} item={service} />
        ))}
      </motion.div>
    </section>
  );
}
