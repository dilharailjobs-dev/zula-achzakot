import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { siteConfig } from "@/config/site";

export default function Introduction() {
  return (
    <section className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {siteConfig.name}
        </p>
        <h2 className="mt-4 text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl">
          A Sri Lankan business group building businesses across employment,
          accommodation, and future ventures.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Zula Achzakot exists to build and steward businesses that last. Each
          venture within the group operates independently, serving its own
          customers and markets, while sharing a common commitment to
          integrity, professionalism, and long-term thinking. As the group
          grows, this commitment stays constant — it is the standard every
          business under the Zula Achzakot name is expected to meet.
        </p>
        <div className="mt-8">
          <Button href="/businesses" variant="secondary">
            Our Businesses
          </Button>
        </div>
      </Container>
    </section>
  );
}
