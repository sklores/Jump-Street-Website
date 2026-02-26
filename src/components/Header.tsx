import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function Header() {
  return (
    <header className="border-b border-line/80">
      <div className="relative flex items-center justify-between mx-auto w-full max-w-6xl px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] text-charcoal">
          {siteContent.brand.shortName}
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/jump-street-icon-crop.png"
            alt="Jump Street icon"
            className="h-[32px] md:h-[40px] w-auto object-contain"
          />
        </div>

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
      </div>
    </header>
  );
}
