import Container from "@/components/common/Container";
import { leadership } from "@/data/leadership";

export default function CorporateMessage() {
  const chairman = leadership[0];
  const initials = chairman.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <section className="bg-navy py-20 text-white sm:py-28">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          A Message From Our Chairman
        </p>
        <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          &ldquo;Zula Achzakot was built on a simple belief — that a business
          group is only as strong as the trust it earns. Every venture we
          build is measured against that standard, today and for the long
          term.&rdquo;
        </blockquote>
        <div className="mt-8 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center border border-white/20 text-sm font-semibold uppercase tracking-wide text-gold">
            {initials}
          </span>
          <div>
            <p className="text-sm font-semibold">{chairman.name}</p>
            <p className="text-xs uppercase tracking-wide text-white/60">{chairman.title}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
