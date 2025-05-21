export default function Team() {
    const teamMembers = [
        {
            name: "Alice Johnson",
            role: "Founder & CEO",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Alice leads SPAudio with a vision to revolutionize the audio industry through innovation and quality.",
            social: {
                twitter: "https://twitter.com/alicejohnson",
                linkedin: "https://linkedin.com/in/alicejohnson",
            },
        },
        {
            name: "Mark Stevens",
            role: "Lead Audio Engineer",
            image: "https://randomuser.me/api/portraits/men/34.jpg",
            bio: "Mark ensures every product delivers pristine sound with his decades of audio engineering experience.",
            social: {
                twitter: "https://twitter.com/markstevens",
                linkedin: "https://linkedin.com/in/markstevens",
            },
        },
        {
            name: "Sophia Lee",
            role: "Product Designer",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            bio: "Sophia designs intuitive, stylish audio gear that blends form and function flawlessly.",
            social: {
                twitter: "https://twitter.com/sophialee",
                linkedin: "https://linkedin.com/in/sophialee",
            },
        },
        {
            name: "James Carter",
            role: "Marketing Manager",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            bio: "James connects our products with customers worldwide through creative marketing strategies.",
            social: {
                twitter: "https://twitter.com/jamescarter",
                linkedin: "https://linkedin.com/in/jamescarter",
            },
        },
    ];

    return (
        <div className="bg-[#121212] text-white font-sans">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-center py-28 px-6">
                <h1 className="text-5xl font-extrabold mb-4">Meet Our Team</h1>
                <p className="max-w-3xl mx-auto text-lg text-blue-200">
                    At SPAudio, our people are our power. Here’s the passionate group of experts crafting your next audio experience.
                </p>
                <div className="mt-8 flex justify-center space-x-6">
                    <span className="inline-block w-24 h-1 bg-blue-400 rounded-full animate-pulse" />
                    <span className="inline-block w-12 h-1 bg-blue-300 rounded-full animate-pulse delay-200" />
                    <span className="inline-block w-8 h-1 bg-blue-200 rounded-full animate-pulse delay-400" />
                </div>
            </section>

            {/* Company Culture */}
            <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-4">Our Culture & Philosophy</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        SPAudio thrives on creativity, collaboration, and a relentless pursuit of perfection.
                        We believe in fostering a culture where innovation meets integrity and passion fuels progress.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
                    <div className="bg-blue-900 rounded-lg p-8 shadow-lg hover:shadow-blue-700 transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                        <p className="text-gray-300">
                            We push boundaries to craft audio products that lead the industry in quality and performance.
                        </p>
                    </div>
                    <div className="bg-blue-900 rounded-lg p-8 shadow-lg hover:shadow-blue-700 transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Integrity</h3>
                        <p className="text-gray-300">
                            Honesty and transparency guide every decision we make, building trust with customers and partners.
                        </p>
                    </div>
                    <div className="bg-blue-900 rounded-lg p-8 shadow-lg hover:shadow-blue-700 transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">Passion</h3>
                        <p className="text-gray-300">
                            Our team’s love for sound drives every project, from design to delivery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Members */}
            <section className="bg-[#1e1e1e] py-20 px-6">
                <h2 className="text-4xl font-bold text-center mb-16">The Experts Behind SPAudio</h2>
                <div className="max-w-6xl mx-auto grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {teamMembers.map(({ name, role, image, bio, social }, idx) => (
                        <div
                            key={idx}
                            className="bg-[#2c2c2c] rounded-xl p-6 flex flex-col items-center text-center hover:bg-blue-800 transition-colors cursor-pointer"
                        >
                            <img
                                src={image}
                                alt={name}
                                className="w-36 h-36 rounded-full object-cover mb-6 border-4 border-blue-400"
                            />
                            <h3 className="text-2xl font-semibold">{name}</h3>
                            <p className="text-blue-300 mb-4">{role}</p>
                            <p className="text-gray-300 text-sm mb-6">{bio}</p>
                            <div className="flex space-x-5">
                                <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label={`${name} Twitter`}>
                                    <svg
                                        className="w-6 h-6 fill-blue-400 hover:fill-blue-200 transition-colors"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557a9.828 9.828 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.934 13.934 0 011.671 3.15 4.916 4.916 0 003.195 9.72a4.9 4.9 0 01-2.228-.616c-.054 2.28 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.92 4.92 0 004.59 3.417 9.867 9.867 0 01-6.102 2.104c-.397 0-.79-.023-1.176-.068a13.945 13.945 0 007.548 2.213c9.058 0 14.01-7.514 14.01-14.02 0-.213-.005-.425-.014-.636A10.025 10.025 0 0024 4.557z" />
                                    </svg>
                                </a>
                                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name} LinkedIn`}>
                                    <svg
                                        className="w-6 h-6 fill-blue-400 hover:fill-blue-200 transition-colors"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.3a1.74 1.74 0 110-3.48 1.74 1.74 0 010 3.48zm13.25 11.3h-3v-5.5c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.59h-3v-10h2.88v1.36h.04a3.16 3.16 0 012.84-1.56c3.04 0 3.6 2 3.6 4.6v5.6z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Closing Section */}
            <section className="text-center py-20 px-6 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
                <p className="text-gray-300 mb-6">
                    We’re always looking for passionate individuals to join our team. If you want to help shape the future of audio, get in touch!
                </p>
                <a
                    href="/careers"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-semibold transition"
                >
                    View Careers
                </a>
            </section>
        </div>
    );
}
