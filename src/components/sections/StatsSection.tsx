"use client";

import { useEffect, useState } from "react";
import { siteData } from "@/data/siteData";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";

function useCounter(target: number) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 35));
    const id = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(id);
      } else {
        setCount(current);
      }
    }, 25);
    return () => clearInterval(id);
  }, [target]);

  return count;
}

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const count = useCounter(value);

  return (
    <article className="border border-zinc-700 bg-zinc-900/60 p-6 text-center">
      <p className="text-4xl font-black text-brand-primary">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-zinc-300">{label}</p>
    </article>
  );
}

export default function StatsSection() {
  return (
    <section className="border-y border-brand-primary/20 bg-zinc-950/80 py-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mx-auto grid w-[92%] max-w-7xl gap-4 md:grid-cols-4"
      >
        {siteData.stats.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} suffix={item.suffix} />
        ))}
      </motion.div>
    </section>
  );
}
