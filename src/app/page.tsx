"use client";

import HeroSlider from "@/components/HeroSlider";
import ScrollProgressSection from "@/components/ScrollProgressSection";
import { StickyCardsSection } from "@/components/StickyCards";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

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

import HoverImageReveal from "@/components/ui/HoverImageReveal";

/* ══════════════════════════════════════════════════ */
export default function Home() {
    return (
        <div className="bg-white text-[#0f1f3d]">
            <HeroSlider />
            <ScrollProgressSection />
            <StickyCardsSection />
            <HoverImageRevealSection />
            
            <ProductsSection />
            <WhyChooseSection />
            <TrustedBySection />
            
            <CustomSolutionsSection />
            <StatsSection />
            <BuildTogetherSection />
        </div>
    );
}

function HoverImageRevealSection() {
    const ref = useReveal();
    const items = {
        itemCount: 6,
        item1: { text: "CONCERT LOUDSPEAKERS", image: { src: "/images/spkr2.png" }, link: "/products" },
        item2: { text: "SUBWOOFER SYSTEMS", image: { src: "/images/FeatureSection_1.png" }, link: "/products" },
        item3: { text: "POWER AMPLIFIERS", image: { src: "/images/amp2.png" }, link: "/products" },
        item4: { text: "LINE ARRAY STACKS", image: { src: "/images/stack_1.png" }, link: "/products" },
        item5: { text: "COLUMN ARRAYS", image: { src: "/images/stack_4.png" }, link: "/products" },
        item6: { text: "SPECIALIZED AUDIO SYSTEMS", image: { src: "/images/SpeakerShowcase.png" }, link: "/products" },
    };

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="hidden md:block sp-reveal bg-[#090d16] text-white py-20 md:py-28 border-b border-slate-800/80 overflow-visible relative"
        >
            <div className="max-w-7xl mx-auto px-5 text-center mb-10">
                <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                    OUR PRODUCT CATALOG
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-black text-white">
                    Hover To Discover Systems
                </h3>
            </div>
            <div className="w-full min-h-[500px] flex items-center justify-center py-6">
                <HoverImageReveal
                    items={items}
                    textColor="#FFFFFF"
                    dimColor="#475569"
                    backgroundColor="transparent"
                    imageWidth={340}
                    imageHeight={440}
                    rowGap={20}
                    align="center"
                    font={{
                        fontSize: "clamp(26px, 5vw, 54px)",
                        fontWeight: 900,
                        lineHeight: "1.1em",
                        letterSpacing: "-0.03em",
                        textAlign: "center",
                    }}
                />
            </div>
        </section>
    );
}
// Cleaned up old section code

/* ── PRODUCTS ────────────────────────────────────── */
const TABS = ["All Products", "Loudspeakers", "Subwoofers", "Amplifiers", "Accessories"];
const PRODUCTS = [
    {
        name: "SPX 15A",
        model: "Active Speaker",
        power: "1500W Peak Power",
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
        name: "SPX 12P",
        model: "Passive Speaker",
        power: "1000W Peak Power",
        img: "/images/RTGYDRFG.png",
        cat: "Loudspeakers",
    },
    {
        name: "SPA 4.8",
        model: "Power Amplifier",
        power: "4×2000W Power",
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
                        OUR PRODUCTS
                    </p>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-[46px] font-black text-[#0f1f3d] leading-tight">
                        Built for professionals.
                    </h2>
                    <p className="mt-3 text-[#6b7280] text-sm max-w-md mx-auto">
                        Discover our range of premium speakers and audio equipment designed for superior performance.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-2 mb-10 justify-center">
                    {TABS.map((t) => (
                        <button
                            key={t}
                            onClick={() => setTab(t)}
                            className={`font-display px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
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
                            className="group bg-white rounded-2xl overflow-hidden border border-[#eaecf0] hover:border-[#0f1f3d]/20 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                        >
                            <div>
                                <div className="h-60 overflow-hidden relative bg-[#f8fafc] border-b border-[#f0f0f0] flex items-center justify-center p-6">
                                    <Image
                                        src={p.img}
                                        alt={p.name}
                                        fill
                                        className="object-contain p-4 group-hover:scale-[1.04] transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    />
                                </div>
                                <div className="p-5">
                                    <h4 className="font-display font-black text-[#0f1f3d] text-lg mb-1">{p.name}</h4>
                                    <p className="text-[#9ca3af] text-xs font-semibold uppercase tracking-wider mb-2">{p.model}</p>
                                    <p className="text-[#6b7280] text-xs font-medium">{p.power}</p>
                                </div>
                            </div>
                            <div className="px-5 pb-5">
                                <Link href="/products">
                                    <button className="w-full flex items-center justify-between text-[#0f1f3d] text-xs sm:text-sm font-semibold pt-3 border-t border-[#f0f0f0] hover:text-[#3b82f6] transition-colors group/btn">
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
            description: "Pure sound perfection designed for professional settings.",
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

/* ── TRUSTED BY ─────────────────────────────────── */
function TrustedBySection() {
    const ref = useReveal();
    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-white py-14 border-t border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-5 text-center">
                <span className="text-[#3b82f6] font-display text-[10px] font-extrabold tracking-[0.25em] uppercase mb-2 block">
                    TRUSTED BY
                </span>
                <p className="text-sm font-semibold text-gray-500 mb-8 font-display">
                    Proud to be part of incredible experiences.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-40 grayscale hover:opacity-75 transition-all duration-300">
                    {/* ZEE Logo */}
                    <div className="flex items-center gap-1 font-display font-black text-2xl tracking-tighter text-[#0f1f3d]">
                        ZEE
                    </div>
                    {/* Colors Logo */}
                    <div className="font-display font-bold text-xl tracking-wide text-[#0f1f3d]">
                        colors
                    </div>
                    {/* Sunburn Logo */}
                    <div className="font-display font-black text-lg tracking-[0.15em] text-[#0f1f3d]">
                        SUNBURN
                    </div>
                    {/* BookMyShow Logo */}
                    <div className="font-display font-extrabold text-lg tracking-tight text-[#0f1f3d] flex items-center">
                        book<span className="font-medium text-xs border border-current px-1 py-0.5 rounded ml-0.5">my</span>show
                    </div>
                    {/* Wizcraft Logo */}
                    <div className="font-display font-black text-lg tracking-wide text-[#0f1f3d] border-b-2 border-current pb-0.5">
                        WIZCRAFT
                    </div>
                    {/* LiveNation Logo */}
                    <div className="font-display font-extrabold text-xl tracking-tight text-[#0f1f3d] italic">
                        LIVENATION
                    </div>
                    {/* OML Logo */}
                    <div className="font-mono font-bold text-lg text-[#0f1f3d] tracking-widest bg-gray-100 px-2 py-0.5 rounded">
                        ||| OML
                    </div>
                    {/* JBL Logo */}
                    <div className="font-display font-black text-2xl text-[#0f1f3d] bg-gray-100 px-3 py-1 rounded-lg">
                        JBL
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── CUSTOM SOLUTIONS ────────────────────────────── */
function CustomSolutionsSection() {
    const ref = useReveal();
    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-gradient-to-b from-white to-[#f8fafc] py-20 md:py-28 overflow-hidden text-[#0f1f3d]"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    
                    {/* Left content */}
                    <div className="flex flex-col items-start text-left max-w-lg">
                        <span className="text-[#3b82f6] font-display text-[11px] font-extrabold tracking-[0.25em] uppercase mb-4">
                            Specialized Systems
                        </span>
                        <h2 className="font-display text-4xl sm:text-5xl font-black text-[#0f1f3d] leading-[1.15] tracking-tight mb-6">
                            Custom audio solutions <br /> for your unique needs.
                        </h2>
                        <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed mb-8 font-medium">
                            We design and deliver tailor-made audio systems to match your venue, sound space, and audience size perfectly. Let our engineering team design your coverage map.
                        </p>
                        <button className="group/btn flex items-center gap-2 px-8 py-4 bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#3b82f6]/20 hover:scale-[1.02]">
                            Request a Quote
                            <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right speaker showcase image (no cutting from upper side) */}
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] flex items-center justify-center bg-transparent rounded-3xl overflow-hidden">
                        <Image
                            src="/images/SpeakerShowcase.png"
                            alt="Custom Solutions"
                            fill
                            className="object-contain p-2 md:p-6 rounded-3xl"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}

/* ── STATS SECTION (Responsive Circular Design) ── */
interface CircularStatRingProps {
    value: number;
    suffix?: string;
    label: string;
    targetPercent?: number;
}

const CircularStatRing = ({ value, suffix = "", label, targetPercent = 75 }: CircularStatRingProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [count, setCount] = useState(0);

    const baseSize = 180;
    const strokeWidth = 8;
    const center = baseSize / 2;
    const radius = center - strokeWidth - 6;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (targetPercent / 100) * circumference;

    useEffect(() => {
        if (!isInView) return;
        let start = 0;
        const end = value;
        const duration = 1800;
        const stepTime = 30;
        const steps = duration / stepTime;
        const increment = end / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            } else {
                setCount(Math.floor(start));
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center group">
            <div className="relative flex items-center justify-center w-[135px] h-[135px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] transition-transform duration-300 group-hover:scale-105">

                {/* Solid Dark Center Disc */}
                <div className="absolute inset-2 rounded-full bg-[#0d172a] border border-slate-700/60 shadow-xl flex flex-col items-center justify-center z-10" />

                {/* Responsive Scaled SVG Progress Circle */}
                <svg viewBox={`0 0 ${baseSize} ${baseSize}`} className="w-full h-full transform -rotate-90 relative z-20">
                    {/* Outer Track Circle */}
                    <circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="rgba(255, 255, 255, 0.12)"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                    />

                    {/* Clean Green Arc */}
                    <motion.circle
                        cx={center}
                        cy={center}
                        r={radius}
                        stroke="#22c55e"
                        strokeWidth={strokeWidth}
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        strokeLinecap="round"
                    />
                </svg>

                {/* Number & Label */}
                <div className="absolute z-30 flex flex-col items-center justify-center text-center px-2 w-full">
                    <span className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-none mb-1">
                        {count}
                        <span className="text-[#22c55e] ml-0.5">{suffix}</span>
                    </span>
                    <span className="font-display text-[8px] sm:text-[10px] md:text-[11px] font-extrabold tracking-[0.12em] text-slate-200 uppercase leading-tight max-w-[110px] sm:max-w-[130px]">
                        {label}
                    </span>
                </div>
            </div>
        </div>
    );
};

function StatsSection() {
    const ref = useReveal();
    const stats = [
        { value: 10, suffix: "+", label: "YEARS EXCELLENCE", percent: 85 },
        { value: 1000, suffix: "+", label: "EVENTS POWERED", percent: 95 },
        { value: 500, suffix: "+", label: "INSTALLATIONS", percent: 78 },
        { value: 50, suffix: "+", label: "COUNTRIES SERVED", percent: 65 },
    ];

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-[#070d19] py-20 md:py-28 text-white relative overflow-hidden"
        >
            {/* Ambient Background Gradient Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="text-[#22c55e] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                        OUR IMPACT IN NUMBERS
                    </span>
                    <h3 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight">
                        Proven Industry Leadership
                    </h3>
                </div>

                {/* Circular Stat Rings Container */}
                <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-800/80 rounded-[24px] sm:rounded-[36px] p-4 sm:p-8 md:p-12 shadow-2xl shadow-black/40 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-10 items-center justify-center">
                    {stats.map((s, i) => (
                        <CircularStatRing
                            key={i}
                            value={s.value}
                            suffix={s.suffix}
                            label={s.label}
                            targetPercent={s.percent}
                        />
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
            <div className="max-w-xl mx-auto px-5 text-center flex flex-col items-center">
                <h2 className="font-display text-3xl sm:text-4xl md:text-[46px] font-black text-[#0f1f3d] leading-tight mb-4">
                    Let&apos;s build something <br /> that sounds amazing.
                </h2>
                <p className="text-[#6b7280] text-sm sm:text-[15px] leading-relaxed max-w-md">
                    Get in touch with our team and take your sound experience to the next level.
                </p>
                <Link href="/contact">
                    <button className="mt-8 inline-flex items-center gap-2 px-10 py-4 bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-sm font-bold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#3b82f6]/25 hover:scale-[1.03]">
                        Get In Touch
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
}