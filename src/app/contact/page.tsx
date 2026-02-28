import { ContactForm } from '@/components/ContactForm';
import { siteContent } from '@/content/siteContent';

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-5xl font-bold uppercase tracking-wide md:text-6xl">Contact</h1>
      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr]">
        <section className="rounded-2xl border border-line p-8">
          <h2 className="mb-6 font-display text-2xl font-bold uppercase tracking-wide">Start a Project</h2>
          <ContactForm />
        </section>
        <aside className="rounded-2xl border border-line p-8">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide">Direct Contact</h2>
          <ul className="mt-6 space-y-4 text-sm text-charcoal/80">
            <li>
              Email:{' '}
              <a href={`mailto:${siteContent.contactPage.direct.email}`}>{siteContent.contactPage.direct.email}</a>
            </li>
            <li>
              Phone:{' '}
              <a href={`tel:${siteContent.contactPage.direct.phone}`}>{siteContent.contactPage.direct.phone}</a>
            </li>
            <li>
              Office: {siteContent.contactPage.direct.officeLineOne}
              <br />
              {siteContent.contactPage.direct.officeLineTwo}
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
