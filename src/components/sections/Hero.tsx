"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, DraftingCompass, Ruler } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp, staggerContainer } from "@/lib/motion";
import GlowButton from "../ui/GlowButton";

export default function Hero() {
  const { content, dir } = useLocale();
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, 36]);
  const blueprintY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const cardRotate = useTransform(scrollYProgress, [0, 0.22], [0, -3]);

  return (
    <section className="site-section relative min-h-[92vh] overflow-hidden bg-[var(--site-bg)] pt-32 sm:pt-36" dir={dir}>
      <motion.div style={{ y: blueprintY }} className="blueprint-grid blueprint-drift absolute inset-0 -z-10 opacity-90" />
      <motion.div style={{ rotate: cardRotate }} className="site-float absolute -right-24 top-24 -z-10 h-72 w-72 border border-[var(--site-border)] bg-[var(--site-card)] sm:h-80 sm:w-80" />
      <motion.div style={{ y: heroY }} className="site-float absolute -left-16 bottom-10 -z-10 h-52 w-52 border border-brand-primary/45 bg-brand-primary/10 [animation-delay:1.4s] sm:h-56 sm:w-56" />

      <motion.div
        style={{ scale: heroScale, y: heroY }}
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mx-auto grid w-[92%] max-w-7xl gap-10 pb-20 sm:pb-24 md:grid-cols-2 md:items-center"
      >
        <div>
          <motion.p variants={fadeUp} className="mb-5 text-xs font-black uppercase tracking-[0.24em] text-brand-secondary sm:text-sm sm:tracking-[0.28em]">
            {content.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={fadeUp} className="max-w-5xl text-4xl font-black leading-[1.12] text-brand-dark sm:text-5xl md:text-6xl">
            {content.hero.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-3xl text-base leading-8 text-brand-gray sm:mt-7 sm:text-lg sm:leading-9">
            {content.hero.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
            <GlowButton label={content.hero.primaryCta} href={content.hero.primaryHref} className="w-full sm:w-auto" />
            <GlowButton label={content.hero.secondaryCta} href={content.hero.secondaryHref} variant="outline" className="w-full sm:w-auto" />
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="site-card relative overflow-hidden p-3 sm:p-5" data-cursor="active">
          <div className="blueprint-grid absolute inset-0 opacity-45" />
          <div className="relative border border-[var(--site-border)] bg-[var(--site-inverse)] p-5 text-[var(--site-inverse-text)] sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-primary sm:text-sm sm:font-black sm:tracking-[0.26em]">{content.company.nameEn}</p>
              <DraftingCompass className="h-8 w-8 text-brand-primary" />
            </div>
            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
              {content.stats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.09 }}
                  className="border border-white/15 bg-white/5 p-4"
                >
                  <div className="mb-4 flex items-center justify-between text-brand-primary">
                    {index % 2 === 0 ? <Building2 className="h-4 w-4" /> : <Ruler className="h-4 w-4" />}
                    <span className="h-px flex-1 bg-brand-primary/35" />
                  </div>
                  <p className="text-3xl font-black text-brand-primary">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--site-inverse-text)] opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
