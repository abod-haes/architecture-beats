"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

function useCounter(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    let current = 0;
    const step = Math.max(1, Math.ceil(target / 42));
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(current);
      }
    }, 22);

    return () => clearInterval(id);
  }, [active, target]);

  return count;
}

function StatCard({ label, value, suffix, description }: { label: string; value: number; suffix: string; description: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { amount: 0.45 });
  const count = useCounter(value, inView);

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.02 }}
      data-cursor="active"
      className="border border-[var(--site-border)] bg-[var(--site-card)] p-5 shadow-[0_14px_34px_rgba(35,35,35,0.06)] backdrop-blur sm:p-6 dark:shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
    >
      <p className="text-4xl font-black text-brand-dark">
        {count.toLocaleString()}
        <span className="text-brand-secondary">{suffix}</span>
      </p>
      <p className="mt-2 font-black text-brand-dark">{label}</p>
      <p className="mt-2 text-sm leading-6 text-brand-gray">{description}</p>
    </motion.article>
  );
}

export default function StatsSection() {
  const content = useSiteContent();

  return (
    <section className="site-section border-y border-[var(--site-border)] bg-[var(--site-muted)] py-16">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionTitle title={content.texts.statsTitle} description={content.texts.statsDescription} eyebrow="Stats" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={staggerContainer}
          className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.stats.map((item) => (
            <StatCard key={item.label} label={item.label} value={item.value} suffix={item.suffix} description={item.description} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
