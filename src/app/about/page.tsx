import { siteContent } from '@/content/siteContent';

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-5xl font-bold uppercase tracking-wide md:text-6xl">About</h1>
      <p className="mt-8 text-lg leading-relaxed text-charcoal/85">{siteContent.aboutPage.positioning}</p>

      <section className="mt-12 rounded-2xl border border-line p-8">
        <h2 className="font-display text-3xl font-bold uppercase tracking-wide">How We Work</h2>
        <ul className="mt-6 space-y-4 text-charcoal/85">
          {siteContent.aboutPage.howWeWork.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </section>

      <p className="mt-10 rounded-xl border border-line px-6 py-4 text-sm uppercase tracking-[0.18em] text-charcoal/80">
        {siteContent.aboutPage.founderNote}
      </p>
    </main>
  );
}
