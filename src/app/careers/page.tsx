"use client";

export default function Careers() {
    const jobs = [
        {
            title: "Audio Engineer",
            location: "Remote / HQ",
            type: "Full-Time",
            description:
                "Design, test, and refine audio hardware and software with our talented team.",
        },
        {
            title: "Product Designer",
            location: "Remote",
            type: "Contract",
            description:
                "Create intuitive and beautiful user experiences for our audio devices and apps.",
        },
        {
            title: "Marketing Specialist",
            location: "HQ",
            type: "Full-Time",
            description:
                "Lead global marketing campaigns to grow SPAudio&apos;s brand presence.",
        },
    ];

    return (
        <div className="bg-[#0e0e0e] min-h-screen text-white font-sans px-8 py-16 max-w-7xl mx-auto">
            {/* Header */}
            <header className="mb-20 text-center max-w-3xl mx-auto">
                <h1 className="text-5xl font-extrabold mb-4 tracking-wide">Join SPAudio</h1>
                <p className="text-gray-400 text-lg leading-relaxed">
                    Passionate about sound? Become part of a team shaping the future of audio technology. Explore our current openings and grow with us.
                </p>
            </header>

            {/* Jobs Grid */}
            <section className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                {jobs.map(({ title, location, type, description }, i) => (
                    <article
                        key={i}
                        className="bg-gradient-to-tr from-[#1f1f1f] to-[#121212] rounded-2xl p-8 shadow-lg hover:shadow-blue-600/50 transition-shadow duration-300 flex flex-col justify-between"
                    >
                        <div>
                            <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                            <p className="text-sm text-blue-400 font-semibold mb-1">{type} — {location}</p>
                            <p className="text-gray-400 leading-relaxed">{description}</p>
                        </div>

                        <button
                            onClick={() => alert(`Apply for the ${title} role!`)}
                            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold text-center tracking-wide shadow-md transition-colors"
                        >
                            Apply Now
                        </button>
                    </article>
                ))}
            </section>

            {/* Contact Section */}
            <section className="mt-24 text-center max-w-xl mx-auto">
                <h3 className="text-xl font-semibold mb-4 text-white">Not finding your dream role?</h3>
                <p className="text-gray-400 mb-6">
                    Send us your resume and a brief intro — we&apos;re always on the lookout for talented audio enthusiasts.
                </p>
                <a
                    href="mailto:careers@spaudio.com"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-10 rounded-full font-semibold shadow-lg transition-colors"
                >
                    Contact Us
                </a>
            </section>
        </div>
    );
}
