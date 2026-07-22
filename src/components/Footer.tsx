"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
    Products: [
        { label: "Loudspeakers", href: "/products" },
        { label: "Subwoofers", href: "/products" },
        { label: "Amplifiers", href: "/products" },
        { label: "Line Arrays", href: "/products" },
        { label: "Accessories", href: "/products" },
    ],
    Company: [
        { label: "About Us", href: "/about" },
        { label: "Our Story", href: "/story" },
        { label: "Projects", href: "/story" },
        { label: "Careers", href: "/careers" },
        { label: "Blog", href: "/blog" },
    ],
    Support: [
        { label: "Get a Quote", href: "/contact" },
        { label: "Service Centers", href: "/contact" },
        { label: "FAQ", href: "/faq" },
        { label: "Privacy Policy", href: "/" },
        { label: "Terms of Use", href: "/" },
    ],
};

const socials = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Youtube, href: "#", label: "YouTube" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {

    return (
        <footer className="bg-[#0f1f3d] text-white overflow-hidden">

            {/* ── Giant Header Text at Top ─────────────────── */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 select-none pointer-events-none">
                <h2 className="text-center text-[9vw] lg:text-[7vw] font-black leading-none tracking-tighter uppercase border-b border-white/10 pb-8 bg-gradient-to-t from-white/15 via-white/60 to-white bg-clip-text text-transparent">
                    spaudio.com
                </h2>
            </div>

            {/* ── Main Grid ───────────────────────────────── */}
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-10 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-flex flex-col mb-4">
                            <span className="text-[20px] font-black text-white tracking-tight leading-none">SP</span>
                            <span className="text-[8px] font-bold tracking-[0.28em] text-white/60 uppercase leading-none mt-[2px]">AUDIO</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Sound that Moves. Performance that Lasts. Professional audio, globally recognized for power, clarity, and reliability.
                        </p>
                        <div className="flex gap-2.5 mt-5">
                            {socials.map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/8 border border-white/12 hover:bg-white/15 hover:border-white/25 text-white/60 hover:text-white transition-all duration-200"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-white text-xs font-bold tracking-[0.12em] uppercase mb-4">{title}</h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-white/50 text-sm hover:text-white transition-colors duration-150"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>



                {/* ── Bottom Bar ──────────────────────────────── */}
                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
                    <p>© {new Date().getFullYear()} SP Audio. All rights reserved.</p>
                    <div className="flex gap-5">
                        <Link href="/" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
                        <Link href="/" className="hover:text-white/60 transition-colors">Terms of Use</Link>
                        <Link href="/contact" className="hover:text-white/60 transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}