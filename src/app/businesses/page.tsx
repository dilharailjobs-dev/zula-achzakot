import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import BusinessCard from "@/components/businesses/BusinessCard";
import { businesses } from "@/data/businesses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Our Businesses | ${siteConfig.name}`,
  description: "An overview of the businesses within the Zula Achzakot group.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Businesses"
        title="Two Ventures, One Group"
        description="Zula Achzakot presents the group's businesses here and links out to each business's own website. Job listings, bookings, and other customer-facing details live on each business's own site."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {businesses.map((business) => (
              <BusinessCard key={business.id} business={business} />
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between border border-dashed border-navy/20 bg-background px-8 py-6">
            <p className="text-sm font-medium uppercase tracking-wide text-muted">
              Future Ventures
            </p>
            <p className="text-sm text-muted">Coming as the group grows</p>
          </div>
        </Container>
      </section>
    </>
  );
}
