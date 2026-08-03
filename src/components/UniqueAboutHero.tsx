"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import KineticGrid from "@/components/ui/KineticGrid";

const MODES = [
    {
        id: "acoustics",
        label: "Acoustic Physics",
        icon: "🔊",
        tagline: "TRANSDUCTION EXCELLENCE",
        title: "Bespoke Voice Coils & Precision Transducers",
        description: "Every driver is custom-engineered in-house. We match voice coils, high-excursion cones, and neodymium magnets within 0.5dB tolerance to eliminate harmonic distortion at extreme SPL levels.",
        image: "/images/spaudio_clean_speaker_1.png",
        stats: [
            { label: "Tolerance", value: "< 0.5 dB" },
            { label: "Voice Coil", value: "4.5 Inch" },
            { label: "Magnet Type", value: "Neodymium N52" },
        ],
    },
    {
        id: "dsp",
        label: "DSP Architectures",
        icon: "⚡",
        tagline: "INTELLIGENT AUDIO CONTROL",
        title: "Active FIR Filtering & Smart Protection",
        description: "Our active systems feature onboard multi-core DSP with linear-phase FIR crossovers, dynamic thermal limiters, and delay alignment for perfect phase-coherent sound distribution.",
        image: "/images/amp2.png",
        stats: [
            { label: "DSP Cores", value: "96 kHz / 32-bit" },
            { label: "Limiter Response", value: "< 1 ms" },
            { label: "Phase Accuracy", value: "Linear Phase" },
        ],
    },
    {
        id: "structure",
        label: "Birch Enclosures",
        icon: "🌲",
        tagline: "STRUCTURAL RIGIDITY",
        title: "Multi-Ply Baltic Birch & Tuned Chambers",
        description: "Machined from high-density Baltic Birch plywood with interlocked internal bracing chambers. Designed to dissipate standing waves and prevent boxy sound coloration.",
        image: "/images/spaudio_subwoofer.png",
        stats: [
            { label: "Wood Grade", value: "18mm Birch" },
            { label: "Resonance", value: "Zero Coloration" },
            { label: "Finish", value: "Polyurea Shield" },
        ],
    },
];

export default function UniqueAboutHero() {
    const [activeTab, setActiveTab] = useState(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const heroY = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const currentMode = MODES[activeTab];

    return (
        <div 
            ref={containerRef}
            className="relative w-full bg-[#f8fafc] text-[#0f1f3d] pt-28 sm:pt-36 pb-20 px-5 sm:px-8 overflow-hidden select-none border-b border-slate-200/80"
        >
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

            {/* Ambient Light Blue Glows */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[140px] pointer-events-none z-0" />
            <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-indigo-500/8 rounded-full blur-[110px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

                {/* 1. Header Manifesto Badge */}
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
                <motion.div style={{ y: heroY }} className="text-center max-w-4xl mb-8">
                    <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black tracking-tight leading-[1.08] text-[#0f1f3d]">
                        Engineering The Future Of <br />
                        <span className="bg-gradient-to-r from-[#0f1f3d] via-[#3b82f6] to-purple-600 bg-clip-text text-transparent">
                            Uncompromising Sound
                        </span>
                    </h1>
                    <p className="mt-5 text-[#6b7280] max-w-2xl mx-auto text-base sm:text-lg font-medium leading-relaxed">
                        We design, engineer, and calibrate tour-grade active loudspeakers and high-capacity amplifiers. Driven by system physics and tuned for emotional purity.
                    </p>
                </motion.div>

                {/* 3. Interactive Sound Mode Switcher */}
                <div className="flex flex-wrap gap-3 justify-center mb-10 z-20">
                    {MODES.map((mode, index) => (
                        <button
                            key={mode.id}
                            onClick={() => setActiveTab(index)}
                            className={`font-display flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer ${
                                activeTab === index
                                    ? "bg-[#0f1f3d] text-white shadow-lg shadow-[#0f1f3d]/20 scale-105"
                                    : "bg-white text-[#374151] hover:bg-slate-100 hover:text-[#0f1f3d] border border-slate-200/80 shadow-sm"
                            }`}
                        >
                            <span>{mode.icon}</span>
                            <span>{mode.label}</span>
                        </button>
                    ))}
                </div>

                {/* 4. Main Interactive Feature Stage (Dynamic Swap on Tab Click) */}
                <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl shadow-slate-200/60">
                    
                    {/* Left Column: Interactive Mode Details */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentMode.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.35 }}
                            >
                                <span className="font-display text-[11px] font-extrabold tracking-[0.2em] text-[#3b82f6] uppercase block mb-2">
                                    {currentMode.tagline}
                                </span>
                                <h2 className="font-display text-2xl sm:text-4xl font-black text-[#0f1f3d] mb-4 leading-snug">
                                    {currentMode.title}
                                </h2>
                                <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed mb-8">
                                    {currentMode.description}
                                </p>

                                {/* Specs Metrics Grid */}
                                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-100">
                                    {currentMode.stats.map((stat, i) => (
                                        <div key={i} className="bg-[#f8fafc] rounded-2xl p-3 border border-slate-200/60">
                                            <span className="font-display font-black text-sm sm:text-base text-[#0f1f3d] block">
                                                {stat.value}
                                            </span>
                                            <span className="text-[10px] font-bold text-[#9ca3af] uppercase tracking-wider block mt-0.5">
                                                {stat.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: High-Res Image Showcase */}
                    <div className="lg:col-span-6 flex items-center justify-center relative min-h-[300px] sm:min-h-[350px]">
                        <div className="relative w-full h-[280px] sm:h-[340px] bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentMode.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.35 }}
                                    className="relative w-full h-full flex items-center justify-center"
                                >
                                    <Image
                                        src={currentMode.image}
                                        alt={currentMode.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

                {/* 5. Bottom Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-wrap items-center justify-center gap-4 mt-10"
                >
                    <Link href="/products">
                        <button className="px-8 py-3.5 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-blue-500/25 hover:scale-105 cursor-pointer">
                            Explore Pro Catalog
                        </button>
                    </Link>
                    <Link href="/contact">
                        <button className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#0f1f3d] text-xs sm:text-sm font-extrabold uppercase tracking-wider border border-slate-200/80 transition-all duration-300 hover:scale-105 cursor-pointer">
                            Contact Engineering
                        </button>
                    </Link>
                </motion.div>

            </div>
        </div>
    );
}
