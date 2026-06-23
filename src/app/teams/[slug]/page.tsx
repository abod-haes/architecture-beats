import { notFound } from "next/navigation";
import { teamSlugs } from "@/data/teamProfiles";
import Client from "./TeamMemberPageClient";

export function generateStaticParams() {
  return teamSlugs.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  if (!teamSlugs.includes(slug as (typeof teamSlugs)[number])) {
    notFound();
  }

  return <Client slug={slug} />;
}
