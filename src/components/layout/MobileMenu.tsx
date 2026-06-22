"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { NavItem, type Locale } from "@/data/siteData";
import ThemeToggle from "./ThemeToggle";

type Props = {
  open: boolean;
  nav: NavItem[];
  contactHref: string;
  contactLabel: string;
  locale: Locale;
  onLanguageToggle: () => void;
  onClose: () => void;
};

export default function MobileMenu({ open, nav, contactHref, contactLabel, locale, onLanguageToggle, onClose }: Props) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          className="absolute inset-x-0 top-full border-t border-brand-dark/10 bg-[var(--nav-bg)] p-4 shadow-[0_18px_40px_rgba(35,35,35,0.12)] backdrop-blur dark:shadow-[0_18px_40px_rgba(0,0,0,0.38)]"
        >
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="border border-brand-dark/15 bg-[var(--site-card)] px-4 py-3 font-bold text-brand-dark transition hover:border-brand-primary">
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <ThemeToggle locale={locale} className="justify-center px-3 py-3 tracking-normal" />
              <button type="button" onClick={onLanguageToggle} className="inline-flex items-center justify-center gap-2 border border-brand-dark/15 bg-[var(--site-card)] px-3 py-3 font-black text-brand-dark transition hover:border-brand-primary">
                <Languages className="h-4 w-4" />
                {locale === "ar" ? "English" : "العربية"}
              </button>
            </div>
            <Link href={contactHref} onClick={onClose} className="border border-brand-dark bg-brand-dark px-4 py-3 text-center font-black text-[var(--site-bg)] transition hover:bg-brand-primary hover:text-brand-dark">
              {contactLabel}
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
