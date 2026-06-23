"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, BriefcaseBusiness, Building2, Code2, HardHat, PenTool } from "lucide-react";
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
  const members = localizedTeamProfiles[locale].slice(0, 4);

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
          className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 xl:grid-cols-4"
        >
          {members.map((member) => {
            const Icon = icons[member.slug];

            return (
              <motion.article
                key={member.slug}
                variants={fadeUp}
                whileHover={{ y: -7, scale: 1.01 }}
                data-cursor="active"
                className="group relative flex min-h-full flex-col overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-3 backdrop-blur transition hover:border-brand-primary sm:p-4"
              >
                <div className="pointer-events-none absolute -end-10 -top-10 h-28 w-28 border border-brand-primary/30 bg-[var(--site-accent-soft)] transition group-hover:scale-110" />

                <div className="relative overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-muted)]">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 92vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute start-3 top-3 flex h-10 w-10 items-center justify-center border border-brand-primary bg-[var(--site-card)] text-brand-dark shadow-[0_12px_30px_var(--site-shadow)] transition group-hover:bg-brand-primary group-hover:text-[#232323]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <BadgeCheck className="absolute end-3 top-3 h-5 w-5 text-brand-secondary" />
                </div>

                <div className="relative flex flex-1 flex-col p-2 pt-5">
                  <p className="text-xl font-black text-brand-dark">{member.name}</p>
                  <div className="mt-4 space-y-2 border-y border-[var(--site-border)] py-4">
                    <p className="text-sm text-brand-gray">
                      <span className="font-black text-brand-dark">{labels.position}: </span>
                      {member.position}
                    </p>
                    <p className="text-sm text-brand-gray">
                      <span className="font-black text-brand-dark">{labels.jobTitle}: </span>
                      {member.jobTitle}
                    </p>
                  </div>
                  <p className="mt-4 flex-1 leading-7 text-brand-gray">{member.summary}</p>
                  <Link
                    href={`/teams/${member.slug}`}
                    className="mt-5 inline-flex items-center justify-between gap-3 border border-[var(--site-border)] bg-[var(--site-surface)] px-4 py-3 text-sm font-black text-brand-dark transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
                  >
                    {labels.viewProfile}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
