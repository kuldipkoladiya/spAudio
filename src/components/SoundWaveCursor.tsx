"use client";

import { useEffect, useRef } from "react";

interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    alpha: number;
    color: string;
    speed: number;
}

export default function SoundWaveCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Disable on touch devices
        if (typeof window !== "undefined" && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
            return;
        }

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const cursor = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const ripples: Ripple[] = [];
        let isHovered = false;

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;

            // Generate motion ripple based on movement speed
            if (Math.random() < 0.12) {
                ripples.push({
                    x: mouse.x,
                    y: mouse.y,
                    radius: 3,
                    maxRadius: 35 + Math.random() * 35,
                    alpha: 0.5,
                    color: Math.random() > 0.5 ? "rgba(59, 130, 246, " : "rgba(168, 85, 247, ", // blue or purple
                    speed: 1.2,
                });
            }
        };

        const handleMouseClick = (e: MouseEvent) => {
            // Intense ripple sound waves on mouse click
            for (let i = 0; i < 3; i++) {
                ripples.push({
                    x: e.clientX,
                    y: e.clientY,
                    radius: 1,
                    maxRadius: 70 + i * 35,
                    alpha: 0.8,
                    color: i % 2 === 0 ? "rgba(6, 182, 212, " : "rgba(236, 72, 153, ", // cyan or pink
                    speed: 1.8 + i * 0.6,
                });
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleMouseClick);

        // Detect hover state on buttons, links, etc.
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer")
            ) {
                isHovered = true;
            } else {
                isHovered = false;
            }
        };

        window.addEventListener("mouseover", handleMouseOver);

        let animationFrameId: number;

        function animate() {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Interpolate position for a laggy, smooth spring motion
            const ease = 0.16;
            cursor.x += (mouse.x - cursor.x) * ease;
            cursor.y += (mouse.y - cursor.y) * ease;

            // 1. Draw all active ripple wave trails
            ripples.forEach((ripple, i) => {
                ripple.radius += ripple.speed;
                ripple.alpha -= 0.015;

                ctx.beginPath();
                ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
                ctx.strokeStyle = `${ripple.color}${ripple.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
                    ripples.splice(i, 1);
                }
            });

            // 2. Draw outer expanding target ring
            const ringRadius = isHovered ? 26 : 14;
            ctx.beginPath();
            ctx.arc(cursor.x, cursor.y, ringRadius, 0, Math.PI * 2);
            ctx.strokeStyle = isHovered ? "rgba(6, 182, 212, 0.8)" : "rgba(168, 85, 247, 0.4)";
            ctx.lineWidth = isHovered ? 2 : 1;
            ctx.stroke();

            // 3. Draw central glowing dot
            ctx.beginPath();
            ctx.arc(cursor.x, cursor.y, isHovered ? 2.5 : 4, 0, Math.PI * 2);
            ctx.fillStyle = isHovered ? "#22d3ee" : "#a855f7"; // cyan or purple
            ctx.shadowBlur = isHovered ? 12 : 6;
            ctx.shadowColor = isHovered ? "#22d3ee" : "#a855f7";
            ctx.fill();
            ctx.shadowBlur = 0; // reset shadow context

            animationFrameId = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleMouseClick);
            window.removeEventListener("mouseover", handleMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
        />
    );
}