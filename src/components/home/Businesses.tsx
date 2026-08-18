import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import BusinessCard from "@/components/businesses/BusinessCard";
import { businesses } from "@/data/businesses";

export default function Businesses() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Businesses"
          title="Two Ventures, One Group"
          description="Zula Achzakot is the corporate group behind a growing portfolio of independent businesses. Each one operates on its own, with its own website — this is where the group presents them and links out."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
  );
}
