"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { useRef } from "react";
import { useLocale } from "@/context/LocaleContext";
import { projectDetailLabels, projectSlugs } from "@/data/projectDetails";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

export default function HomeProjectsSlider() {
  const { content, locale, dir } = useLocale();
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const isArabic = locale === "ar";
  const labels = {
    all: isArabic ? "مشاهدة الكل" : "View All",
    previous: isArabic ? "السابق" : "Previous",
    next: isArabic ? "التالي" : "Next",
  };

  const scrollSlider = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const amount = Math.min(slider.clientWidth * 0.86, 420);
    const signedAmount = direction === "next" ? amount : -amount;
    slider.scrollBy({ left: isArabic ? -signedAmount : signedAmount, behavior: "smooth" });
  };

  return (
    <section id="projects" ref={sectionRef} className="site-section section-panel relative overflow-hidden py-16 sm:py-20" dir={dir}>
      <motion.div style={{ y }} className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle title={content.texts.projectsTitle} description={content.texts.projectsDescription} eyebrow="Portfolio" />
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-1 shadow-[0_14px_34px_var(--site-shadow)] backdrop-blur">
              <button
                type="button"
                onClick={() => scrollSlider("prev")}
                data-cursor="active"
                className="inline-flex h-11 w-11 items-center justify-center text-brand-dark transition hover:bg-brand-primary hover:text-[#232323]"
                aria-label={labels.previous}
              >
                {isArabic ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
              </button>
              <button
                type="button"
                onClick={() => scrollSlider("next")}
                data-cursor="active"
                className="inline-flex h-11 w-11 items-center justify-center text-brand-dark transition hover:bg-brand-primary hover:text-[#232323]"
                aria-label={labels.next}
              >
                {isArabic ? <ArrowLeft className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
              </button>
            </div>
            <Link
              href="/projects"
              data-cursor="active"
              className="inline-flex h-12 items-center gap-2 border border-brand-primary bg-brand-primary px-5 text-sm font-black text-[#232323] shadow-[0_14px_34px_var(--site-shadow)] transition hover:bg-brand-secondary"
            >
              <Grid2X2 className="h-4 w-4" />
              {labels.all}
            </Link>
          </div>
        </div>

        <motion.div
          ref={sliderRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          variants={staggerContainer}
          className="slider-scroll mt-8 flex snap-x snap-mandatory gap-4 overflow-y-hidden overflow-x-auto scroll-smooth pb-4 sm:mt-10 sm:gap-5"
        >
          {content.projects.map((project, index) => (
            <div key={project.title} className="w-[86%] shrink-0 snap-start sm:w-[26rem] lg:w-[28rem]">
              <ProjectCard
                project={project}
                labels={content.texts.projectLabels}
                slug={projectSlugs[index]}
                detailsLabel={projectDetailLabels[locale].detailsCta}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
