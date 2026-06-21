"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, Ruler } from "lucide-react";
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
};

export default function ProjectCard({ project, labels }: Props) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group overflow-hidden border border-brand-dark/15 bg-white/85 transition hover:border-brand-primary/70"
    >
      <div className="relative overflow-hidden border-b border-brand-dark/10">
        <Image src={project.image} alt={project.title} width={1200} height={900} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-brand-dark/90 px-4 py-3 text-white">
          <p className="text-sm font-black text-brand-primary">{project.category}</p>
          <p className="text-xs font-bold">{project.status}</p>
        </div>
      </div>

      <div className="space-y-5 p-5">
        <div>
          <h3 className="text-2xl font-black text-brand-dark">{project.title}</h3>
          <p className="mt-3 leading-7 text-brand-gray">{project.description}</p>
        </div>

        <div className="grid gap-3 text-sm sm:grid-cols-3">
          <div className="border border-brand-dark/10 p-3">
            <MapPin className="mb-2 h-4 w-4 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.location}</p>
            <p className="text-brand-gray">{project.location}</p>
          </div>
          <div className="border border-brand-dark/10 p-3">
            <Ruler className="mb-2 h-4 w-4 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.area}</p>
            <p className="text-brand-gray">{project.area}</p>
          </div>
          <div className="border border-brand-dark/10 p-3">
            <Calendar className="mb-2 h-4 w-4 text-brand-secondary" />
            <p className="font-black text-brand-dark">{labels.year}</p>
            <p className="text-brand-gray">{project.year}</p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-black text-brand-dark">{labels.scope}</p>
          <div className="flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <span key={item} className="border border-brand-primary/45 bg-brand-primary/12 px-3 py-1 text-xs font-bold text-brand-dark">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-black text-brand-dark">{labels.highlights}</p>
          <ul className="space-y-2 text-sm leading-6 text-brand-gray">
            {project.highlights.map((item) => (
              <li key={item} className="border-s-2 border-brand-primary ps-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
