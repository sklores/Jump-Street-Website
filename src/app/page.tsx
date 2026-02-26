import Link from 'next/link';
import { siteContent } from '@/content/siteContent';
import { FinalCTA } from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24">
        <h1 className="max-w-5xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide text-charcoal md:text-7xl">
          {siteContent.hero.headlineStart}{' '}
          <span className="inline-block rounded-full border border-accent px-4 py-1 text-accent">
            {siteContent.hero.highlightedPhrase}
          </span>
        </h1>
        <p className="max-w-2xl text-lg leading-relaxed text-charcoal/85">{siteContent.hero.subheadline}</p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href={siteContent.hero.primaryCta.href}
            className="rounded-full border border-accent px-6 py-3 text-sm font-semibold uppercase tracking-wider text-accent transition-colors hover:bg-accent hover:text-cream"
          >
            {siteContent.hero.primaryCta.label}
          </Link>
          <Link href={siteContent.hero.secondaryCta.href} className="text-sm font-semibold uppercase tracking-wider hover:text-accent">
            {siteContent.hero.secondaryCta.label}
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <div className="grid gap-8 md:grid-cols-2">
          {siteContent.servicesPreview.map((service) => (
            <article key={service.title} className="rounded-2xl border border-line bg-cream p-8">
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide">{service.title}</h2>
              <ul className="mt-6 space-y-3 text-charcoal/85">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <Link href={service.href} className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Explore Services
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide">Featured Work</h2>
          <Link href="/work" className="text-sm font-semibold uppercase tracking-wider text-accent">
            See All
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {siteContent.featuredWork.map((project) => (
            <article key={project.title} className="rounded-2xl border border-line p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{project.location}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">Process</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteContent.process.map((step, index) => (
            <article key={step} className="rounded-2xl border border-line p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 md:px-10">
        <div className="rounded-full border border-line px-6 py-4 text-center text-sm uppercase tracking-[0.2em] text-charcoal/75">
          {siteContent.proofStrip.join(' • ')}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
