"use client";

import HeroSlider from "@/components/HeroSlider";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type FeatureSectionProps = {
    image: string;
    title: string;
    highlight?: string;
    desc: string;
    reverse?: boolean;
};

/* ================= SCROLL REVEAL HOOK ================= */
function useScrollReveal() {
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("opacity-100", "translate-y-0");
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return ref;
}

/* ================= HOME ================= */
export default function Home() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e: MouseEvent) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, []);

    return (
        <div className="bg-[#020617] text-white relative overflow-hidden">

            <HeroSlider />

            {/* 🔥 MOUSE GLOW BACKGROUND EFFECT */}
            <div
                className="hidden md:block pointer-events-none fixed w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[130px] z-0"
                style={{
                    left: mouse.x - 225,
                    top: mouse.y - 225,
                }}
            />

            {/* CONTENT */}
            <div className="relative z-10">

                <TickerSection />

                <FeatureSection
                    image="/images/FeatureSection 1.png"
                    title="Acoustic Power"
                    highlight="Masterfully Designed"
                    desc="Experience studio-grade immersive sound custom-engineered to deliver deep punchy bass, crisp high-mids, and unmatched acoustic clarity."
                />

                <FeatureSection
                    image="/images/FeatureSection 2.png"
                    title="Wireless Freedom"
                    highlight="Pure Digital Control"
                    desc="Seamless, latency-free wireless audio transmission coupled with precise physical control interfaces designed for the modern listener."
                    reverse
                />

                <FeatureGrid />
                <ProductCategories />
                <SignatureExperience />
                <CTASection />
                <SpeakerShowcase />
                <BrandExperience />

            </div>
        </div>
    );
}

/* ================= TICKER ================= */
function TickerSection() {
    const items = [
        "STUDIO-GRADE AMPLIFIERS",
        "PREMIUM SOUND ENGINEERING",
        "WIRELESS BLUETOOTH speakers",
        "NEW EXCLUSIVE ARRIVALS",
        "50% INTRODUCTORY SAVINGS",
    ];

    return (
        <section className="relative overflow-hidden py-5 bg-gradient-to-r from-cyan-600 via-indigo-600 to-purple-600 border-y border-white/10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <div className="flex whitespace-nowrap animate-ticker gap-12 px-4">
                {[...items, ...items].map((text, i) => (
                    <div key={i} className="font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase text-white">
                        {text}
                    </div>
                ))}
            </div>

            <style jsx>{`
                .animate-ticker {
                    animation: scrollX 25s linear infinite;
                }
                @keyframes scrollX {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>
        </section>
    );
}

/* ================= FEATURE SECTION ================= */
function FeatureSection({ image, title, highlight, desc, reverse }: FeatureSectionProps) {
    const ref = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-20 sm:py-28 px-6 md:px-20 opacity-0 translate-y-12 transition duration-1000 ease-out"
        >
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-7xl mx-auto">

                <div className={`${reverse ? "md:order-2" : ""} relative group`}>
                    <div className="absolute -inset-1 "/>
                    <img
                        src={image}
                        className="relative w-full h-[280px] sm:h-[380px] md:h-[480px] object-cover rounded-xl group-hover:scale-[1.01] transition duration-500"
                        alt={title}
                    />
                </div>

                <div className={reverse ? "md:order-1" : ""}>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-none tracking-tight">
                        {title} <br />
                        <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text">
                            {highlight}
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 text-sm sm:text-base leading-relaxed font-light">
                        {desc}
                    </p>
                </div>

            </div>
        </section>
    );
}

/* ================= FEATURE GRID ================= */
function FeatureGrid() {
    const ref = useScrollReveal();

    const features = [
        { title: "Hi-Res Audio", icon: "🎧", desc: "Lossless, crystal-clear acoustic response across all frequencies." },
        { title: "Zero Latency", icon: "📡", desc: "State-of-the-art wireless protocols for seamless sound sync." },
        { title: "Bespoke Design", icon: "💎", desc: "Aesthetic cabinets built with premium materials." },
    ];

    return (
        <section
            ref={ref}
            className="py-24 px-6 md:px-20 text-center opacity-0 translate-y-12 transition duration-1000 ease-out"
        >
            <h2 className="text-3xl sm:text-5xl font-black mb-4">
                WHY CHOOSE SPAUDIO
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-16 font-light text-sm sm:text-base">
                Engineering audio perfection with robust build details and high-fidelity output.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="group relative p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
                        <div className="relative">
                            <div className="text-4xl sm:text-5xl mb-6">{f.icon}</div>
                            <h3 className="text-xl font-bold mb-3 tracking-wide">{f.title}</h3>
                            <p className="text-gray-400 font-light text-sm leading-relaxed">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= PRODUCT CATEGORIES ================= */
function ProductCategories() {
    const router = useRouter();
    const [active, setActive] = React.useState(0);

    const categories = [
        {
            name: "Speakers",
            desc: "Feel every physical sub-bass beat with premium active studio speakers.",
            img: "/images/FeatureSection 2.png",
            link: "/products",
        },
        {
            name: "Amps",
            desc: "Power your performance with custom low-noise stereo amplifiers.",
            img: "/images/product-7.jpeg",
            link: "/products",
        },
    ];

    return (
        <section className="py-28 px-6 md:px-20">

            <h2 className="text-3xl md:text-6xl text-center font-black mb-16 tracking-tight">
                EXPLORE{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
                    CATEGORIES
                </span>
            </h2>

            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-6xl mx-auto">
                {categories.map((c, i) => {
                    const isActive = active === i;

                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => router.push(c.link)}
                            className={`cursor-pointer transition-all duration-700 w-full relative h-[380px] md:h-[480px] rounded-2xl overflow-hidden group
                                ${isActive ? "md:w-[58%]" : "md:w-[42%] opacity-60 hover:opacity-85"}
                            `}
                        >
                            <img
                                src={c.img}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                                alt={c.name}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                            <div className="absolute bottom-8 left-8 right-8">
                                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
                                    {c.name}
                                </h3>

                                <p className={`mt-3 text-gray-300 text-sm sm:text-base font-light transition-opacity duration-500 ${
                                    isActive ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
                                }`}>
                                    {c.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

        </section>
    );
}

/* ================= SIGNATURE EXPERIENCE ================= */
function SignatureExperience() {
    const [viewMode] = useState<"render" | "real">("render");
    const [selectedSpeaker] = useState(0);

    const speakers = [
        {
            name: "SPAudio Active Monitor",
            desc: "Custom-engineered high-power active stage monitor. Built with physical internal bracing to eliminate box colorations and deliver a completely flat frequency response.",
            renderImg: "/images/RTGYDRFG.png",
            realImg: "/images/user-speaker-1.jpg",
            tag: "STAGE MONITOR",
        },
        {
            name: "SPAudio Line-Array Stack",
            desc: "Professional dual line-array system mounted on a high-efficiency sub-bass cabinet. Designed for high dispersion angle coverage and long-throw stage setups.",
            renderImg: "/images/render-speaker-2.png",
            realImg: "/images/user-speaker-2.jpg",
            tag: "LINE-ARRAY SYSTEM",
        },
    ];

    return (
        <section className="py-28 px-6 md:px-20 bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                
                {/* Text Content */}
                <div>
                    <p className="text-xs font-semibold tracking-[0.4em] text-cyan-400 uppercase mb-3 animate-pulse">
                        Signature Hardware Showcase
                    </p>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none mb-6">
                        SIGNATURE SOUND <br />
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                            HARDWARE
                        </span>
                    </h2>
                    
                    <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm sm:text-base">
                        {speakers[selectedSpeaker].desc}
                    </p>

                </div>

                {/* Speaker Display Card */}
                <div className="relative group">
                    <div className="absolute -inset-1  pointer-events-none" />
                    


                        <img
                            key={`${selectedSpeaker}-${viewMode}`}
                            src={viewMode === "render" ? speakers[selectedSpeaker].renderImg : speakers[selectedSpeaker].realImg}
                            alt={speakers[selectedSpeaker].name}
                            className={`max-w-full max-h-[300px] sm:max-h-[400px] object-contain rounded-xl group-hover:scale-105 transition-all duration-500 animate-fadeIn ${
                                viewMode === "real" ? "border border-white/10 shadow-lg shadow-black/50" : ""
                            }`}
                        />

                </div>

            </div>
        </section>
    );
}

/* ================= CTA ================= */
function CTASection() {
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        let t = 0;
        let animationFrameId: number;

        function animate() {
            t += 0.008;

            if (ref.current) {
                ref.current.style.background = `
                    radial-gradient(circle at ${50 + Math.sin(t) * 25}% ${50 + Math.cos(t) * 25}%, rgba(6, 182, 212, 0.25), transparent),
                    radial-gradient(circle at ${50 + Math.cos(t) * 25}% ${50 + Math.sin(t) * 25}%, rgba(147, 51, 234, 0.25), transparent),
                    #020617
                `;
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section ref={ref} className="py-24 sm:py-36 text-center border-y border-white/5 transition-all">
            <div className="px-4 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none">
                    UPGRADE YOUR <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        SOUND EXPERIENCE
                    </span>
                </h2>
                <p className="mt-6 text-gray-400 font-light text-sm sm:text-lg">
                    Discover premium acoustic rigs built for audio enthusiasts.
                </p>

                <Link href="/products">
                    <button className="mt-10 px-10 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition shadow-lg hover:shadow-cyan-500/25">
                        Shop Now
                    </button>
                </Link>
            </div>
        </section>
    );
}

/* ================= SHOWCASE ================= */
function SpeakerShowcase() {
    const images = [
        "/images/FeatureSection 1.png",
        "/images/FeatureSection 2.png",
        "/images/SpeakerShowcase.png",
    ];

    return (
        <section className="py-28 px-6 md:px-20">
            <h2 className="text-3xl md:text-5xl text-center font-black mb-16 tracking-tight">
                VISUAL SHOWCASE
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-[400px] md:h-[700px] overflow-hidden max-w-7xl mx-auto rounded-3xl border border-white/10">
                {[0, 1, 2].map((col) => (
                    <div key={col} className={`${col !== 0 ? "hidden md:block" : ""}`}>
                        <div className={`flex flex-col gap-8 ${col % 2 === 0 ? "animate-scrollUp" : "animate-scrollDown"}`}>
                            {[...images, ...images].map((img, i) => (
                                <img 
                                    key={i} 
                                    src={img} 
                                    className="rounded-2xl w-full h-[320px] object-cover border border-white/5 opacity-85 hover:opacity-100 transition duration-300" 
                                    alt="Showcase"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= BRAND EXPERIENCE ================= */
function BrandExperience() {
    return (
        <section className="py-24 md:py-32 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
                <p className="text-xs font-semibold tracking-[0.4em] text-cyan-400 uppercase mb-3">
                    Premium Sound Aesthetics
                </p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                    DESIGNED FOR AUDIO PURISTS
                </h2>
                <p className="text-gray-400 font-light leading-relaxed">
                    We combine pure acoustic engineering with high-end, minimalistic cabinets. Every material is selected to match specific audio dynamics, providing a visually stunning speaker that sounds even better.
                </p>
            </div>

            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition duration-500" />
                <img 
                    src="/images/FeatureSection 1.png" 
                    className="relative rounded-2xl border border-white/10 w-full object-cover" 
                    alt="Brand Design"
                />
            </div>
        </section>
    );
}