import Link from 'next/link';
import { siteContent } from '@/content/siteContent';

export function FinalCTA() {
  return (
    <section className="border-y border-line/80 py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-end md:justify-between md:px-10">
        <h2 className="max-w-2xl font-display text-3xl font-bold uppercase leading-tight tracking-wide text-charcoal md:text-4xl">
          {siteContent.finalCta.title}
        </h2>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href={siteContent.finalCta.action.href}
            className="inline-flex w-fit items-center rounded-full border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-cream"
          >
            {siteContent.finalCta.action.label}
          </Link>
          <Link href={siteContent.finalCta.secondaryAction.href} className="text-sm font-semibold uppercase tracking-wider hover:text-accent">
            {siteContent.finalCta.secondaryAction.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
