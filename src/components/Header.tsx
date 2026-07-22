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
            { label: "Loudspeakers", href: "/products/loudspeakers" },
            { label: "Subwoofers", href: "/products/subwoofers" },
            { label: "Amplifiers", href: "/products/amplifiers" },
            { label: "Accessories", href: "/products/accessories" },
        ],
    },
    { label: "About Us", href: "/about" },
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
        <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
            {/* Floating Light Blue-Gray Rounded Bar matching Footer style */}
            <div className={`w-full max-w-[96%] 2xl:max-w-[1600px] mx-auto bg-[#eef3f9]/95 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-lg shadow-slate-200/50 px-5 sm:px-8 py-3 flex items-center justify-between pointer-events-auto transition-all duration-300 ${
                scrolled ? "shadow-xl border-blue-300/60 bg-[#eef3f9]" : ""
            }`}>

                {/* ── Logo ─────────────────────────────── */}
                <Link href="/" className="flex items-center flex-shrink-0 group">
                    <Image
                        src="/images/spaudio logo png.png"
                        alt="SP Audio Logo"
                        width={110}
                        height={26}
                        priority
                        className="h-[20px] sm:h-[22px] w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* ── Desktop Nav ──────────────────────── */}
                <nav className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <div
                            key={link.label}
                            className="relative"
                            onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className={`font-display flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-semibold transition-colors duration-150 rounded-full ${
                                    pathname === link.href
                                        ? "text-[#3b82f6] bg-white/80 shadow-sm"
                                        : "text-[#0f1f3d] hover:text-[#3b82f6]"
                                }`}
                            >
                                <motion.span initial="initial" whileHover="hovered" className="flex items-center gap-1">
                                    <TextRoll>{link.label}</TextRoll>
                                    {link.children && (
                                        <ChevronDown
                                            size={13}
                                            className={`text-[#6b7280] transition-transform duration-200 ${
                                                activeDropdown === link.label ? "rotate-180" : ""
                                            }`}
                                        />
                                    )}
                                </motion.span>
                            </Link>

                            {/* Dropdown */}
                            {link.children && (
                                <div
                                    className={`absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-xl border border-blue-200/80 rounded-2xl shadow-xl shadow-slate-200/60 py-2 transition-all duration-200 ${
                                        activeDropdown === link.label
                                            ? "opacity-100 translate-y-0 pointer-events-auto"
                                            : "opacity-0 -translate-y-2 pointer-events-none"
                                    }`}
                                >
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            className="flex items-center px-4 py-2.5 text-xs font-semibold text-[#0f1f3d] hover:text-[#3b82f6] hover:bg-[#eef3f9] transition-colors duration-150"
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
                <div className="hidden lg:flex items-center">
                    <Link href="/contact">
                        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-bold tracking-wide uppercase rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/25 hover:scale-[1.03] cursor-pointer">
                            Get In Touch
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>

                {/* ── Mobile Toggle ────────────────────── */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-white/80 border border-blue-200/60 text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* ── Mobile Dropdown Card ──────────────────────── */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out pointer-events-auto max-w-[96%] mx-auto ${
                    isOpen ? "max-h-96 mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="bg-[#eef3f9]/95 backdrop-blur-xl border border-blue-200/70 rounded-[28px] shadow-2xl p-5 space-y-2">
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center px-4 py-3 rounded-2xl text-sm font-semibold transition-colors ${
                                    pathname === link.href
                                        ? "bg-white text-[#3b82f6] shadow-sm font-bold"
                                        : "text-[#0f1f3d] hover:bg-white/60"
                                }`}
                            >
                                {link.label}
                            </Link>
                            {link.children && (
                                <div className="ml-4 mt-1 space-y-1">
                                    {link.children.map((child) => (
                                        <Link
                                            key={child.label}
                                            href={child.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center px-4 py-2 rounded-xl text-xs font-medium text-[#6b7280] hover:text-[#3b82f6] hover:bg-white/50 transition-colors"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="pt-3 border-t border-blue-200/60">
                        <Link href="/contact" onClick={() => setIsOpen(false)}>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#0f1f3d] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#3b82f6] transition-colors">
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