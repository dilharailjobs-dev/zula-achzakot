import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import SectionPattern from "@/components/common/SectionPattern";
import { siteConfig, navLinks } from "@/config/site";
import { businessLinks, legalLinks } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/zulaachzakot" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zulaachzakot" },
  { label: "Instagram", href: "https://instagram.com/zulaachzakot" },
];

const companyLinks = navLinks.filter((link) =>
  ["/about", "/leadership", "/values", "/news"].includes(link.href)
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-navy/10 bg-navy text-white">
      <SectionPattern />
      <Container className="relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center bg-white p-1.5">
              <Image
                src={withBasePath(siteConfig.logoIcon)}
                alt={`${siteConfig.name} logo`}
                width={519}
                height={623}
                className="h-full w-auto"
              />
            </span>
            <div>
              <p className="text-lg font-bold tracking-wide">{siteConfig.name.toUpperCase()}</p>
              <p className="text-sm text-white/70">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-[22ch] text-sm leading-relaxed text-white/70">
            Building businesses. Creating opportunities. Growing together.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Business</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {businessLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Company
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-teal">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-teal" />
              <span>{siteConfig.phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-teal" />
              <span>{siteConfig.email}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Follow</p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <a href={social.href} className="transition-colors hover:text-teal">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="relative border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-teal">
                {link.label}
              </Link>
            ))}
          </div>
          <p>Registered in Sri Lanka · {siteConfig.registrationNumber}</p>
        </Container>
      </div>
    </footer>
  );
}
