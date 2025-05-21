"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

export default function Products() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const products = [
        {
            name: "SPX-500 Amp",
            category: "Amplifier",
            description: "High-power amplifier with crystal-clear output.",
            image: "/images/product-1.jpeg",
        },
        {
            name: "SPX-1000 Amp",
            category: "Amplifier",
            description: "Designed for pro-level sound systems.",
            image: "/images/product-2.jpeg",
        },
        {
            name: "TurboAmp V2",
            category: "Amplifier",
            description: "Compact size, massive performance.",
            image: "/images/product-3.jpeg",
        },
        {
            name: "BassForce X",
            category: "Amplifier",
            description: "Built to push subwoofers to the max.",
            image: "/images/product-4.jpeg",
        },
        {
            name: "Thunder 8 Speaker",
            category: "Speaker",
            description: "8-inch sub delivering rich bass depth.",
            image: "/images/product-5.jpeg",
        },
        {
            name: "Clarity Pro 6",
            category: "Speaker",
            description: "Precision audio in a compact enclosure.",
            image: "/images/product-6.jpeg",
        },
        {
            name: "Storm Series 10",
            category: "Speaker",
            description: "Loud, clean, and road-tested performance.",
            image: "/images/product-7.jpeg",
        },
        {
            name: "EchoLite Mini",
            category: "Speaker",
            description: "Perfect for studio or home audio setups.",
            image: "/images/product-8.jpeg",
        },
    ];

    return (
        <div className="bg-[#0b0b0b] text-white font-[family-name:var(--font-geist-sans)] min-h-screen">
            {/* Hero */}
            <section className="text-center py-20 px-6 sm:px-16">
                <h1
                    className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-wide"
                    data-aos="fade-down"
                >
                    Amps & Speakers
                </h1>
                <p
                    className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto tracking-wide"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Explore our precision-engineered amplifiers and powerful speaker systems built for performance and clarity.
                </p>
            </section>

            {/* Product Grid */}
            <section className="px-6 sm:px-16 pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    {products.map((product, idx) => (
                        <div
                            key={idx}
                            onClick={() => router.push("/contact")}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && router.push("/contact")}
                            className="group cursor-pointer bg-gradient-to-tr from-[#1a1a1a] to-[#121212] rounded-2xl shadow-lg
                         hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transform hover:scale-[1.04] transition
                         duration-300 ease-out overflow-hidden flex flex-col"
                            data-aos="fade-up"
                            data-aos-delay={idx * 120}
                        >
                            <div className="relative bg-[#0e0e0e] rounded-t-2xl flex items-center justify-center h-52 p-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <p className="text-xs uppercase text-cyan-400 font-semibold tracking-widest mb-1">
                                        {product.category}
                                    </p>
                                    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                                </div>
                                <div className="mt-4 text-cyan-400 font-semibold tracking-wide">
                                    Click to Contact Us &rarr;
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-[#111111] py-16 text-center px-6 sm:px-16 border-t border-gray-800">
                <h2
                    className="text-2xl sm:text-3xl font-bold mb-4 tracking-wide"
                    data-aos="fade-up"
                >
                    Need Help Choosing?
                </h2>
                <p
                    className="text-gray-400 text-sm sm:text-base mb-6 max-w-xl mx-auto tracking-wide"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Let our experts guide you to the perfect audio setup for your space.
                </p>
                <button
                    onClick={() => router.push("/contact")}
                    className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black px-8 py-3 rounded-full font-semibold
                     tracking-wide transition"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    Contact Support
                </button>
            </section>
        </div>
    );
}
