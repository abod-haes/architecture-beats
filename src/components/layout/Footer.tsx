import Link from "next/link";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-brand-primary/20 bg-[#131313]">
      <div className="mx-auto grid w-[92%] max-w-7xl gap-8 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt={siteData.company.nameEn}
              className="h-14 w-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">
            {siteData.footer.quickLinksTitle}
          </h3>
          <ul className="space-y-2 text-zinc-300">
            {siteData.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-brand-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">
            {siteData.footer.servicesTitle}
          </h3>
          <ul className="space-y-2 text-zinc-300">
            {siteData.services.slice(0, 4).map((item) => (
              <li key={item.title}>{item.title}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold text-white">
            {siteData.footer.contactTitle}
          </h3>
          <ul className="space-y-2 text-zinc-300">
            <li dir="ltr" className="[unicode-bidi:isolate] text-right">
              {siteData.company.phone}
            </li>
            <li dir="ltr" className="[unicode-bidi:isolate] text-right">
              {siteData.company.mobile}
            </li>
            <li>{siteData.company.email}</li>
            <li>{siteData.company.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-800 py-4 text-center text-sm text-zinc-400">
        {siteData.footer.rights} © {new Date().getFullYear()}{" "}
        {siteData.company.nameEn}
      </div>
    </footer>
  );
}
