import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import NewsCard from "@/components/news/NewsCard";
import { news } from "@/data/news";

export default function NewsPreview() {
  const latest = news.slice(0, 3);

  return (
    <section className="border-t border-navy/10 bg-background py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="News & Updates" title="From the Group" />
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-gold"
          >
            View All News <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {latest.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
