"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "@/data/siteData";
import type { ComponentType } from "react";

type Props = {
  item: ServiceItem;
};

export default function ServiceCard({ item }: Props) {
  const Icon = item.icon as ComponentType<{ className?: string }>;

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative overflow-hidden border border-brand-primary/20 bg-zinc-900/60 p-6"
    >
      <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(166,214,50,0.16),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
      <Icon className="relative mb-4 h-8 w-8 text-brand-primary" />
      <h3 className="relative mb-3 text-xl font-bold text-white">{item.title}</h3>
      <p className="relative leading-7 text-zinc-300">{item.description}</p>
    </motion.article>
  );
}
