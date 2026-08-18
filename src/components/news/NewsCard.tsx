import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsItem } from "@/types/news";
import { formatDate } from "@/lib/utils";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex flex-col border border-navy/10 bg-white p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-muted">
        {formatDate(item.date)}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight text-navy">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.excerpt}</p>
      <Link
        href={`/news/${item.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-teal"
      >
        Read More <ArrowRight size={16} />
      </Link>
    </article>
  );
}
