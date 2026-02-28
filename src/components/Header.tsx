"use client";

import { useState } from 'react';
import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-line/80">
      <div className="relative flex items-center justify-between mx-auto w-full max-w-6xl px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] text-charcoal">
          {siteContent.brand.shortName}
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 font-bold uppercase text-sm tracking-[0.06em] text-neutral-900 after:content-[''] after:block after:mx-auto after:mt-1 after:h-px after:w-10 after:bg-neutral-500 md:block md:text-base">
          RETAIL ADVISORY
        </div>

        <nav aria-label="Main navigation" className="hidden md:block">
          <ul className="flex flex-wrap items-center justify-end gap-5 text-sm text-charcoal">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <Link className="transition-colors hover:text-accent focus-visible:text-accent" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="flex items-center justify-center text-charcoal md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((currentState) => !currentState)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-line/80 px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4 text-sm uppercase tracking-[0.08em] text-charcoal">
            {siteContent.nav.map((item) => (
              <li key={item.href}>
                <Link
                  className="transition-colors hover:text-accent focus-visible:text-accent"
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
