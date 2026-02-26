export function Footer() {
  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-charcoal/80 md:px-10">
        <img src="/Jump%20Street%20Logo.png" alt="Jump Street" className="h-[45px] md:h-[60px] w-auto object-contain" />
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jump Street. All rights reserved.</p>
          <p>Commercial Real Estate • Construction Services</p>
        </div>
      </div>
    </footer>
  );
}
