'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Infrastructure', href: 'https://prodevelopers.cloud' },
    { name: 'Contact', href: 'mailto:hello@prodevelopers.tech' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="font-mono text-base sm:text-lg font-medium tracking-tight z-50"
            onClick={() => setIsOpen(false)}
          >
            prodevelopers<span className="text-neutral-500">.tech</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="hover:text-neutral-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 p-2 -mr-2 text-neutral-400 hover:text-neutral-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            className="text-2xl font-medium text-neutral-400 hover:text-neutral-50 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
