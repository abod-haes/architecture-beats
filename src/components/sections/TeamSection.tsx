"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BriefcaseBusiness, Building2, HardHat, PenTool, Users } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

type TeamProfile = {
  name: string;
  position: string;
  jobTitle: string;
  specialty: string;
  icon: typeof Users;
};

const teamProfiles: Record<"ar" | "en", TeamProfile[]> = {
  ar: [
    {
      name: "م. إيناس غزوان الطباع",
      position: "مديرة المكتب",
      jobTitle: "مهندسة معمارية ومشرفة تصميم",
      specialty: "قيادة التصميم المعماري، مراجعة المخططات، وضبط جودة التفاصيل قبل التنفيذ.",
      icon: Building2,
    },
    {
      name: "م. محمد الدروبي",
      position: "مسؤول التنفيذ",
      jobTitle: "مهندس موقع وإدارة ورشات",
      specialty: "تنسيق الحرفيين، متابعة جدول الأعمال، واستلام مراحل الإكساء والبناء.",
      icon: HardHat,
    },
    {
      name: "م. لانا الحسن",
      position: "قسم التصميم الداخلي",
      jobTitle: "مصممة داخلية واختيار مواد",
      specialty: "تطوير المساحات الداخلية، لوحات المواد، الإضاءة، والتفاصيل العملية للمستخدم.",
      icon: PenTool,
    },
    {
      name: "أحمد الخطيب",
      position: "قسم الهوية والتسويق",
      jobTitle: "منسق هوية بصرية وحضور رقمي",
      specialty: "تحويل المشروع إلى عرض بصري واضح للواجهات، المحتوى، والتواصل مع العملاء.",
      icon: BriefcaseBusiness,
    },
  ],
  en: [
    {
      name: "Eng. Inas Ghazwan Al-Tabbaa",
      position: "Studio Director",
      jobTitle: "Architectural Engineer & Design Lead",
      specialty: "Leads architectural direction, reviews drawings, and controls detail quality before execution.",
      icon: Building2,
    },
    {
      name: "Eng. Mohammad Al-Droubi",
      position: "Execution Lead",
      jobTitle: "Site Engineer & Workshop Manager",
      specialty: "Coordinates craftsmen, work schedules, and staged handover across fit-out and construction phases.",
      icon: HardHat,
    },
    {
      name: "Eng. Lana Al-Hassan",
      position: "Interior Design Department",
      jobTitle: "Interior Designer & Material Specialist",
      specialty: "Develops interior layouts, material boards, lighting moods, and practical user-focused details.",
      icon: PenTool,
    },
    {
      name: "Ahmad Al-Khatib",
      position: "Branding & Marketing Department",
      jobTitle: "Visual Identity & Digital Presence Coordinator",
      specialty: "Turns projects into clear visual presentations for facades, content, and client communication.",
      icon: BriefcaseBusiness,
    },
  ],
};

export default function TeamSection() {
  const { content, locale } = useLocale();
  const labels = locale === "ar" ? { position: "المركز", job: "الوظيفة" } : { position: "Position", job: "Job" };

  return (
    <section className="site-section section-surface py-16 sm:py-20">
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionTitle title={content.texts.teamTitle} description={content.texts.teamDescription} eyebrow="Team" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={staggerContainer}
          className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2 lg:grid-cols-4"
        >
          {teamProfiles[locale].map((member) => {
            const Icon = member.icon;

            return (
              <motion.article
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -7, scale: 1.01 }}
                data-cursor="active"
                className="group relative overflow-hidden border border-[var(--site-border)] bg-[var(--site-card)] p-5 backdrop-blur transition hover:border-brand-primary sm:p-6"
              >
                <div className="pointer-events-none absolute -end-10 -top-10 h-28 w-28 border border-brand-primary/30 bg-[var(--site-accent-soft)] transition group-hover:scale-110" />
                <div className="relative mb-5 flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center border border-brand-primary bg-brand-primary/20 text-brand-dark transition group-hover:bg-brand-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <BadgeCheck className="h-5 w-5 text-brand-secondary" />
                </div>
                <p className="relative text-xl font-black text-brand-dark">{member.name}</p>
                <div className="relative mt-4 space-y-2 border-y border-[var(--site-border)] py-4">
                  <p className="text-sm text-brand-gray">
                    <span className="font-black text-brand-dark">{labels.position}: </span>
                    {member.position}
                  </p>
                  <p className="text-sm text-brand-gray">
                    <span className="font-black text-brand-dark">{labels.job}: </span>
                    {member.jobTitle}
                  </p>
                </div>
                <p className="relative mt-4 leading-7 text-brand-gray">{member.specialty}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}