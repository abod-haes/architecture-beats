import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
};

export default function GlowButton({ label, href, variant = "primary", className }: Props) {
  return (
    <Link
      href={href}
      data-cursor="active"
      className={cn(
        "group inline-flex items-center justify-center gap-2 border px-6 py-3 text-sm font-black tracking-wide transition-all duration-300",
        variant === "primary"
          ? "border-brand-primary bg-brand-primary text-[#232323] shadow-[10px_10px_0_rgba(35,35,35,0.12)] hover:-translate-y-1 hover:bg-brand-secondary dark:shadow-[10px_10px_0_rgba(166,214,50,0.14)]"
          : "border-[var(--site-border)] bg-[var(--site-card)] text-brand-dark hover:-translate-y-1 hover:border-brand-primary hover:bg-brand-primary/15",
        className,
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
}
