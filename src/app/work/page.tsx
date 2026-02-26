import { siteContent } from '@/content/siteContent';

export default function WorkPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-5xl font-bold uppercase tracking-wide md:text-6xl">Work</h1>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {siteContent.workPage.projects.map((project) => (
          <article key={project.name} className="rounded-2xl border border-line p-6">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-sm text-charcoal/75">{project.location}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
            <button className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent">View details</button>
          </article>
        ))}
      </div>
    </main>
  );
}
