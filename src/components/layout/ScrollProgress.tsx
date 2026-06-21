"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useLocale } from "@/context/LocaleContext";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const { dir } = useLocale();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.35,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-1 bg-brand-primary shadow-[0_0_24px_rgba(166,214,50,0.45)]"
      style={{ scaleX, transformOrigin: dir === "rtl" ? "right" : "left" }}
    />
  );
}
