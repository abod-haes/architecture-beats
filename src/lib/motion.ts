import type { Variants } from "framer-motion";

const smoothEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 34, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: smoothEase } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.68, ease: smoothEase } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: 44, scale: 0.98 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.72, ease: smoothEase } },
};

export const drawIn: Variants = {
  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
  visible: { opacity: 1, clipPath: "inset(0 0% 0 0)", transition: { duration: 0.82, ease: smoothEase } },
};
