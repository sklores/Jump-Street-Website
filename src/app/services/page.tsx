import { FinalCTA } from '@/components/FinalCTA';
import { siteContent } from '@/content/siteContent';

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-5xl font-bold uppercase tracking-wide md:text-6xl">Services</h1>
      <p className="mt-6 max-w-3xl text-lg text-charcoal/85">{siteContent.servicesPage.intro}</p>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {siteContent.servicesPage.sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-line p-8">
            <h2 className="font-display text-3xl font-bold uppercase tracking-wide">{section.title}</h2>
            <ul className="mt-6 space-y-3 text-charcoal/85">
              {section.scope.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-16">
        <FinalCTA />
      </div>
    </main>
  );
}
