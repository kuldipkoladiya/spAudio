"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Wrench, Settings2, SlidersHorizontal } from "lucide-react";
import Link from "next/link";

export default function Services() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const services = [
        {
            icon: <Wrench className="w-8 h-8 text-cyan-400" aria-hidden="true" />,
            title: "Installation",
            description: "Seamless setup of amps, speakers, and audio systems in any environment.",
        },
        {
            icon: <SlidersHorizontal className="w-8 h-8 text-cyan-400" aria-hidden="true" />,
            title: "System Tuning",
            description: "Custom tuning to optimize audio clarity, bass response, and room acoustics.",
        },
        {
            icon: <Settings2 className="w-8 h-8 text-cyan-400" aria-hidden="true" />,
            title: "Maintenance",
            description: "Regular servicing to ensure peak performance and system longevity.",
        },
    ];

    return (
        <div className="min-h-screen bg-[#111111] text-white font-sans">
            {/* Hero */}
            <section className="text-center py-20 px-6 max-w-4xl mx-auto" data-aos="fade-down">
                <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Professional Audio Services</h1>
                <p className="text-gray-400 text-lg">
                    Expert setup, precision tuning, and reliable maintenance tailored for every audio system.
                </p>
            </section>

            {/* Services Cards */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6 sm:px-16 max-w-7xl mx-auto pb-20">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-[#1c1c1c] p-8 rounded-xl border border-gray-800 hover:border-cyan-500 transition-all"
                        data-aos="fade-up"
                        data-aos-delay={idx * 150}
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="bg-[#0d0d0d] text-center py-16 px-6" data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-4">Need a Custom Audio Solution?</h2>
                <p className="text-gray-400 mb-6 max-w-xl mx-auto">
                    Let our experienced team tailor a service plan for your project — from car audio to studio setup.
                </p>
                <Link
                    href="/contact"
                    className="bg-cyan-500 hover:bg-cyan-600 text-black px-6 py-3 rounded-full font-semibold transition"
                >
                    Contact Us
                </Link>
            </section>

        </div>
    );
}
