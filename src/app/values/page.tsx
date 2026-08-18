import type { Metadata } from "next";
import { ShieldCheck, Eye, Award, Users, TrendingUp } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { values } from "@/data/values";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Values | ${siteConfig.name}`,
  description: "Zula Achzakot's vision, mission, and core values.",
};

const icons = [ShieldCheck, Eye, Award, Users, TrendingUp];

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
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div key={value.title} className="border border-navy/10 p-6">
                  <Icon size={22} className="text-gold" strokeWidth={1.75} />
                  <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
