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
  const label = locale === "ar" ? "EN" : "AR";
  const fullLabel = locale === "ar" ? "Switch to English" : "الانتقال للعربية";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={fullLabel}
      className={cn(
        "inline-flex items-center gap-2 border border-brand-dark/20 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-brand-dark shadow-[8px_8px_0_rgba(35,35,35,0.08)] transition hover:-translate-y-0.5 hover:border-brand-primary hover:bg-brand-primary/20",
        className,
      )}
    >
      <Languages className="h-4 w-4" />
      {label}
    </button>
  );
}
