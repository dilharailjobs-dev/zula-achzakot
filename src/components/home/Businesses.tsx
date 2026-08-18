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
          description="Zula Achzakot presents the group's businesses here and links out to each business's own website."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} />
          ))}
        </div>
      </Container>
    </section>
  );
}
