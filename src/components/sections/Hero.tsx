"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import GlowButton from "../ui/GlowButton";

export default function Hero() {
  const { content, dir } = useLocale();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, 36]);

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#f5f1e8] pt-36" dir={dir}>
      <div className="absolute inset-0 -z-10 opacity-80 blueprint-grid" />
      <div className="absolute -right-24 top-20 -z-10 h-80 w-80 rotate-12 border border-brand-dark/10 bg-white/35" />
      <div className="absolute -left-16 bottom-10 -z-10 h-56 w-56 -rotate-12 border border-brand-primary/45 bg-brand-primary/10" />

      <motion.div
        style={{ scale: heroScale, y: heroY }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto grid w-[92%] max-w-7xl gap-12 pb-24 md:grid-cols-2 md:items-center"
      >
        <div>
          <motion.p variants={fadeUp} className="mb-5 text-sm font-black uppercase tracking-[0.28em] text-brand-secondary">
            {content.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-4xl font-black leading-tight text-brand-dark md:text-6xl">
            {content.hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-9 text-brand-gray">
            {content.hero.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
            <GlowButton label={content.hero.primaryCta} href={content.hero.primaryHref} />
            <GlowButton label={content.hero.secondaryCta} href={content.hero.secondaryHref} variant="outline" />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="border border-brand-dark/15 bg-white/70 p-5">
          <div className="border border-brand-dark/20 bg-brand-dark p-6 text-white">
            <p className="text-sm font-bold uppercase tracking-[0.26em] text-brand-primary">{content.company.nameEn}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {content.stats.slice(0, 4).map((stat) => (
                <div key={stat.label} className="border border-white/15 p-4">
                  <p className="text-3xl font-black text-brand-primary">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm font-bold text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
