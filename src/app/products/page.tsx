"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ProductTilt from "@/components/ProductTilt";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const products = [
    {
        id: 1,
        name: "Thunder 8",
        category: "Speaker",
        img: "/images/product-5.jpeg",
        price: "₹12,999",
        desc: `Thunder 8 delivers deep sub-bass frequencies and robust acoustic pressure. Built with premium internal dampening, it guarantees minimal turbulence and absolute clarity for home studios or live playback setups.`,
    },
    {
        id: 2,
        name: "Clarity Pro",
        category: "Speaker",
        img: "/images/product-6.jpeg",
        price: "₹15,999",
        desc: `Clarity Pro offers ultra-linear acoustic reproduction with an optimized frequency response. Ideal for audiophiles and mixers who demand raw acoustic honesty and detailed nearfield dispersion.`,
    },
    {
        id: 3,
        name: "AMP Ultra",
        category: "Amplifier",
        img: "/images/amp1.png",
        price: "₹35,999",
        desc: `AMP Ultra supplies clean, low-distortion power. Engineered with a heavy toroidal transformer and passive cooling to drive demanding speaker loads while maintaining a silent noise floor.`,
    },
];

export default function ProductPage() {
    const pageRef = useRef<HTMLDivElement>(null!);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState("All");

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            // Hero typography entrance
            gsap.from(".hero-title", {
                opacity: 0,
                y: 40,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.from(".hero-sub", {
                opacity: 0,
                y: 20,
                delay: 0.25,
                duration: 1,
                ease: "power2.out",
            });

            // Float glowing blobs
            gsap.to(".glow-1", {
                y: 20,
                repeat: -1,
                yoyo: true,
                duration: 5,
                ease: "sine.inOut",
            });

            gsap.to(".glow-2", {
                y: -20,
                repeat: -1,
                yoyo: true,
                duration: 5,
                ease: "sine.inOut",
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    // Filter products list based on active tab
    const filteredProducts = products.filter((product) => {
        if (activeTab === "All") return true;
        if (activeTab === "Speakers") return product.category === "Speaker";
        if (activeTab === "Amplifiers") return product.category === "Amplifier";
        return true;
    });

    return (
        <div ref={pageRef} className="bg-[#020617] text-white overflow-hidden min-h-screen">

            {/* 🔥 MOUSE GLOW BACKGROUND EFFECT */}
            <div
                className="hidden md:block pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[130px] z-0"
                style={{
                    left: mouse.x - 200,
                    top: mouse.y - 200,
                }}
            />

            {/* ================= HERO ================= */}
            <section
                onMouseMove={(e) => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 20;
                    const y = (e.clientY / window.innerHeight - 0.5) * 20;
                    gsap.to(".glow-1", { x, y, duration: 0.6 });
                    gsap.to(".glow-2", { x: -x, y: -y, duration: 0.6 });
                }}
                className="relative h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-white/5"
            >
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-50" />

                <div className="absolute inset-0 pointer-events-none">
                    <div className="glow-1 absolute w-[300px] h-[300px] bg-cyan-500/10 blur-[110px] top-[15%] left-[15%]" />
                    <div className="glow-2 absolute w-[300px] h-[300px] bg-purple-500/10 blur-[110px] bottom-[15%] right-[15%]" />
                </div>

                <div className="relative z-10 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.5em] text-cyan-400 uppercase mb-4 animate-pulse">
                        SPAUDIO HARDWARE
                    </p>
                    <h1 className="hero-title text-4xl md:text-7xl font-black leading-none tracking-tight">
                        UNCOMPROMISING <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
                            SONIC RIGS
                        </span>
                    </h1>

                    <p className="hero-sub mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light">
                        Explore our selection of premium high-impedance monitors and low-noise floor power amplifiers built for audio purists.
                    </p>
                </div>
            </section>

            {/* ================= CATEGORY TABS ================= */}
            <section className="py-12 px-6 flex justify-center items-center">
                <div className="flex bg-white/5 border border-white/10 rounded-full p-1.5 backdrop-blur-md">
                    {["All", "Speakers", "Amplifiers"].map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 relative ${
                                    isActive ? "text-black" : "text-gray-400 hover:text-white"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-white rounded-full z-0"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ================= PRODUCTS LIST ================= */}
            <section id="products" className="px-6 md:px-20 py-16 max-w-7xl mx-auto space-y-32">
                <AnimatePresence mode="popLayout">
                    {(filteredProducts.map((product, index) => {
                        const reverse = index % 2 !== 0;

                        return (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                key={product.id}
                                className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${
                                    reverse ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* CARD WRAPPER WITH TILT */}
                                <div className={`flex justify-center ${reverse ? "md:order-2" : ""}`}>
                                    <ProductTilt>
                                        <div className="relative group p-6 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-cyan-500/40 shadow-2xl transition duration-500 max-w-[420px]">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-3xl blur opacity-0 group-hover:opacity-15 transition duration-500 pointer-events-none" />
                                            <img
                                                src={product.img}
                                                className="relative w-full h-[280px] sm:h-[340px] object-contain rounded-2xl group-hover:scale-105 transition duration-500"
                                                alt={product.name}
                                            />
                                        </div>
                                    </ProductTilt>
                                </div>

                                {/* CONTENT */}
                                <div className={reverse ? "md:order-1" : ""}>
                                    <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] bg-cyan-950 text-cyan-400 border border-cyan-500/20 uppercase mb-4">
                                        {product.category}
                                    </div>

                                    <h2 className="text-3xl sm:text-5xl font-black leading-tight tracking-tight">
                                        {product.name}
                                    </h2>

                                    <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed font-light max-w-xl">
                                        {product.desc}
                                    </p>

                                    <div className="mt-8 flex items-baseline gap-4">
                                        <span className="text-gray-500 text-xs font-semibold tracking-wider uppercase">Price</span>
                                        <p className="text-2xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text">
                                            {product.price}
                                        </p>
                                    </div>

                                    <a
                                        href={`https://wa.me/919638470305?text=Hi, I'm interested in SPAudio ${product.name}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-block px-8 py-3.5 rounded-full border border-white/10 hover:border-cyan-400 text-white font-semibold bg-white/5 hover:text-cyan-400 backdrop-blur-md transition-all duration-300 hover:scale-[1.03]"
                                    >
                                        Inquiry on WhatsApp 💬
                                    </a>
                                </div>
                            </motion.div>
                        );
                    }) as React.ReactNode)}
                </AnimatePresence>
            </section>

        </div>
    );
}