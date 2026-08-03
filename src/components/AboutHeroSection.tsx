"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import KineticGrid from "@/components/ui/KineticGrid";

const stats = [
    { value: "138 dB", label: "Peak SPL Capacity", detail: "Tour-grade output" },
    { value: "20 Hz - 20 kHz", label: "Linear Response", detail: "Full acoustic spectrum" },
    { value: "0.05%", label: "Ultra-Low THD", detail: "Purity at max power" },
    { value: "100%", label: "Custom Transducers", detail: "Bespoke engineering" },
];

const highlights = [
    {
        title: "Transducer Engineering",
        subtitle: "Acoustic Power",
        image: "/images/spaudio_clean_speaker_1.png",
        tag: "CUSTOM DRIVERS",
        description: "Zero off-the-shelf parts. Custom voice coils and neodymium magnets matched within 0.5dB.",
    },
    {
        title: "Baltic Birch Enclosures",
        subtitle: "Structural Rigidity",
        image: "/images/spaudio_subwoofer.png",
        tag: "ZERO RESONANCE",
        description: "Multi-ply premium Baltic Birch plywood tuned to eliminate standing waves and box coloration.",
    },
    {
        title: "Active DSP & Amplification",
        subtitle: "Digital Intelligence",
        image: "/images/amp2.png",
        tag: "CLASS-D POWER",
        description: "State-of-the-art active crossovers, thermal limiters, and linear-phase EQ controls.",
    },
];

export default function AboutHeroSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax Transforms
    const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
    const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
    const cardsY = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const scaleHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

    const scrollToPillars = () => {
        const target = document.getElementById("pillars-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div ref={containerRef} className="relative w-full bg-white text-[#0f1f3d] overflow-hidden select-none">
            {/* Background Kinetic Grid Layer */}
            <div className="absolute inset-0 z-0 opacity-80">
                <KineticGrid 
                    dotColor="rgba(15, 31, 61, 0.12)" 
                    lineColor="rgba(59, 130, 246, 0.08)" 
                    trailColor="rgba(59, 130, 246, 0.3)"
                    spacing={36}
                    radius={300}
                    strength={4.5}
                />
            </div>

            {/* Ambient Background Radial Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Main Hero Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 sm:pt-40 pb-20 flex flex-col items-center">

                {/* 1. Top Manifesto Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/80 border border-blue-200/80 backdrop-blur-md mb-8 shadow-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-[#3b82f6] animate-pulse" />
                    <span className="font-display text-[11px] sm:text-xs font-black tracking-[0.25em] text-[#3b82f6] uppercase">
                        OUR AUDIO MANIFESTO // S.P. AUDIO
                    </span>
                </motion.div>

                {/* 2. Main Title with Parallax */}
                <motion.div style={{ y: titleY, scale: scaleHero }} className="text-center max-w-5xl">
                    <motion.h1 
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight leading-[1.05] text-[#0f1f3d]"
                    >
                        Engineering The Future Of <br className="hidden sm:inline" />
                        <span className="bg-gradient-to-r from-[#3b82f6] via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Uncompromising Sound
                        </span>
                    </motion.h1>
                </motion.div>

                {/* 3. Subtitle Paragraph */}
                <motion.p
                    style={{ y: subtitleY }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                    className="mt-6 text-[#6b7280] max-w-2xl text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center"
                >
                    We design, engineer, and calibrate tour-grade active loudspeakers and high-capacity amplifiers. Driven by system physics, engineered for absolute precision, and tuned for emotional purity.
                </motion.p>

                {/* 4. Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                    className="flex flex-wrap gap-4 mt-8 justify-center pointer-events-auto"
                >
                    <button 
                        onClick={scrollToPillars}
                        className="group/btn inline-flex items-center gap-2.5 px-8 py-4 bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.03] cursor-pointer"
                    >
                        <span>Our Principles</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <Link href="/products">
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-[#0f1f3d] text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 hover:scale-[1.03] cursor-pointer border border-slate-200">
                            <span>Explore Catalog</span>
                        </button>
                    </Link>
                </motion.div>

                {/* 5. Live Audio Metric Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 p-6 sm:p-8 bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/50"
                >
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-3 border-r last:border-r-0 border-slate-100">
                            <span className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-[#0f1f3d] tracking-tight">
                                {stat.value}
                            </span>
                            <span className="font-display text-xs font-bold uppercase tracking-wider text-[#3b82f6] mt-1">
                                {stat.label}
                            </span>
                            <span className="text-[11px] text-slate-400 font-semibold mt-0.5">
                                {stat.detail}
                            </span>
                        </div>
                    ))}
                </motion.div>

                {/* 6. Interactive Feature Showcase Cards (With Parallax Motion) */}
                <motion.div 
                    style={{ y: cardsY }}
                    className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                {/* Card Image Container */}
                                <div className="relative w-full h-[220px] sm:h-[240px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden group-hover:border-blue-100 transition-colors">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-3 transition-transform duration-500 group-hover:scale-108"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <span className="absolute top-3 left-3 px-3 py-1 bg-blue-50 text-[#3b82f6] text-[10px] font-extrabold tracking-wider uppercase rounded-full border border-blue-100">
                                        {item.tag}
                                    </span>
                                </div>

                                <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                                    {item.subtitle}
                                </p>
                                <h3 className="font-display font-black text-xl text-[#0f1f3d] mb-3 group-hover:text-[#3b82f6] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
}
