"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= DATA ================= */
const products = [
    {
        id: 1,
        name: "Thunder 8",
        category: "Speaker",
        img: "/images/product-5.jpeg",
        price: "₹12,999",
        desc: `Thunder 8 delivers deep bass and powerful output with crystal-clear sound.
Built for high-performance environments, it ensures immersive audio whether for home or professional use.`,
    },
    {
        id: 2,
        name: "Clarity Pro",
        category: "Speaker",
        img: "/images/product-6.jpeg",
        price: "₹15,999",
        desc: `Clarity Pro offers ultra-clear sound with perfect balance across frequencies.
Ideal for studios and premium setups, it enhances every listening experience.`,
    },
    {
        id: 3,
        name: "AMP Ultra",
        category: "Amplifier",
        img: "/images/product-3.jpeg",
        price: "₹35,999",
        desc: `AMP Ultra delivers unmatched power and stability.
Designed with advanced cooling and optimized circuitry for long-lasting performance.`,
    },
];

export default function ProductPage() {
    const pageRef = useRef<HTMLDivElement>(null!);

    /* ================= MOUSE GLOW ================= */
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e: any) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    useEffect(() => {
        if (!pageRef.current) return;

        const ctx = gsap.context(() => {
            // HERO ANIMATION
            gsap.from(".hero-title", {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power3.out",
            });

            gsap.from(".hero-sub", {
                opacity: 0,
                y: 25,
                delay: 0.3,
                duration: 1,
            });

            gsap.fromTo(
                ".hero-btn",
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    delay: 0.6,
                    duration: 1,
                    ease: "power3.out",
                }
            );

            // BACKGROUND FLOAT ANIMATION
            gsap.to(".glow-1", {
                y: 30,
                repeat: -1,
                yoyo: true,
                duration: 4,
                ease: "sine.inOut",
            });

            gsap.to(".glow-2", {
                y: -30,
                repeat: -1,
                yoyo: true,
                duration: 4,
                ease: "sine.inOut",
            });

            // PRODUCT ANIMATION
            gsap["utils"].toArray(".product").forEach((el: any) => {
                gsap.from(el, {
                    opacity: 0,
                    y: 80,
                    duration: 1,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    },
                });
            });
        }, pageRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={pageRef} className="bg-[#020617] text-white overflow-hidden">

            {/* 🔥 MOUSE GLOW EFFECT (ADDED ONLY THIS) */}
            <div
                className="hidden md:block pointer-events-none fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] z-0"
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

                    gsap.to(".glow-1", { x, y, duration: 0.5 });
                    gsap.to(".glow-2", { x: -x, y: -y, duration: 0.5 });
                }}
                className="relative h-[65vh] md:h-[80vh] flex items-center justify-center text-center px-6 overflow-hidden"
            >

                {/* BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="glow-1 absolute w-[350px] h-[350px] bg-blue-500/20 blur-[120px] top-[10%] left-[10%]" />
                    <div className="glow-2 absolute w-[350px] h-[350px] bg-purple-500/20 blur-[120px] bottom-[10%] right-[10%]" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 max-w-3xl">

                    <h1 className="hero-title text-4xl md:text-6xl font-bold leading-tight">
                        Experience Sound <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Like Never Before
            </span>
                    </h1>

                    <p className="hero-sub mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
                        Premium speakers and amplifiers crafted for deep bass,
                        crystal clarity, and powerful performance.
                    </p>

                    <a
                        href="#products"
                        className="hero-btn mt-6 inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition opacity-100"
                    >
                        Explore Products
                    </a>

                </div>

            </section>

            {/* ================= PRODUCTS ================= */}
            <section id="products" className="px-6 md:px-16 py-24 space-y-28">

                {products.map((product, index) => {
                    const reverse = index % 2 !== 0;

                    return (
                        <div
                            key={product.id}
                            className={`product grid md:grid-cols-2 gap-14 items-center ${
                                reverse ? "md:flex-row-reverse" : ""
                            }`}
                        >

                            {/* IMAGE */}
                            <div className="flex justify-center">
                                <img
                                    src={product.img}
                                    className="w-full max-w-[450px] object-contain hover:scale-105 transition duration-500"
                                />
                            </div>

                            {/* CONTENT */}
                            <div>

                                <p className="text-sm text-blue-400 uppercase tracking-widest mb-3">
                                    {product.category}
                                </p>

                                <h2 className="text-3xl md:text-5xl font-bold">
                                    {product.name}
                                </h2>

                                <p className="mt-6 text-gray-400 text-lg leading-relaxed whitespace-pre-line max-w-xl">
                                    {product.desc}
                                </p>

                                <p className="mt-6 text-2xl font-semibold">
                                    {product.price}
                                </p>

                                <a
                                    href={`https://wa.me/919638470305?text=Hi, I'm interested in ${product.name}`}
                                    target="_blank"
                                    className="mt-8 inline-block px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition"
                                >
                                    Inquiry Now
                                </a>

                            </div>

                        </div>
                    );
                })}

            </section>

        </div>
    );
}