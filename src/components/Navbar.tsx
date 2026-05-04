import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm xs:text-base sm:text-lg font-medium tracking-tight flex-shrink-0">
          prodevelopers<span className="text-neutral-500">.tech</span>
        </Link>
        <div className="flex gap-3 xs:gap-4 sm:gap-8 text-[10px] xs:text-xs sm:text-sm font-medium text-neutral-400">
          <Link href="#services" className="hover:text-neutral-50 transition-colors">Services</Link>
          <Link href="#work" className="hover:text-neutral-50 transition-colors">Work</Link>
          <Link href="https://prodevelopers.cloud" className="hover:text-neutral-50 transition-colors hidden xxs:block">Infrastructure</Link>
          <Link href="mailto:hello@prodevelopers.tech" className="hover:text-neutral-50 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
