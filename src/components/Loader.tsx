"use client";

import { useEffect, useState } from "react";

export default function Loader() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 400);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020617] text-white">
            
            {/* Morphing Neon Sound Bars */}
            <div className="flex items-end justify-center gap-2 h-16 mb-8">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="w-1.5 bg-gradient-to-t from-blue-500 via-purple-500 to-pink-500 rounded-full animate-soundbar"
                        style={{
                            height: "20%",
                            animationDelay: `${i * 0.15}s`,
                        }}
                    />
                ))}
            </div>

            {/* Logo / Text */}
            <h1 className="text-3xl font-extrabold tracking-widest bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                SP AUDIO
            </h1>
            
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-gray-500 min-h-[1rem]">
                Tuning Experience{dots}
            </p>

            <style jsx>{`
                .animate-soundbar {
                    animation: soundWave 1.2s ease-in-out infinite alternate;
                }
                @keyframes soundWave {
                    0% { height: 15%; }
                    100% { height: 100%; }
                }
            `}</style>
        </div>
    );
}
