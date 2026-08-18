import Image from "next/image";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { withBasePath } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <Image
        src={withBasePath("/images/hero/hero-main.jpg")}
        alt="Colombo skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/60" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(0deg, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative py-28 sm:py-36 lg:py-44">
        <div className="max-w-3xl border-l-2 border-gold pl-6 sm:pl-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            A Sri Lankan Business Group
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Building Businesses. Creating Opportunities. Growing Together.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Zula Achzakot is the corporate group behind a growing portfolio of
            independent businesses across employment, accommodation, and
            future industries.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/businesses" variant="onDark">
              Our Businesses
            </Button>
            <Button href="/contact" variant="onDarkOutline">
              Contact Zula Achzakot
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
