import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import { siteConfig, navLinks } from "@/config/site";
import { businessLinks, legalLinks } from "@/lib/constants";
import { withBasePath } from "@/lib/utils";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com/zulaachzakot" },
  { label: "LinkedIn", href: "https://linkedin.com/company/zulaachzakot" },
  { label: "Instagram", href: "https://instagram.com/zulaachzakot" },
];

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-white">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
            {socialLinks.map((social, index) => (
              <span key={social.label} className="flex items-center gap-4">
                {index > 0 && <span className="text-white/30">|</span>}
                <a href={social.href} className="text-white/70 transition-colors hover:text-teal">
                  {social.label}
                </a>
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Quick Links
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {navLinks
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-teal">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Our Businesses
          </p>
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
            Legal
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            {legalLinks.map((link) => (
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
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Registered in Sri Lanka · {siteConfig.registrationNumber}
          </p>
        </Container>
      </div>
    </footer>
  );
}
