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

import toast from "react-hot-toast";
import HoverImageReveal from "@/components/ui/HoverImageReveal";

/* ══════════════════════════════════════════════════ */
export default function Home() {
    return (
        <div className="bg-white text-[#0f1f3d]">
            <HeroSlider />
            <FeaturedSPAudioSpeakersSection />
            <HoverImageRevealSection />
            
            <ProductsSection />
            <WhyChooseSection />
            
            <StatsSection />
            <BuildTogetherSection />
        </div>
    );
}

/* ── FEATURED S.P. AUDIO SPEAKERS SECTION ───────────── */
function FeaturedSPAudioSpeakersSection() {
    const ref = useReveal();

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-[#f8fafc] py-16 md:py-24 border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                    <div>
                        <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                            PREMIUM S.P. AUDIO LINEUP
                        </span>
                        <h3 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d] tracking-tight">
                            Featured S.P. Audio Speakers
                        </h3>
                    </div>
                    <Link 
                        href="/products" 
                        className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#1d4ed8] font-bold text-sm transition-colors group"
                    >
                        <span>View Full Catalog</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* 3 Column Speaker Grid with Big Viewable Speaker Images */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                        <div>
                            <div className="relative w-full h-[320px] sm:h-[350px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                <Image
                                    src="/images/spaudio_clean_speaker_1.png"
                                    alt="S.P. Audio Concert Loudspeaker"
                                    fill
                                    className="object-contain p-2 scale-105 transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                                Concert Loudspeaker
                            </p>
                            <h4 className="font-display font-black text-xl text-[#0f1f3d] mb-4">
                                S.P. Audio SP-12 Concert Loudspeaker
                            </h4>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <a
                                href={`https://wa.me/919638470305?text=${encodeURIComponent("Hi S.P. Audio! I am interested in inquiring about S.P. Audio SP-12 Concert Loudspeaker.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-blue-500/25 cursor-pointer"
                            >
                                <span>Inquire Now</span>
                                <svg className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                        <div>
                            <div className="relative w-full h-[320px] sm:h-[350px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                <Image
                                    src="/images/spaudio_clean_speaker_2.png"
                                    alt="S.P. Audio Dual 15 Venue Speaker"
                                    fill
                                    className="object-contain p-2 scale-105 transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                                High Power Loudspeaker
                            </p>
                            <h4 className="font-display font-black text-xl text-[#0f1f3d] mb-4">
                                S.P. Audio Dual 15" Venue Speaker
                            </h4>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <a
                                href={`https://wa.me/919638470305?text=${encodeURIComponent("Hi S.P. Audio! I am interested in inquiring about S.P. Audio Dual 15\" Venue Speaker.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-blue-500/25 cursor-pointer"
                            >
                                <span>Inquire Now</span>
                                <svg className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
                        <div>
                            <div className="relative w-full h-[320px] sm:h-[350px] mb-6 bg-white rounded-2xl p-4 flex items-center justify-center border border-slate-100 overflow-hidden">
                                <Image
                                    src="/images/spaudio_clean_speaker_3.png"
                                    alt="S.P. Audio Pro Stage Speaker"
                                    fill
                                    className="object-contain p-2 scale-105 transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>

                            <p className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1">
                                Stage Cabinet Speaker
                            </p>
                            <h4 className="font-display font-black text-xl text-[#0f1f3d] mb-4">
                                S.P. Audio Pro Stage Speaker
                            </h4>
                        </div>

                        <div className="pt-4 border-t border-slate-100">
                            <a
                                href={`https://wa.me/919638470305?text=${encodeURIComponent("Hi S.P. Audio! I am interested in inquiring about S.P. Audio Pro Stage Speaker.")}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-blue-500/25 cursor-pointer"
                            >
                                <span>Inquire Now</span>
                                <svg className="w-4 h-4 text-emerald-400 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
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
                                <div className="h-60 overflow-hidden relative bg-white border-b border-[#f0f0f0] flex items-center justify-center p-6">
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
    const features = [
        {
            title: "High Performance",
            description: "Pure sound perfection designed for professional live touring and high-capacity venues.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            items: [
                "Powerful SPL output up to 142dB",
                "Zero harmonic distortion",
                "Wide frequency dispersion",
                "Tour-grade audio quality"
            ],
        },
        {
            title: "Reliable Build",
            description: "Built with marine-grade materials to withstand the rigors of touring and daily use.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            items: [
                "Multi-ply birch cabinets",
                "Weather-resistant polyurea coating",
                "Road-tested hardware",
                "Ultra-long active lifespan"
            ],
        },
        {
            title: "Advanced Tech",
            description: "Intelligent digital signal processing with onboard presets and protection control.",
            icon: (
                <svg className="w-6 h-6 text-[#3b82f6] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
            items: [
                "Smart limiter circuits",
                "High thermal efficiency",
                "Onboard DSP control",
                "Ultra-low latency path"
            ],
        },
    ];

    return (
        <section
            ref={ref as React.RefObject<HTMLElement>}
            className="sp-reveal bg-[#f8fafc] py-20 md:py-28 border-b border-slate-100"
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-[#3b82f6] font-display text-xs font-extrabold tracking-[0.3em] uppercase mb-3 block">
                            OUR ADVANTAGE
                        </span>
                        <h3 className="font-display text-3xl sm:text-5xl font-black text-[#0f1f3d] tracking-tight">
                            Why Professionals Choose SP Audio
                        </h3>
                        <p className="mt-3 text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
                            SP Audio delivers high-fidelity sound, engineered for concert touring, venues, and architectural installations worldwide.
                        </p>
                    </div>
                    <Link 
                        href="/products" 
                        className="inline-flex items-center gap-2 text-[#3b82f6] hover:text-[#1d4ed8] font-bold text-sm transition-colors group whitespace-nowrap"
                    >
                        <span>View Full Catalog</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>

                {/* 3 Column Feature Cards Matching Site UI */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-[#3b82f6]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#3b82f6] transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="font-display font-black text-xl text-[#0f1f3d] mb-2 group-hover:text-[#3b82f6] transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                                    {item.description}
                                </p>
                            </div>

                            <ul className="space-y-3 pt-4 border-t border-slate-100">
                                {item.items.map((bullet, j) => (
                                    <li key={j} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                                        <svg className="w-4 h-4 text-[#3b82f6] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
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