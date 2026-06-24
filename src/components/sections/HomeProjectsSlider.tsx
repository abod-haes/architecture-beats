"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { PointerEvent } from "react";
import { useLocale } from "@/context/LocaleContext";
import { projectDetailLabels, projectSlugs } from "@/data/projectDetails";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

const AUTO_SCROLL_DELAY = 3600;
const DRAG_SPEED = 1.12;

export default function HomeProjectsSlider() {
  const { content, locale, dir } = useLocale();
  const sectionRef = useRef<HTMLElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPausedRef = useRef(false);
  const didDragRef = useRef(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const isArabic = locale === "ar";
  const labels = {
    all: isArabic ? "مشاهدة الكل" : "View All",
    previous: isArabic ? "السابق" : "Previous",
    next: isArabic ? "التالي" : "Next",
  };

  const getScrollAmount = useCallback((slider: HTMLDivElement) => Math.min(slider.clientWidth * 0.82, 460), []);

  const scrollSlider = useCallback(
    (direction: "prev" | "next") => {
      const slider = sliderRef.current;
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const amount = getScrollAmount(slider);
      const nextLeft = direction === "next" ? slider.scrollLeft + amount : slider.scrollLeft - amount;

      slider.scrollTo({
        left: Math.max(0, Math.min(maxScroll, nextLeft)),
        behavior: "smooth",
      });
    },
    [getScrollAmount]
  );

  const autoScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider || autoPausedRef.current) return;

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (maxScroll <= 0) return;

    if (slider.scrollLeft >= maxScroll - 8) {
      slider.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    slider.scrollBy({ left: getScrollAmount(slider), behavior: "smooth" });
  }, [getScrollAmount]);

  useEffect(() => {
    const intervalId = window.setInterval(autoScroll, AUTO_SCROLL_DELAY);
    return () => window.clearInterval(intervalId);
  }, [autoScroll]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;

    const slider = sliderRef.current;
    if (!slider) return;

    autoPausedRef.current = true;
    didDragRef.current = false;
    dragRef.current = {
      isDown: true,
      startX: event.clientX,
      scrollLeft: slider.scrollLeft,
    };
    slider.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const slider = sliderRef.current;
    const drag = dragRef.current;
    if (!slider || !drag.isDown) return;

    event.preventDefault();
    const walk = (event.clientX - drag.startX) * DRAG_SPEED;
    slider.scrollLeft = drag.scrollLeft - walk;

    if (Math.abs(walk) > 6) {
      didDragRef.current = true;
    }
  };

  const stopDrag = () => {
    dragRef.current.isDown = false;
  };

  const handleSliderClick = (event: PointerEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return;

    event.preventDefault();
    event.stopPropagation();
    window.setTimeout(() => {
      didDragRef.current = false;
    }, 40);
  };

  return (
    <section id="projects" ref={sectionRef} className="site-section section-panel relative overflow-hidden py-16 sm:py-20" dir={dir}>
      <motion.div style={{ y }} className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl min-w-0">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle title={content.texts.projectsTitle} description={content.texts.projectsDescription} eyebrow="Portfolio" />
          <Link
            href="/projects"
            data-cursor="active"
            className="inline-flex h-12 w-fit items-center gap-2 border border-brand-primary bg-brand-primary px-5 text-sm font-black text-[#232323] shadow-[0_14px_34px_var(--site-shadow)] transition hover:bg-brand-secondary"
          >
            <Grid2X2 className="h-4 w-4" />
            {labels.all}
          </Link>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={staggerContainer} className="mt-8 grid gap-4 sm:hidden">
          {content.projects.slice(0, 4).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              labels={content.texts.projectLabels}
              slug={projectSlugs[index]}
              detailsLabel={projectDetailLabels[locale].detailsCta}
            />
          ))}
        </motion.div>

        <div
          className="slider-shell relative mt-10 hidden sm:block"
          onMouseEnter={() => {
            autoPausedRef.current = true;
          }}
          onMouseLeave={() => {
            autoPausedRef.current = false;
            stopDrag();
          }}
          onFocusCapture={() => {
            autoPausedRef.current = true;
          }}
          onBlurCapture={() => {
            autoPausedRef.current = false;
          }}
        >
          <button
            type="button"
            onClick={() => scrollSlider("prev")}
            data-cursor="active"
            className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] text-brand-dark shadow-[0_18px_44px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
            aria-label={labels.previous}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("next")}
            data-cursor="active"
            className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] text-brand-dark shadow-[0_18px_44px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
            aria-label={labels.next}
          >
            <ArrowRight className="h-4 w-4" />
          </button>

          <motion.div
            ref={sliderRef}
            dir="ltr"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={staggerContainer}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            onClickCapture={handleSliderClick}
            className="slider-scroll flex max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden scroll-smooth px-16 py-2 select-none cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {content.projects.map((project, index) => (
              <div key={project.title} dir={dir} className="w-[26rem] min-w-0 shrink-0 snap-start lg:w-[26rem]">
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
      </div>
    </section>
  );
}
