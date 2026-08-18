import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";

const pillars = [
  {
    step: "01",
    title: "Build",
    description: "We establish businesses designed for long-term value.",
  },
  {
    step: "02",
    title: "Operate",
    description: "Each business operates independently, with professional standards.",
  },
  {
    step: "03",
    title: "Grow",
    description: "We expand carefully into new industries and opportunities.",
  },
];

export default function Vision() {
  return (
    <section className="bg-navy-deep py-20 text-white sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <SectionTitle eyebrow="Our Vision" title="Building for the Long Term" variant="dark" />
          <p className="max-w-2xl text-base leading-relaxed text-white/70">
            Zula Achzakot&rsquo;s vision is to grow into a diversified Sri
            Lankan business group whose name stands for reliability, wherever
            it appears. We aim to build and support ventures that create
            genuine value for the people who depend on them — employees,
            customers, and partners alike — while expanding deliberately into
            new industries as the group matures. Growth, for us, is measured
            in trust as much as in scale.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-white/10 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.step} className="bg-navy-deep p-8 sm:border-l sm:border-white/10 sm:first:border-l-0">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                {pillar.step}
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{pillar.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
