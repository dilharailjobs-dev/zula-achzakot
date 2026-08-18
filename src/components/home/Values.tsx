import { ShieldCheck, Eye, Award, Users, TrendingUp } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { values } from "@/data/values";

const icons = [ShieldCheck, Eye, Award, Users, TrendingUp];

export default function Values() {
  return (
    <section className="border-t border-navy/10 bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Our Values" title="What We Stand On" align="center" className="mx-auto" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div key={value.title} className="border border-navy/10 p-6">
                <Icon size={22} className="text-teal" strokeWidth={1.75} />
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
