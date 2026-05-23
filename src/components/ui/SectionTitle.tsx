import AnimatedContainer from "./AnimatedContainer";

type Props = {
  title: string;
  description?: string;
  align?: "right" | "center";
};

export default function SectionTitle({ title, description, align = "right" }: Props) {
  return (
    <AnimatedContainer className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-8 text-zinc-300">{description}</p> : null}
    </AnimatedContainer>
  );
}
