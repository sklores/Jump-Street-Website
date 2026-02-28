import Link from 'next/link';
import { siteContent } from '@/content/siteContent';
import { FinalCTA } from '@/components/FinalCTA';

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-16 md:px-10 md:py-24">
        <h1 className="max-w-5xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-wide text-charcoal md:text-7xl">
          {siteContent.hero.headlineLineOne}{' '}
          <span className="inline-block border-none p-0 text-accent md:rounded-full md:border md:border-accent md:px-8 md:py-4">
            {siteContent.hero.headlineLineTwo}
          </span>
        </h1>
        <p className="max-w-3xl text-lg leading-relaxed text-charcoal/85">{siteContent.hero.subheadline}</p>
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
        <h2 className="mb-8 font-display text-3xl font-bold uppercase tracking-wide">SERVICES</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {siteContent.servicesPreview.map((service) => (
            <article key={service.title} className="rounded-2xl border border-line bg-cream p-8">
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide">{service.title}</h3>
              <ul className="mt-6 space-y-3 text-charcoal/85">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <Link href={service.href} className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider text-accent">
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">{siteContent.whoWeWorkWith.title}</h2>
        <p className="mt-6 max-w-4xl text-lg leading-relaxed text-charcoal/85">{siteContent.whoWeWorkWith.body}</p>
        <p className="mt-4 max-w-4xl text-base text-charcoal/80">{siteContent.whoWeWorkWith.qualifier}</p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-bold uppercase tracking-wide">Selected Work</h2>
          <Link href="/work" className="text-sm font-semibold uppercase tracking-wider text-accent">
            Book Owner-Side Strategy Call
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {siteContent.selectedWork.map((project) => (
            <article key={project.name} className="rounded-2xl border border-line p-6">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <p className="mt-2 text-sm text-charcoal/70">{project.type} • {project.location}</p>
              <p className="mt-3 text-sm text-charcoal/85">
                <span className="font-semibold">Role:</span> {project.role}
              </p>
              <p className="mt-2 text-sm text-charcoal/85">
                <span className="font-semibold">Outcome:</span> {project.outcome}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="how-engagements-work" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">{siteContent.process.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {siteContent.process.steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-line p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">0{index + 1}</p>
              <h3 className="mt-2 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm text-charcoal/80">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 h-px bg-line" />
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">{siteContent.testimonials.title}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {siteContent.testimonials.quotes.map((quote) => (
            <article key={quote} className="rounded-2xl border border-line p-6 text-charcoal/90">
              {quote}
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
