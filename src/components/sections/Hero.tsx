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
        className="mx-auto grid w-[92%] max-w-7xl gap-8 pb-20 sm:gap-10 sm:pb-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
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
          <div className="blueprint-grid absolute inset-0 opacity-35" />
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [0, 0.7, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)]"
          >
            <img
              src="/hero-construction.svg"
              alt={content.hero.title}
              className="h-[360px] w-full object-cover sm:h-[460px] lg:h-[540px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--site-inverse)] via-transparent to-transparent opacity-70" />
            <div className="absolute start-4 top-4 flex items-center gap-3 border border-[var(--site-inverse-border)] bg-[var(--site-inverse)] px-4 py-3 text-[var(--site-inverse-text)] backdrop-blur sm:start-6 sm:top-6">
              <DraftingCompass className="h-6 w-6 text-brand-primary" />
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-primary sm:text-sm">{content.company.nameEn}</p>
            </div>
            <div className="absolute inset-x-3 bottom-3 grid gap-3 sm:inset-x-5 sm:bottom-5 sm:grid-cols-4">
              {content.stats.slice(0, 4).map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 + index * 0.09 }}
                  className="border border-[var(--site-inverse-border)] bg-[var(--site-inverse-muted)] p-3 text-[var(--site-inverse-text)] backdrop-blur sm:p-4"
                >
                  <div className="mb-3 flex items-center justify-between text-brand-primary">
                    {index % 2 === 0 ? <Building2 className="h-4 w-4" /> : <Ruler className="h-4 w-4" />}
                    <span className="h-px flex-1 bg-brand-primary/35" />
                  </div>
                  <p className="text-2xl font-black text-brand-primary sm:text-3xl">
                    {stat.value}
                    {stat.suffix}
                  </p>
                  <p className="mt-1 text-xs font-bold text-[var(--site-inverse-text)] opacity-90 sm:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
