"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const x = useMotionValue(-80);
  const y = useMotionValue(-80);
  const springX = useSpring(x, { stiffness: 420, damping: 34, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 420, damping: 34, mass: 0.4 });
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
      setVisible(true);

      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest("a, button, input, textarea, select, [data-cursor='active']")));
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: active ? 1.9 : 1,
      }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-9 w-9 rounded-full border border-[var(--cursor-border)] bg-[var(--cursor-fill)] mix-blend-multiply backdrop-blur-sm md:block dark:mix-blend-screen"
    >
      <motion.span
        animate={{ scale: active ? 0.32 : 1 }}
        transition={{ duration: 0.18 }}
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary"
      />
    </motion.div>
  );
}
