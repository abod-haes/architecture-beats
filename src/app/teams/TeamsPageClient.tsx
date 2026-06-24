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
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative min-h-[560px] overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] shadow-[0_18px_48px_var(--site-shadow)] transition hover:border-brand-primary"
              >
                <Link href={`/teams/${member.slug}`} className="absolute inset-0 z-30" aria-label={member.name}>
                  <span className="sr-only">{labels.viewProfile}</span>
                </Link>

                <div className="blueprint-grid absolute inset-0 opacity-35" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(166,214,50,0.24),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.22))]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 92vw"
                  className="object-contain object-bottom px-4 pt-6 transition duration-700 group-hover:scale-[1.035] sm:px-7 sm:pt-8"
                />

                <div className="pointer-events-none absolute start-4 top-4 z-20 grid h-12 w-12 place-items-center border border-brand-primary bg-[var(--site-card)] text-brand-dark shadow-[0_14px_34px_var(--site-shadow)] backdrop-blur transition group-hover:bg-brand-primary group-hover:text-[#232323]">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="pointer-events-none absolute end-4 top-4 z-20 flex max-w-[70%] flex-wrap justify-end gap-2">
                  {member.badges.slice(0, 2).map((badge) => (
                    <span key={badge} className="border border-white/25 bg-black/30 px-2.5 py-1 text-[0.65rem] font-black text-white backdrop-blur">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 border border-white/20 bg-brand-primary/90 p-4 text-[#232323] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl transition group-hover:bg-brand-primary sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="h-px w-16 bg-[#232323]/40" />
                    <span className="inline-flex items-center gap-2 text-xs font-black text-[#33420f]">
                      <MapPin className="h-3.5 w-3.5" />
                      {member.location}
                    </span>
                  </div>
                  <h1 className="text-2xl font-black leading-tight">{member.name}</h1>
                  <p className="mt-1 text-sm font-black text-[#33420f]">{member.jobTitle}</p>
                  <p className="mt-3 line-clamp-3 leading-7 text-[#232323]/80">{member.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="border border-[#232323]/20 bg-white/20 px-2.5 py-1 text-xs font-black text-[#232323] backdrop-blur">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black">
                    <Sparkles className="h-4 w-4" />
                    {labels.viewProfile}
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </main>
  );
}
