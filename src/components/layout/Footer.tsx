"use client";

import Link from "next/link";
import { useSiteContent } from "@/context/LocaleContext";

export default function Footer() {
  const content = useSiteContent();

  return (
    <footer className="relative overflow-hidden border-t border-[var(--footer-border)] bg-[linear-gradient(135deg,var(--footer-bg)_0%,var(--footer-bg-soft)_54%,var(--footer-bg)_100%)] text-[var(--footer-text)]">
      <div className="blueprint-grid absolute inset-0 opacity-10" />
      <div className="absolute -end-24 top-8 h-72 w-72 rounded-full bg-brand-primary/10 blur-3xl" />
      <div className="relative mx-auto grid w-[92%] max-w-7xl gap-10 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt={content.company.nameEn}
              className="h-14 w-auto object-contain brightness-0 invert"
              loading="lazy"
            />
          </div>
          <p className="mt-5 max-w-xs leading-7 text-[var(--footer-muted)]">
            {content.hero.description}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-brand-primary">
            {content.footer.quickLinksTitle}
          </h3>
          <ul className="space-y-2 text-[var(--footer-muted)]">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-brand-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-brand-primary">
            {content.footer.servicesTitle}
          </h3>
          <ul className="space-y-2 text-[var(--footer-muted)]">
            {content.services.slice(0, 4).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-brand-primary">
            {content.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-[var(--footer-muted)]">
            <li dir="ltr" className="font-semibold text-[var(--footer-text)]">
              {content.company.phone}
            </li>
            <li dir="ltr" className="font-semibold text-[var(--footer-text)]">
              {content.company.mobile}
            </li>
            <li className="break-words transition hover:text-brand-primary">
              {content.company.email}
            </li>
            <li>{content.company.address}</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-[var(--footer-border)] py-4 text-center text-sm text-[var(--footer-muted)]">
        {content.footer.rights} © {new Date().getFullYear()} {content.company.nameEn}
      </div>
    </footer>
  );
}
