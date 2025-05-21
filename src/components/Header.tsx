import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-between items-center">
        <div className="font-bold text-xl">
          <Link href="/">SPAudio</Link>
        </div>
        <div className="flex space-x-6">
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/story" className="hover:text-gray-300">Story</Link>
          <Link href="/products" className="hover:text-gray-300">Products</Link>
          <Link href="/services" className="hover:text-gray-300">Services</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact</Link>
          <Link href="/team" className="hover:text-gray-300">Team</Link>
          <Link href="/blog" className="hover:text-gray-300">Blog</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
          <Link href="/testimonials" className="hover:text-gray-300">Testimonials</Link>
          <Link href="/careers" className="hover:text-gray-300">Careers</Link>
        </div>
      </nav>
    </header>
  );
}