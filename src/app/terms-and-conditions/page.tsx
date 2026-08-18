import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.name}`,
  description: `Terms & Conditions for ${siteConfig.name}.`,
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: `By accessing this website, you agree to these terms and conditions. If you do not agree, please discontinue use of the site.`,
  },
  {
    title: "Scope of This Website",
    body: `This website presents ${siteConfig.name} as a corporate group. It does not process job applications, bookings, or payments. Those services are handled directly by each business's own website.`,
  },
  {
    title: "Intellectual Property",
    body: `All content on this website, including text, graphics, and the ${siteConfig.name} name and logo, is the property of ${siteConfig.legalName} unless otherwise stated.`,
  },
  {
    title: "Limitation of Liability",
    body: `${siteConfig.name} makes reasonable efforts to keep the information on this website accurate and up to date, but makes no warranties about its completeness or reliability.`,
  },
  {
    title: "Governing Law",
    body: "These terms are governed by the laws of Sri Lanka.",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        description="This is a sample policy prepared for development purposes and does not constitute legal advice."
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-semibold tracking-tight text-navy">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
