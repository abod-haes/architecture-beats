"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "@/data/siteData";
import MobileMenu from "./MobileMenu";
import GlowButton from "../ui/GlowButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={`transition-all duration-300 ${isScrolled ? "bg-[#161616]/95 shadow-[0_8px_30px_rgba(0,0,0,0.4)] backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex h-20 w-[92%] max-w-7xl items-center justify-between">
          <Link href="/" className="text-right">
            <div className="flex items-center">
              <img src="/logo.png" alt={siteData.company.nameEn} className="h-12 w-auto object-contain" loading="eager" />
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {siteData.nav.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-zinc-200 transition hover:text-brand-primary">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <GlowButton label={siteData.nav[4].label} href={siteData.nav[4].href} className="px-5 py-2.5" />
          </div>

          <button onClick={() => setOpen((v) => !v)} className="text-brand-primary md:hidden" aria-label={siteData.nav[4].label}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <div className="relative md:hidden">
        <MobileMenu
          open={open}
          nav={siteData.nav}
          contactHref={siteData.nav[4].href}
          contactLabel={siteData.nav[4].label}
          onClose={() => setOpen(false)}
        />
      </div>
    </header>
  );
}
