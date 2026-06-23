import Client from "./TeamMemberPageClient";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <Client slug={slug} />;
}
