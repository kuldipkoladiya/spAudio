import Image from 'next/image';
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
                    {teamMembers.map(({ name, role, image, bio, social }) => (
                        <div
                            key={name}
                            tabIndex={0}
                            className="bg-[#2c2c2c] rounded-xl p-6 flex flex-col items-center text-center hover:bg-blue-800 transition-colors cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500"
                        >
                            <Image
                                src={image}
                                alt={name}
                                width={144}
                                height={144}
                                className="rounded-full object-cover mb-6 border-4 border-blue-400"
                            />
                            <h3 className="text-2xl font-semibold">{name}</h3>
                            <p className="text-blue-300 mb-4">{role}</p>
                            <p className="text-gray-300 text-sm mb-6">{bio}</p>
                            {/* Social links... */}
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
