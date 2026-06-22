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
  const label = locale === "ar" ? (isDark ? "لايت" : "دارك") : isDark ? "Light" : "Dark";
  const ariaLabel = locale === "ar" ? (isDark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن") : isDark ? "Enable light mode" : "Enable dark mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex items-center gap-2 border border-brand-dark/20 bg-[var(--site-card)] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-brand-dark shadow-[8px_8px_0_rgba(35,35,35,0.08)] transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary/20 dark:border-white/15 dark:shadow-[8px_8px_0_rgba(166,214,50,0.12)]",
        className,
      )}
    >
      <span className="grid h-5 w-5 place-items-center border border-current/20 bg-brand-primary/15">
        {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
      </span>
      {label}
    </button>
  );
}
