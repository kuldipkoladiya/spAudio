'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
      <header className="fixed top-0 right-10 w-full z-50  bg-opacity-60  text-white">
        <div className="w-full flex items-center justify-between px-12 py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            SPAudio
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-4 font-medium">
            {['about', 'story', 'products', 'services', 'contact', 'team', 'blog', 'faq', 'testimonials', 'careers'].map((route) => (
                <Link key={route} href={`/${route}`} className="hover:text-blue-400 capitalize">
                  {route}
                </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="md:hidden p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isOpen && (
            <div className="md:hidden w-full  bg-opacity-60 backdrop-blur-md text-white px-6 pt-6 pb-10 space-y-6 font-semibold text-lg text-center">
              {['about', 'story', 'products', 'services', 'contact', 'team', 'blog', 'faq', 'testimonials', 'careers'].map((route) => (
                  <Link
                      key={route}
                      href={`/${route}`}
                      onClick={toggleMenu}
                      className="block hover:text-blue-400 transition duration-200"
                  >
                    {route.charAt(0).toUpperCase() + route.slice(1)}
                  </Link>
              ))}
            </div>
        )}
      </header>
  );
}
