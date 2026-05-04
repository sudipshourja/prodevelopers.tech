import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-base sm:text-lg font-medium tracking-tight">
          prodevelopers<span className="text-neutral-500">.tech</span>
        </Link>
        <div className="flex gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-neutral-400">
          <Link href="#services" className="hover:text-neutral-50 transition-colors">Services</Link>
          <Link href="#work" className="hover:text-neutral-50 transition-colors">Work</Link>
          <Link href="#contact" className="hover:text-neutral-50 transition-colors hidden xs:block">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
