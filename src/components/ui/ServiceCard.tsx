"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "@/data/siteData";
import type { ComponentType } from "react";
import { fadeUp } from "@/lib/motion";

type Props = {
  item: ServiceItem;
};

export default function ServiceCard({ item }: Props) {
  const Icon = item.icon as ComponentType<{ className?: string }>;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.015 }}
      className="group relative overflow-hidden border border-brand-dark/15 bg-white/85 p-6 transition-colors hover:border-brand-primary/70"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-primary transition-all duration-500 group-hover:h-2" />
      <Icon className="relative mb-4 h-8 w-8 text-brand-secondary" />
      <h3 className="relative mb-3 text-xl font-black text-brand-dark">{item.title}</h3>
      <p className="relative leading-7 text-brand-gray">{item.description}</p>
    </motion.article>
  );
}
