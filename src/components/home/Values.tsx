import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { values } from "@/data/values";

export default function Values() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Our Values" title="What We Stand On" align="center" className="mx-auto" />
        <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy/10 border-t border-navy/10">
          {values.map((value, index) => (
            <div key={value.title} className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-10">
              <p className="w-16 shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
