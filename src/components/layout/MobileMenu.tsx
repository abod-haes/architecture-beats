"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { NavItem } from "@/data/siteData";

type Props = {
  open: boolean;
  nav: NavItem[];
  contactHref: string;
  contactLabel: string;
  onClose: () => void;
};

export default function MobileMenu({ open, nav, contactHref, contactLabel, onClose }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute inset-x-0 top-full border-t border-brand-primary/30 bg-[#1a1a1a]/95 p-4 backdrop-blur"
        >
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="border border-zinc-700 px-4 py-3 text-zinc-200">
                {item.label}
              </Link>
            ))}
            <Link href={contactHref} onClick={onClose} className="border border-brand-primary bg-brand-primary px-4 py-3 text-center font-bold text-brand-dark">
              {contactLabel}
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
