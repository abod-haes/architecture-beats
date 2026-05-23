"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectItem } from "@/data/siteData";

type Props = {
  project: ProjectItem;
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.015 }} className="group relative overflow-hidden border border-zinc-700/80 bg-zinc-900">
      <Image src={project.image} alt={project.title} width={1200} height={900} className="h-72 w-full object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_20%,rgba(0,0,0,0.88)_100%)] transition-opacity duration-300 group-hover:opacity-90" />

      <div className="absolute inset-x-0 bottom-0 border-t border-brand-primary/35 bg-black/55 p-5 backdrop-blur-sm">
        <p className="text-sm font-semibold text-brand-primary">{project.category}</p>
        <h3 className="mt-1 text-xl font-extrabold tracking-tight text-white">{project.title}</h3>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute right-3 top-3 h-10 w-10 rotate-45 border border-brand-primary/40" />
      </div>
    </motion.article>
  );
}
