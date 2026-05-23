"use client";

import { motion } from "framer-motion";
import { siteData } from "@/data/siteData";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function ProjectsSection() {
  return (
    <section className="mx-auto w-[92%] max-w-7xl py-20">
      <SectionTitle title={siteData.nav[3].label} />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {siteData.projects.map((project) => (
          <motion.div key={project.title} variants={fadeUp}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
