"use client";

import { motion } from "framer-motion";
import { useSiteContent } from "@/context/LocaleContext";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { staggerContainer } from "@/lib/motion";

export default function ProjectsSection() {
  const content = useSiteContent();

  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={content.texts.projectsTitle} description={content.texts.projectsDescription} eyebrow="Portfolio" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.12 }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 lg:grid-cols-2"
      >
        {content.projects.map((project) => (
          <ProjectCard key={project.title} project={project} labels={content.texts.projectLabels} />
        ))}
      </motion.div>
    </section>
  );
}
