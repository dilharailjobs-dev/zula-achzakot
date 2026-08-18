import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

export default function Vision() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <SectionTitle eyebrow="Our Vision" title="Building for the Long Term" />
        <p className="max-w-2xl text-base leading-relaxed text-muted">
          Zula Achzakot&rsquo;s vision is to grow into a diversified Sri Lankan
          business group whose name stands for reliability, wherever it
          appears. We aim to build and support ventures that create genuine
          value for the people who depend on them — employees, customers, and
          partners alike — while expanding deliberately into new industries as
          the group matures. Growth, for us, is measured in trust as much as
          in scale.
        </p>
      </Container>
    </section>
  );
}
