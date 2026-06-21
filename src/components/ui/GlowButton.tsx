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
        "inline-flex items-center justify-center border px-6 py-3 text-sm font-black tracking-wide transition-all duration-300",
        variant === "primary"
          ? "border-brand-dark bg-brand-dark text-white shadow-[8px_8px_0_rgba(166,214,50,0.45)] hover:-translate-y-1 hover:bg-brand-primary hover:text-brand-dark"
          : "border-brand-dark/25 bg-white/70 text-brand-dark hover:-translate-y-1 hover:border-brand-primary hover:bg-brand-primary/15",
        className,
      )}
    >
      {label}
    </Link>
  );
}
