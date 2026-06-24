"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, MapPin, Ruler } from "lucide-react";
import { ProjectItem } from "@/data/siteData";
import { fadeUp } from "@/lib/motion";

type ProjectLabels = {
  location: string;
  area: string;
  year: string;
  status: string;
  scope: string;
  highlights: string;
};

type Props = {
  project: ProjectItem;
  labels: ProjectLabels;
  slug: string;
  detailsLabel: string;
};

export default function ProjectCard({ project, labels, slug, detailsLabel }: Props) {
  const shortDescription = project.description.length > 118 ? `${project.description.slice(0, 118)}...` : project.description;
  const mobileDescription = project.description.length > 74 ? `${project.description.slice(0, 74)}...` : project.description;
  const featuredScope = project.scope.slice(0, 2);
  const mobileScope = project.scope[0];

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      data-cursor="active"
      className="group flex h-full flex-col overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] shadow-[0_16px_40px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary/70 sm:min-h-full"
    >
      <Link href={`/projects/${slug}`} className="project-media-frame relative block overflow-hidden" aria-label={project.title}>
        <Image
          src={project.image}
          alt={project.title}
          width={900}
          height={620}
          className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-48"
        />
        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black/80 via-black/35 to-transparent sm:h-20" />
        <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 p-3 text-white sm:p-4">
          <p className="max-w-[64%] text-[0.65rem] font-black uppercase tracking-[0.16em] text-brand-primary sm:text-xs">{project.category}</p>
          <p className="border border-white/25 bg-black/35 px-2.5 py-1 text-[0.65rem] font-black backdrop-blur sm:text-[0.68rem]">{project.status}</p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5">
        <div>
          <h3 className="text-lg font-black leading-snug text-brand-dark sm:text-2xl">{project.title}</h3>
          <p className="mt-1.5 text-xs leading-5 text-brand-gray sm:hidden">{mobileDescription}</p>
          <p className="mt-2 hidden text-sm leading-6 text-brand-gray sm:block">{shortDescription}</p>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs sm:hidden">
          <div className="flex min-w-0 items-center gap-2 border border-[var(--site-border)] bg-[var(--site-muted)] px-2.5 py-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-secondary" />
            <div className="min-w-0">
              <p className="text-[0.6rem] font-black text-brand-dark">{labels.location}</p>
              <p className="truncate text-[0.68rem] text-brand-gray">{project.location}</p>
            </div>
          </div>
          <div className="flex min-w-0 items-center gap-2 border border-[var(--site-border)] bg-[var(--site-muted)] px-2.5 py-2">
            <Calendar className="h-3.5 w-3.5 shrink-0 text-brand-secondary" />
            <div className="min-w-0">
              <p className="text-[0.6rem] font-black text-brand-dark">{labels.year}</p>
              <p className="truncate text-[0.68rem] text-brand-gray">{project.year}</p>
            </div>
          </div>
        </div>

        <div className="mt-4 hidden grid-cols-3 gap-2 text-xs sm:grid">
          <div className="border border-[var(--site-border)] bg-[var(--site-muted)] p-2.5">
            <MapPin className="mb-2 h-3.5 w-3.5 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.location}</p>
            <p className="mt-1 text-brand-gray">{project.location}</p>
          </div>
          <div className="border border-[var(--site-border)] bg-[var(--site-muted)] p-2.5">
            <Ruler className="mb-2 h-3.5 w-3.5 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.area}</p>
            <p className="mt-1 text-brand-gray">{project.area}</p>
          </div>
          <div className="border border-[var(--site-border)] bg-[var(--site-muted)] p-2.5">
            <Calendar className="mb-2 h-3.5 w-3.5 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.year}</p>
            <p className="mt-1 text-brand-gray">{project.year}</p>
          </div>
        </div>

        {mobileScope ? (
          <div className="mt-3 sm:hidden">
            <span className="inline-flex border border-brand-primary/45 bg-[var(--site-accent-soft)] px-2.5 py-1 text-[0.68rem] font-bold text-brand-dark">
              {mobileScope}
            </span>
          </div>
        ) : null}

        <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
          {featuredScope.map((item) => (
            <span key={item} className="border border-brand-primary/45 bg-[var(--site-accent-soft)] px-2.5 py-1 text-xs font-bold text-brand-dark">
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="mt-4 inline-flex items-center justify-between gap-3 border border-[var(--site-border)] bg-[var(--site-surface)] px-3.5 py-2.5 text-sm font-black text-brand-dark transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323] sm:mt-5 sm:px-4 sm:py-3"
        >
          {detailsLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}
