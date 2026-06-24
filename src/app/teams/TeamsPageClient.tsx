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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(166,214,50,0.22),transparent_36%)]" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 92vw"
                  className="object-contain object-bottom px-4 pt-6 transition duration-700 group-hover:scale-[1.035] sm:px-7 sm:pt-8"
                />

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[68%] bg-gradient-to-t from-[#080a05]/92 via-[#080a05]/46 to-transparent transition duration-500 group-hover:h-[74%]" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-t from-brand-primary/30 to-transparent opacity-80" />

                <div className="pointer-events-none absolute start-4 top-4 z-20 grid h-12 w-12 place-items-center border border-brand-primary/70 bg-black/25 text-white shadow-[0_14px_34px_rgba(0,0,0,0.25)] backdrop-blur-md transition group-hover:bg-brand-primary group-hover:text-[#232323]">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="pointer-events-none absolute end-4 top-4 z-20 flex max-w-[70%] flex-wrap justify-end gap-2">
                  {member.badges.slice(0, 2).map((badge) => (
                    <span key={badge} className="border border-white/25 bg-black/25 px-2.5 py-1 text-[0.65rem] font-black text-white shadow-lg backdrop-blur-md">
                      {badge}
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-3 bottom-3 z-20 border border-white/15 bg-white/10 p-4 text-white shadow-[0_-20px_70px_rgba(0,0,0,0.46)] backdrop-blur-xl transition group-hover:border-brand-primary/45 group-hover:bg-white/14 sm:inset-x-4 sm:bottom-4 sm:p-5">
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <span className="h-px w-16 bg-brand-primary" />
                    <span className="inline-flex items-center gap-2 text-xs font-black text-brand-primary">
                      <MapPin className="h-3.5 w-3.5" />
                      {member.location}
                    </span>
                  </div>
                  <h1 className="text-2xl font-black leading-tight drop-shadow">{member.name}</h1>
                  <p className="mt-1 text-sm font-black text-brand-primary">{member.jobTitle}</p>
                  <p className="mt-3 line-clamp-3 leading-7 text-white/82">{member.summary}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span key={skill} className="border border-white/18 bg-white/10 px-2.5 py-1 text-xs font-black text-white backdrop-blur-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-primary">
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
