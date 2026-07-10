"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "/" },
    {
        label: "Products",
        href: "/products",
        children: [
            { label: "Loudspeakers", href: "/products" },
            { label: "Subwoofers", href: "/products" },
            { label: "Amplifiers", href: "/products" },
            { label: "Accessories", href: "/products" },
        ],
    },
    { label: "Solutions", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Projects", href: "/story" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [pathname]);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
                    : "bg-white/90 backdrop-blur-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex items-center justify-between h-[68px]">

                    {/* ── Logo ─────────────────────────────── */}
                    <Link href="/" className="flex items-center flex-shrink-0 group">
                        <Image
                            src="/images/spaudio logo png.png"
                            alt="SP Audio Logo"
                            width={100}
                            height={24}
                            priority
                            className="h-[18px] w-auto md:h-[22px] transition-all duration-300"
                        />
                    </Link>

                    {/* ── Desktop Nav ──────────────────────── */}
                    <nav className="hidden lg:flex items-center gap-0.5">
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className={`font-display flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-medium transition-colors duration-150 rounded-md ${
                                        pathname === link.href
                                            ? "text-[#0f1f3d]"
                                            : "text-[#374151] hover:text-[#0f1f3d]"
                                    }`}
                                >
                                    <motion.span initial="initial" whileHover="hovered" className="flex items-center gap-1">
                                        <TextRoll>{link.label}</TextRoll>
                                        {link.children && (
                                            <ChevronDown
                                                size={13}
                                                className={`text-[#9ca3af] transition-transform duration-200 ${
                                                    activeDropdown === link.label ? "rotate-180" : ""
                                                }`}
                                            />
                                        )}
                                    </motion.span>
                                </Link>

                                {/* Dropdown */}
                                {link.children && (
                                    <div
                                        className={`absolute top-full left-0 mt-1 w-52 bg-white border border-[#e5e7eb] rounded-xl shadow-xl shadow-black/10 py-1.5 transition-all duration-200 ${
                                            activeDropdown === link.label
                                                ? "opacity-100 translate-y-0 pointer-events-auto"
                                                : "opacity-0 -translate-y-2 pointer-events-none"
                                        }`}
                                    >
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="flex items-center px-4 py-2.5 text-sm text-[#374151] hover:text-[#0f1f3d] hover:bg-[#f3f4f6] transition-colors duration-150"
                                            >
                                                <motion.span initial="initial" whileHover="hovered">
                                                    <TextRoll>{child.label}</TextRoll>
                                                </motion.span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* ── CTA Button ───────────────────────── */}
                    <div className="hidden lg:flex">
                        <Link href="/contact">
                            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0f1f3d] hover:bg-[#162d57] text-white text-[13.5px] font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0f1f3d]/25 hover:scale-[1.02]">
                                Get In Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* ── Mobile Toggle ────────────────────── */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-[#0f1f3d] hover:bg-[#f3f4f6] transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* ── Mobile Menu ──────────────────────────────── */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-screen" : "max-h-0"
                }`}
            >
                <div className="bg-white border-t border-[#f0f0f0] px-5 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                    pathname === link.href
                                        ? "bg-[#f0f4ff] text-[#0f1f3d] font-semibold"
                                        : "text-[#374151] hover:bg-[#f9fafb] hover:text-[#0f1f3d]"
                                }`}
                            >
                                {link.label}
                            </Link>
                            {link.children && (
                                <div className="ml-4 mt-0.5 space-y-0.5">
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center px-4 py-2 rounded-lg text-xs text-[#6b7280] hover:text-[#0f1f3d] hover:bg-[#f9fafb] transition-colors"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="pt-3 border-t border-[#f0f0f0]">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f1f3d] text-white text-sm font-semibold rounded-xl hover:bg-[#162d57] transition-colors">
                                Get In Touch
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

const STAGGER = 0.035;

const TextRoll: React.FC<{
  children: string;
  className?: string;
  center?: boolean;
}> = ({ children, className, center = false }) => {
  return (
    <span
      className={`relative inline-block overflow-hidden ${className || ""}`}
      style={{
        lineHeight: 1.2,
      }}
    >
      <span className="block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
      <span className="absolute inset-0 block">
        {children.split("").map((l, i) => {
          const delay = center
            ? STAGGER * Math.abs(i - (children.length - 1) / 2)
            : STAGGER * i;

          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                ease: "easeInOut",
                delay,
              }}
              className="inline-block"
              key={i}
            >
              {l === " " ? "\u00A0" : l}
            </motion.span>
          );
        })}
      </span>
    </span>
  );
};