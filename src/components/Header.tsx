import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function Header() {
  return (
    <header className="border-b border-line/80">
      <div className="relative flex items-center justify-between mx-auto w-full max-w-6xl px-6 py-6 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] text-charcoal">
          {siteContent.brand.shortName}
        </Link>

        <div className="absolute left-1/2 -translate-x-1/2 font-bold uppercase text-sm md:text-base tracking-[0.06em] text-neutral-900 after:content-[''] after:block after:mx-auto after:mt-1 after:h-px after:w-10 after:bg-neutral-500">
          RETAIL ADVISORY
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
