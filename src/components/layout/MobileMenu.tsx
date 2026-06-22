"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { NavItem, type Locale } from "@/data/siteData";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";

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
  const isArabic = locale === "ar";

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          className="absolute inset-x-0 top-full border-t border-[var(--site-border)] bg-[var(--nav-bg)] p-4 shadow-[0_18px_40px_var(--site-shadow)] backdrop-blur"
          dir={isArabic ? "rtl" : "ltr"}
        >
          <nav className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={onClose} className="border border-[var(--site-border)] bg-[var(--site-card)] px-4 py-3 font-bold text-brand-dark transition hover:border-brand-primary hover:bg-[var(--site-accent-soft)]">
                {item.label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <ThemeToggle locale={locale} className="justify-center px-3 py-3 tracking-normal" />
              <button
                type="button"
                onClick={onLanguageToggle}
                dir={isArabic ? "rtl" : "ltr"}
                className={cn(
                  "inline-flex items-center justify-center gap-2 border border-[var(--site-border)] bg-[var(--site-card)] px-3 py-3 font-black text-brand-dark transition hover:border-brand-primary hover:bg-[var(--site-accent-soft)]",
                  isArabic ? "flex-row-reverse" : "flex-row",
                )}
              >
                <Languages className="h-4 w-4" />
                {isArabic ? "English" : "العربية"}
              </button>
            </div>
            <Link href={contactHref} onClick={onClose} className="border border-brand-primary bg-brand-primary px-4 py-3 text-center font-black text-[#232323] transition hover:bg-brand-secondary">
              {contactLabel}
            </Link>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}