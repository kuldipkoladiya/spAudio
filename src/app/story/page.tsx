"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Story() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] bg-black text-white">

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full flex items-center justify-center text-center overflow-hidden">
                <img
                    src="/images/story.jpeg" // Replace with a relevant image
                    alt="Our Story Hero"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 px-4 sm:px-10 max-w-4xl" data-aos="fade-up">
                    <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">OUR STORY</h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl mx-auto">
                        Crafted with passion. Engineered for power.
                    </p>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 px-4 sm:px-10" data-aos="fade-up">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">From Garage to Global</h2>
                    <p className="text-gray-300 text-base sm:text-lg mb-4">
                        SP Audio was founded in 2010 with one goal: to amplify life’s best moments through sound.
                    </p>
                    <p className="text-gray-400 text-base sm:text-lg">
                        What began in a small workshop has grown into an industry-leading audio brand trusted by music lovers worldwide.
                        Every product we build is fueled by innovation, tested for endurance, and tuned for performance.
                    </p>
                </div>
            </section>

            {/* Image + Quote Split Section */}
            <section className="bg-black text-white py-20 px-4 sm:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="relative h-64 md:h-80" data-aos="fade-right">
                        <Image
                            src="/images/stroy-2.jpeg"
                            alt="Our Story Hero"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div data-aos="fade-left">
                        <blockquote className="text-xl sm:text-2xl font-semibold italic text-gray-300 border-l-4 border-white pl-6">
                            “Sound is more than just something you hear — it is something you feel. That is why we build speakers that speak to your soul.”
                        </blockquote>
                        <p className="mt-4 text-gray-400 text-sm">– SP Audio Founder</p>
                    </div>
                </div>
            </section>

            {/* Optional: Milestones Section */}
            <section className="bg-black text-white py-20 px-4 sm:px-10" data-aos="zoom-in-up">
                <div className="max-w-5xl mx-auto text-center">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-6">Milestones</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-gray-300 text-sm sm:text-base">
                        <div>
                            <h4 className="text-white text-xl font-semibold mb-2">2010</h4>
                            <p>SP Audio is founded with a mission to redefine portable sound.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-semibold mb-2">2015</h4>
                            <p>First award-winning Bluetooth speaker hits the market.</p>
                        </div>
                        <div>
                            <h4 className="text-white text-xl font-semibold mb-2">2024</h4>
                            <p>Global presence with over 2 million products sold worldwide.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
