"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            scrollRef.current.scrollTo({
                left: direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth,
                behavior: "smooth",
            });
        }
    };

    const products = [
        { title: "AMPS", img: "/images/steven-aguilar-kHGf1DdbILE-unsplash.jpg" },
        { title: "SPEAKERS", img: "/images/steven-aguilar-kHGf1DdbILE-unsplash.jpg" },
        { title: "HEADPHONES", img: "/images/steven-aguilar-kHGf1DdbILE-unsplash.jpg" },
        { title: "MICROPHONES", img: "/images/steven-aguilar-kHGf1DdbILE-unsplash.jpg" },
        { title: "CABLES", img: "/images/steven-aguilar-kHGf1DdbILE-unsplash.jpg" },
    ];

    return (
        <section className="bg-black text-white py-16 px-4 relative overflow-hidden">
            {/* Arrows */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200"
            >
                <ChevronLeft />
            </button>
            <button
                onClick={() => scroll("right")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white text-black rounded-full p-2 hover:bg-gray-200"
            >
                <ChevronRight />
            </button>

            {/* Slider Cards */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto scroll-smooth scrollbar-hide"
            >
                {products.map((item, index) => (
                    <div
                        key={index}
                        className="w-1/3 flex-shrink-0 text-center"
                    >
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
