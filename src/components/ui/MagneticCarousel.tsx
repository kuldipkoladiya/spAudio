"use client";
/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

import { useEffect, useRef, useState, type CSSProperties } from "react";

const RenderTarget = {
    current: () => "preview",
    canvas: "canvas",
    export: "export",
    thumbnail: "thumbnail",
    preview: "preview",
};

const EASE_PRESETS: Record<string, string> = {
    linear: "linear",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
};

// Shown when the user hasn't added their own Content images.
const DEFAULT_IMAGES = [
    { src: "/images/stack_1.png" },
    { src: "/images/stack_2.png" },
    { src: "/images/stack_3.png" },
    { src: "/images/stack_4.png" },
    { src: "/images/spkr2.png" },
    { src: "/images/FeatureSection_1.png" },
    { src: "/images/RTGYDRFG.png" },
    { src: "/images/amp2.png" },
];

function parseTransition(t: any) {
    const dur = Math.max(0.05, (t && t.duration) || 0.5);
    let ease = "cubic-bezier(0.44, 0, 0.56, 1)";
    if (t && Array.isArray(t.ease) && t.ease.length === 4) {
        ease = `cubic-bezier(${t.ease.join(", ")})`;
    } else if (t && typeof t.ease === "string" && EASE_PRESETS[t.ease]) {
        ease = EASE_PRESETS[t.ease];
    } else if (t && t.type === "spring") {
        ease = "cubic-bezier(0.34, 1.56, 0.64, 1)";
    }
    return { dur, ease };
}

export default function MagneticCarousel(props: any) {
    props = { ...COMPONENT_DEFAULTS, ...props };
    const {
        images = DEFAULT_IMAGES,
        collapsedWidth = 90,
        hoverWidth = 180,
        collapsedHeight = 320,
        hoverHeight = 380,
        openSize = 520,
        gap = 14,
        influence = 180,
        blur = 2,
        transition = { type: "tween", duration: 0.3, ease: "easeInOut" },
        style = {},
    } = props;

    const items: any[] =
        Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES;
    const count = items.length;

    const containerRef = useRef<HTMLDivElement>(null);
    const [factors, setFactors] = useState<number[]>(() => items.map(() => 0));
    const [open, setOpen] = useState<number | null>(null);
    const [closing, setClosing] = useState(false);

    const isCanvas = RenderTarget.current() === RenderTarget.canvas;

    const targetRef = useRef<number[]>(items.map(() => 0));
    const curRef = useRef<number[]>(items.map(() => 0));
    const loopRef = useRef(0);
    const closeTimer = useRef<any>(0);

    useEffect(() => {
        targetRef.current = items.map(() => 0);
        curRef.current = items.map(() => 0);
        setFactors(items.map(() => 0));
    }, [count]);

    useEffect(
        () => () => {
            cancelAnimationFrame(loopRef.current);
            clearTimeout(closeTimer.current);
        },
        []
    );

    const startLoop = () => {
        if (loopRef.current) return;
        const step = () => {
            const tgt = targetRef.current;
            const cur = curRef.current;
            let moving = false;
            for (let i = 0; i < cur.length; i++) {
                const d = (tgt[i] ?? 0) - cur[i];
                if (Math.abs(d) > 0.001) {
                    cur[i] += d * 0.2;
                    moving = true;
                } else {
                    cur[i] = tgt[i] ?? 0;
                }
            }
            setFactors([...cur]);
            loopRef.current = moving ? requestAnimationFrame(step) : 0;
        };
        loopRef.current = requestAnimationFrame(step);
    };

    const setTargetFromCursor = (clientX: number) => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = clientX - rect.left;
        const n = items.length;
        const totalBase = n * collapsedWidth + (n - 1) * gap;
        const startX = (rect.width - totalBase) / 2;
        targetRef.current = items.map((_, i) => {
            const center =
                startX + i * (collapsedWidth + gap) + collapsedWidth / 2;
            const dist = Math.abs(cx - center);
            const f = Math.max(0, 1 - dist / influence);
            return f * f * (3 - 2 * f);
        });
        startLoop();
    };

    const onMove = (e: React.MouseEvent) => {
        if (isCanvas || open !== null) return;
        setTargetFromCursor(e.clientX);
    };

    const onLeave = () => {
        if (open !== null) return;
        targetRef.current = items.map(() => 0);
        startLoop();
    };

    const close = () => {
        targetRef.current = items.map(() => 0);
        curRef.current = items.map(() => 0);
        setFactors(items.map(() => 0));
        setClosing(true);
        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => setClosing(false), dur * 1000);
        setOpen(null);
    };

    const sizeFor = (i: number) => {
        if (open !== null) {
            return i === open
                ? { width: openSize, height: openSize }
                : { width: collapsedWidth, height: collapsedHeight };
        }
        const f = factors[i] ?? 0;
        return {
            width: collapsedWidth + (hoverWidth - collapsedWidth) * f,
            height: collapsedHeight + (hoverHeight - collapsedHeight) * f,
        };
    };

    const { dur, ease } = parseTransition(transition);
    const openEase = `width ${dur}s ${ease}, height ${dur}s ${ease}, filter ${dur}s ${ease}, opacity ${dur}s ${ease}`;
    const barTransition = open !== null || closing ? openEase : "none";

    return (
        <div
            ref={containerRef}
            style={{
                ...style,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap,
                position: "relative",
                overflow: "visible",
            }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
        >
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    pointerEvents: open !== null ? "auto" : "none",
                }}
                onClick={close}
            />
            {items.map((img, i) => {
                const { width, height } = sizeFor(i);
                const blurred = open !== null && i !== open;
                return (
                    <div
                        key={i}
                        onClick={(e) => {
                            if (isCanvas) return;
                            e.stopPropagation();
                            if (open === i) close();
                            else setOpen(i);
                        }}
                        style={{
                            flex: "none",
                            width,
                            height,
                            overflow: "hidden",
                            borderRadius: 24,
                            cursor: isCanvas ? "default" : "pointer",
                            transition: barTransition,
                            willChange: "width, height",
                            position: "relative",
                            zIndex: open === i ? 3 : 2,
                            filter: blurred ? `blur(${blur}px)` : "none",
                            opacity: blurred ? 0.6 : 1,
                            backgroundColor: img
                                ? "transparent"
                                : `hsl(${(i * 360) / count}, 70%, 58%)`,
                            backgroundImage: img
                                ? `url(${img.src})`
                                : undefined,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                        }}
                    />
                );
            })}
        </div>
    );
}

const COMPONENT_DEFAULTS = {
    images: DEFAULT_IMAGES,
    collapsedWidth: 90,
    hoverWidth: 180,
    collapsedHeight: 320,
    hoverHeight: 380,
    openSize: 520,
    gap: 14,
    influence: 180,
    blur: 2,
    transition: {
        type: "tween",
        duration: 0.3,
        delay: 0,
        ease: "easeInOut",
    },
};

MagneticCarousel.displayName = "Magnetic Carousel";
