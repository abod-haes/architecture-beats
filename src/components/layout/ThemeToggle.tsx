"use client";

import { Moon, Sun } from "lucide-react";
import type { Locale } from "@/data/siteData";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  className?: string;
};

export default function ThemeToggle({ locale, className }: Props) {
  const { isDark, toggleTheme } = useTheme();
  const isArabic = locale === "ar";
  const currentLabel = isArabic ? (isDark ? "دارك" : "لايت") : isDark ? "Dark" : "Light";
  const nextLabel = isArabic ? (isDark ? "الوضع الفاتح" : "الوضع الداكن") : isDark ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={nextLabel}
      title={nextLabel}
      dir={isArabic ? "rtl" : "ltr"}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full border border-[var(--site-border)] bg-[var(--site-card)] px-2.5 py-2 text-xs font-black text-brand-dark shadow-[8px_8px_0_var(--site-shadow)] transition duration-300 hover:-translate-y-0.5 hover:border-brand-primary hover:bg-[var(--site-accent-soft)] focus:outline-none focus:ring-2 focus:ring-brand-primary/40",
        isArabic ? "flex-row-reverse" : "flex-row",
        className,
      )}
    >
      <span
        dir="ltr"
        className={cn(
          "relative h-7 w-14 overflow-hidden rounded-full border border-[var(--site-border)] bg-[var(--site-muted)] transition duration-300 group-hover:border-brand-primary",
          isDark && "bg-[#1f241b]",
        )}
        aria-hidden="true"
      >
        <span className="absolute inset-y-0 left-1 grid place-items-center text-brand-primary">
          <Sun className="h-3.5 w-3.5" />
        </span>
        <span className="absolute inset-y-0 right-1 grid place-items-center text-brand-primary">
          <Moon className="h-3.5 w-3.5" />
        </span>
        <span className={cn("absolute top-1 h-5 w-5 rounded-full bg-brand-primary transition-transform duration-300", isDark ? "translate-x-7" : "translate-x-1")} />
      </span>
      <span className={cn("min-w-9 text-center text-[var(--site-text)] transition group-hover:text-brand-primary", isArabic ? "tracking-normal" : "uppercase tracking-[0.14em]")}>{currentLabel}</span>
    </button>
  );
}