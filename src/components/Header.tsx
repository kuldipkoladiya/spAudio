'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white backdrop-blur-lg shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            SPAudio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 font-medium">
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/story" className="hover:text-blue-400">Story</Link>
            <Link href="/products" className="hover:text-blue-400">Products</Link>
            <Link href="/services" className="hover:text-blue-400">Services</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            <Link href="/team" className="hover:text-blue-400">Team</Link>
            <Link href="/blog" className="hover:text-blue-400">Blog</Link>
            <Link href="/faq" className="hover:text-blue-400">FAQ</Link>
            <Link href="/testimonials" className="hover:text-blue-400">Testimonials</Link>
            <Link href="/careers" className="hover:text-blue-400">Careers</Link>
          </nav>

          {/* Mobile Toggle */}
          <div className="md:hidden z-50">
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
            <div className="md:hidden bg-black bg-opacity-90 text-white px-6 pt-4 pb-8 space-y-4 font-medium text-sm">
              <Link href="/about" onClick={toggleMenu}>About</Link>
              <Link href="/story" onClick={toggleMenu}>Story</Link>
              <Link href="/products" onClick={toggleMenu}>Products</Link>
              <Link href="/services" onClick={toggleMenu}>Services</Link>
              <Link href="/contact" onClick={toggleMenu}>Contact</Link>
              <Link href="/team" onClick={toggleMenu}>Team</Link>
              <Link href="/blog" onClick={toggleMenu}>Blog</Link>
              <Link href="/faq" onClick={toggleMenu}>FAQ</Link>
              <Link href="/testimonials" onClick={toggleMenu}>Testimonials</Link>
              <Link href="/careers" onClick={toggleMenu}>Careers</Link>
            </div>
        )}
      </header>
  );
}
