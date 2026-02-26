export function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-charcoal/80 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} Jump Street. All rights reserved.</p>
        <p>Commercial Real Estate • Construction Services</p>
      </div>
    </footer>
  );
}
