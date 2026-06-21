"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, slideIn } from "@/lib/motion";

export default function ContactSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto grid w-[92%] max-w-7xl gap-10 py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }} variants={fadeUp}>
        <SectionTitle title={content.nav[4].label} eyebrow="Contact" />
        <div className="mt-8 space-y-4 border border-brand-dark/15 bg-white/75 p-6 text-brand-gray">
          <p dir="ltr" className="text-left font-bold text-brand-dark">{content.company.phone}</p>
          <p dir="ltr" className="text-left font-bold text-brand-dark">{content.company.mobile}</p>
          <p>{content.company.email}</p>
          <p>{content.company.address}</p>
        </div>
      </motion.div>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={slideIn}
        className="space-y-4 border border-brand-dark/15 bg-white/80 p-6"
      >
        <h3 className="text-2xl font-black text-brand-dark">{content.contactForm.title}</h3>
        <input className="w-full border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark outline-none focus:border-brand-primary" placeholder={content.contactForm.fields.name} />
        <input className="w-full border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark outline-none focus:border-brand-primary" placeholder={content.contactForm.fields.phone} />
        <input className="w-full border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark outline-none focus:border-brand-primary" placeholder={content.contactForm.fields.service} />
        <textarea className="h-36 w-full border border-brand-dark/15 bg-white px-4 py-3 text-brand-dark outline-none focus:border-brand-primary" placeholder={content.contactForm.fields.message} />
        <button type="button" className="w-full border border-brand-dark bg-brand-dark py-3 font-black text-white transition hover:bg-brand-primary hover:text-brand-dark">
          {content.contactForm.submit}
        </button>
      </motion.form>
    </section>
  );
}
