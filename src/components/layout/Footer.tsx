"use client";

import Link from "next/link";
import { useSiteContent } from "@/context/LocaleContext";

export default function Footer() {
  const content = useSiteContent();

  return (
    <footer className="border-t border-[var(--site-border)] bg-[var(--site-inverse)] text-[var(--site-inverse-text)]">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt={content.company.nameEn}
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
          <p className="mt-5 max-w-xs leading-7 opacity-70">{content.hero.description}</p>
        </div>
        <div>
          <h3 className="mb-4 font-black">
            {content.footer.quickLinksTitle}
          </h3>
          <ul className="space-y-2 opacity-75">
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
          <h3 className="mb-4 font-black">
            {content.footer.servicesTitle}
          </h3>
          <ul className="space-y-2 opacity-75">
            {content.services.slice(0, 4).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-black">
            {content.footer.contactTitle}
          </h3>
          <ul className="space-y-2 opacity-75">
            <li dir="ltr" className="text-left">
              {content.company.phone}
            </li>
            <li dir="ltr" className="text-left">
              {content.company.mobile}
            </li>
            <li className="break-words">{content.company.email}</li>
            <li>{content.company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-current/10 py-4 text-center text-sm opacity-60">
        {content.footer.rights} © {new Date().getFullYear()} {content.company.nameEn}
      </div>
    </footer>
  );
}
