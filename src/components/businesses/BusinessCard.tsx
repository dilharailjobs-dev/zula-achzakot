import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Business } from "@/types/business";
import { withBasePath } from "@/lib/utils";

export default function BusinessCard({ business }: { business: Business }) {
  return (
    <div className="group flex flex-col border border-navy/10 bg-white transition-colors hover:border-teal/50">
      {business.image && (
        <div className="relative h-56 w-full overflow-hidden sm:h-64">
          <Image
            src={withBasePath(business.image)}
            alt={business.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-between p-8">
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
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-teal"
        >
          Explore Business <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  );
}
