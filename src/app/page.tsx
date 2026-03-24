"use client";

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import Image from "next/image";
import { useEffect, useRef } from "react";

/* ================= SCROLL HOOK ================= */
function useScrollReveal() {
    const ref = useRef<any>(null);

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
                image="https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
                title="Powerful Sound"
                highlight="Meets Design"
                desc="Experience immersive audio with premium speakers."
            />

            <FeatureSection
                image="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg"
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
function FeatureSection({ image, title, highlight, desc, reverse }: any) {
    const ref = useScrollReveal();

    return (
        <section
            ref={ref}
            className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 opacity-0 translate-y-10 transition duration-700"
        >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">

                <div className={reverse ? "order-2" : ""}>
                    <Image
                        src={image}
                        alt={title}
                        width={800}
                        height={500}
                        className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-2xl"
                    />
                </div>

                <div className={reverse ? "order-1" : ""}>
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
    const ref = useScrollReveal();

    const categories = [
        {
            name: "Speakers",
            img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
        },
        {
            name: "Headphones",
            img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
        },
        {
            name: "Home Audio",
            img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
        },
    ];

    return (
        <section
            ref={ref}
            className="py-20 px-4 sm:px-6 md:px-20 opacity-0 translate-y-10 transition duration-700"
        >
            <h2 className="text-2xl sm:text-4xl text-center font-bold mb-10">
                Explore Categories
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {categories.map((c, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden">
                        <Image
                            src={c.img}
                            alt={c.name}
                            width={500}
                            height={300}
                            className="h-[250px] sm:h-[300px] w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h3 className="text-lg sm:text-xl">{c.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* ================= CTA ================= */
function CTASection() {
    const ref = useRef<any>(null);

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
        <section ref={ref} className="py-20 sm:py-32 text-center transition-all">
            <h2 className="text-2xl sm:text-4xl font-bold">
                Upgrade Your Sound Experience
            </h2>

            <button className="mt-6 px-6 py-3 sm:px-8 bg-white text-black rounded-full">
                Shop Now
            </button>
        </section>
    );
}

/* ================= SHOWCASE ================= */
function SpeakerShowcase() {
    const images = [
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
        "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
    ];

    return (
        <section className="py-20 px-4 md:px-20">
            <div className="grid md:grid-cols-3 gap-6 h-[500px] overflow-hidden">
                {[0, 1, 2].map((col) => (
                    <div key={col}>
                        <div className="flex flex-col gap-6 animate-scrollY">
                            {[...images, ...images].map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt="Speaker"
                                    width={400}
                                    height={300}
                                    className="rounded-xl"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .animate-scrollY {
          animation: scrollY 20s linear infinite;
        }
        @keyframes scrollY {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
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

            <Image
                src="https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg"
                alt="Brand Experience"
                width={600}
                height={400}
                className="rounded-2xl"
            />
        </section>
    );
}

/* ================= SIGNATURE ================= */
function SignatureExperience() {
    return (
        <section className="relative py-24 px-4 md:px-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#020617]" />

            <div className="relative max-w-7xl mx-auto">
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

                <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">
                    {[
                        {
                            img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
                            title: "Deep Bass",
                        },
                        {
                            img: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
                            title: "Wireless Freedom",
                        },
                        {
                            img: "https://images.pexels.com/photos/63703/pexels-photo-63703.jpeg",
                            title: "Studio Quality",
                        },
                        {
                            img: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
                            title: "Premium Build",
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="min-w-[280px] md:min-w-[400px] rounded-2xl overflow-hidden relative group"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={500}
                                height={350}
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