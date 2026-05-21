"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const words = ["POWERFUL", "IMMERSIVE", "PREMIUM", "NEXT-LEVEL"];

export default function HeroSlider() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [wordIndex, setWordIndex] = useState(0);

    // Swap words smoothly every 2.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            if (!canvas) return;
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        const mouse = { x: width / 2, y: height / 2 };
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        let phase = 0;
        
        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, width, height);

            phase += 0.015;

            // Draw wave streams representing audio spectrum lines
            const lineCount = 5;
            for (let i = 0; i < lineCount; i++) {
                ctx.beginPath();
                ctx.lineWidth = i === 0 ? 3 : 1;
                
                let strokeColor = "";
                if (i === 0) {
                    strokeColor = "rgba(6, 182, 212, 0.7)"; // cyan
                } else if (i === 1) {
                    strokeColor = "rgba(168, 85, 247, 0.4)"; // purple
                } else if (i === 2) {
                    strokeColor = "rgba(236, 72, 153, 0.3)"; // pink
                } else {
                    strokeColor = "rgba(59, 130, 246, 0.15)"; // blue
                }

                ctx.strokeStyle = strokeColor;

                // Mouse interaction impacts amplitude
                const mouseFactor = Math.max(0.15, 1 - Math.abs(mouse.y - height / 2) / (height / 2));
                const amplitude = (25 + i * 18) * mouseFactor * (1 + Math.sin(phase + i) * 0.25);
                
                for (let x = 0; x < width; x += 10) {
                    const normalizedX = x / width;
                    // Draw taper curve so waves thin down at edges
                    const taper = Math.sin(normalizedX * Math.PI);
                    const freq = 2.5 + i * 1.2;
                    const y = height / 2 + Math.sin(normalizedX * freq * Math.PI + phase + i) * amplitude * taper;

                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                ctx.stroke();
            }

            // Floating background audio dust particles
            ctx.fillStyle = "rgba(6, 182, 212, 0.12)";
            for (let j = 0; j < 20; j++) {
                const px = (Math.sin(phase * 0.15 + j) * 0.5 + 0.5) * width;
                const py = (Math.cos(phase * 0.25 + j * 1.5) * 0.4 + 0.5) * height;
                const size = (Math.sin(phase + j) * 0.5 + 0.5) * 3 + 1;
                ctx.beginPath();
                ctx.arc(px, py, size, 0, Math.PI * 2);
                ctx.fill();
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden bg-[#020617]">
            {/* Subtle background tech grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            
            {/* Ambient gradients */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none" />

            {/* Reactive canvas sound waves */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-80" />

            {/* Content Container */}
            <div className="relative z-10 px-4 max-w-4xl mx-auto">
                <p className="text-xs sm:text-sm font-semibold tracking-[0.6em] text-cyan-400 uppercase mb-4 animate-pulse">
                    Acoustic Precision Engineering
                </p>

                <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tight">
                    EXPERIENCE <br />
                    <span className="relative inline-block h-[1.15em] overflow-hidden align-middle">
                        <span 
                            key={wordIndex}
                            className="inline-block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-slideUp"
                        >
                            {words[wordIndex]}
                        </span>
                    </span>
                    <br />
                    SOUND
                </h1>

                <p className="mt-8 text-gray-400 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                    Beautifully engineered speakers and amplifiers crafted for deep frequency responses, absolute clarity, and immersive power.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/products">
                        <button className="px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition duration-300 hover:scale-105">
                            Explore Products
                        </button>
                    </Link>
                    <Link href="/about">
                        <button className="px-8 py-3.5 border border-white/10 hover:border-cyan-400 text-white rounded-full font-semibold bg-white/5 backdrop-blur-md transition duration-300 hover:scale-105">
                            Our Story
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}