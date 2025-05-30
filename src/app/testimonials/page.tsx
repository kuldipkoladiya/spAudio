"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const testimonials = [
        {
            name: "Alex Rivera",
            role: "DJ & Producer",
            quote: "SPAudio amps deliver insane power and precision. My setup has never sounded this clean.",
        },
        {
            name: "Lena Morris",
            role: "Home Audio Enthusiast",
            quote: "The clarity and depth of their speakers blew me away. It is like a concert in my living room.",
        },
        {
            name: "Mark Johnson",
            role: "Custom Installer",
            quote: "Reliable gear, sleek design, and unbeatable customer support. I recommend SPAudio to all my clients.",
        },
    ];

    return (
        <div className="bg-[#0a0a0a] text-white px-6 py-20 min-h-screen font-sans">
            {/* Header */}
            <section className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
                <h1 className="text-5xl font-bold mb-4">Customer Testimonials</h1>
                <p className="text-gray-400 text-lg">
                    Hear what our users say about SPAudio&apos;s unmatched sound and service.
                </p>
            </section>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-[#1a1a1a] rounded-xl p-6 text-center"
                        data-aos="zoom-in"
                        data-aos-delay={index * 150}
                    >
                        <p className="text-gray-300 italic text-sm mb-4">&quot;{testimonial.quote}&quot;</p>
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-blue-500 text-sm">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
