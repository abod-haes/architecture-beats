"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, slideIn } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section className="mx-auto grid w-[92%] max-w-7xl gap-10 py-20 md:grid-cols-2">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <SectionTitle title={siteData.nav[4].label} />
        <div className="mt-8 space-y-4 text-zinc-300">
          <p dir="ltr" className="inline-block [unicode-bidi:isolate] text-left">{siteData.company.phone}</p>
          <p dir="ltr" className="block [unicode-bidi:isolate] text-right">{siteData.company.mobile}</p>
          <p>{siteData.company.email}</p>
          <p>{siteData.company.address}</p>
        </div>
      </motion.div>

      <motion.form
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideIn}
        className="space-y-4 border border-zinc-700 bg-zinc-900/60 p-6"
      >
        <h3 className="text-2xl font-bold text-white">{siteData.contactForm.title}</h3>
        <input className="w-full border border-zinc-600 bg-zinc-950 px-4 py-3 text-zinc-100" placeholder={siteData.contactForm.fields.name} />
        <input className="w-full border border-zinc-600 bg-zinc-950 px-4 py-3 text-zinc-100" placeholder={siteData.contactForm.fields.phone} />
        <input className="w-full border border-zinc-600 bg-zinc-950 px-4 py-3 text-zinc-100" placeholder={siteData.contactForm.fields.service} />
        <textarea className="h-36 w-full border border-zinc-600 bg-zinc-950 px-4 py-3 text-zinc-100" placeholder={siteData.contactForm.fields.message} />
        <button type="button" className="w-full border border-brand-primary bg-brand-primary py-3 font-bold text-brand-dark transition hover:bg-brand-secondary">
          {siteData.contactForm.submit}
        </button>
      </motion.form>
    </section>
  );
}
