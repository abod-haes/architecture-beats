"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Building2, Code2, HardHat, MapPin, PenTool, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { localizedTeamProfiles, teamLabels, type TeamSlug } from "@/data/teamProfiles";
import SectionTitle from "@/components/ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons: Record<TeamSlug, typeof Building2> = {
  "inas-al-tabbaa": Building2,
  "abdulrahman-hares": Code2,
  "mohammad-al-droubi": HardHat,
  "lana-al-hassan": PenTool,
  "ahmad-al-khatib": BriefcaseBusiness,
};

export default function TeamsPageClient() {
  const { locale, dir } = useLocale();
  const labels = teamLabels[locale];
  const members = localizedTeamProfiles[locale];

  return (
    <main className="site-section section-surface min-h-screen overflow-hidden pt-28 sm:pt-32" dir={dir}>
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl pb-16 sm:pb-24">
        <SectionTitle title={labels.title} description={labels.description} eyebrow={labels.eyebrow} />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {members.map((member) => {
            const Icon = icons[member.slug];

            return (
              <motion.article
                key={member.slug}
                variants={fadeUp}
                data-cursor="active"
                whileHover={{ y: -7, scale: 1.01 }}
                className="group relative flex min-h-full flex-col overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-3 backdrop-blur transition hover:border-brand-primary sm:p-4"
              >
                <div className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full bg-[var(--site-accent-soft)] blur-2xl transition group-hover:scale-125" />

                <div className="relative overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-muted)]">
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 92vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute start-4 top-4 flex h-12 w-12 items-center justify-center border border-brand-primary bg-[var(--site-card)] text-brand-dark shadow-[0_14px_34px_var(--site-shadow)] transition group-hover:bg-brand-primary group-hover:text-[#232323]">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-2 pt-6 sm:p-3 sm:pt-6">
                  <div className="flex flex-wrap gap-2">
                    {member.badges.slice(0, 2).map((badge) => (
                      <span key={badge} className="border border-brand-primary/35 bg-[var(--site-accent-soft)] px-2.5 py-1 text-[0.68rem] font-black text-brand-dark">
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5">
                    <h1 className="text-2xl font-black text-brand-dark">{member.name}</h1>
                    <p className="mt-2 text-sm font-black text-brand-secondary">{member.jobTitle}</p>
                    <p className="mt-3 flex items-center gap-2 text-sm text-brand-gray">
                      <MapPin className="h-4 w-4 text-brand-secondary" />
                      {member.location}
                    </p>
                  </div>

                  <p className="mt-5 flex-1 leading-8 text-brand-gray">{member.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {member.skills.slice(0, 4).map((skill) => (
                      <span key={skill} className="border border-[var(--site-border)] bg-[var(--site-muted)] px-2.5 py-1 text-xs font-bold text-brand-dark">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/teams/${member.slug}`}
                    className="mt-6 inline-flex items-center justify-between gap-3 border border-[var(--site-border)] bg-[var(--site-surface)] px-4 py-3 text-sm font-black text-brand-dark transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      {labels.viewProfile}
                    </span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
