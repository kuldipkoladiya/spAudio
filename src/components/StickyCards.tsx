"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

// Simple class merger helper
const cn = (...classes: (string | boolean | undefined | null)[]) => classes.filter(Boolean).join(" ");

interface CardData {
  id: number | string;
  image: string;
  title: string;
  subtitle: string;
  tag: string;
}

interface StickyCard002Props {
  cards: CardData[];
  className?: string;
  containerClassName?: string;
  imageClassName?: string;
}

const StickyCard002 = ({
  cards,
  className,
  containerClassName,
  imageClassName,
}: StickyCard002Props) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const cardElements = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
      const totalCards = cardElements.length;

      if (totalCards === 0) return;

      // Initialize positioning
      gsap.set(cardElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < totalCards; i++) {
        gsap.set(cardElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-cards-wrapper",
          start: "top top",
          end: `+=${window.innerHeight * (totalCards - 0.5)}`,
          pin: true,
          scrub: 0.6,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < totalCards - 1; i++) {
        const currentCard = cardElements[i];
        const nextCard = cardElements[i + 1];
        const position = i;

        // Current card shrinks and tilts slightly
        scrollTimeline.to(
          currentCard,
          {
            scale: 0.88,
            rotation: 4,
            opacity: 0.8,
            duration: 1,
            ease: "power2.inOut",
          },
          position
        );

        // Next card slides in from the bottom
        scrollTimeline.to(
          nextCard,
          {
            y: "0%",
            duration: 1,
            ease: "power2.inOut",
          },
          position
        );
      }

      // Refresh scroll trigger on resize
      const resizeObserver = new ResizeObserver(() => {
        ScrollTrigger.refresh();
      });

      if (container.current) {
        resizeObserver.observe(container.current);
      }

      return () => {
        resizeObserver.disconnect();
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className={cn("relative w-full", className)} ref={container}>
      <div className="sticky-cards-wrapper relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-2 md:py-8 bg-white">
        <div
          className={cn(
            "relative h-[80vh] md:h-[82vh] lg:h-[88vh] w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-6xl xl:max-w-7xl overflow-hidden rounded-[24px] sm:rounded-[36px] md:rounded-[48px] shadow-2xl shadow-black/10 border border-gray-100 bg-gray-50",
            containerClassName
          )}
        >
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className={cn(
                "absolute inset-0 h-full w-full overflow-hidden",
                imageClassName
              )}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              <img
                src={card.image}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Export Component
const StickyCardsSection = () => {
  const cards = [
    {
      id: 1,
      image: "/images/stack_1.png",
      tag: "Concert Systems",
      title: "SPX Concert Series",
      subtitle: "High-power line arrays designed for perfect acoustic propagation.",
    },
    {
      id: 2,
      image: "/images/stack_2.png",
      tag: "Subwoofers",
      title: "Bass Performance",
      subtitle: "Dual low-frequency transducers delivering deep, clean, punchy bass.",
    },
    {
      id: 3,
      image: "/images/stack_3.png",
      tag: "Processing",
      title: "Amplifier Systems",
      subtitle: "Digital signal processing touring amplifiers with smart network control.",
    },
    {
      id: 4,
      image: "/images/stack_4.png",
      tag: "Installations",
      title: "Column Arrays",
      subtitle: "Sleek architectural sound designs for houses of worship and corporate venues.",
    },
  ];

  return (
    <div className="w-full">
      <StickyCard002 cards={cards} />
    </div>
  );
};

export { StickyCard002, StickyCardsSection };

