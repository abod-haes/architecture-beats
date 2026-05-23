import { MessageCircle } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteData.company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="واتساب"
      className="fixed bottom-6 left-6 z-50 inline-flex items-center gap-2 border border-brand-primary/70 bg-brand-primary px-4 py-3 font-bold text-brand-dark shadow-[0_0_28px_rgba(166,214,50,0.45)] transition hover:-translate-y-1 hover:bg-brand-secondary"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm">واتساب</span>
    </a>
  );
}
