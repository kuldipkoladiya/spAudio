"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = {
    PRODUCTS: [
        { label: "Loudspeakers", href: "/products" },
        { label: "Subwoofers", href: "/products" },
        { label: "Power Amplifiers", href: "/products" },
        { label: "Line Arrays", href: "/products" },
        { label: "Accessories", href: "/products" },
    ],
    COMPANY: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact Us", href: "/contact" },
    ],
    CONNECTIONS: [
        { label: "Instagram", href: "#", Icon: Instagram },
        { label: "YouTube", href: "#", Icon: Youtube },
        { label: "Facebook", href: "#", Icon: Facebook },
        { label: "LinkedIn", href: "#", Icon: Linkedin },
    ],
    PLATFORM: [
        { label: "Documentation", href: "/products" },
        { label: "System Specifications", href: "/products" },
        { label: "FAQ", href: "/faq" },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full bg-white pt-10 sm:pt-14 pb-8 px-3 sm:px-6 lg:px-8 overflow-hidden">
            {/* Visible Light Blue-Gray Tinted Floating Box with Wide Desktop Width */}
            <div className="w-full max-w-[96%] 2xl:max-w-[1600px] mx-auto bg-[#eef3f9] rounded-t-[36px] sm:rounded-t-[48px] rounded-b-[28px] border border-slate-200/80 hover:border-blue-300/60 transition-all duration-500 shadow-xl shadow-slate-200/50 p-8 sm:p-12 lg:p-16 text-[#0f1f3d] relative overflow-hidden">
                
                {/* ── Giant Signature Text (spaudio.com) ─────────────────── */}
                <div className="w-full text-center pb-10 mb-10 border-b border-blue-200/50 select-none">
                    <h2 className="font-display text-[9vw] lg:text-[7vw] font-black leading-none tracking-tighter uppercase bg-gradient-to-b from-[#0f1f3d]/25 via-[#0f1f3d]/12 to-transparent bg-clip-text text-transparent opacity-85">
                        spaudio
                    </h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <div>
                            <Link href="/" className="inline-block mb-5">
                                <Image
                                    src="/images/spaudio logo png.png"
                                    alt="SP Audio Logo"
                                    width={125}
                                    height={30}
                                    className="h-[24px] w-auto"
                                />
                            </Link>
                            
                            <h4 className="font-display text-sm font-bold text-[#0f1f3d] mb-2">
                                ISO-Certified & Tour-Grade Quality
                            </h4>
                            
                            <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                                SP Audio systems are built for live performances, broadcasts, and permanent architectural installations. Every cabinet is engineered for maximum power, linear clarity, and long-term durability.
                            </p>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {/* PRODUCTS */}
                        <div>
                            <span className="font-display text-xs font-extrabold tracking-[0.15em] text-[#3b82f6] uppercase block mb-4">
                                PRODUCTS
                            </span>
                            <ul className="space-y-3">
                                {footerLinks.PRODUCTS.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs sm:text-sm font-semibold text-[#374151] hover:text-[#3b82f6] transition-colors duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* COMPANY */}
                        <div>
                            <span className="font-display text-xs font-extrabold tracking-[0.15em] text-[#3b82f6] uppercase block mb-4">
                                COMPANY
                            </span>
                            <ul className="space-y-3">
                                {footerLinks.COMPANY.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs sm:text-sm font-semibold text-[#374151] hover:text-[#3b82f6] transition-colors duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CONNECTIONS */}
                        <div>
                            <span className="font-display text-xs font-extrabold tracking-[0.15em] text-[#3b82f6] uppercase block mb-4">
                                CONNECTIONS
                            </span>
                            <ul className="space-y-3">
                                {footerLinks.CONNECTIONS.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs sm:text-sm font-semibold text-[#374151] hover:text-[#3b82f6] transition-colors duration-150 inline-flex items-center gap-1 group"
                                        >
                                            <span>{link.label}</span>
                                            <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* PLATFORM */}
                        <div>
                            <span className="font-display text-xs font-extrabold tracking-[0.15em] text-[#3b82f6] uppercase block mb-4">
                                PLATFORM
                            </span>
                            <ul className="space-y-3">
                                {footerLinks.PLATFORM.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-xs sm:text-sm font-semibold text-[#374151] hover:text-[#3b82f6] transition-colors duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar Divider */}
                <div className="border-t border-blue-200/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#6b7280]">
                    <p>© {new Date().getFullYear()} SP Audio. All rights reserved.</p>
                    
                    <div className="flex items-center gap-6">
                        <Link href="/contact" className="hover:text-[#0f1f3d] transition-colors">Privacy Policy</Link>
                        <Link href="/contact" className="hover:text-[#0f1f3d] transition-colors">Terms of Use</Link>
                        <Link href="/contact" className="hover:text-[#0f1f3d] transition-colors">Trust Center</Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white transition-colors duration-200" aria-label="Instagram">
                            <Instagram size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white transition-colors duration-200" aria-label="YouTube">
                            <Youtube size={14} />
                        </a>
                        <a href="#" className="w-8 h-8 rounded-full bg-white border border-blue-100 flex items-center justify-center text-[#0f1f3d] hover:bg-[#0f1f3d] hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                            <Linkedin size={14} />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}