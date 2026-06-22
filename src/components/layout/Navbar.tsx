"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import GlowButton from "../ui/GlowButton";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLocale } from "@/context/LocaleContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { content, locale, toggleLocale, dir } = useLocale();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50" dir={dir}>
      <div className={`transition-all duration-300 ${isScrolled ? "border-b border-brand-dark/10 bg-[var(--nav-bg)] shadow-[0_12px_32px_rgba(35,35,35,0.08)] backdrop-blur dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
          <Link href="/" className="text-right" onClick={() => setOpen(false)}>
            <div className="flex items-center">
              <img src="/logo.png" alt={content.company.nameEn} className="h-12 w-auto object-contain" loading="eager" />
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {content.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-brand-dark transition hover:text-brand-secondary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle locale={locale} />
            <LanguageToggle locale={locale} onToggle={toggleLocale} />
            <GlowButton label={content.nav[4].label} href={content.nav[4].href} className="px-5 py-2.5" />
          </div>

          <button onClick={() => setOpen((v) => !v)} className="text-brand-dark md:hidden" aria-label={content.nav[4].label}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className="relative md:hidden">
        <MobileMenu
          open={open}
          nav={content.nav}
          contactHref={content.nav[4].href}
          contactLabel={content.nav[4].label}
          locale={locale}
          onLanguageToggle={toggleLocale}
          onClose={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
