"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function TeamSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={content.texts.teamTitle} description={content.texts.teamDescription} eyebrow="Team" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={staggerContainer}
        className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
      >
        {content.team.map((member) => (
          <motion.article key={member.name} variants={fadeUp} className="border border-brand-dark/15 bg-white/80 p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center border border-brand-primary bg-brand-primary/20 text-brand-dark">
              <Users className="h-6 w-6" />
            </div>
            <p className="text-xl font-black text-brand-dark">{member.name}</p>
            <p className="mt-2 text-sm font-black text-brand-secondary">{member.role}</p>
            <p className="mt-4 leading-7 text-brand-gray">{member.summary}</p>
            <p className="mt-5 border-t border-brand-dark/10 pt-4 text-xs font-black uppercase tracking-[0.18em] text-brand-dark">{member.focus}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
