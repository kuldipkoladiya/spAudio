"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Home, Info, Package, Wrench, Phone } from "lucide-react";

const navLinks = [
    { name: "home", icon: <Home size={22} /> },
    { name: "about", icon: <Info size={22} /> },
    { name: "products", icon: <Package size={22} /> },
    { name: "services", icon: <Wrench size={22} /> },
    { name: "contact", icon: <Phone size={22} /> },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // 🔒 Lock scroll
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">

            {/* NAVBAR */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-5">

                {/* LOGO */}
                <Link
                    href="/"
                    className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
                >
                    SPAudio
                </Link>

                {/* 💻 DESKTOP */}
                <nav className="hidden md:flex items-center gap-8 text-white font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={`/${link.name}`}
                            className="relative group capitalize"
                        >
                            {link.name}

                            {/* underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}

                    {/* CTA */}
                    <Link
                        href="/products"
                        className="ml-4 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm hover:scale-105 transition"
                    >
                        Shop Now
                    </Link>
                </nav>

                {/* 📱 MOBILE */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-white"
                >
                    <Menu size={28} />
                </button>
            </div>

            {/* 📱 MOBILE MENU */}
            <div
                className={`fixed inset-0 z-[999] transition-transform duration-500 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* BG */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#1e1b4b] to-[#312e81]" />

                <div className="relative flex flex-col h-full text-white">

                    {/* TOP */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                        <h1 className="text-xl font-bold">SPAudio</h1>

                        <button onClick={() => setIsOpen(false)}>
                            <X size={28} />
                        </button>
                    </div>

                    {/* MENU */}
                    <div className="flex flex-col items-center justify-center flex-1 gap-8 text-xl font-semibold">

                        {navLinks.map((link, index) => (
                            <Link
                                key={link.name}
                                href={`/${link.name}`}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-3"
                            >
                                {link.icon}
                                <span className="capitalize">{link.name}</span>
                            </Link>
                        ))}

                        <Link
                            href="/products"
                            onClick={() => setIsOpen(false)}
                            className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        >
                            Shop Now
                        </Link>

                    </div>
                </div>
            </div>

        </header>
    );
}