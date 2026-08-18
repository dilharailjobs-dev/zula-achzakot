import Container from "@/components/common/Container";
import { businesses } from "@/data/businesses";

const stats = [
  { value: String(businesses.length).padStart(2, "0"), label: "Businesses" },
  { value: "01", label: "Corporate Group" },
  { value: "Sri Lanka", label: "Home Market" },
];

export default function GroupAtGlance() {
  return (
    <section className="border-t border-navy/10 bg-background py-16 sm:py-20">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          The Zula Group
        </p>
        <div className="mt-10 grid grid-cols-1 divide-y divide-navy/10 border border-navy/10 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-8 py-10 text-center">
              <p className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
