import Link from "next/link";
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
      className={cn(
        "inline-flex items-center justify-center rounded-none border px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300",
        variant === "primary"
          ? "border-brand-primary bg-brand-primary text-brand-dark shadow-[0_0_35px_rgba(166,214,50,0.45)] hover:-translate-y-1 hover:bg-brand-secondary"
          : "border-brand-primary/60 bg-black/30 text-brand-primary hover:-translate-y-1 hover:bg-brand-primary/10",
        className,
      )}
    >
      {label}
    </Link>
  );
}
