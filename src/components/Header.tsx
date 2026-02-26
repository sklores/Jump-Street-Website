import Link from 'next/link';
import { BrandLogo } from '@/components/BrandLogo';
import { siteContent } from '@/content/siteContent';

export function Header() {
  return (
    <header className="border-b border-line/80">
      <div className="mx-auto flex w-full max-w-6xl items-start justify-between px-6 py-6 md:px-10">
        <Link href="/" className="inline-flex items-center">
          <BrandLogo
            className="h-auto w-[170px] max-w-full"
            fallbackClassName="text-sm font-semibold tracking-[0.3em] text-charcoal"
          />
        </Link>
        <div className="flex flex-col items-end gap-3">
          <nav aria-label="Main navigation">
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
          <div className="flex gap-3 text-xs text-charcoal/70">
            {siteContent.socials.map((social) => (
              <a key={social.label} href={social.href} className="hover:text-accent focus-visible:text-accent">
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
