import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHeader from "@/components/common/PageHeader";
import Container from "@/components/common/Container";
import ContactForm from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: "Get in touch with the Zula Achzakot corporate team.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact Zula Achzakot"
        description="Interested in learning more about the group? Get in touch with our corporate team."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Corporate Office
            </h2>
            <ul className="mt-6 space-y-5 text-sm text-navy">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{siteConfig.address}</span>
              </li>
            </ul>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
