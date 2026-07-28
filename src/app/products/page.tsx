"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import KineticGrid from "@/components/ui/KineticGrid";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { allProducts } from "@/data/products";

export default function ProductPage() {
    const [activeTab, setActiveTab] = useState<string>("All");

    const categories = ["All", "Loudspeakers", "Subwoofers", "Amplifiers", "Accessories"];

    const filteredProducts = allProducts.filter((product) => {
        if (activeTab === "All") return true;
        return product.category === activeTab;
    });

    return (
        <div className="bg-white text-[#0f1f3d] font-sans overflow-hidden min-h-screen relative">
            {/* Ambient gradients */}
            <div className="absolute top-[5%] left-[10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[15%] right-[10%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

            {/* Background Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,61,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,61,0.015)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none opacity-80" />

            {/* ================= HERO SECTION ================= */}
            <section className="relative py-28 md:py-36 text-center px-6 border-b border-gray-100 min-h-[65vh] flex flex-col justify-center items-center overflow-hidden z-10">
                {/* Kinetic Grid Interactive Background */}
                <div className="absolute inset-0 z-0">
                    <KineticGrid 
                        dotColor="rgba(15, 31, 61, 0.12)" 
                        lineColor="rgba(59, 130, 246, 0.06)" 
                        trailColor="rgba(59, 130, 246, 0.25)"
                        spacing={35}
                        radius={280}
                        strength={4}
                    />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center select-none w-full">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-xs font-extrabold tracking-[0.4em] text-[#3b82f6] uppercase mb-4 font-display"
                    >
                        PRO AUDIO HARDWARE // CATALOG
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-[#0f1f3d]"
                    >
                        ENGINEERED FOR <br />
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            UNCOMPROMISING SOUND
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="text-[#6b7280] mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl font-medium leading-relaxed"
                    >
                        Explore our tour-grade active loudspeakers, high-excursion subwoofers, class-D DSP power amplifiers, and precision accessories.
                    </motion.p>

                    {/* Category Quick Links Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                        className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-10 w-full max-w-3xl pointer-events-auto"
                    >
                        {[
                            { name: "Loudspeakers", href: "/products/loudspeakers" },
                            { name: "Subwoofers", href: "/products/subwoofers" },
                            { name: "Amplifiers", href: "/products/amplifiers" },
                            { name: "Accessories", href: "/products/accessories" }
                        ].map((cat) => (
                            <Link key={cat.name} href={cat.href}>
                                <div className="p-3.5 rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex items-center justify-between group cursor-pointer">
                                    <span className="text-xs sm:text-sm font-bold text-[#0f1f3d] group-hover:text-[#3b82f6] transition-colors">{cat.name}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#3b82f6] group-hover:translate-x-1 transition-all" />
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ================= CATEGORY FILTER TABS ================= */}
            <section className="py-12 px-6 flex justify-center items-center relative z-10">
                <div className="flex flex-wrap justify-center gap-2 bg-[#f8fafc] border border-slate-200/80 rounded-full p-2 shadow-sm">
                    {categories.map((tab) => {
                        const isActive = activeTab === tab;
                        return (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 relative ${
                                    isActive ? "text-white" : "text-[#6b7280] hover:text-[#0f1f3d]"
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeCatalogTab"
                                        className="absolute inset-0 bg-[#0f1f3d] rounded-full z-0"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{tab}</span>
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* ================= PRODUCTS GRID ================= */}
            <section className="px-6 md:px-12 py-12 max-w-7xl mx-auto relative z-10">
                <AnimatePresence mode="popLayout">
                    <motion.div 
                        layout 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                key={product.id}
                                className="bg-white rounded-[28px] border border-gray-100 shadow-xl shadow-slate-200/40 p-6 flex flex-col justify-between group hover:shadow-2xl hover:border-blue-200 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Category Badge */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-blue-50 text-[#3b82f6]">
                                            {product.category}
                                        </span>
                                    </div>

                                    {/* Image Container */}
                                    <Link href={`/products/${product.id}`}>
                                        <div className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center bg-slate-50/60 rounded-2xl p-4 my-2 overflow-hidden cursor-pointer group/img">
                                            <Image
                                                src={product.img}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-2 group-hover/img:scale-108 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                    </Link>

                                    <Link href={`/products/${product.id}`}>
                                        <h3 className="font-display text-xl sm:text-2xl font-black text-[#0f1f3d] mt-4 mb-2 tracking-tight hover:text-[#3b82f6] transition-colors cursor-pointer">
                                            {product.name}
                                        </h3>
                                    </Link>

                                    <p className="text-[#6b7280] text-xs sm:text-sm font-medium leading-relaxed mb-6 line-clamp-3">
                                        {product.desc}
                                    </p>

                                    {/* Spec Chips */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {product.specs.map((spec, i) => (
                                            <span key={i} className="px-2.5 py-1 rounded-lg bg-gray-50 text-slate-600 text-[11px] font-semibold border border-gray-100">
                                                {spec}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                                    <Link 
                                        href={`/products/${product.id}`}
                                        className="flex-1 py-3 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs font-bold tracking-wider uppercase transition duration-300 text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-md hover:shadow-lg"
                                    >
                                        <span>View Details</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                    <a
                                        href={`https://wa.me/919638470305?text=Hi, I'm interested in SPAudio ${encodeURIComponent(product.name)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 transition duration-300 text-center flex items-center justify-center cursor-pointer border border-emerald-200"
                                        title="Inquire on WhatsApp"
                                    >
                                        <MessageCircle className="w-4 h-4 text-emerald-600" />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </section>
        </div>
    );
}