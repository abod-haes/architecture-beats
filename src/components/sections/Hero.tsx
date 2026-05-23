"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import { fadeUp, staggerContainer } from "@/lib/motion";
import GlowButton from "../ui/GlowButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(166,214,50,0.28),transparent_40%),linear-gradient(160deg,#101010_20%,#232323_45%,#151515_100%)]" />
      <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rotate-12 border border-brand-primary/35" />
      <div className="absolute -left-16 bottom-10 -z-10 h-56 w-56 -rotate-12 border border-brand-primary/25" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto w-[92%] max-w-7xl pb-24"
      >
        <motion.p variants={fadeUp} className="mb-5 text-sm tracking-[0.2em] text-brand-primary">
          {siteData.company.nameEn}
        </motion.p>
        <motion.h1 variants={fadeUp} className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl">
          {siteData.hero.title}
        </motion.h1>
        <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-9 text-zinc-300">
          {siteData.hero.description}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <GlowButton label={siteData.hero.primaryCta} href={siteData.hero.primaryHref} />
          <GlowButton label={siteData.hero.secondaryCta} href={siteData.hero.secondaryHref} variant="outline" />
        </motion.div>
      </motion.div>
    </section>
  );
}
