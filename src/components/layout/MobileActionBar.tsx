"use client";

import Link from "next/link";
import { ArrowUpRight, FolderKanban, MessageCircle } from "lucide-react";
import { useSiteContent } from "@/context/LocaleContext";
import { siteData } from "@/data/siteData";

export default function MobileActionBar() {
  const content = useSiteContent();

  return (
    <div className="fixed inset-x-3 bottom-3 z-[70] md:hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border border-[var(--site-border)] bg-[var(--nav-bg)] p-2 shadow-[0_18px_44px_rgba(35,35,35,0.16)] backdrop-blur-xl dark:shadow-[0_18px_44px_rgba(0,0,0,0.42)]">
        <Link href="#projects" className="inline-flex items-center justify-center gap-2 border border-[var(--site-border)] bg-[var(--site-card)] px-3 py-3 text-xs font-black text-brand-dark">
          <FolderKanban className="h-4 w-4 text-brand-secondary" />
          {content.nav[3].label}
        </Link>

        <a
          href={`https://wa.me/${siteData.company.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="grid h-12 w-12 place-items-center border border-brand-primary bg-brand-primary text-[#232323] shadow-[0_0_22px_rgba(166,214,50,0.34)]"
        >
          <MessageCircle className="h-5 w-5" />
        </a>

        <Link href="#contact" className="inline-flex items-center justify-center gap-2 border border-brand-primary bg-[var(--site-inverse)] px-3 py-3 text-xs font-black text-[var(--site-inverse-text)]">
          {content.nav[4].label}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
