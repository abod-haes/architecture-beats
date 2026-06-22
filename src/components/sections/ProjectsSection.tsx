"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSiteContent } from "@/context/LocaleContext";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

export default function ProjectsSection() {
  const content = useSiteContent();
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="projects" ref={ref} className="site-section relative overflow-hidden py-16 sm:py-20">
      <motion.div style={{ y }} className="blueprint-grid absolute inset-0 -z-10 opacity-45" />
      <div className="mx-auto w-[92%] max-w-7xl">
        <SectionTitle title={content.texts.projectsTitle} description={content.texts.projectsDescription} eyebrow="Portfolio" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.12 }}
          variants={staggerContainer}
          className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 lg:grid-cols-2"
        >
          {content.projects.map((project) => (
            <ProjectCard key={project.title} project={project} labels={content.texts.projectLabels} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
