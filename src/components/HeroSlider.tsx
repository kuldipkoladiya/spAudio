"use client";

import { useEffect, useRef, useState } from "react";

const words = ["powerful", "immersive", "premium", "next-level"];

export default function HeroSlider() {
    const canvasRef = useRef<HTMLCanvasElement>(null!); // ✅ FIX

    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    /* 🔥 TYPEWRITER */
    useEffect(() => {
        const currentWord = words[wordIndex];
        const speed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? currentWord.substring(0, prev.length - 1)
                    : currentWord.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentWord) {
                setTimeout(() => setIsDeleting(true), 1200);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex]);

    /* 🔥 CANVAS ANIMATION */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const ctx = context;

        const w = 128;
        const h = 128;
        let time = 0;

        const blobs = [
            { color: "#3843D0", t: 0 },
            { color: "#ff72e3", t: 2 },
            { color: "#000000", t: 4 },
            { color: "#2f39ba", t: 6 },
        ];

        canvas.width = w;
        canvas.height = h;

        if (!ctx) return;

        function animate() {
            time += 0.01;
            ctx.clearRect(0, 0, w, h);

            ctx.globalCompositeOperation = "screen";

            blobs.forEach((b) => {
                const x = w / 2 + Math.sin(time + b.t) * (w * 0.3);
                const y = h / 2 + Math.cos(time + b.t) * (h * 0.3);

                const radius = w * 0.5;

                const g = ctx.createRadialGradient(x, y, 0, x, y, radius);
                g.addColorStop(0, b.color);
                g.addColorStop(1, "rgba(0,0,0,0)");

                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }, []);

    return (
        <section className="relative w-full h-[80vh] md:h-screen flex items-center justify-center text-center overflow-hidden">

            {/* BG */}
            <div className="absolute inset-0 bg-black" />

            {/* GRADIENT */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,#3843D0,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,#ff72e3,transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,#2f39ba,transparent_70%)]" />

            {/* CANVAS */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full blur-[100px] opacity-80"
            />

            {/* CONTENT */}
            <div className="relative z-10 px-4">

                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
                    Experience{" "}
                    <span className="text-[#ff72e3]">
            {text}
                        <span className="animate-pulse">|</span>
          </span>
                    <br />
                    Sound
                </h1>

                <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-xl mx-auto">
                    We build powerful audio experiences that redefine how you hear music.
                </p>

                <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                    Explore Now
                </button>

            </div>
        </section>
    );
}