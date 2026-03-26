"use client";

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";

type FeatureSectionProps = {
    image: string;
    title: string;
    highlight?: string;
    desc: string;
    reverse?: boolean;
};
/* ================= SCROLL HOOK ================= */
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
            { threshold: 0.2 }
        );

        observer.observe(el);
    }, []);

    return ref;
}

/* ================= HOME ================= */
export default function Home() {
    return (
        <div className="bg-[#0B1120] text-white">

            <Header />
            <HeroSlider />

            <TickerSection />

            <FeatureSection
                image="/images/FeatureSection 1.png"
                title="Powerful Sound"
                highlight="Meets Design"
                desc="Experience immersive audio with premium speakers."
            />

            <FeatureSection
                image="/images/FeatureSection 2.png"
                title="Wireless Freedom"
                highlight="Pure Experience"
                desc="Enjoy seamless audio anywhere."
                reverse
            />

            <FeatureGrid />
            <ProductCategories />
            <SignatureExperience />
            <CTASection />
            <SpeakerShowcase />
            <BrandExperience />

        </div>
    );
}

/* ================= TICKER ================= */
function TickerSection() {
    const items = [
        "50% OFF Speakers",
        "Premium Sound Experience",
        "Wireless Audio",
        "New Arrival",
        "Premium Sound Experience",
        "New Arrival",
        "Premium Sound Experience",
        "New Arrival",
        "Premium Sound Experience",
    ];

    return (
        <section className="relative overflow-hidden py-4 bg-gradient-to-r from-blue-600 to-purple-600">

            <div className="flex whitespace-nowrap animate-ticker gap-10 px-4">
                {[...items, ...items].map((text, i) => (
                    <div key={i} className="font-semibold text-sm sm:text-base">
                        {text}
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-ticker {
          animation: scrollX 20s linear infinite;
        }

        @keyframes scrollX {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

        </section>
    );
}

/* ================= FEATURE ================= */
function FeatureSection({ image, title, highlight, desc, reverse }: FeatureSectionProps) {
    const ref = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 opacity-0 translate-y-10 transition duration-700"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">

                <div className={reverse ? "md:order-2" : ""}>
                    <img
                        src={image}
                        className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl"
                    />
                </div>

                <div className={reverse ? "md:order-1" : ""}>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
                        {title} <br />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              {highlight}
            </span>
                    </h2>

                    <p className="mt-4 text-gray-300 text-sm sm:text-base">
                        {desc}
                    </p>
                </div>

            </div>
        </section>
    );
}

/* ================= WHY ================= */
function FeatureGrid() {
    const ref = useScrollReveal();

    const features = [
        { title: "Crystal Sound", icon: "🎧" },
        { title: "Wireless", icon: "📡" },
        { title: "Premium", icon: "💎" },
    ];

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 md:px-20 text-center opacity-0 translate-y-10 transition duration-700"
        >
            <h2 className="text-2xl sm:text-4xl font-bold mb-10">
                Why Choose SPAudio
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {features.map((f, i) => (
                    <div
                        key={i}
                        className="p-6 sm:p-8 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                    >
                        <div className="text-3xl sm:text-4xl">{f.icon}</div>
                        <h3 className="mt-4 text-lg sm:text-xl">{f.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= CATEGORY ================= */
function ProductCategories() {
    const router = useRouter();
    const [active, setActive] = React.useState(0);

    const categories = [
        {
            name: "Speakers",
            desc: "Feel every beat with powerful immersive sound.",
            img: "/images/FeatureSection 2.png",
            link: "/products?category=speakers",
        },
        {
            name: "Amps",
            desc: "Amplify your audio with unmatched clarity.",
            img: "/images/product-7.jpeg",
            link: "/products?category=amps",
        },
    ];

    return (
        <section className="py-28 px-4 md:px-20">

            <h2 className="text-3xl md:text-6xl text-center font-bold mb-16">
                Explore{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    Categories
                </span>
            </h2>

            <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-center">

                {categories.map((c, i) => {
                    const isActive = active === i;

                    return (
                        <div
                            key={i}
                            onMouseEnter={() => setActive(i)}
                            onClick={() => router.push(c.link)}
                            className={`cursor-pointer transition-all duration-500 w-full 
                                ${isActive ? "md:w-[60%]" : "md:w-[40%] opacity-70"}
                            `}
                        >
                            <div className="relative rounded-2xl overflow-hidden group">

                                <img
                                    src={c.img}
                                    className="w-full h-[300px] sm:h-[380px] md:h-[450px]
                                               object-cover group-hover:scale-105 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/40" />

                                <div className="absolute bottom-6 left-6">
                                    <h3 className="text-2xl sm:text-4xl font-bold">
                                        {c.name}
                                    </h3>

                                    <p className={`mt-2 text-gray-300 text-sm sm:text-base transition ${
                                        isActive ? "opacity-100" : "opacity-0"
                                    }`}>
                                        {c.desc}
                                    </p>
                                </div>

                            </div>
                        </div>
                    );
                })}

            </div>

        </section>
    );
}

/* ================= CTA ================= */
function CTASection() {
    const ref = useRef<HTMLDivElement>(null!);


    useEffect(() => {
        let t = 0;

        function animate() {
            t += 0.01;

            if (ref.current) {
                ref.current.style.background = `
          radial-gradient(circle at ${50 + Math.sin(t) * 30}% ${50 + Math.cos(t) * 30}%, #3843D0, transparent),
          radial-gradient(circle at ${50 + Math.cos(t) * 30}% ${50 + Math.sin(t) * 30}%, #9333EA, transparent)
        `;
            }

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <section
            ref={ref}
            className="py-20 sm:py-32 text-center transition-all"
        >
            <h2 className="text-2xl sm:text-4xl font-bold">
                Upgrade Your Sound Experience
            </h2>

            <Link href="/products?category=speakers">
                <button className="mt-6 px-6 py-3 sm:px-8 bg-white text-black rounded-full">
                    Shop Now
                </button>
            </Link>
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
        <section className="py-24 md:py-32 px-4 md:px-20">

            {/* BIG HEIGHT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8
                            h-[550px] sm:h-[650px] md:h-[900px] overflow-hidden">

                {[0, 1, 2].map((col) => (
                    <div
                        key={col}
                        className={`
                            overflow-hidden
                            ${col !== 0 ? "hidden md:block" : ""}
                        `}
                    >

                        <div
                            className={`flex flex-col gap-8 ${
                                col % 2 === 0 ? "animate-scrollUp" : "animate-scrollDown"
                            }`}
                        >
                            {[...images, ...images].map((img, i) => (
                                <img
                                    key={i}
                                    src={img}
                                    className="
                                        rounded-2xl
                                        w-full
                                        h-[260px] sm:h-[320px] md:h-[420px]
                                        object-cover
                                    "
                                />
                            ))}
                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}

/* ================= FINAL ================= */
function BrandExperience() {
    return (
        <section className="py-20 sm:py-32 px-4 sm:px-6 md:px-20 grid md:grid-cols-2 gap-10 items-center">
            <div>
                <h2 className="text-3xl sm:text-5xl font-bold">
                    Designed for Sound Lovers
                </h2>
            </div>

            <img
                src="/images/FeatureSection 1.png"
                className="rounded-2xl"
            />
        </section>
    );
}
function SignatureExperience() {
    return (
        <section className="relative py-24 px-4 md:px-20 overflow-hidden">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]" />

            <div className="relative max-w-7xl mx-auto">

                {/* TITLE */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-6xl font-bold">
                        Signature{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
              Sound Experience
            </span>
                    </h2>

                    <p className="mt-4 text-gray-400 max-w-xl mx-auto">
                        Designed to deliver immersive audio like never before.
                    </p>
                </div>

                {/* HORIZONTAL SCROLL */}
                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">

                    {[
                        {
                            img: "/images/bass.png",
                            title: "Deep Bass",
                        },
                        {
                            img: "/images/product1.png",
                            title: "Designed for Real Life",
                        },
                        {
                            img: "/images/FeatureSection 2.png",
                            title: "Studio Quality",
                        },
                        {
                            img: "/images/SpeakerShowcase.png",
                            title: "Premium Build",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[280px] md:min-w-[400px] rounded-2xl overflow-hidden relative group"
                        >

                            <img
                                src={item.img}
                                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                            />

                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

                            <h3 className="absolute bottom-6 left-6 text-xl font-semibold">
                                {item.title}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}