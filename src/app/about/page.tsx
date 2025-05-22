"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image"; // ✅ Import Image

export default function About() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="bg-[#0c0c0c] text-white font-[family-name:var(--font-geist-sans)]">

            {/* Dark Banner Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/about-dark.jpg"
                    alt="About Banner"
                    fill
                    className="object-cover opacity-40"
                    style={{ objectFit: "cover", zIndex: 0 }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <div className="relative z-10 text-center px-4 sm:px-10">
                    <h1 className="text-5xl sm:text-7xl font-extrabold" data-aos="fade-down">
                        About SPAudio
                    </h1>
                    <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up">
                        Powering your world with precision sound and iconic design.
                    </p>
                </div>
            </section>

            {/* Two-Column Info Section */}
            <section className="py-24 px-6 sm:px-16 bg-[#1a1a1a]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Built on Innovation</h2>
                        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                            Since 2010, combined cutting-edge technology with timeless style. Our engineers and designers work side-by-side to develop speakers and headphones that don&apos;t just perform — they inspire.
                        </p>
                    </div>
                    <div data-aos="fade-left">
                        <Image
                            src="/images/factory-dark.jpg"
                            alt="Innovation"
                            width={700}
                            height={500}
                            className="w-full rounded-xl object-cover shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Highlight Features Section */}
            <section className="bg-[#121212] py-24 px-6 sm:px-16 text-center" data-aos="fade-up">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">What Drives Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-gray-300">
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Sound Engineering</h3>
                        <p className="text-sm">Every decibel counts — tuned to deliver studio-quality clarity in any setting.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Timeless Aesthetics</h3>
                        <p className="text-sm">Design that never fades, crafted with bold silhouettes and premium finishes.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Enduring Craft</h3>
                        <p className="text-sm">We obsess over durability, building products meant to last and evolve.</p>
                    </div>
                </div>
            </section>

            {/* CTA Footer Section */}
            <section className="bg-gradient-to-b from-black to-[#0c0c0c] py-20 px-6 sm:px-16 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4" data-aos="fade-up">
                    Experience our legacy in sound.
                </h2>
                <p className="text-gray-400 text-sm sm:text-base mb-6 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="150">
                    Dive deeper into what makes SPAudio a leader in the audio revolution.
                </p>
                <a
                    href="/products"
                    className="inline-block bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition text-sm font-medium"
                    data-aos="fade-up" data-aos-delay="300"
                >
                    Explore Our Gear
                </a>
            </section>
        </div>
    );
}
