"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faqs = [
    {
        question: "What types of audio products do you offer?",
        answer:
            "We specialize in high-performance amps and speakers built for clarity, power, and durability.",
    },
    {
        question: "Do you offer installation services?",
        answer:
            "Yes! We provide professional installation, tuning, and maintenance services for custom setups.",
    },
    {
        question: "Can I get a custom audio solution?",
        answer:
            "Absolutely. Our team works closely with clients to build tailored solutions for every space and purpose.",
    },
    {
        question: "Where do you ship?",
        answer:
            "We ship nationally and internationally. Delivery time and cost depend on location.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="bg-[#0b0b0b] min-h-screen text-white font-sans px-6 py-20">
            <div className="max-w-4xl mx-auto">
                <h1
                    className="text-4xl sm:text-5xl font-bold text-center mb-8"
                    data-aos="fade-up"
                >
                    Frequently Asked Questions
                </h1>
                <p
                    className="text-gray-400 text-center text-base sm:text-lg mb-12"
                    data-aos="fade-up"
                    data-aos-delay="150"
                >
                    Can’t find what you’re looking for? Reach out to our support team for help.
                </p>

                <div className="space-y-6">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-gray-700 rounded-lg overflow-hidden"
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                        >
                            <button
                                onClick={() => toggle(idx)}
                                className="w-full text-left p-4 bg-[#1a1a1a] hover:bg-[#222] transition-colors duration-200 focus:outline-none flex justify-between items-center"
                                aria-expanded={openIndex === idx}
                                aria-controls={`faq-answer-${idx}`}
                                id={`faq-question-${idx}`}
                            >
                                <h3 className="text-lg font-medium">{faq.question}</h3>
                                <span className="text-blue-400 text-2xl leading-none select-none">
                                    {openIndex === idx ? "−" : "+"}
                                </span>
                            </button>
                            <div
                                id={`faq-answer-${idx}`}
                                role="region"
                                aria-labelledby={`faq-question-${idx}`}
                                className={`text-sm text-gray-300 bg-[#141414] border-t border-gray-700 overflow-hidden transition-all duration-300 ${
                                    openIndex === idx ? "max-h-96 p-4" : "max-h-0 p-0"
                                }`}
                            >
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
