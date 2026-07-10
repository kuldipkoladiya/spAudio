"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────── */
const slides = [
    {
        id: 1,
        label: "POWER THAT MOVES.",
        headline: ["Sound That", "Defines Every", "Moment."],
        desc: "Professional audio solutions engineered for power and clarity.",
        bg: "/images/hero 1.png",
        bgMobile: "/images/hero_1_mobile.png",
        bgColor: "bg-white",
        position: "object-[78%_center] md:object-[85%_center]",
        cta1: "Explore",
        cta1Link: "/products",
        cta2: "Contact Us",
        cta2Link: "/contact",
    },
    {
        id: 2,
        label: "BUILT FOR THE STAGE.",
        headline: ["Performance", "Beyond", "Expectation."],
        desc: "SP Audio systems engineered for concert performance and live events worldwide.",
        bg: "/images/hero 2.png",
        bgMobile: "/images/hero_2_mobile.png",
        bgColor: "bg-white",
        position: "object-[78%_center] md:object-right",
        cta1: "View Systems",
        cta1Link: "/products",
        cta2: "Our Story",
        cta2Link: "/about",
    },
    {
        id: 3,
        label: "ENGINEERED TO LAST.",
        headline: ["Clarity In", "Every", "Frequency."],
        desc: "Advanced speaker technology that delivers exceptional sound in any environment.",
        bg: "/images/hero 3.png",
        bgMobile: "/images/hero_3_mobile.png",
        bgColor: "bg-white",
        position: "object-[78%_center] md:object-[85%_center]",
        cta1: "Shop Now",
        cta1Link: "/products",
        cta2: "Learn More",
        cta2Link: "/about",
    },
];

const TOTAL = slides.length;
const INTERVAL_MS = 6000;

const featureItems = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M17 7v10M7 8v8M22 10v4M2 10v4" />
            </svg>
        ),
        label: "Powerful Output",
        sub: "High performance audio",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L12 4l6 8-6 8-6-8z" />
            </svg>
        ),
        label: "Crystal Clear Sound",
        sub: "Superior clarity in every detail",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        label: "Built To Last",
        sub: "Rugged & reliable",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
            </svg>
        ),
        label: "Advanced Technology",
        sub: "Innovative audio solutions",
    },
];

/* ─────────────────────────────────────────────── */
export default function HeroSlider() {
    const [current, setCurrent] = useState(0);
    // Use a ref so callbacks always see the latest value without stale closures
    const currentRef = useRef(0);
    const lockRef = useRef(false);          // replaces animating state (no re-render needed)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const touchStartX = useRef<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStartX.current === null) return;
        const diffX = e.changedTouches[0].clientX - touchStartX.current;
        touchStartX.current = null;

        const threshold = 50;
        if (Math.abs(diffX) > threshold) {
            if (diffX < 0) {
                // Swiped Left -> Next Slide
                goTo((currentRef.current + 1) % TOTAL);
            } else {
                // Swiped Right -> Previous Slide
                goTo((currentRef.current - 1 + TOTAL) % TOTAL);
            }
        }
    };

    /* Restart the auto-play timer */
    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            if (lockRef.current) return;
            const next = (currentRef.current + 1) % TOTAL;
            currentRef.current = next;
            setCurrent(next);
            lockRef.current = true;
            setTimeout(() => { lockRef.current = false; }, 700);
        }, INTERVAL_MS);
    }, []);

    /* Go to specific slide */
    const goTo = useCallback((index: number) => {
        if (lockRef.current || index === currentRef.current) return;
        lockRef.current = true;
        currentRef.current = index;
        setCurrent(index);
        resetInterval();                    // restart timer from now
        setTimeout(() => { lockRef.current = false; }, 700);
    }, [resetInterval]);

    /* Start auto-play on mount */
    useEffect(() => {
        resetInterval();
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [resetInterval]);

    const slide = slides[current];

    return (
        <section
            className="relative w-full h-[72svh] md:h-[100svh] flex flex-col justify-between"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* ── BG Images ───────────────────────────────────── */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    aria-hidden={i !== current}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${s.bgColor || 'bg-white'} ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    {/* Desktop Landscape Background */}
                    <Image
                        src={s.bg}
                        alt={s.label}
                        fill
                        priority={i === 0}
                        className={`hidden md:block object-cover ${s.position || 'object-center'}`}
                        sizes="100vw"
                    />

                    {/* Mobile Portrait Background (9:16 Custom extended from original) */}
                    <Image
                        src={s.bgMobile || s.bg}
                        alt={s.label}
                        fill
                        priority={i === 0}
                        className="block md:hidden object-cover object-center blur-[5px] scale-110"
                        sizes="100vw"
                    />

                    {/* gradient: subtle left → transparent right so text is readable but doesn't wash out the product */}
                    <div className="absolute inset-0 bg-white/45 md:bg-transparent md:bg-gradient-to-r md:from-white/45 md:via-white/15 md:to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/10 pointer-events-none" />
                </div>
            ))}

            {/* ── Main Layout ─────────────────────────────────── */}
            <div className="relative z-10 flex-grow flex flex-col justify-between pb-20 md:pb-0">

                {/* Header offset */}
                <div className="h-[68px] shrink-0" />

                {/* Hero text centred vertically */}
                <div className="flex-grow flex items-center py-12 md:py-0">
                    <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
                        <div className="max-w-[500px] mx-auto md:mx-0 text-center md:text-left flex flex-col items-center md:items-start">

                            {/* Animated label */}
                            <p
                                key={`lbl-${current}`}
                                className="font-display hero-up text-[11px] sm:text-xs font-semibold tracking-[0.22em] text-[#374151] uppercase mb-4"
                            >
                                {slide.label}
                            </p>

                            {/* Animated headline */}
                            <h1
                                key={`h1-${current}`}
                                className="font-display hero-up text-[35px] sm:text-[52px] md:text-[60px] lg:text-[70px] font-black text-[#0f1f3d] leading-[1.05] tracking-tight"
                                style={{ animationDelay: "55ms" }}
                            >
                                {slide.headline.map((line, i) => (
                                    <span key={i} className="block">{line}</span>
                                ))}
                            </h1>

                            {/* Animated description */}
                            <p
                                key={`desc-${current}`}
                                className="hero-up mt-4 text-[#6b7280] text-sm sm:text-[15px] leading-relaxed max-w-[360px]"
                                style={{ animationDelay: "110ms" }}
                            >
                                {slide.desc}
                            </p>

                            {/* Animated CTAs */}
                            <div
                                key={`cta-${current}`}
                                className="hero-up mt-7 flex flex-wrap items-center justify-center md:justify-start gap-3"
                                style={{ animationDelay: "165ms" }}
                            >
                                <Link href={slide.cta1Link}>
                                    <button className="font-display flex items-center gap-2 px-7 py-3.5 bg-[#0f1f3d] hover:bg-[#162d57] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#0f1f3d]/30 hover:scale-[1.02] active:scale-95">
                                        {slide.cta1}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                                <Link href={slide.cta2Link}>
                                    <button className="font-display flex items-center gap-2 px-7 py-3.5 border-2 border-[#0f1f3d]/25 hover:border-[#0f1f3d]/55 text-[#0f1f3d] text-sm font-semibold rounded-full transition-all duration-300 hover:bg-[#0f1f3d]/5 active:scale-95">
                                        {slide.cta2}
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                            {/* Mobile dot indicators inside content flow */}
                            <div key={`dots-${current}`} className="flex justify-center gap-2 mt-8 md:hidden">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        onClick={() => goTo(i)}
                                        aria-label={`Slide ${i + 1}`}
                                        className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-[3px] bg-[#0f1f3d]" : "w-[10px] h-[3px] bg-[#c4c9d4]"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Feature Strip (Straddling Bottom Boundary on Desktop & Mobile) ── */}
                <div className="absolute -bottom-[9px] md:bottom-0 left-0 right-0 z-20 md:translate-y-1/2 px-5 sm:px-8 lg:px-10">
                    <div className="bg-white/95 backdrop-blur-md rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-white/80 p-2 md:p-4">

                        {/* Desktop Grid (Static) */}
                        <div className="hidden md:grid md:grid-cols-4 items-center">
                            {featureItems.map((f, i) => (
                                <div key={i} className="relative flex items-center gap-4 px-5 py-5">
                                    <div className="w-12 h-12 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#0f1f3d] shrink-0">
                                        {f.icon}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="font-display font-bold text-[#0f1f3d] text-[14px] leading-tight">{f.label}</p>
                                        <p className="text-[#5e6a80] text-xs mt-1 leading-normal">{f.sub}</p>
                                    </div>
                                    {/* Vertical Divider (except last item) */}
                                    {i < 3 && (
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-8 bg-[#e4e7ec]" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile/Tablet Auto-running Marquee */}
                        <div className="block md:hidden overflow-hidden w-full relative">
                            <div className="flex w-max animate-marquee-mobile hover:[animation-play-state:paused] gap-4">
                                {/* Track 1 */}
                                <div className="flex items-center gap-4">
                                    {featureItems.map((f, i) => (
                                        <div key={`m1-${i}`} className="flex items-center gap-3 px-4 py-3 shrink-0 w-[240px]">
                                            <div className="w-10 h-10 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#0f1f3d] shrink-0">
                                                {f.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-display font-bold text-[#0f1f3d] text-[13px] leading-tight">{f.label}</p>
                                                <p className="text-[#5e6a80] text-[11px] mt-0.5 leading-normal">{f.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* Track 2 (Duplicate for seamless loop) */}
                                <div className="flex items-center gap-4">
                                    {featureItems.map((f, i) => (
                                        <div key={`m2-${i}`} className="flex items-center gap-3 px-4 py-3 shrink-0 w-[240px]">
                                            <div className="w-10 h-10 rounded-full bg-[#f3f5f9] flex items-center justify-center text-[#0f1f3d] shrink-0">
                                                {f.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-display font-bold text-[#0f1f3d] text-[13px] leading-tight">{f.label}</p>
                                                <p className="text-[#5e6a80] text-[11px] mt-0.5 leading-normal">{f.sub}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* ── Right-side Slide Number Indicator ──────────── */}
            <div className="absolute right-5 sm:right-8 top-[45%] -translate-y-1/2 z-30 hidden sm:flex flex-col items-center gap-2 select-none">
                {/* Top number */}
                <span className="text-[11px] font-bold text-[#374151] tabular-nums leading-none">
                    0{current + 1}
                </span>

                {/* Track */}
                <div className="flex flex-col items-center gap-1.5 py-1">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => goTo(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`block rounded-full cursor-pointer transition-all duration-400 ${i === current
                                    ? "w-[3px] h-7 bg-[#0f1f3d]"
                                    : "w-[3px] h-[10px] bg-[#c4c9d4] hover:bg-[#8b90a0]"
                                }`}
                        />
                    ))}
                </div>

                {/* Bottom number */}
                <span className="text-[11px] font-semibold text-[#c4c9d4] tabular-nums leading-none">
                    0{TOTAL}
                </span>
            </div>

            <style jsx>{`
                @keyframes heroUp {
                    from { opacity: 0; transform: translateY(22px); }
                    to   { opacity: 1; transform: translateY(0);    }
                }
                .hero-up {
                    animation: heroUp 0.52s cubic-bezier(0.22, 1, 0.36, 1) both;
                }
                @keyframes marqueeMobile {
                    0%   { transform: translateX(0%); }
                    100% { transform: translateX(calc(-50% - 8px)); }
                }
                .animate-marquee-mobile {
                    animation: marqueeMobile 18s linear infinite;
                }
            `}</style>
        </section>
    );
}