"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function AnimatedContainer({ children, className }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
