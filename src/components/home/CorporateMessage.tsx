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
      <Container>
        <div className="border border-white/15 p-8 sm:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            From the Chairman
          </p>
          <blockquote className="mt-8 max-w-3xl text-2xl font-medium leading-snug tracking-tight sm:text-4xl">
            &ldquo;A business group is only as strong as the trust it
            earns.&rdquo;
          </blockquote>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
            Every venture we build is measured against that standard, today
            and for the long term.
          </p>
          <div className="mt-10 flex items-center justify-end gap-4 border-t border-white/10 pt-8 sm:mt-14">
            <div className="text-right">
              <p className="text-sm font-semibold">{chairman.name}</p>
              <p className="text-xs uppercase tracking-wide text-white/60">{chairman.title}</p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 text-base font-semibold uppercase tracking-wide text-gold">
              {initials}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
