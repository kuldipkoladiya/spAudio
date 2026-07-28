"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft,
  Share2, 
  Heart, 
  Check, 
  ChevronLeft,
  ChevronRight,
  Zap,
  Sliders,
  ShieldCheck,
  MessageCircle,
  Maximize2,
  X,
  PackageCheck
} from "lucide-react";
import { allProducts, ProductItem } from "@/data/products";
import toast from "react-hot-toast";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function SingleProductPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id, 10);
  
  // Find current product or default to first product
  const productIndex = allProducts.findIndex((p) => p.id === productId);
  const currentProduct: ProductItem = productIndex !== -1 ? allProducts[productIndex] : allProducts[0];
  const currentIndex = productIndex !== -1 ? productIndex : 0;
  const totalProducts = allProducts.length;

  // Selected States
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Gallery Images
  const galleryImages = currentProduct.images && currentProduct.images.length > 0
    ? currentProduct.images
    : [currentProduct.img];

  // Prev / Next Navigation IDs
  const prevProduct = allProducts[(currentIndex - 1 + totalProducts) % totalProducts];
  const nextProduct = allProducts[(currentIndex + 1) % totalProducts];

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast.success("Product link copied!");
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    if (!isFavorite) {
      toast.success(`Saved ${currentProduct.name} to wishlist! ❤️`);
    } else {
      toast("Removed from wishlist", { icon: "ℹ️" });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi SP Audio! I am interested in ordering ${currentProduct.name}. Please provide quotation details.`
  );

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f1f3d] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 font-sans flex flex-col items-center relative">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,31,61,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,31,61,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" />

      {/* Top Header Breadcrumb & Controls */}
      <div className="w-full max-w-[1200px] mx-auto mb-6 flex items-center justify-between z-10">
        <Link 
          href="/products" 
          className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-[#3b82f6] uppercase hover:text-[#0f1f3d] transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Catalog / {currentProduct.category}</span>
        </Link>

        {/* Product Stepper Navigation Controls */}
        <div className="flex items-center gap-3 bg-white border border-slate-200/80 rounded-full px-4 py-1.5 shadow-sm">
          <Link
            href={`/products/${prevProduct.id}`}
            className="text-slate-400 hover:text-[#3b82f6] transition-colors flex items-center gap-1 text-xs font-bold"
            title={`Previous: ${prevProduct.name}`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </Link>
          <span className="text-slate-300">|</span>
          <span className="text-xs font-mono font-bold text-[#0f1f3d]">
            {String(currentIndex + 1).padStart(2, "0")} / {String(totalProducts).padStart(2, "0")}
          </span>
          <span className="text-slate-300">|</span>
          <Link
            href={`/products/${nextProduct.id}`}
            className="text-slate-400 hover:text-[#3b82f6] transition-colors flex items-center gap-1 text-xs font-bold"
            title={`Next: ${nextProduct.name}`}
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main 2-Column Clean Hero Showcase */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start z-10">
        
        {/* LEFT COLUMN: Clean Product Gallery & Lightbox Trigger */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          
          {/* Main Product Image Card */}
          <div 
            onClick={() => setLightboxOpen(true)}
            className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden flex flex-col items-center justify-center min-h-[380px] sm:min-h-[460px] cursor-pointer group"
          >
            {/* Category Tag Overlay */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-blue-50 text-[#3b82f6] border border-blue-200/60">
                {currentProduct.category}
              </span>
            </div>

            {/* Click To Expand Badge Overlay */}
            <div className="absolute top-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#0f1f3d] text-white shadow-md">
                <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
              </span>
            </div>

            {/* Main Image */}
            <div className="relative w-full h-[300px] sm:h-[380px] flex items-center justify-center">
              <Image
                src={galleryImages[activeImageIndex] || currentProduct.img}
                alt={currentProduct.name}
                fill
                priority
                className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Natural Floor Shadow */}
            <div className="w-[70%] h-4 bg-slate-900/15 rounded-full blur-md mt-2" />
          </div>

          {/* Thumbnail Gallery Row */}
          <div className="flex items-center justify-between bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-3">
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className={`relative w-16 h-16 rounded-xl border-2 p-1 bg-slate-50 transition-all duration-200 overflow-hidden cursor-pointer ${
                    activeImageIndex === idx
                      ? "border-[#3b82f6] ring-2 ring-blue-400/40 scale-105 shadow-sm"
                      : "border-slate-200 opacity-70 hover:opacity-100"
                  }`}
                  title="Click to enlarge"
                >
                  <Image
                    src={imgUrl}
                    alt={`${currentProduct.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain p-1"
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => setLightboxOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#3b82f6] hover:underline cursor-pointer px-3 py-1.5 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Expand Gallery</span>
            </button>
          </div>

        </div>

        {/* RIGHT COLUMN: Product Overview & WhatsApp Inquiry */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-200/50 flex flex-col justify-between">
          
          <div>
            {/* Product Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#0f1f3d] tracking-tight leading-tight mb-4">
              {currentProduct.name}
            </h1>

            {/* Description Narrative */}
            <p className="text-[#6b7280] text-sm sm:text-base leading-relaxed mb-8 font-medium">
              {currentProduct.fullDesc || currentProduct.desc}
            </p>

            {/* Key Feature Specs */}
            <div className="grid grid-cols-2 gap-2.5 mb-8">
              {currentProduct.specs.map((spec, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-3.5 py-2.5 rounded-xl text-xs font-bold text-slate-700">
                  <Zap className="w-4 h-4 text-[#3b82f6]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <a
              href={`https://wa.me/919638470305?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-full bg-[#0f1f3d] hover:bg-[#3b82f6] text-white text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-slate-900/10 hover:shadow-blue-500/25"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
              <span>INQUIRE / ORDER ON WHATSAPP</span>
            </a>

            <div className="flex items-center gap-3">
              <button
                onClick={handleShare}
                className="flex-1 py-3 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold tracking-wider uppercase transition-colors text-center flex items-center justify-center gap-2 border border-slate-200/80 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4 text-slate-400" />}
                <span>{copied ? "Link Copied!" : "Share Link"}</span>
              </button>

              <button
                onClick={handleFavorite}
                className={`p-3 rounded-full border transition-all cursor-pointer ${
                  isFavorite 
                    ? "bg-red-50 border-red-200 text-red-500 shadow-sm" 
                    : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700"
                }`}
                title="Add to Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* TECHNICAL SPECIFICATIONS GRID TABLE */}
      {currentProduct.technicalDetails && (
        <div className="w-full max-w-[1200px] mx-auto mt-12 bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-200/30 z-10">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3b82f6]">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-black text-[#0f1f3d]">TECHNICAL SPECIFICATIONS</h2>
              <p className="text-xs text-slate-500 font-medium">Full hardware specifications and acoustic parameters</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentProduct.technicalDetails.map((detail, idx) => (
              <div key={idx} className="bg-slate-50/80 border border-slate-100 rounded-2xl p-5 flex flex-col justify-between hover:border-blue-300 transition-colors">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{detail.label}</span>
                <span className="text-sm font-black text-[#0f1f3d] mt-1.5">{detail.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* GUARANTEES & CERTIFICATIONS */}
      <div className="w-full max-w-[1200px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3b82f6] flex-shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#0f1f3d] text-sm">2-Year Manufacturer Warranty</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Full coverage for transducers, voice coils, crossover components, and power modules against manufacturing defects.</p>
          </div>
        </div>

        <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
            <PackageCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-[#0f1f3d] text-sm">Certified Quality & Rigging</h3>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">Every unit undergoes acoustic frequency sweep testing and thermal stress burn-in prior to dispatch.</p>
          </div>
        </div>
      </div>

      {/* FULL SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-8 select-none"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Modal Header */}
            <div className="w-full max-w-6xl flex justify-between items-center text-white z-10" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold">{currentProduct.name}</span>
                <span className="text-xs text-slate-400">({activeImageIndex + 1} / {galleryImages.length})</span>
              </div>
              
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image View */}
            <div 
              className="relative w-full max-w-4xl h-[65vh] sm:h-[75vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[activeImageIndex] || currentProduct.img}
                alt={currentProduct.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Bottom Gallery Selector */}
            <div 
              className="flex items-center gap-3 bg-white/10 p-2 rounded-2xl backdrop-blur-lg z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {galleryImages.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-14 h-14 rounded-xl border-2 p-1 bg-black/40 overflow-hidden cursor-pointer transition-all ${
                    activeImageIndex === idx ? "border-blue-400 scale-105" : "border-transparent opacity-60"
                  }`}
                >
                  <Image src={imgUrl} alt="Thumbnail" fill className="object-contain p-1" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
