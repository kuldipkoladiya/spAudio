"use client";

import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen font-sans flex flex-col items-center justify-center pt-24 pb-12 px-6">
      {/* Header */}
      <section className="text-center mb-12 max-w-3xl mx-auto">
        <span className="text-[#3b82f6] font-display text-[12px] font-extrabold tracking-[0.3em] uppercase mb-4 block">
          Client Feedback
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-[#0f1f3d] tracking-tight leading-none">
          What our partners say
        </h1>
        <p className="text-gray-500 mt-4 font-medium text-base sm:text-lg">
          Discover how SP Audio delivers unmatched performance and value globally.
        </p>
      </section>

      {/* Main Interactive Testimonials Slider */}
      <div className="w-full max-w-5xl bg-white rounded-[32px] shadow-xl border border-gray-100/50 p-4 sm:p-8">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </div>
  );
}
