import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: "Learn about Zula Achzakot, a Sri Lankan business group building ventures across employment, accommodation, and future industries.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="About Zula Achzakot"
        description="A Sri Lankan business group building businesses across employment, accommodation, and future ventures."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionTitle eyebrow="Who We Are" title="A Group, Not a Single Business" />
          <p className="mt-6 text-base leading-relaxed text-muted">
            Zula Achzakot is the corporate parent that owns and presents a
            growing family of Sri Lankan businesses. Each venture within the
            group — from international employment services to hospitality and
            accommodation — operates independently, with its own customers,
            operations, and website. Zula Achzakot&rsquo;s role is to bring these
            businesses together under one identity, one standard, and one
            long-term direction.
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            We are not a foreign employment agency, and we are not a hostel
            brand. We are the group that stands behind those businesses —
            responsible for the standards they are held to, the values they
            share, and the direction they grow in together.
          </p>
        </Container>
      </section>

      <section className="border-t border-navy/10 bg-white py-20 sm:py-28">
        <Container className="max-w-3xl">
          <SectionTitle eyebrow="Our Structure" title="How the Group Is Organized" />
          <div className="mt-10 border border-navy/10 bg-background p-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-navy">
              Zula Achzakot
            </p>
            <p className="text-xs uppercase tracking-wide text-muted">Corporate / Parent</p>
            <div className="mx-auto mt-8 grid max-w-lg gap-4 sm:grid-cols-2">
              <div className="border border-navy/10 bg-white p-5">
                <p className="text-sm font-semibold text-navy">Zula Foreign Agency</p>
                <p className="mt-1 text-xs text-muted">International employment & recruitment</p>
              </div>
              <div className="border border-navy/10 bg-white p-5">
                <p className="text-sm font-semibold text-navy">Zula Hostels</p>
                <p className="mt-1 text-xs text-muted">Accommodation & hospitality services</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
