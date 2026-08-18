import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Container from "@/components/common/Container";
import { news } from "@/data/news";
import { siteConfig } from "@/config/site";
import { formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    return { title: `News | ${siteConfig.name}` };
  }

  return {
    title: `${item.title} | ${siteConfig.name}`,
    description: item.excerpt,
  };
}

export default async function NewsArticlePage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const item = news.find((entry) => entry.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <article className="py-20 sm:py-28">
      <Container className="max-w-3xl">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-teal"
        >
          <ArrowLeft size={16} /> All News
        </Link>

        <p className="mt-8 text-xs font-medium uppercase tracking-wide text-muted">
          {formatDate(item.date)}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          {item.title}
        </h1>
        <p className="mt-8 text-base leading-relaxed text-muted">{item.content}</p>
      </Container>
    </article>
  );
}
