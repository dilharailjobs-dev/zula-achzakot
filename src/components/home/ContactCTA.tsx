import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

export default function ContactCTA() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 sm:py-24">
      <Container className="flex flex-col items-center gap-8 text-center">
        <div className="max-w-xl">
          <h2 className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Interested in learning more about Zula Achzakot?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Get in touch with our corporate team.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
          <Button href="/businesses" variant="secondary">
            Our Businesses
          </Button>
        </div>
      </Container>
    </section>
  );
}
