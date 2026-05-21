"use client";

import React, { useRef } from "react";

interface MagneticButtonProps {
    children: React.ReactNode;
}

export default function MagneticButton({ children }: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        ref.current.style.transform = `translate(${x * 0.3}px,${y * 0.3}px)`;
    };

    const reset = () => {
        if (!ref.current) return;
        ref.current.style.transform = "translate(0px,0px)";
    };

    return (
        <button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={reset}
            className="px-8 py-4 border border-black rounded-xl"
        >
            {children}
        </button>
    );
}