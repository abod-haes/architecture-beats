"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import GlowButton from "../ui/GlowButton";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { useLocale } from "@/context/LocaleContext";
import type { NavItem } from "@/data/siteData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { content, locale, toggleLocale, dir } = useLocale();

  const navItems = useMemo<NavItem[]>(() => {
    const teamItem: NavItem = { label: locale === "ar" ? "الفريق" : "Team", href: "/teams" };

    if (content.nav.some((item) => item.href === teamItem.href)) {
      return content.nav;
    }

    const contactIndex = content.nav.findIndex((item) => item.href === "/contact");
    if (contactIndex === -1) {
      return [...content.nav, teamItem];
    }

    return [...content.nav.slice(0, contactIndex), teamItem, ...content.nav.slice(contactIndex)];
  }, [content.nav, locale]);

  const contactItem = navItems.find((item) => item.href === "/contact") ?? navItems[navItems.length - 1];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50" dir={dir}>
      <div className={`transition-all duration-300 ${isScrolled || open ? "border-b border-[var(--site-border)] bg-[var(--nav-bg)] shadow-[0_12px_32px_var(--site-shadow)] backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
          <Link href="/" className="text-right" onClick={() => setOpen(false)}>
            <div className="flex items-center">
              <img src="/logo.png" alt={content.company.nameEn} className="h-12 w-auto object-contain" loading="eager" />
            </div>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-bold text-brand-dark transition hover:text-brand-secondary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle locale={locale} />
            <LanguageToggle locale={locale} onToggle={toggleLocale} />
            <GlowButton label={contactItem.label} href={contactItem.href} className="px-5 py-2.5" />
          </div>

          <button onClick={() => setOpen((v) => !v)} className="border border-[var(--site-border)] bg-[var(--site-card)] p-2 text-brand-dark md:hidden" aria-label={contactItem.label}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className="relative md:hidden">
        <MobileMenu
          open={open}
          nav={navItems}
          contactHref={contactItem.href}
          contactLabel={contactItem.label}
          locale={locale}
          onLanguageToggle={toggleLocale}
          onClose={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
