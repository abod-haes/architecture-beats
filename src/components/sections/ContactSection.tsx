"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, slideIn } from "@/lib/motion";

export default function ContactSection() {
  const content = useSiteContent();
  const inputClass = "w-full border border-[var(--site-border)] bg-[var(--site-card-solid)] px-4 py-3 text-brand-dark outline-none transition placeholder:text-brand-gray/70 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20";

  return (
    <section id="contact" className="site-section mx-auto grid w-[92%] max-w-7xl gap-8 py-16 sm:gap-10 sm:py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.25 }} variants={fadeUp}>
        <SectionTitle title={content.nav[4].label} eyebrow="Contact" />
        <div className="mt-8 space-y-4 border border-[var(--site-border)] bg-[var(--site-card)] p-5 text-brand-gray backdrop-blur sm:p-6">
          <p dir="ltr" className="text-left font-bold text-brand-dark">{content.company.phone}</p>
          <p dir="ltr" className="text-left font-bold text-brand-dark">{content.company.mobile}</p>
          <p className="break-words">{content.company.email}</p>
          <p>{content.company.address}</p>
        </div>
      </motion.div>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={slideIn}
        className="space-y-4 border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur sm:p-6"
      >
        <h3 className="text-2xl font-black text-brand-dark">{content.contactForm.title}</h3>
        <input className={inputClass} placeholder={content.contactForm.fields.name} />
        <input className={inputClass} placeholder={content.contactForm.fields.phone} />
        <input className={inputClass} placeholder={content.contactForm.fields.service} />
        <textarea className={`${inputClass} h-36 resize-none`} placeholder={content.contactForm.fields.message} />
        <button type="button" data-cursor="active" className="w-full border border-[var(--site-inverse)] bg-[var(--site-inverse)] py-3 font-black text-[var(--site-inverse-text)] transition hover:border-brand-primary hover:bg-brand-primary hover:text-[#232323]">
          {content.contactForm.submit}
        </button>
      </motion.form>
    </section>
  );
}
