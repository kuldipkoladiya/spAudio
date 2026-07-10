"use client";

import HeroSlider from "@/components/HeroSlider";
import ScrollProgressSection from "@/components/ScrollProgressSection";
import { StickyCardsSection } from "@/components/StickyCards";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "framer-motion";
import { Carousel as AppleCarousel, Card as AppleCard } from "@/components/ui/apple-cards-carousel";

/* ── SCROLL REVEAL ───────────────────────────────── */
function useReveal() {
    const ref = useRef<HTMLElement>(null!);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) el.classList.add("sp-visible"); },
            { threshold: 0.08 }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return ref;
}

/* ══════════════════════════════════════════════════ */
export default function Home() {
    return (
        <div className="bg-white text-[#0f1f3d]">
            <HeroSlider />
            <ScrollProgressSection />
            <StickyCardsSection />
            
            <ProductsSection />
            <WhyChooseSection />
            
            <CustomSolutionsSection />
            <StatsSection />
            <BuildTogetherSection />
        </div>
    );
}
// Cleaned up old section code

/* ── PRODUCTS ────────────────────────────────────── */
const TABS = ["All Products", "Loudspeakers", "Subwoofers", "Amplifiers", "Accessories"];
const PRODUCTS = [
    {
        name: "SPX 15A",
        model: "Active Speaker",
        power: "1200W Peak Power",
        img: "/images/spkr2.png",
        cat: "Loudspeakers",
    },
    {
        name: "SPX 18S",
        model: "Subwoofer",
        power: "2400W Peak Power",
        img: "/images/FeatureSection_1.png",
        cat: "Subwoofers",
    },
    {
        name: "SPX SP",
        model: "Stage Monitor",
        power: "1000W Peak Power",
        img: "/images/RTGYDRFG.png",
        cat: "Loudspeakers",
    },
    {
        name: "SPA 4.8",
        model: "Amplifier",
        power: "4×2000W",
        img: "/images/amp2.png",
        cat: "Amplifiers",
    },
];

function ProductsSection() {
    const ref = useReveal();
    const [tab, setTab] = useState("All Products");
    const filtered = PRODUCTS.filter((p) => tab === "All Products" || p.cat === tab);

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-white py-20 md:py-28"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

                {/* Header */}
                <div className="text-center mb-10">
                    <p className="font-display text-[11px] font-bold tracking-[0.25em] text-[#6b7280] uppercase mb-3">
                        Our Products
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-[46px] font-black text-[#0f1f3d] leading-tight">
                        Built for professionals.
                    </h2>
                    <p className="mt-3 text-[#6b7280] text-sm max-w-md mx-auto">
                        Discover a wide range of premium speakers and amps engineered for superior performance.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {TABS.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`font-display px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                tab === t
                                    ? "bg-[#0f1f3d] text-white shadow-md shadow-[#0f1f3d]/20"
                                    : "bg-[#f3f4f6] text-[#374151] hover:bg-[#e5e7eb] hover:text-[#0f1f3d]"
                            }`}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filtered.map((p, i) => (
                        <div
                            key={i}
                            className="group bg-[#f7f8fc] rounded-2xl overflow-hidden border border-[#eaecf0] hover:border-[#0f1f3d]/20 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="h-52 overflow-hidden relative bg-[#eef0f5]">
                                <Image
                                    src={p.img}
                                    alt={p.name}
                                    fill
                                    className="object-cover group-hover:scale-[1.06] transition-transform duration-500"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                            <div className="p-5 bg-white">
                                <p className="text-[#9ca3af] text-xs mb-1">{p.model}</p>
                                <h4 className="font-display font-black text-[#0f1f3d] text-lg">{p.name}</h4>
                                <p className="text-[#d1d5db] text-xs mt-0.5">{p.power}</p>
                                <Link href="/products">
                                    <button className="mt-4 w-full flex items-center justify-between text-[#0f1f3d] text-sm font-semibold pt-3 border-t border-[#f0f0f0] hover:text-[#162d57] transition-colors group/btn">
                                        <span>View Details</span>
                                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── WHY CHOOSE SP AUDIO ─────────────────────────── */
function WhyChooseSection() {
    const ref = useReveal();
    const cols = [
        {
            title: "High Performance",
            description: "Acoustic perfection designed for professional settings.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            items: ["Powerful SPL output", "Zero harmonic distortion", "Wide frequency dispersion", "Tour-grade audio quality"],
        },
        {
            title: "Reliable Build",
            description: "Built to withstand the rigors of touring and daily use.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0s0-1.85.5-3.5a1.88 1.88 0 013 0c.5 1.65.5 3.5.5 3.5s3.38-1.08 5 0c1.45.97 2 4 2 4h-5m-7 0v8m7-8v8m-7 0h7" />
                </svg>
            ),
            items: ["Multi-ply birch cabinets", "Weather-resistant coating", "Road-tested hardware", "Ultra-long active lifespan"],
        },
        {
            title: "Advanced Tech",
            description: "Intelligent digital signal processing presets.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            items: ["Smart limiter circuits", "High thermal efficiency", "Onboard DSP control", "Ultra-low latency path"],
        },
    ];

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-gradient-to-b from-[#f8fafc] to-white py-24 md:py-32"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Panel */}
                    <div className="lg:col-span-5 flex flex-col items-start text-left">
                        <span className="text-[#3b82f6] font-display text-[12px] font-extrabold tracking-[0.3em] uppercase mb-4">
                            Our Advantage
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0f1f3d] leading-[1.1] tracking-tight">
                            Why Professionals Choose SP Audio
                        </h2>
                        <p className="mt-6 text-[#6b7280] text-base md:text-lg font-medium leading-relaxed max-w-md">
                            SP Audio is committed to delivering high-fidelity sound that powers premium performances, architectural installs, and broadcasts globally. Trusted by top engineers.
                        </p>
                        <Link href="/about">
                            <button className="mt-8 flex items-center gap-2 px-8 py-4 bg-[#0f1f3d] hover:bg-[#162d57] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#0f1f3d]/20 hover:scale-[1.02]">
                                Learn More
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    {/* Right Panel: Premium Grid Cards */}
                    <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6 w-full">
                        {cols.map((c, i) => (
                            <div 
                                key={i} 
                                className="group bg-white rounded-[24px] border border-gray-100 p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-blue-50/50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                                        {c.icon}
                                    </div>
                                    <h4 className="font-display font-bold text-[#0f1f3d] text-lg sm:text-xl mb-2">{c.title}</h4>
                                    <p className="text-gray-400 text-xs font-medium leading-relaxed mb-6">{c.description}</p>
                                </div>
                                <ul className="space-y-3">
                                    {c.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2.5 text-xs text-[#6b7280] font-medium leading-tight">
                                            <svg className="w-4 h-4 text-[#3b82f6] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}



/* ── CUSTOM SOLUTIONS ────────────────────────────── */
const DummyCardContent = ({ title, desc, imgSrc }: { title: string; desc: string; imgSrc: string }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 text-[#0f1f3d] dark:text-white">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto leading-relaxed mb-8">
        <span className="font-bold text-neutral-800 dark:text-neutral-200 block mb-3 text-lg md:text-3xl">
          {title}
        </span>
        {desc}
      </p>
      <div className="relative h-64 md:h-96 w-full max-w-xl mx-auto rounded-2xl overflow-hidden bg-white/50 border border-gray-100 shadow-lg">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>
    </div>
  );
};

function CustomSolutionsSection() {
    const appleCarouselData = [
        {
            category: "Reference System",
            title: "SP Audio DS Flagship Series.",
            src: "/images/ds.png",
            content: (
                <DummyCardContent
                    title="High-Fidelity Architectural Reference Sound"
                    desc="Our signature high-power architectural sound system designed to stand out. Custom crossovers, premium drivers, and no compromise engineering."
                    imgSrc="/images/ds.png"
                />
            ),
        },
        {
            category: "Line Array",
            title: "SPX 15A Active Touring Assembly.",
            src: "/images/stack_1.png",
            content: (
                <DummyCardContent
                    title="1200W Peak Professional Touring Cabinet"
                    desc="Features custom-guided horn patterns, lightweight design, and active thermal cooling, delivering ultra-clear projection over massive audiences."
                    imgSrc="/images/stack_1.png"
                />
            ),
        },
        {
            category: "Subwoofer",
            title: "SPX 18S Active Low Subwoofer.",
            src: "/images/stack_2.png",
            content: (
                <DummyCardContent
                    title="Massive Low Frequency Transient Response"
                    desc="Baltic birch enclosure featuring a 18-inch high-excursion transducer with integrated active limiter protection for safe, high SPL low-end performance."
                    imgSrc="/images/stack_2.png"
                />
            ),
        },
        {
            category: "Amplifier",
            title: "Onboard DSP Tuning & Power Control.",
            src: "/images/stack_3.png",
            content: (
                <DummyCardContent
                    title="Smart DSP Sound Processing & Safety Limits"
                    desc="Integrated digital sound processors monitor thermal status and dynamic load lines in real-time to prevent sound distortion and system failure."
                    imgSrc="/images/stack_3.png"
                />
            ),
        },
        {
            category: "Column Array",
            title: "Architectural Speaker Columns.",
            src: "/images/stack_4.png",
            content: (
                <DummyCardContent
                    title="Sleek Vertical Beam Directivity Control"
                    desc="Extremely narrow vertical dispersion with wide horizontal coverage patterns. Designed for perfect speech and acoustic balances inside houses of worship."
                    imgSrc="/images/stack_4.png"
                />
            ),
        },
    ];

    const cards = appleCarouselData.map((card, index) => (
        <AppleCard key={card.src} card={card} index={index} layout={true} />
    ));

    return (
        <section className="bg-white py-20 text-[#0f1f3d]">
            <div className="max-w-7xl mx-auto px-4">
                <span className="text-[#3b82f6] font-display text-[12px] font-extrabold tracking-[0.3em] uppercase mb-4 block text-center lg:text-left pl-4">
                    Specialized Systems
                </span>
                <h2 className="max-w-7xl pl-4 mx-auto text-3xl md:text-5xl font-black text-[#0f1f3d] tracking-tight leading-tight text-center lg:text-left font-display mb-10">
                    Custom audio solutions <br /> for your unique needs.
                </h2>
                <AppleCarousel items={cards} />
            </div>
        </section>
    );
}


const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;
        const end = value;
        const duration = 2000;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = end / steps;
        
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(current));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <span ref={ref} className="font-mono">
            {count}
            {suffix}
        </span>
    );
};

/* ── STATS ───────────────────────────────────────── */
function StatsSection() {
    const ref = useReveal();
    const stats = [
        {
            icon: (
                <svg className="w-6 h-6 text-[#C2F84F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
            value: 10,
            suffix: "+",
            label: "Years of Excellence",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-[#C2F84F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
            ),
            value: 1000,
            suffix: "+",
            label: "Units Installed",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-[#C2F84F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            value: 500,
            suffix: "+",
            label: "Installations",
        },
        {
            icon: (
                <svg className="w-6 h-6 text-[#C2F84F]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2m-4-3h1.5a2.5 2.5 0 012.5 2.5V12a9 9 0 11-18 0c0-1.77.51-3.41 1.39-4.81" />
                </svg>
            ),
            value: 50,
            suffix: "+",
            label: "Countries Served",
        },
    ];

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-[#0a1526] py-20 md:py-24 relative overflow-hidden border-t border-white/5"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((s, i) => (
                        <div 
                            key={i} 
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center backdrop-blur-sm hover:scale-[1.03] transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#C2F84F]/10 transition-colors duration-300">
                                {s.icon}
                            </div>
                            <p className="font-display text-4xl sm:text-5xl font-black text-white leading-tight">
                                <AnimatedCounter value={s.value} suffix={s.suffix} />
                            </p>
                            <p className="mt-3 text-white/60 text-xs sm:text-sm font-medium tracking-wide text-center">{s.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ── BUILD TOGETHER CTA ──────────────────────────── */
function BuildTogetherSection() {
    const ref = useReveal();
    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-white py-20 md:py-28"
        >
            <div className="max-w-xl mx-auto px-5 text-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-[46px] font-black text-[#0f1f3d] leading-tight">
                    Let&apos;s build something that sounds amazing.
                </h2>
                <p className="mt-4 text-[#6b7280] text-sm sm:text-[15px] leading-relaxed">
                    Connect with our experts and design the perfect audio system for your needs.
                </p>
                <Link href="/contact">
                    <button className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-[#0f1f3d] hover:bg-[#162d57] text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#0f1f3d]/25 hover:scale-[1.03]">
                        Get In Touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
}