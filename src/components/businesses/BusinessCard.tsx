import { ArrowUpRight } from "lucide-react";
import type { Business } from "@/types/business";

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="flex flex-col justify-between border border-navy/10 bg-background p-8 transition-colors hover:border-gold/50">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-navy">{business.name}</h3>
        <p className="mt-2 text-sm font-medium uppercase tracking-wide text-gold">
          {business.tagline}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{business.description}</p>
      </div>
      <a
        href={business.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-gold"
      >
        Visit Website <ArrowUpRight size={16} />
      </a>
    </div>
  );
}
