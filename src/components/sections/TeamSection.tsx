"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Code2, HardHat, PenTool } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";
import type { MouseEvent, PointerEvent } from "react";
import { useLocale } from "@/context/LocaleContext";
import { localizedTeamProfiles, teamLabels, type TeamSlug } from "@/data/teamProfiles";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

const AUTO_SCROLL_DELAY = 4200;
const DRAG_SPEED = 1.1;

const icons: Record<TeamSlug, typeof Building2> = {
  "inas-al-tabbaa": Building2,
  "abdulrahman-hares": Code2,
  "mohammad-al-droubi": HardHat,
  "lana-al-hassan": PenTool,
  "ahmad-al-khatib": BriefcaseBusiness,
};

export default function TeamSection() {
  const { content, locale, dir } = useLocale();
  const labels = teamLabels[locale];
  const isArabic = locale === "ar";
  const members = localizedTeamProfiles[locale];
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const autoPausedRef = useRef(false);
  const didDragRef = useRef(false);
  const dragRef = useRef({ isDown: false, startX: 0, scrollLeft: 0 });
  const sliderLabels = {
    previous: isArabic ? "العضو السابق" : "Previous member",
    next: isArabic ? "العضو التالي" : "Next member",
  };

  const getScrollAmount = useCallback((slider: HTMLDivElement) => Math.min(slider.clientWidth * 0.84, 470), []);

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

  const handleSliderClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!didDragRef.current) return;

    event.preventDefault();
    event.stopPropagation();
    window.setTimeout(() => {
      didDragRef.current = false;
    }, 40);
  };

  return (
    <section className="site-section section-surface py-16 sm:py-20" dir={dir}>
      <div className="mx-auto w-[92%] max-w-7xl min-w-0">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <SectionTitle title={content.texts.teamTitle} description={content.texts.teamDescription} eyebrow="Team" />
          <Link
            href="/teams"
            data-cursor="active"
            className="inline-flex w-full items-center justify-center gap-2 border border-brand-primary bg-brand-primary px-5 py-3 text-sm font-black text-[#232323] shadow-[0_14px_34px_var(--site-shadow)] transition hover:bg-brand-secondary sm:w-auto"
          >
            {labels.viewAll}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          className="slider-shell relative mt-8 sm:mt-10"
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
            className="absolute left-2 top-1/2 z-50 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] text-brand-dark shadow-[0_18px_44px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323] sm:left-3 sm:h-11 sm:w-11"
            aria-label={sliderLabels.previous}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => scrollSlider("next")}
            data-cursor="active"
            className="absolute right-2 top-1/2 z-50 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] text-brand-dark shadow-[0_18px_44px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323] sm:right-3 sm:h-11 sm:w-11"
            aria-label={sliderLabels.next}
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
            className="slider-scroll flex max-w-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden scroll-smooth px-12 py-2 select-none cursor-grab active:cursor-grabbing [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-5 sm:px-16"
          >
            {members.map((member) => {
              const Icon = icons[member.slug];
              const summary = member.summary.length > 92 ? `${member.summary.slice(0, 92).trimEnd()}...` : member.summary;

              return (
                <motion.article
                  key={member.slug}
                  dir={dir}
                  variants={fadeUp}
                  whileHover={{ y: -8, scale: 1.01 }}
                  data-cursor="active"
                  className="group relative min-h-[390px] w-[78%] shrink-0 snap-start overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] shadow-[0_18px_48px_var(--site-shadow)] transition hover:border-brand-primary sm:min-h-[520px] sm:w-[26rem] lg:w-[27rem]"
                >
                  <Link href={`/teams/${member.slug}`} className="absolute inset-0 z-30" aria-label={member.name}>
                    <span className="sr-only">{labels.viewProfile}</span>
                  </Link>

                  <div className="blueprint-grid absolute inset-0 opacity-35" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(166,214,50,0.2),transparent_36%)]" />
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1280px) 27rem, (min-width: 768px) 26rem, 78vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[50%] bg-gradient-to-t from-[#080a05]/92 via-[#080a05]/42 to-transparent transition duration-500 group-hover:h-[62%] sm:h-[64%] sm:group-hover:h-[70%]" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-brand-primary/24 to-transparent opacity-75 sm:h-24 sm:from-brand-primary/30" />

                  <div className="pointer-events-none absolute start-3 top-3 z-20 grid h-9 w-9 place-items-center border border-brand-primary/70 bg-black/25 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition group-hover:bg-brand-primary group-hover:text-[#232323] sm:start-4 sm:top-4 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <div className="pointer-events-none absolute inset-x-2.5 bottom-2.5 z-20 border border-white/15 bg-white/10 p-3 text-white shadow-[0_-18px_65px_rgba(0,0,0,0.42)] backdrop-blur-xl transition group-hover:border-brand-primary/45 group-hover:bg-white/14 sm:inset-x-4 sm:bottom-4 sm:p-5">
                    <div className="mb-2 h-px w-12 bg-brand-primary sm:mb-3 sm:w-16" />
                    <p className="text-lg font-black leading-tight drop-shadow sm:text-2xl">{member.name}</p>
                    <p className="mt-1 text-xs font-black text-brand-primary sm:text-sm">{member.position}</p>
                    <p className="mt-1.5 text-[0.58rem] font-black uppercase tracking-[0.17em] text-white/70 sm:mt-2 sm:text-[0.68rem] sm:tracking-[0.2em]">{member.jobTitle}</p>
                    <p className="mt-3 hidden text-sm leading-6 text-white/82 sm:block">{summary}</p>
                    <div className="mt-3 inline-flex items-center gap-2 text-xs font-black text-brand-primary sm:mt-4 sm:text-sm">
                      {labels.viewProfile}
                      <ArrowUpRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
