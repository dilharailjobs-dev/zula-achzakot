import type { Metadata } from "next";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}.`,
};

const sections = [
  {
    title: "Information We Collect",
    body: "When you use this website — for example, by submitting our contact form — we may collect information you provide directly, such as your name, email address, phone number, and the content of your message.",
  },
  {
    title: "How We Use Information",
    body: "Information submitted through this website is used solely to respond to your enquiry and to communicate with you about Zula Achzakot. We do not sell or rent your personal information to third parties.",
  },
  {
    title: "Cookies",
    body: "This website does not currently use tracking or advertising cookies. Should this change, this policy will be updated accordingly.",
  },
  {
    title: "Third-Party Websites",
    body: "This website links to the independent websites of Zula Foreign Agency and Zula Hostels, and to third-party social media platforms. Each of these has its own privacy practices, which we encourage you to review separately.",
  },
  {
    title: "Contact",
    body: `Questions about this policy can be directed to ${siteConfig.email}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
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
