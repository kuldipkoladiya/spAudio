"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= PAGE ================= */
export default function About() {
    return (
        <div className="bg-[#020617] text-white font-sans">
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
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );

        tl.fromTo(
            subtitleRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
            "-=0.6"
        );
    }, []);

    return (
        <section className="py-32 md:py-40 text-center px-4 overflow-hidden">
            <h1
                ref={titleRef}
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight opacity-0"
            >
                Redefining{" "}
                <span className="relative inline-block">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Sound Experience
          </span>
          <span className="absolute inset-0 blur-2xl opacity-30 bg-gradient-to-r from-blue-400 to-purple-500"></span>
        </span>
            </h1>

            <p
                ref={subtitleRef}
                className="mt-6 text-gray-400 max-w-xl mx-auto text-lg opacity-0"
            >
                Crafted for clarity. Built for performance. Designed for you.
            </p>
        </section>
    );
}

/* ================= GSAP STORY ================= */
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
            top: "Sound is emotion",
            main: "FEEL EVERY NOTE",
            bottom: "We create immersive audio experiences",
        },
        {
            top: "Engineered with precision",
            main: "PURE PERFORMANCE",
            bottom: "Every detail matters — inside and out",
        },
        {
            top: "Trusted globally",
            main: "1M+ USERS",
            bottom: "Built for those who expect more",
        },
    ];

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=500%",
                scrub: 2,
                pin: true,
            },
        });

        refs.current.forEach((frame) => {
            if (!frame?.top || !frame?.main || !frame?.bottom) return;

            tl.fromTo(frame.top, { opacity: 0, y: 30 }, { opacity: 1, y: 0 });
            tl.fromTo(frame.main, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 });
            tl.fromTo(frame.bottom, { opacity: 0, y: -20 }, { opacity: 1, y: 0 });

            tl.to({}, { duration: 1 });

            tl.to([frame.top, frame.main, frame.bottom], {
                opacity: 0,
                y: -40,
            });
        });

        return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative h-screen flex items-center justify-center overflow-hidden px-4"
        >
            {/* BG Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]" />

            <div className="relative z-10 text-center w-full max-w-6xl mx-auto">

                {frames.map((f, i) => (
                    <div
                        key={i}
                        className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6"
                    >
                        {/* TOP */}
                        <p
                            ref={setRef(i, "top")}
                            className="
                opacity-0
                text-[10px] sm:text-xs md:text-sm lg:text-base
                tracking-[0.3em] md:tracking-[0.4em]
                uppercase
                text-gray-400
              "
                        >
                            {f.top}
                        </p>

                        {/* MAIN */}
                        <h1
                            ref={setRef(i, "main")}
                            className="
                opacity-0
                text-[clamp(2.5rem,12vw,8rem)]
                font-black
                tracking-tight
                leading-[0.9]
              "
                        >
                            {f.main}
                        </h1>

                        {/* BOTTOM (FIXED) */}
                        <p
                            ref={setRef(i, "bottom")}
                            className="
                opacity-0
                mt-4 sm:mt-6 md:mt-8
                text-xs sm:text-sm md:text-lg lg:text-xl
                text-gray-300
                max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
                mx-auto
                leading-relaxed
                whitespace-normal
                break-normal
                text-center
              "
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
        <section className="py-32 px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <img
                src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
                className="rounded-2xl h-[400px] w-full object-cover"
            />

            <div>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Designed for Real Life
                </h2>

                <p className="mt-4 text-gray-400">
                    Whether you&apos;re working, traveling, or relaxing — our audio adapts to your lifestyle.
                </p>
            </div>
        </section>
    );
}

/* ================= FEATURES ================= */
function Features() {
    const items = ["Deep Bass", "Wireless Freedom", "Premium Build"];

    return (
        <section className="py-24 px-6 md:px-20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
                Why SPAudio
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-2xl bg-white/5 backdrop-blur border border-white/10 hover:scale-105 transition"
                    >
                        <h3 className="text-xl font-semibold">{item}</h3>
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

        function animate() {
            t += 0.01;

            if (ref.current) {
                ref.current.style.background = `
          radial-gradient(circle at ${50 + Math.sin(t) * 30}% ${50 + Math.cos(t) * 30}%, #3b82f6, transparent),
          radial-gradient(circle at ${50 + Math.cos(t) * 30}% ${50 + Math.sin(t) * 30}%, #a855f7, transparent)
        `;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <section ref={ref} className="py-28 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
                Experience Sound Like Never Before
            </h2>

            <button className="mt-6 px-8 py-3 bg-white text-black rounded-full">
                Explore Products
            </button>
        </section>
    );
}