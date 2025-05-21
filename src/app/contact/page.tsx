"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="min-h-screen bg-[#0b0b0b] text-white font-sans">
            {/* Header */}
            <section className="text-center py-20 px-6 max-w-3xl mx-auto" data-aos="zoom-in">
                <h1 className="text-5xl font-extrabold mb-4">Let’s Connect</h1>
                <p className="text-gray-400 text-lg">
                    Have a question about our products or need expert advice? We’re just a message away.
                </p>
            </section>

            {/* Contact Info + Form */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 sm:px-16 pb-24 max-w-6xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-6" data-aos="fade-right">
                    <div className="flex items-start gap-4">
                        <Mail className="text-blue-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Email</h3>
                            <p className="text-gray-400 text-sm">support@spaudio.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <Phone className="text-blue-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-400 text-sm">+1 (800) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="text-blue-500 w-6 h-6 mt-1" />
                        <div>
                            <h3 className="text-xl font-semibold">Location</h3>
                            <p className="text-gray-400 text-sm">SP Audio HQ, Los Angeles, CA</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form
                    data-aos="fade-left"
                    className="bg-[#1c1c1c] p-8 rounded-xl shadow-lg border border-gray-800"
                >
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Your Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-[#111111] border border-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full bg-[#111111] border border-gray-700 text-white rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Message</label>
                        <textarea
                            placeholder="How can we help?"
                            className="w-full bg-[#111111] border border-gray-700 text-white rounded px-4 py-2 h-32 resize-none focus:outline-none focus:border-blue-500"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-black px-6 py-2 rounded-full font-semibold transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </div>
    );
}
