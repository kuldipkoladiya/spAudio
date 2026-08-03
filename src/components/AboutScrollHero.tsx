"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import KineticGrid from "@/components/ui/KineticGrid";

const pillars = [
    {
        tag: "PILLARS OF EXCELLENCE",
        title: "Transducer Engineering",
        description: "Custom-designed voice coils, high-excursion cones, and neodymium magnets matched within 0.5dB tolerance for linear acoustic output.",
        image: "/images/spaudio_clean_speaker_1.png",
        stats: "0.5 dB Tolerance",
    },
    {
        tag: "STRUCTURAL PHYSICALITY",
        title: "Baltic Birch Enclosures",
        description: "Multi-ply premium Baltic Birch plywood tuned with internal bracing chambers to eliminate standing waves and box coloration.",
        image: "/images/spaudio_subwoofer.png",
        stats: "18mm Density",
    },
    {
        tag: "INTELLIGENT AUDIO",
        title: "Active DSP & Amplification",
        description: "State-of-the-art Class-D modules with onboard 96kHz/32-bit DSP for linear-phase crossovers, delay alignment, and thermal limiting.",
        image: "/images/amp2.png",
        stats: "96 kHz / 32-bit",
    },
];

export default function AboutScrollHero() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Scroll Animations
    const heroScale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
    const heroRotate = useTransform(scrollYProgress, [0, 0.4], [-3, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.4], [40, 0]);
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const scrollToPillars = () => {
        const target = document.getElementById("pillars-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div 
            ref={containerRef}
            className="relative w-full bg-[#f8fafc] text-[#0f1f3d] pt-28 sm:pt-36 pb-20 px-5 sm:px-8 overflow-hidden select-none border-b border-slate-200/80"
        >
            {/* Scroll Progress Bar Indicator at Top */}
            <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-slate-200/60 pointer-events-none">
                <motion.div 
                    style={{ width: progressWidth }}
                    className="h-full bg-gradient-to-r from-[#3b82f6] to-indigo-600 shadow-sm" 
                />
            </div>

            {/* Background Kinetic Grid Component */}
            <div className="absolute inset-0 z-0 opacity-70">
                <KineticGrid 
                    dotColor="rgba(15, 31, 61, 0.12)" 
                    lineColor="rgba(59, 130, 246, 0.08)" 
                    trailColor="rgba(59, 130, 246, 0.3)"
                    spacing={36}
                    radius={300}
                    strength={4}
                />
            </div>

            {/* Ambient Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

                {/* 1. Manifesto Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 shadow-sm mb-6"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6] animate-pulse" />
                    <span className="font-display text-[11px] font-extrabold tracking-[0.25em] text-[#3b82f6] uppercase">
                        OUR AUDIO MANIFESTO // S.P. AUDIO
                    </span>
                </motion.div>

                {/* 2. Main Title */}
                <motion.div 
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-center max-w-4xl mb-8"
                >
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-black tracking-tight leading-[1.08] text-[#0f1f3d]">
                        Audio Excellence Redefined <br />
                        <span className="bg-gradient-to-r from-[#0f1f3d] via-[#3b82f6] to-purple-600 bg-clip-text text-transparent">
                            Through Precision Physics
                        </span>
                    </h1>
                    <p className="mt-5 text-[#6b7280] max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
                        We design, engineer, and calibrate tour-grade active loudspeakers and high-capacity amplifiers. Driven by system physics, engineered for absolute precision, and tuned for emotional purity.
                    </p>
                </motion.div>

                {/* 3. Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.25 }}
                    className="flex flex-wrap items-center justify-center gap-4 mb-16 z-20"
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
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-[#0f1f3d] text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 border border-slate-200/80 shadow-sm hover:scale-[1.03] cursor-pointer">
                            <span>Explore Catalog</span>
                        </button>
                    </Link>
                </motion.div>

                {/* 4. Main Scroll Animation Showcase Card */}
                <motion.div
                    style={{ scale: heroScale, rotateX: heroRotate, y: heroY }}
                    className="w-full max-w-5xl bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-200/70 mb-16 overflow-hidden relative"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <span className="px-3 py-1 bg-blue-50 text-[#3b82f6] text-[10px] font-extrabold tracking-wider uppercase rounded-full border border-blue-100 mb-3 inline-block">
                                FLAGSHIP ACOUSTIC MONSTERS
                            </span>
                            <h2 className="font-display font-black text-2xl sm:text-4xl text-[#0f1f3d] mb-4 leading-tight">
                                Built for Stage, Concert & High-Power Venues
                            </h2>
                            <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed mb-6">
                                Every SPAudio enclosure is constructed from multi-ply premium Baltic Birch plywood, paired with high-efficiency Class-D amplification and linear-phase DSP filtering.
                            </p>
                            <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                                <div>
                                    <span className="font-display font-black text-2xl text-[#0f1f3d] block">138 dB</span>
                                    <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider block">Peak SPL</span>
                                </div>
                                <div className="h-8 w-px bg-slate-200" />
                                <div>
                                    <span className="font-display font-black text-2xl text-[#0f1f3d] block">20Hz - 20kHz</span>
                                    <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider block">Linear Range</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full h-[260px] sm:h-[320px] bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                            <Image
                                src="/images/spaudio_clean_speaker_1.png"
                                alt="SP Audio Concert Speaker"
                                fill
                                className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

                {/* 5. Scroll Cards Grid (3 Pillars of Sound) */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.15 }}
                            className="group bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                        >
                            <div>
                                <div className="relative w-full h-[200px] sm:h-[220px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                    <Image
                                        src={pillar.image}
                                        alt={pillar.title}
                                        fill
                                        className="object-contain p-2 group-hover:scale-108 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-slate-100 text-[#0f1f3d] text-[10px] font-extrabold tracking-wider uppercase rounded-full">
                                        {pillar.stats}
                                    </span>
                                </div>

                                <p className="text-[11px] font-extrabold text-[#3b82f6] uppercase tracking-wider mb-1">
                                    {pillar.tag}
                                </p>
                                <h3 className="font-display font-black text-xl text-[#0f1f3d] mb-3 group-hover:text-[#3b82f6] transition-colors">
                                    {pillar.title}
                                </h3>
                                <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed">
                                    {pillar.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
}
