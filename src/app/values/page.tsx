import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { values } from "@/data/values";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Values | ${siteConfig.name}`,
  description: "Zula Achzakot's vision, mission, and core values.",
};

export default function ValuesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vision, Mission & Values"
        title="What Guides the Group"
        description="The principles every business under the Zula Achzakot name is expected to uphold."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle eyebrow="Our Vision" title="Building for the Long Term" />
            <p className="mt-6 text-base leading-relaxed text-muted">
              To grow into a diversified Sri Lankan business group whose name
              stands for reliability, wherever it appears — building ventures
              that create genuine, lasting value for the people who depend on
              them.
            </p>
          </div>
          <div>
            <SectionTitle eyebrow="Our Mission" title="How We Get There" />
            <p className="mt-6 text-base leading-relaxed text-muted">
              To build and steward businesses with integrity and
              professionalism, holding every venture within the group to the
              same standard, and expanding deliberately into new industries as
              the group matures.
            </p>
          </div>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 sm:py-28">
        <Container>
          <SectionTitle eyebrow="Our Values" title="What We Stand On" align="center" className="mx-auto" />
          <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10 border-t border-navy/10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-10"
              >
                <p className="w-16 shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
