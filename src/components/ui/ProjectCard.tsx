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
  const featuredScope = project.scope.slice(0, 2);

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      data-cursor="active"
      className="group flex h-full flex-col overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] shadow-[0_16px_40px_var(--site-shadow)] backdrop-blur transition hover:border-brand-primary/70"
    >
      <Link href={`/projects/${slug}`} className="project-media-frame relative block overflow-hidden" aria-label={project.title}>
        <Image src={project.image} alt={project.title} width={900} height={620} className="h-44 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-48" />
        <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 text-white">
          <p className="max-w-[65%] text-xs font-black uppercase tracking-[0.16em] text-brand-primary">{project.category}</p>
          <p className="border border-white/20 bg-black/35 px-2.5 py-1 text-[0.68rem] font-black backdrop-blur">{project.status}</p>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div>
          <h3 className="text-xl font-black leading-snug text-brand-dark sm:text-2xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-6 text-brand-gray">{shortDescription}</p>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
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

        <div className="mt-4 flex flex-wrap gap-2">
          {featuredScope.map((item) => (
            <span key={item} className="border border-brand-primary/45 bg-[var(--site-accent-soft)] px-2.5 py-1 text-xs font-bold text-brand-dark">
              {item}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${slug}`}
          className="mt-5 inline-flex items-center justify-between gap-3 border border-[var(--site-border)] bg-[var(--site-surface)] px-4 py-3 text-sm font-black text-brand-dark transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]"
        >
          {detailsLabel}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.article>
  );
}