"use client";

import { useEffect, useState } from "react";
import ScrollProvider from "./ScrollProvider";
import SoundWaveCursor from "./SoundWaveCursor";
import Loader from "./Loader";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Simulate load time and fade out loader
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!mounted) {
        return (
            <div className="bg-[#020617] min-h-screen text-white flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    return (
        <ScrollProvider>
            <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
                {loading && <Loader />}
                <SoundWaveCursor />
                {children}
            </div>
        </ScrollProvider>
    );
}
