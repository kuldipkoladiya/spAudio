"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
    children: React.ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const panels = gsap.utils.toArray(".panel");

        if (ref.current) {
            gsap.to(panels, {
                xPercent: -100 * (panels.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ref.current,
                    pin: true,
                    scrub: 1,
                    end: () => "+=" + (ref.current as HTMLDivElement).offsetWidth
                }
            });
        }
    }, []);

    return (
        <section ref={ref} className="h-screen flex">
            {children}
        </section>
    );
}