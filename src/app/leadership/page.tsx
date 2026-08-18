import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import LeaderCard from "@/components/leadership/LeaderCard";
import { leadership } from "@/data/leadership";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Leadership | ${siteConfig.name}`,
  description: "Meet the leadership team behind Zula Achzakot.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title="Our Leadership Team"
        description="The people responsible for the group's direction, governance, and day-to-day operations."
      />

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((leader) => (
              <LeaderCard key={leader.id} leader={leader} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
