"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Building2, Code2, HardHat, PenTool } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { localizedTeamProfiles, teamLabels, type TeamSlug } from "@/data/teamProfiles";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons: Record<TeamSlug, typeof Building2> = {
  "inas-al-tabbaa": Building2,
  "abdulrahman-hares": Code2,
  "mohammad-al-droubi": HardHat,
  "lana-al-hassan": PenTool,
  "ahmad-al-khatib": BriefcaseBusiness,
};

export default function TeamSection() {
  const { content, locale } = useLocale();
  const labels = teamLabels[locale];
  const members = localizedTeamProfiles[locale].slice(0, 3);

  return (
    <section className="site-section section-surface py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-7xl">
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={staggerContainer}
          className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-3"
        >
          {members.map((member) => {
            const Icon = icons[member.slug];
            const summary = member.summary.length > 92 ? `${member.summary.slice(0, 92).trimEnd()}...` : member.summary;

            return (
              <motion.article
                key={member.slug}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.01 }}
                data-cursor="active"
                className="group relative min-h-[470px] overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] shadow-[0_18px_48px_var(--site-shadow)] transition hover:border-brand-primary sm:min-h-[520px]"
              >
                <Link href={`/teams/${member.slug}`} className="absolute inset-0 z-30" aria-label={member.name}>
                  <span className="sr-only">{labels.viewProfile}</span>
                </Link>

                <div className="blueprint-grid absolute inset-0 opacity-35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(166,214,50,0.22),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.10),rgba(0,0,0,0.16))]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 92vw"
                  className="object-contain object-bottom px-4 pt-5 transition duration-700 group-hover:scale-[1.035] sm:px-6 sm:pt-7"
                />

                <div className="pointer-events-none absolute start-4 top-4 z-10 grid h-11 w-11 place-items-center border border-brand-primary bg-[var(--site-card)] text-brand-dark shadow-[0_12px_30px_var(--site-shadow)] backdrop-blur transition group-hover:bg-brand-primary group-hover:text-[#232323]">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 border border-white/20 bg-brand-primary/90 p-4 text-[#232323] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition group-hover:bg-brand-primary sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="mb-3 h-px w-16 bg-[#232323]/40" />
                  <p className="text-xl font-black leading-tight sm:text-2xl">{member.name}</p>
                  <p className="mt-1 text-sm font-black text-[#33420f]">{member.position}</p>
                  <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#232323]/70">{member.jobTitle}</p>
                  <p className="mt-3 text-sm leading-6 text-[#232323]/80">{summary}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-black">
                    {labels.viewProfile}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
