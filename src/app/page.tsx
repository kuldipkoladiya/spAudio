"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductSlider from "@/components/ProductSlider";
import Marquee from "@/components/Marquee";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
      <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">

        {/* Hero Section */}
        <section className="h-screen w-full flex items-center justify-center text-center overflow-hidden">
          <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/27669-365224683_tiny.mp4"
              autoPlay
              loop
              muted
              playsInline
          ></video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 px-4 sm:px-10 text-white max-w-4xl" data-aos="fade-up">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
              THE LOUDEST THING FOR YOUR TV IS COMING
            </h1>
            <button className="mt-8 bg-white text-black px-6 py-3 rounded hover:bg-gray-200 text-sm font-semibold">
              FIND OUT MORE
            </button>
          </div>
        </section>

        {/* Product Feature Section */}
        <section className="bg-black text-white py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Speaker Side */}
            <div className="flex flex-col justify-end items-center md:items-start text-center md:text-left relative" data-aos="fade-right">
              <img
                  src="/images/caleb-woods-VVuRLhyTmXM-unsplash.jpg"
                  alt="Portable Speaker"
                  className="w-[90%] md:w-full mb-6 rounded-lg object-contain"
                  style={{ marginTop: '80px' }}
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Made tough, plays loud</h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Built for the unpredictable, our portable speakers won’t let dust or rain come between you and the music.
                </p>
                <a
                    href="/products"
                    className="text-sm font-semibold px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                >
                  Explore portable speakers
                </a>
              </div>
            </div>

            {/* Headphones Side */}
            <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left relative" data-aos="fade-left">
              <img
                  src="/images/anthony-jacobson-t0X2QkjcRSE-unsplash.jpg"
                  alt="Headphones"
                  className="w-[90%] md:w-full mb-6 object-contain"
                  style={{ marginBottom: '80px' }}
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">MAKE A STATEMENT</h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Find a look to suit your sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Woburn III Section */}
        <section className="bg-black text-white py-20 px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            MEET WOBURN III IN BROWN
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Undoubtedly, one of the stars of the show, without stealing the limelight.
          </p>
          <a
              href="/products/woburn-iii"
              className="text-sm font-semibold px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            SHOP NOW
          </a>
          <div className="mt-12">
            <img
                src="/images/main.jpeg"
                alt="Woburn III in Brown"
                className="mx-auto w-full max-w-7xl max-h-[80vh] sm:max-h-[90vh] object-contain shadow-lg"
                data-aos="fade-up"
            />
          </div>
        </section>

        {/* Product Slider Section */}
        <div data-aos="fade-up">
          <ProductSlider />
        </div>

        {/* Marquee Section */}
        <div data-aos="fade-up">
          <Marquee />
        </div>

        {/* Repeated Product Feature Section */}
        <section className="bg-black text-white py-16 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Speaker Side */}
            <div className="flex flex-col justify-end items-center md:items-start text-center md:text-left relative" data-aos="fade-right">
              <img
                  src="/images/caleb-woods-VVuRLhyTmXM-unsplash.jpg"
                  alt="Portable Speaker"
                  className="w-[90%] md:w-full mb-6 rounded-lg object-contain"
                  style={{ marginTop: '80px' }}
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Made tough, plays loud</h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Built for the unpredictable, our portable speakers won’t let dust or rain come between you and the music.
                </p>
                <a
                    href="/products"
                    className="text-sm font-semibold px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition"
                >
                  Explore portable speakers
                </a>
              </div>
            </div>

            {/* Headphones Side */}
            <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left relative" data-aos="fade-left">
              <img
                  src="/images/xhon-dang-wDQFdqKCA9I-unsplash.jpg"
                  alt="Headphones"
                  className="w-[90%] md:w-full mb-6 object-contain"
                  style={{ marginBottom: '80px' }}
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">MAKE A STATEMENT</h2>
                <p className="text-gray-300 text-sm sm:text-base">
                  Find a look to suit your sound.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Repeated Woburn III Section */}
        <section className="bg-black text-white py-20 px-4 text-center" data-aos="zoom-in">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4">
            MEET WOBURN III IN BROWN
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
            Undoubtedly, one of the stars of the show, without stealing the limelight.
          </p>
          <a
              href="/products/woburn-iii"
              className="text-sm font-semibold px-6 py-3 bg-white text-black rounded hover:bg-gray-200 transition"
          >
            SHOP NOW
          </a>
          <div className="mt-12">
            <img
                src="/images/main.jpeg"
                alt="Woburn III in Brown"
                className="mx-auto w-full max-w-7xl max-h-[80vh] sm:max-h-[90vh] object-contain shadow-lg"
                data-aos="fade-up"
            />
          </div>
        </section>
      </div>
  );
}
