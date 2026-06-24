"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Code2, HardHat, MapPin, PenTool } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTeamMember, teamLabels, type TeamSlug } from "@/data/teamProfiles";
import { fadeUp, staggerContainer } from "@/lib/motion";

const icons: Record<TeamSlug, typeof Building2> = {
  "inas-al-tabbaa": Building2,
  "abdulrahman-hares": Code2,
  "mohammad-al-droubi": HardHat,
  "lana-al-hassan": PenTool,
  "ahmad-al-khatib": BriefcaseBusiness,
};

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div variants={fadeUp} className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur sm:p-6">
      <div className="pointer-events-none absolute -end-12 -top-12 h-28 w-28 rounded-full bg-[var(--site-accent-soft)] blur-2xl" />
      <h2 className="relative text-xl font-black text-brand-dark">{title}</h2>
      <ul className="relative mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-brand-gray">
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-secondary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function TeamMemberPageClient({ slug }: { slug: string }) {
  const { locale, dir } = useLocale();
  const labels = teamLabels[locale];
  const member = getTeamMember(locale, slug);
  const BackIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  if (!member) {
    return (
      <main className="mx-auto min-h-screen w-[92%] max-w-4xl pt-32 text-brand-dark" dir={dir}>
        <Link href="/teams" className="font-black text-brand-secondary">
          {labels.backToTeam}
        </Link>
      </main>
    );
  }

  const Icon = icons[member.slug];

  return (
    <main className="site-section project-detail-shell min-h-screen overflow-hidden pt-28 sm:pt-32" dir={dir}>
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl pb-16 sm:pb-24">
        <Link href="/teams" className="inline-flex items-center gap-2 text-sm font-black text-brand-secondary transition hover:text-brand-dark">
          <BackIcon className="h-4 w-4" />
          {labels.backToTeam}
        </Link>

        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <motion.div variants={fadeUp} className="relative min-h-[560px] overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card-solid)] shadow-[0_18px_48px_var(--site-shadow)] sm:min-h-[680px]">
            <div className="blueprint-grid absolute inset-0 opacity-35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_12%,rgba(166,214,50,0.24),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(0,0,0,0.22))]" />
            <Image
              src={member.image}
              alt={member.name}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="object-contain object-bottom px-5 pt-8 sm:px-10 sm:pt-10"
            />
            <div className="absolute start-4 top-4 z-10 flex h-14 w-14 items-center justify-center border border-brand-primary bg-[var(--site-card)] text-brand-dark shadow-[0_14px_34px_var(--site-shadow)] backdrop-blur">
              <Icon className="h-7 w-7" />
            </div>
            <div className="absolute inset-x-4 bottom-4 z-10 border border-white/20 bg-brand-primary/90 p-5 text-[#232323] shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-[#33420f]">{member.position}</p>
              <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">{member.name}</h1>
              <p className="mt-3 text-lg font-black text-[#33420f]">{member.jobTitle}</p>
              <p className="mt-4 flex items-center gap-2 text-[#232323]/80">
                <MapPin className="h-4 w-4 text-[#33420f]" />
                {member.location}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {member.badges.map((badge) => (
                  <span key={badge} className="border border-[#232323]/20 bg-white/20 px-3 py-1.5 text-xs font-black text-[#232323] backdrop-blur">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-5">
            <div className="border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur sm:p-7">
              <h2 className="text-2xl font-black text-brand-dark">{labels.jobTitle}</h2>
              <p className="mt-2 font-black text-brand-secondary">{member.jobTitle}</p>
              <p className="mt-5 leading-9 text-brand-gray">{member.bio}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="border border-[var(--site-border)] bg-[var(--site-card)] p-4 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gray">{labels.position}</p>
                <p className="mt-2 font-black text-brand-dark">{member.position}</p>
              </div>
              <div className="border border-[var(--site-border)] bg-[var(--site-card)] p-4 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-brand-gray">{labels.skills}</p>
                <p className="mt-2 font-black text-brand-dark">{member.skills.slice(0, 3).join(" • ")}</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={staggerContainer} className="mt-10 grid gap-5 lg:grid-cols-3">
          <ListCard title={labels.skills} items={member.skills} />
          <ListCard title={labels.responsibilities} items={member.responsibilities} />
          <ListCard title={labels.experience} items={member.experience} />
        </motion.section>
      </div>
    </main>
  );
}
