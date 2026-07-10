"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

/* ================= PAGE ================= */
export default function About() {
    return (
        <div className="bg-[#020617] text-white font-sans overflow-hidden">
            {/* Ambient gradients */}
            <div className="absolute top-[10%] left-[20%] w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

            <HeroSection />
            <AboutStory />
            <ImageSplit />
            <Features />
            <CTA />
        </div>
    );
}

/* ================= HERO ================= */
function HeroSection() {
    const titleRef = useRef<HTMLHeadingElement>(null!);
    const subtitleRef = useRef<HTMLParagraphElement>(null!);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.7"
        );
    }, []);

    return (
        <section className="py-28 md:py-36 text-center px-6 relative">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40" />

            <p className="text-xs font-semibold tracking-[0.5em] text-cyan-400 uppercase mb-4 animate-pulse">
                OUR AUDIO MANIFESTO
            </p>
            <h1
                ref={titleRef}
                className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none opacity-0"
            >
                REDEFINING THE <br />
                <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500 text-transparent bg-clip-text">
                        SOUND SPECTRUM
                    </span>
                    <span className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 to-purple-500"></span>
                </span>
            </h1>

            <p
                ref={subtitleRef}
                className="mt-8 text-gray-400 max-w-xl mx-auto text-base sm:text-lg font-light leading-relaxed opacity-0"
            >
                Every voice, every chord, every beat. Engineered with acoustic precision, tuned for emotional purity.
            </p>
        </section>
    );
}

/* ================= GSAP PINNED STORY ================= */
function AboutStory() {
    const sectionRef = useRef<HTMLDivElement>(null!);

    type FrameRefs = {
        top: HTMLParagraphElement | null;
        main: HTMLHeadingElement | null;
        bottom: HTMLParagraphElement | null;
    };

    const refs = useRef<FrameRefs[]>([]);

    const setRef =
        <K extends keyof FrameRefs>(index: number, key: K) =>
            (el: FrameRefs[K]) => {
                if (!refs.current[index]) {
                    refs.current[index] = {
                        top: null,
                        main: null,
                        bottom: null,
                    };
                }
                refs.current[index][key] = el;
            };

    const frames = [
        {
            top: "Acoustic Connection",
            main: "FEEL EVERY BEAT",
            bottom: "We craft immersive audio rigs designed to pull you directly into the performance.",
        },
        {
            top: "Precision Crafting",
            main: "PURE SONIC OUTPUT",
            bottom: "Every structural curve, every resonance chamber built with uncompromising materials.",
        },
        {
            top: "Absolute Quality",
            main: "BUILT FOR ENTHUSIASTS",
            bottom: "Made for individuals who expect high resolution detail and rich dynamic range.",
        },
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=350%",
                scrub: 1.5,
                pin: true,
            },
        });

        refs.current.forEach((frame) => {
            if (!frame?.top || !frame?.main || !frame?.bottom) return;

            tl.fromTo(frame.top, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2 })
                .fromTo(frame.main, { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 1.2 }, "-=1")
                .fromTo(frame.bottom, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 1.2 }, "-=0.8");

            tl.to({}, { duration: 1.5 }); // pause frame

            tl.to([frame.top, frame.main, frame.bottom], {
                opacity: 0,
                y: -30,
                duration: 1.2
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden px-6 bg-slate-950/20 border-y border-white/5"
        >
            {/* Background Soundwave Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_75%)] pointer-events-none" />

            <div className="relative z-10 text-center w-full max-w-6xl mx-auto h-[300px]">
                {frames.map((f, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6"
                    >
                        <p
                            ref={setRef(i, "top")}
                            className="opacity-0 text-[10px] sm:text-xs md:text-sm tracking-[0.4em] uppercase text-cyan-400 font-semibold"
                        >
                            {f.top}
                        </p>

                        <h2
                            ref={setRef(i, "main")}
                            className="opacity-0 text-[clamp(2.2rem,8vw,6.5rem)] font-black tracking-tighter leading-none text-white"
                        >
                            {f.main}
                        </h2>

                        <p
                            ref={setRef(i, "bottom")}
                            className="opacity-0 mt-4 sm:mt-6 text-xs sm:text-sm md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed font-light text-center"
                        >
                            {f.bottom}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= IMAGE SPLIT ================= */
function ImageSplit() {
    return (
        <section className="py-28 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500" />
                <img
                    src="/images/amp3.png"
                    className="relative rounded-2xl h-[350px] sm:h-[450px] w-full object-cover border border-white/10"
                    alt="Engineered details"
                />
            </div>

            <div>
                <p className="text-xs font-semibold tracking-[0.4em] text-cyan-400 uppercase mb-3">
                    Crafted for Everyday Rhythms
                </p>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                    DESIGNED FOR REAL DYNAMICS
                </h2>

                <p className="mt-6 text-gray-400 font-light leading-relaxed">
                    Our units fit cleanly into your space while pushing optimal sound dynamics. From quiet acoustic listening sessions to high-energy studio master playbacks, SPAudio adapts to your specific listening environment.
                </p>
            </div>
        </section>
    );
}

/* ================= WHY SPAUDIO ================= */
function Features() {
    const items = [
        { title: "Deep Resonant Bass", desc: "Acoustically tuned porting pipes that minimize turbulent air velocity." },
        { title: "Low Noise Floor", desc: "Premium circuit paths that protect against system electromagnetic interference." },
        { title: "Bespoke Material Finish", desc: "High-density cabinets chosen specifically for optimal acoustic impedance." }
    ];

    return (
        <section className="py-24 px-6 md:px-20 text-center bg-slate-950/10">
            <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tight">
                OUR CORE VALUES
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/50 shadow-xl transition-all duration-300 hover:-translate-y-1 text-left"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
                        <h3 className="text-xl font-bold mb-4 text-white tracking-wide">{item.title}</h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= CTA ================= */
function CTA() {
    const ref = useRef<HTMLDivElement>(null!);

    useEffect(() => {
        let t = 0;
        let animationFrameId: number;

        function animate() {
            t += 0.008;

            if (ref.current) {
                ref.current.style.background = `
                    radial-gradient(circle at ${50 + Math.sin(t) * 25}% ${50 + Math.cos(t) * 25}%, rgba(6, 182, 212, 0.25), transparent),
                    radial-gradient(circle at ${50 + Math.cos(t) * 25}% ${50 + Math.sin(t) * 25}%, rgba(168, 85, 247, 0.25), transparent),
                    #020617
                `;
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();
        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <section ref={ref} className="py-24 sm:py-32 text-center border-t border-white/5 transition-all">
            <div className="px-4 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-none text-white">
                    CHOOSE ABSOLUTE <br />
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
                        SONIC PURITY
                    </span>
                </h2>

                <p className="mt-6 text-gray-400 font-light text-sm sm:text-lg">
                    Check our premium active monitors and analog amplifiers.
                </p>

                <Link href="/products">
                    <button className="mt-10 px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:scale-105 transition shadow-lg hover:shadow-cyan-500/25">
                        Explore Products
                    </button>
                </Link>
            </div>
        </section>
    );
}