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
      x.set(event.clientX - 20);
      y.set(event.clientY - 20);
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
        scale: active ? 1.65 : 1,
        borderColor: active ? "var(--cursor-ring-active)" : "var(--cursor-ring)",
        backgroundColor: active ? "var(--cursor-active-fill)" : "rgba(255,255,255,0)",
        boxShadow: active
          ? "0 0 0 1px var(--cursor-ring-active), 0 16px 38px var(--cursor-shadow)"
          : "0 10px 28px rgba(0,0,0,0.06)",
      }}
      transition={{ duration: 0.18 }}
      className="pointer-events-none fixed left-0 top-0 z-[95] hidden h-10 w-10 rounded-full border-2 backdrop-blur-[2px] will-change-transform md:block"
    >
      <motion.span
        animate={{
          opacity: active ? 0.95 : 0.7,
          scale: active ? 0.58 : 1,
          backgroundColor: "var(--cursor-dot)",
        }}
        transition={{ duration: 0.18 }}
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
    </motion.div>
  );
}
