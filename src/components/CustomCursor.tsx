"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector(".cursor") as HTMLElement;

        const move = (e: MouseEvent) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener("mousemove", move);

        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <div className="cursor fixed top-0 left-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 pointer-events-none z-[999] mix-blend-difference transition-transform duration-150" />
    );
}