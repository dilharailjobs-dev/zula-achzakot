import Container from "@/components/common/Container";
import SectionPattern from "@/components/common/SectionPattern";

export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-navy/10 bg-navy text-white">
      <SectionPattern />
      <Container className="relative py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">{description}</p>
        )}
      </Container>
    </section>
  );
}
