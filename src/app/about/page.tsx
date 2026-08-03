"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ExplodedSpeakerScroll from "@/components/ExplodedSpeakerScroll";

const pillarsData = [
    {
        category: "PILLARS OF EXCELLENCE",
        title: "Transducer Engineering",
        subtitle: "Acoustic Power",
        image: "/images/spaudio_clean_speaker_1.png",
        description: "Custom-engineered voice coils, high-excursion cones, and neodymium magnets matched within 0.5dB tolerance to eliminate harmonic distortion at extreme SPL levels.",
    },
    {
        category: "STRUCTURAL PHYSICALITY",
        title: "Baltic Birch & Impedance Tuning",
        subtitle: "Resonance Control",
        image: "/images/stack_1.png",
        description: "Multi-ply premium Baltic Birch plywood tuned with internal bracing chambers to eliminate standing waves and prevent boxy sound coloration.",
    },
    {
        category: "INTELLIGENT AUDIO",
        title: "Active DSP Architectures",
        subtitle: "Digital Intelligence",
        image: "/images/amp2.png",
        description: "State-of-the-art Class-D amplifier modules coupled with onboard 96kHz/32-bit DSP for linear-phase crossovers, delay alignment, and thermal protection.",
    },
];

const teamData = [
    {
        quote: "Engineering audio is a beautiful marriage between rigorous science and artistic emotion. We design systems that make you feel like the band is in the room with you.",
        name: "Dr. Vikram Mehta",
        designation: "Chief Sound Architect",
        image: "/images/spaudio_clean_speaker_1.png",
    },
    {
        quote: "Every material choice, from cabinet wood to speaker glue, dictates the final sonic response. We tune for absolute authenticity and linear dispersion.",
        name: "Sarah Jenkins",
        designation: "Materials Science Lead",
        image: "/images/spaudio_clean_speaker_2.png",
    },
    {
        quote: "By writing custom DSP limiters and linear-phase crossovers, we ensure the sound is crisp, phase-aligned, and extremely reliable on the road.",
        name: "Rajesh Patel",
        designation: "DSP & Electronics Engineer",
        image: "/images/amp3.png",
    },
];

const metricsData = [
    { value: "138 dB", label: "Peak SPL Output", detail: "Tour-grade capacity" },
    { value: "20 Hz - 20 kHz", label: "Linear Response", detail: "Full acoustic range" },
    { value: "< 0.5 dB", label: "Driver Tolerance", detail: "Matched transducer pair" },
    { value: "100%", label: "Custom Transducers", detail: "Bespoke engineering" },
];

export default function AboutPage() {
    return (
        <div className="bg-[#f8fafc] text-[#0f1f3d] font-sans min-h-screen">

            {/* ── 1. ABOUT HERO MANIFESTO ───────────────────────────── */}
            <section className="py-20 md:py-28 border-b border-slate-100 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="text-center max-w-4xl mx-auto mb-14">
                        <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                            OUR AUDIO MANIFESTO // S.P. AUDIO
                        </span>
                        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-[#0f1f3d] tracking-tight leading-tight mb-6">
                            Audio Excellence Redefined <br className="hidden sm:inline" />
                            <span className="bg-gradient-to-r from-[#0f1f3d] via-[#3b82f6] to-purple-600 bg-clip-text text-transparent">
                                Through Precision Physics
                            </span>
                        </h1>
                        <p className="text-[#6b7280] text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
                            We design, engineer, and calibrate tour-grade active loudspeakers and high-capacity amplifiers. Driven by system physics, engineered for absolute precision, and tuned for emotional purity.
                        </p>
                    </div>

                    {/* Performance Metrics Bar */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
                        {metricsData.map((m, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-3 border-r last:border-r-0 border-slate-100">
                                <span className="font-display font-black text-2xl sm:text-3xl text-[#0f1f3d]">
                                    {m.value}
                                </span>
                                <span className="font-display text-xs font-bold uppercase tracking-wider text-[#3b82f6] mt-1">
                                    {m.label}
                                </span>
                                <span className="text-[11px] text-slate-400 font-medium mt-0.5">
                                    {m.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── INTERACTIVE EXPLODED SPEAKER ASSEMBLY SCROLL SECTION ── */}
            <ExplodedSpeakerScroll />

            {/* ── 2. ENGINEERING PILLARS SECTION ───────────────────── */}
            <section id="pillars-section" className="py-16 md:py-24 border-b border-slate-100 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                        <div>
                            <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                                ENGINEERING PRINCIPLES
                            </span>
                            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d] tracking-tight">
                                How We Build Sound
                            </h2>
                        </div>
                        <Link 
                            href="/products" 
                            className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#1d4ed8] font-bold text-sm transition-colors group"
                        >
                            <span>Explore Catalog</span>
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* 3 Column Cards Grid matching Website Design System */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pillarsData.map((item, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="relative w-full h-[320px] sm:h-[350px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-2 scale-105 transition-transform duration-500 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>

                                    <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                                        {item.subtitle}
                                    </p>
                                    <h3 className="font-display font-black text-xl text-[#0f1f3d] mb-3 group-hover:text-[#3b82f6] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed mb-4">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <Link href="/products">
                                        <button className="w-full py-3 px-4 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-blue-500/25 cursor-pointer">
                                            <span>Learn Specs</span>
                                            <svg className="w-4 h-4 text-blue-400 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── 3. TEAM LEADERSHIP SECTION ───────────────────────── */}
            <section className="py-16 md:py-24 bg-[#f8fafc]">
                <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                            THE PEOPLE BEHIND THE SOUND
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d] tracking-tight">
                            Meet Our Audio Engineers
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamData.map((member, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="relative w-full h-[220px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-contain p-3"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>

                                    <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed italic mb-6">
                                        &ldquo;{member.quote}&rdquo;
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <h4 className="font-display font-black text-lg text-[#0f1f3d]">
                                        {member.name}
                                    </h4>
                                    <p className="text-[11px] font-extrabold text-[#3b82f6] uppercase tracking-wider mt-0.5">
                                        {member.designation}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}