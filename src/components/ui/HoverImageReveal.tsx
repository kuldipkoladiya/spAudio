"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type Transition as MotionTransition,
} from "framer-motion";

interface Item {
  text?: string;
  image?: { src?: string; srcSet?: string; alt?: string };
  link?: string;
}

interface ItemsValue {
  itemCount?: number;
  [key: string]: unknown;
}

const MAX_ITEMS = 6;

interface FontValue {
  fontSize?: number | string;
  letterSpacing?: number | string;
  lineHeight?: number | string;
  [key: string]: unknown;
}

interface HoverImageRevealProps {
  items?: ItemsValue;
  font?: FontValue;
  textColor?: string;
  dimColor?: string;
  align?: "left" | "center" | "right";
  rowGap?: number;
  imageWidth?: number;
  imageHeight?: number;
  rounded?: number;
  offsetX?: number;
  offsetY?: number;
  followStrength?: number;
  transition?: MotionTransition;
  backgroundColor?: string;
  style?: CSSProperties;
}

const DEFAULT_ITEMS_DATA: { text: string; src: string }[] = [
  {
    text: "CONCERT LOUDSPEAKERS",
    src: "/images/spkr2.png",
  },
  {
    text: "SUBWOOFER SYSTEMS",
    src: "/images/FeatureSection_1.png",
  },
  {
    text: "POWER AMPLIFIERS",
    src: "/images/amp2.png",
  },
  {
    text: "LINE ARRAY STACKS",
    src: "/images/stack_1.png",
  },
  {
    text: "COLUMN ARRAYS",
    src: "/images/stack_4.png",
  },
  {
    text: "SPECIALIZED ACOUSTICS",
    src: "/images/SpeakerShowcase.png",
  },
];

const DEFAULT_ITEMS: ItemsValue = {
  itemCount: 6,
  item1: {
    text: DEFAULT_ITEMS_DATA[0].text,
    image: { src: DEFAULT_ITEMS_DATA[0].src },
  },
  item2: {
    text: DEFAULT_ITEMS_DATA[1].text,
    image: { src: DEFAULT_ITEMS_DATA[1].src },
  },
  item3: {
    text: DEFAULT_ITEMS_DATA[2].text,
    image: { src: DEFAULT_ITEMS_DATA[2].src },
  },
  item4: {
    text: DEFAULT_ITEMS_DATA[3].text,
    image: { src: DEFAULT_ITEMS_DATA[3].src },
  },
  item5: {
    text: DEFAULT_ITEMS_DATA[4].text,
    image: { src: DEFAULT_ITEMS_DATA[4].src },
  },
  item6: {
    text: DEFAULT_ITEMS_DATA[5].text,
    image: { src: DEFAULT_ITEMS_DATA[5].src },
  },
};

const DEFAULT_FONT: FontValue = {
  fontFamily: "var(--font-display), sans-serif",
  fontWeight: 900,
  fontSize: 48,
  lineHeight: "1em",
  letterSpacing: "-0.04em",
  textAlign: "center",
};

const DEFAULT_TRANSITION: MotionTransition = {
  type: "spring",
  stiffness: 400,
  damping: 40,
  mass: 1,
};

const alignToFlex: Record<string, CSSProperties["alignItems"]> = {
  left: "flex-start",
  center: "center",
  right: "flex-end",
};
const alignToText: Record<string, CSSProperties["textAlign"]> = {
  left: "left",
  center: "center",
  right: "right",
};

export default function HoverImageReveal({
  items = DEFAULT_ITEMS,
  font = DEFAULT_FONT,
  textColor = "#0F1F3D",
  dimColor = "#94A3B8",
  align = "center",
  rowGap = 24,
  imageWidth = 340,
  imageHeight = 440,
  rounded = 24,
  offsetX = 0,
  offsetY = -220,
  followStrength = 0,
  transition = DEFAULT_TRANSITION,
  backgroundColor = "transparent",
  style,
}: HoverImageRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const effectiveWidth = isMobile ? Math.min(imageWidth, windowWidth - 48) : imageWidth;
  const effectiveHeight = isMobile ? Math.round(effectiveWidth * 1.25) : imageHeight;
  const effectiveOffsetY = isMobile ? -Math.round(effectiveHeight / 2 + 30) : offsetY;

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const stiffness = 60 + followStrength * 5;
  const springCfg = { stiffness, damping: 28, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  const data = items || DEFAULT_ITEMS;
  const count = Math.max(
    1,
    Math.min(MAX_ITEMS, (data.itemCount as number) || 6)
  );
  const list: Item[] = [];
  for (let i = 1; i <= count; i++) {
    const it = data[`item${i}`] as Item | undefined;
    const fallback = DEFAULT_ITEMS_DATA[i - 1];
    list.push({
      text: it?.text ?? fallback?.text ?? `Item ${i}`,
      image: it?.image ?? (fallback ? { src: fallback.src } : undefined),
      link: it?.link,
    });
  }
  const anyActive = hovered != null;

  const updatePosition = (clientX: number, clientY: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = clientX - rect.left + offsetX;
    const relY = clientY - rect.top + effectiveOffsetY;
    rawX.set(relX);
    rawY.set(relY);
  };

  const onMove = (e: React.MouseEvent) => {
    updatePosition(e.clientX, e.clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    updatePosition(touch.clientX, touch.clientY);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={onMove}
      onMouseLeave={() => setHovered(null)}
      onTouchMove={onTouchMove}
      onTouchEnd={() => setHovered(null)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "visible",
        backgroundColor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: alignToFlex[align],
        gap: `${rowGap}px`,
        padding: isMobile ? 12 : 24,
        boxSizing: "border-box",
        cursor: "default",
        ...(font as CSSProperties),
        ...style,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          width: effectiveWidth,
          height: effectiveHeight,
          borderRadius: rounded,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 40,
          boxShadow: "0 25px 50px -12px rgba(15, 31, 61, 0.35)",
          border: "1px solid rgba(226, 232, 240, 0.8)",
        }}
        animate={{ opacity: anyActive ? 1 : 0, scale: anyActive ? 1 : 0.9 }}
        transition={transition}
      >
        {list.map((item, i) => {
          const src = item.image?.src;
          const yPos =
            hovered == null
              ? "100%"
              : i < hovered
                ? "-100%"
                : i > hovered
                  ? "100%"
                  : "0%";
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{ y: yPos }}
              transition={transition}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                backgroundColor: "#ffffff",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {src ? (
                <img
                  src={src}
                  alt={item.image?.alt || item.text || ""}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(135deg,#333,#111)",
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>

      <div
        onMouseLeave={() => setHovered(null)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: alignToFlex[align],
          gap: `${rowGap}px`,
          width: "100%",
        }}
      >
        {list.map((item, i) => {
          const isHovered = hovered === i;
          const color = anyActive ? (isHovered ? textColor : dimColor) : textColor;
          const copyStyle: CSSProperties = {
            display: "block",
            color,
            transition: "color 0.25s ease",
            whiteSpace: "normal",
            textAlign: alignToText[align],
          };
          const inner = (
            <motion.div
              style={{ position: "relative" }}
              animate={{ y: isHovered ? "-100%" : "0%" }}
              transition={transition}
            >
              <span style={copyStyle}>{item.text}</span>
              <span
                aria-hidden
                style={{
                  ...copyStyle,
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  color: "#3b82f6",
                }}
              >
                {item.text}
              </span>
            </motion.div>
          );
          return (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onTouchStart={(e) => {
                const touch = e.touches[0];
                if (touch) {
                  setHovered(i);
                  updatePosition(touch.clientX, touch.clientY);
                }
              }}
              style={{
                overflow: "hidden",
                cursor: item.link ? "pointer" : "default",
                paddingTop: 4,
                paddingBottom: 4,
              }}
            >
              {item.link ? (
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {inner}
                </a>
              ) : (
                inner
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
