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
      whileTap={{ scale: 0.98 }}
      data-cursor="active"
      className="group relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-5 shadow-[0_16px_40px_rgba(35,35,35,0.06)] backdrop-blur transition-colors hover:border-brand-primary/70 sm:p-6 dark:shadow-[0_16px_40px_rgba(0,0,0,0.22)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-brand-primary transition-all duration-500 group-hover:h-2" />
      <div className="blueprint-grid absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-50" />
      <motion.div whileHover={{ rotate: -8, scale: 1.08 }} className="relative mb-5 grid h-12 w-12 place-items-center border border-brand-primary/45 bg-brand-primary/15 text-brand-dark">
        <Icon className="h-6 w-6 text-brand-secondary" />
      </motion.div>
      <h3 className="relative mb-3 text-xl font-black text-brand-dark">{item.title}</h3>
      <p className="relative leading-7 text-brand-gray">{item.description}</p>
    </motion.article>
  );
}
