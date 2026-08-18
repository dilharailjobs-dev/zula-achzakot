"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/common/Container";
import MobileMenu from "@/components/layout/MobileMenu";
import { navLinks, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-navy/10 bg-white">
      <Container className="relative flex items-center justify-between py-3 sm:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={siteConfig.logoIcon}
            alt={`${siteConfig.name} logo`}
            width={519}
            height={623}
            priority
            className="h-9 w-auto sm:h-11"
          />
          <span className="flex flex-col leading-tight whitespace-nowrap">
            <span className="text-base font-bold tracking-wide text-navy sm:text-lg">
              {siteConfig.name.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px]">
              {siteConfig.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "border-b-2 border-transparent pb-1 text-sm font-medium uppercase tracking-wide text-navy transition-colors hover:text-gold",
                      isActive && "border-gold text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <MobileMenu />
      </Container>
    </header>
  );
}
