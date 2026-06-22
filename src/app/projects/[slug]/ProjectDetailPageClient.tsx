"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Building2, Calendar, CheckCircle2, Clock, ExternalLink, MapPin, Ruler } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { getProjectBySlug, getProjectDetails, projectDetailLabels } from "@/data/projectDetails";
import { fadeUp, staggerContainer } from "@/lib/motion";
import GlowButton from "@/components/ui/GlowButton";

function InfoList({ title, items }: { title: string; items: string[] }) {
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

export default function ProjectDetailPageClient({ slug }: { slug: string }) {
  const { content, locale, dir } = useLocale();
  const project = getProjectBySlug(content.projects, slug);
  const details = getProjectDetails(locale, slug);
  const labels = projectDetailLabels[locale];
  const BackIcon = locale === "ar" ? ArrowRight : ArrowLeft;

  if (!project || !details) {
    return (
      <main className="mx-auto min-h-screen w-[92%] max-w-4xl pt-32 text-brand-dark" dir={dir}>
        <Link href="/projects" className="font-black text-brand-secondary">
          {labels.back}
        </Link>
      </main>
    );
  }

  const facts = [
    { label: content.texts.projectLabels.location, value: project.location, icon: MapPin },
    { label: content.texts.projectLabels.area, value: project.area, icon: Ruler },
    { label: content.texts.projectLabels.year, value: project.year, icon: Calendar },
    { label: labels.duration, value: details.duration, icon: Clock },
    { label: labels.clientType, value: details.clientType, icon: Building2 },
    { label: content.texts.projectLabels.status, value: project.status, icon: CheckCircle2 },
  ];

  return (
    <main className="site-section project-detail-shell min-h-screen overflow-hidden pt-28 sm:pt-32" dir={dir}>
      <div className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl pb-16 sm:pb-24">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-black text-brand-secondary transition hover:text-brand-dark">
          <BackIcon className="h-4 w-4" />
          {labels.back}
        </Link>

        <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div variants={fadeUp}>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">{project.category}</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-brand-dark sm:text-5xl">{project.title}</h1>
            <div className="brand-accent-line mt-5 h-px w-44" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-brand-gray sm:text-lg sm:leading-9">{details.overview}</p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.scope.map((item) => (
                <span key={item} className="border border-brand-primary/45 bg-[var(--site-accent-soft)] px-3 py-1.5 text-xs font-black text-brand-dark">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="site-card overflow-hidden p-3" data-cursor="active">
            <div className="project-media-frame">
              <Image src={project.image} alt={project.title} width={1200} height={850} className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]" priority />
            </div>
          </motion.div>
        </motion.section>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={`${label}-${value}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-4 backdrop-blur"
            >
              <div className="pointer-events-none absolute -end-8 -top-8 h-20 w-20 rounded-full bg-[var(--site-accent-soft)] blur-xl" />
              <Icon className="relative mb-3 h-5 w-5 text-brand-secondary" />
              <p className="relative text-xs font-black uppercase tracking-[0.18em] text-brand-gray">{label}</p>
              <p className="relative mt-2 font-black text-brand-dark">{value}</p>
            </motion.div>
          ))}
        </section>

        <motion.section initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.12 }} variants={staggerContainer} className="mt-10 grid gap-5 lg:grid-cols-2">
          <InfoList title={labels.deliverables} items={details.deliverables} />
          <InfoList title={labels.challenges} items={details.challenges} />
          <InfoList title={labels.solutions} items={details.solutions} />
          <InfoList title={labels.results} items={details.results} />
        </motion.section>

        <section className="mt-12">
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">Gallery</p>
              <h2 className="mt-2 text-3xl font-black text-brand-dark">{labels.gallery}</h2>
            </div>
            <GlowButton label={labels.discussProject} href="/contact" className="w-full sm:w-auto" />
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {details.gallery.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="site-card overflow-hidden p-2"
                data-cursor="active"
              >
                <div className="project-media-frame">
                  <Image src={image} alt={`${project.title} ${index + 1}`} width={900} height={650} className="h-56 w-full object-cover sm:h-64" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          <div className="relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-6 backdrop-blur">
            <div className="pointer-events-none absolute -end-16 -top-16 h-36 w-36 rounded-full bg-[var(--site-accent-soft)] blur-2xl" />
            <p className="relative text-xs font-black uppercase tracking-[0.25em] text-brand-secondary">Location</p>
            <h2 className="relative mt-3 text-3xl font-black text-brand-dark">{labels.map}</h2>
            <p className="relative mt-4 leading-8 text-brand-gray">{details.siteCondition}</p>
            <a
              href={details.mapOpenUrl}
              target="_blank"
              rel="noreferrer"
              className="relative mt-6 inline-flex items-center gap-2 border border-[var(--site-border)] bg-[var(--site-surface)] px-4 py-3 text-sm font-black text-brand-dark transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
            >
              {labels.openMap}
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
          <div className="min-h-80 overflow-hidden border border-[var(--site-border-strong)] bg-[var(--site-card)] p-2 backdrop-blur sm:min-h-96">
            <iframe
              src={details.mapEmbedUrl}
              title={details.mapTitle}
              className="h-80 w-full border-0 sm:h-96 lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </main>
  );
}