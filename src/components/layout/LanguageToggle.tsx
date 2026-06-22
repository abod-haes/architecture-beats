"use client";

import { Languages } from "lucide-react";
import type { Locale } from "@/data/siteData";
import { cn } from "@/lib/utils";

type Props = {
  locale: Locale;
  onToggle: () => void;
  className?: string;
};

export default function LanguageToggle({ locale, onToggle, className }: Props) {
  const isArabic = locale === "ar";
  const label = isArabic ? "EN" : "AR";
  const fullLabel = isArabic ? "Switch to English" : "الانتقال للعربية";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={fullLabel}
      dir={isArabic ? "rtl" : "ltr"}
      className={cn(
        "inline-flex items-center gap-2 border border-[var(--site-border)] bg-[var(--site-card)] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-dark shadow-[8px_8px_0_var(--site-shadow)] transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary/20",
        isArabic ? "flex-row-reverse" : "flex-row",
        className,
      )}
    >
      <Languages className="h-4 w-4" />
      {label}
    </button>
  );
}