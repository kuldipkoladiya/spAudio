"use client";

import React from "react";
import Link from "next/link";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import KineticGrid from "@/components/ui/KineticGrid";
import { motion } from "framer-motion";

export default function AboutPage() {
    // ---------------------------------------------------------
    // Carousel Items: Pillars of SPAudio Engineering
    // ---------------------------------------------------------
    const cardsData = [
        {
            category: "Audio Design",
            title: "Transducer Engineering",
            src: "/images/SpeakerShowcase.png",
            content: (
                <div className="bg-[#f8fafc] p-8 md:p-14 rounded-3xl text-[#0f1f3d] font-sans">
                    <span className="text-[#3b82f6] text-xs font-bold tracking-[0.2em] uppercase">PILLARS OF EXCELLENCE</span>
                    <h3 className="text-3xl md:text-5xl font-display font-black mt-2 mb-6">Transducer Engineering</h3>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed mb-6">
                        At the heart of every SPAudio loudspeaker is a meticulously designed transducer. We don&apos;t use off-the-shelf components. Instead, we custom-engineer voice coils, high-excursion cones, and neodymium magnets to work in perfect harmony.
                    </p>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed">
                        By designing our own compression drivers and woofers, we achieve extremely low harmonic distortion even at maximum sound pressure levels. Every batch of transducers is measured and matched within 0.5dB tolerance before assembly.
                    </p>
                </div>
            )
        },
        {
            category: "Structural Physics",
            title: "Bespoke Cabinets & Resonance",
            src: "/images/stack_1.png",
            content: (
                <div className="bg-[#f8fafc] p-8 md:p-14 rounded-3xl text-[#0f1f3d] font-sans">
                    <span className="text-[#3b82f6] text-xs font-bold tracking-[0.2em] uppercase">STRUCTURAL PHYSICALITY</span>
                    <h3 className="text-3xl md:text-5xl font-display font-black mt-2 mb-6">Baltic Birch & Impedance Tuning</h3>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed mb-6">
                        A loudspeaker cabinet is not just a box; it is a precision instrument. SPAudio enclosures are constructed from multi-ply premium Baltic Birch plywood, selected specifically for its structural stability and low resonance.
                    </p>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed">
                        We apply advanced internal bracing patterns and tuned porting chambers to eliminate standing waves inside the enclosure. This ensures that the sound you hear is purely from the drivers, with zero boxy coloration or vibration.
                    </p>
                </div>
            )
        },
        {
            category: "Intelligent Audio",
            title: "Advanced DSP & Amplification",
            src: "/images/amp2.png",
            content: (
                <div className="bg-[#f8fafc] p-8 md:p-14 rounded-3xl text-[#0f1f3d] font-sans">
                    <span className="text-[#3b82f6] text-xs font-bold tracking-[0.2em] uppercase">INTELLIGENT AUDIO</span>
                    <h3 className="text-3xl md:text-5xl font-display font-black mt-2 mb-6">Active DSP Architectures</h3>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed mb-6">
                        Our active speaker systems are powered by state-of-the-art Class-D amplifier modules coupled with advanced onboard digital signal processors (DSP). This gives live engineers absolute control over crossover, delay, and EQ.
                    </p>
                    <p className="text-base md:text-lg text-[#6b7280] font-medium leading-relaxed">
                        Using smart limiter circuits and thermal feedback loops, SPAudio units protect themselves automatically from damage, delivering maximum performance all night long without clipping or sound quality degradation.
                    </p>
                </div>
            )
        }
    ];

    const carouselItems = cardsData.map((card, index) => (
        <Card key={index} card={card} index={index} />
    ));

    // ---------------------------------------------------------
    // Team Members Showcase
    // ---------------------------------------------------------
    const teamData = [
        {
            quote: "Engineering audio is a beautiful marriage between rigorous science and artistic emotion. We design systems that make you feel like the band is in the room with you.",
            name: "Dr. Vikram Mehta",
            designation: "Chief Sound Architect",
            src: "/images/speaker2.png"
        },
        {
            quote: "Every material choice, from cabinet wood to speaker glue, dictates the final sonic response. We tune for absolute authenticity and linear dispersion.",
            name: "Sarah Jenkins",
            designation: "Materials Science Lead",
            src: "/images/FeatureSection_1.png"
        },
        {
            quote: "By writing custom DSP limiters and linear-phase crossovers, we ensure the sound is crisp, phase-aligned, and extremely reliable on the road.",
            name: "Rajesh Patel",
            designation: "DSP & Electronics Engineer",
            src: "/images/amp3.png"
        }
    ];

    const scrollToPillars = () => {
        const target = document.getElementById("pillars-section");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white text-[#0f1f3d] font-sans overflow-hidden min-h-screen relative">
            {/* 1. HERO SECTION (Centered Layout with Normal Text & Kinetic Grid) */}
            <section className="py-28 md:py-36 text-center px-6 relative z-10 border-b border-gray-100 min-h-[75vh] flex flex-col justify-center items-center">
                {/* Kinetic Grid Background */}
                <div className="absolute inset-0 z-0">
                    <KineticGrid 
                        dotColor="rgba(15, 31, 61, 0.12)" 
                        lineColor="rgba(59, 130, 246, 0.06)" 
                        trailColor="rgba(59, 130, 246, 0.25)"
                        spacing={35}
                        radius={280}
                        strength={4}
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center w-full select-none">
                    <motion.span 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.4em] uppercase mb-4 block text-center"
                    >
                        OUR AUDIO MANIFESTO // SPA AUDIO
                    </motion.span>
                    
                    {/* Normal HTML/CSS Display Heading */}
                    <motion.h1 
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-[#0f1f3d] text-center"
                    >
                        AUDIO EXCELLENCE <br />
                        <span className="relative inline-block mt-2">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                                REDEFINING SOUND
                            </span>
                        </span>
                    </motion.h1>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                        className="mt-8 text-[#6b7280] max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed text-center pointer-events-none"
                    >
                        We design, engineer, and calibrate tour-grade, high-fidelity active monitors and analog amplifiers. Driven by system physics, engineered for absolute precision, and tuned for emotional purity.
                    </motion.p>

                    {/* Action buttons */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                        className="flex flex-wrap gap-4 mt-10 pointer-events-auto justify-center"
                    >
                        <button 
                            onClick={scrollToPillars}
                            className="group/btn inline-flex items-center gap-2 px-8 py-4 bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/25 hover:scale-[1.02] cursor-pointer"
                        >
                            Our Principles
                            <svg className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <Link href="/products">
                            <button className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 hover:border-[#0f1f3d] text-[#0f1f3d] text-sm font-bold rounded-full transition-all duration-300 hover:bg-[#0f1f3d]/5 hover:scale-[1.02]">
                                View Products
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Ambient gradients for other sections */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="absolute top-[50%] left-[10%] w-[380px] h-[380px] bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" 
            />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5 }}
                className="absolute bottom-[15%] right-[5%] w-[480px] h-[480px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" 
            />

            {/* Grid Overlay for remaining parts */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,61,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,61,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-80" />

            {/* 2. DYNAMIC PILLARS CAROUSEL */}
            <motion.section 
                id="pillars-section"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-20 bg-slate-50/40 border-y border-gray-100/80 relative z-10"
            >
                <div className="max-w-7xl mx-auto px-5 mb-6 text-left">
                    <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-2 block">
                        ENGINEERING PRINCIPLES
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d]">
                        How We Build Sound
                    </h2>
                    <p className="text-[#6b7280] text-sm md:text-base font-semibold mt-2">
                        Click on any card to dive deep into our research and physical design specifications.
                    </p>
                </div>
                <Carousel items={carouselItems} />
            </motion.section>

            {/* 3. TEAM SHOWCASE (Animated Testimonials) */}
            <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-24 bg-white relative z-10"
            >
                <div className="max-w-7xl mx-auto px-5 text-center mb-12">
                    <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                        THE EXPERTS
                    </span>
                    <h2 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d]">
                        The Engineering Minds
                    </h2>
                    <p className="text-[#6b7280] text-sm md:text-base font-semibold mt-2">
                        Meet the designers behind our signature linear audio signature.
                    </p>
                </div>
                <div className="w-full">
                    <AnimatedTestimonials testimonials={teamData} autoplay={false} />
                </div>
            </motion.section>

            {/* 4. LAB METRICS (Stats Section) */}
            <section className="py-24 bg-[#070d19] text-[#ffffff] relative z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                            LABORATORY STANDARDS
                        </span>
                        <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                            Tested For Extreme Scenarios
                        </h3>
                    </motion.div>

                    <motion.div 
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
                    >
                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                            }}
                            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[24px] p-8 text-left transition-all duration-300 hover:scale-105 hover:border-blue-500/40"
                        >
                            <span className="text-[#22c55e] font-display text-4xl sm:text-5xl font-black block mb-2">&lt; 0.03%</span>
                            <span className="font-display text-xs font-extrabold tracking-wider text-slate-300 uppercase block mb-1">Total Harmonic Distortion</span>
                            <p className="text-slate-400 text-sm leading-relaxed">Achieving near absolute purity across all audible frequencies under high load conditions.</p>
                        </motion.div>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                            }}
                            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[24px] p-8 text-left transition-all duration-300 hover:scale-105 hover:border-indigo-500/40"
                        >
                            <span className="text-[#3b82f6] font-display text-4xl sm:text-5xl font-black block mb-2">240+ Hrs</span>
                            <span className="font-display text-xs font-extrabold tracking-wider text-slate-300 uppercase block mb-1">Anechoic Lab Testing</span>
                            <p className="text-slate-400 text-sm leading-relaxed">Rigorous sweep signals, thermal cycles, and dispersion pattern measurements for ultimate reliability.</p>
                        </motion.div>

                        <motion.div 
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                            }}
                            className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[24px] p-8 text-left transition-all duration-300 hover:scale-105 hover:border-purple-500/40"
                        >
                            <span className="text-purple-500 font-display text-4xl sm:text-5xl font-black block mb-2">± 0.5dB</span>
                            <span className="font-display text-xs font-extrabold tracking-wider text-slate-300 uppercase block mb-1">Driver Response Matching</span>
                            <p className="text-slate-400 text-sm leading-relaxed">Each loudspeaker cabinet contains drivers specifically paired to guarantee precise stereo imaging.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. CTA SECTION */}
            <motion.section 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="py-24 sm:py-32 text-center bg-white border-t border-gray-100 relative z-10"
            >
                <div className="px-4 max-w-3xl mx-auto">
                    <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight leading-none text-[#0f1f3d]">
                        WANT TO DISCOVER <br />
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                            OUR PRODUCT SUITE?
                        </span>
                    </h2>

                    <p className="mt-6 text-[#6b7280] font-sans font-medium text-sm sm:text-lg">
                        Explore our concert series cabinets, line array towers, and professional amplifiers.
                    </p>

                    <Link href="/products">
                        <button className="group/btn mt-10 inline-flex items-center gap-2 px-10 py-4 bg-[#0f1f3d] hover:bg-[#3b82f6] text-[#ffffff] text-sm font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/25 hover:scale-[1.03]">
                            Explore Products
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>
            </motion.section>
        </div>
    );
}