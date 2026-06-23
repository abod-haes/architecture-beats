"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Code2, HardHat, Mail, MapPin, PenTool, Sparkles } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getTeamMember, teamLabels, type TeamMemberProfile, type TeamSlug } from "@/data/teamProfiles";
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

function CVBlock({ member, labels }: { member: TeamMemberProfile; labels: typeof teamLabels.ar }) {
  return (
    <motion.section variants={fadeUp} className="relative overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card)] p-5 backdrop-blur sm:p-7">
      <div className="pointer-events-none absolute -end-20 -top-20 h-48 w-48 rounded-full bg-[var(--site-accent-soft)] blur-3xl" />
      <p className="relative text-xs font-black uppercase tracking-[0.24em] text-brand-secondary">CV</p>
      <h2 className="relative mt-3 text-3xl font-black text-brand-dark">{labels.cv}</h2>
      <div className="relative mt-5 border-y border-[var(--site-border)] py-5">
        <p className="text-lg font-black text-brand-dark">{member.cv.headline}</p>
        <p className="mt-3 leading-8 text-brand-gray">{member.cv.summary}</p>
      </div>
      <div className="relative mt-5 grid gap-5 lg:grid-cols-2">
        <div>
          <h3 className="font-black text-brand-dark">{labels.highlights}</h3>
          <ul className="mt-3 space-y-2">
            {member.cv.highlights.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-7 text-brand-gray">
                <Sparkles className="mt-1 h-4 w-4 shrink-0 text-brand-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          {member.cv.languages?.length ? (
            <div>
              <h3 className="font-black text-brand-dark">{labels.languages}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.cv.languages.map((language) => (
                  <span key={language} className="border border-[var(--site-border)] bg-[var(--site-muted)] px-3 py-1.5 text-sm font-bold text-brand-dark">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {member.cv.contact ? (
            <div>
              <h3 className="font-black text-brand-dark">{labels.contact}</h3>
              <a href={`mailto:${member.cv.contact}`} className="mt-3 inline-flex items-center gap-2 text-sm font-black text-brand-secondary transition hover:text-brand-dark">
                <Mail className="h-4 w-4" />
                {member.cv.contact}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </motion.section>
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

        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div variants={fadeUp} className="site-card relative overflow-hidden p-6 sm:p-8">
            <div className="pointer-events-none absolute -end-20 -top-20 h-48 w-48 rounded-full bg-[var(--site-accent-soft)] blur-3xl" />
            <div className="relative flex h-24 w-24 items-center justify-center border border-brand-primary bg-brand-primary/20 text-brand-dark">
              <Icon className="h-12 w-12" />
            </div>
            <div className="relative mt-7">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">{member.position}</p>
              <h1 className="mt-3 text-4xl font-black leading-tight text-brand-dark sm:text-5xl">{member.name}</h1>
              <p className="mt-3 text-lg font-black text-brand-secondary">{member.jobTitle}</p>
              <p className="mt-4 flex items-center gap-2 text-brand-gray">
                <MapPin className="h-4 w-4 text-brand-secondary" />
                {member.location}
              </p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-2">
              {member.badges.map((badge) => (
                <span key={badge} className="border border-brand-primary/40 bg-[var(--site-accent-soft)] px-3 py-1.5 text-xs font-black text-brand-dark">
                  {badge}
                </span>
              ))}
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

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={staggerContainer} className="mt-10">
          <CVBlock member={member} labels={labels} />
        </motion.div>
      </div>
    </main>
  );
}
