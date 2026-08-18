import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import NewsCard from "@/components/news/NewsCard";
import { news } from "@/data/news";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `News | ${siteConfig.name}`,
  description: "Corporate news and updates from Zula Achzakot.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="From the Group"
        description="Corporate news and updates from Zula Achzakot."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
