import AnimatedContainer from "./AnimatedContainer";

type Props = {
  title: string;
  description?: string;
  align?: "right" | "center";
  eyebrow?: string;
};

export default function SectionTitle({ title, description, align = "right", eyebrow }: Props) {
  return (
    <AnimatedContainer className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-brand-secondary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-tight text-brand-dark md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-8 text-brand-gray">{description}</p> : null}
    </AnimatedContainer>
  );
}
