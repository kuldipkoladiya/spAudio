export default function Blog() {
    const posts = [
        {
            title: "How to Optimize Your Home Audio Setup",
            excerpt: "Tips and tricks to get the best sound quality from your speakers and amplifiers.",
            date: "May 20, 2025",
            image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
            url: "#",
        },
        {
            title: "The Evolution of Audio Amplifiers",
            excerpt: "A deep dive into the history and technology behind modern amps.",
            date: "May 10, 2025",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
            url: "#",
        },
        {
            title: "Speaker Placement for Maximum Impact",
            excerpt: "Learn how positioning your speakers affects sound and how to place them right.",
            date: "April 30, 2025",
            image: "https://images.unsplash.com/photo-1526401485004-2931cc2a8e3b?auto=format&fit=crop&w=800&q=80",
            url: "#",
        },
    ];

    return (
        <div className="bg-[#121212] min-h-screen text-white font-sans">
            <section className="max-w-7xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-extrabold mb-6">Our Blog</h1>
                <p className="text-gray-400 max-w-3xl mx-auto mb-12">
                    Stay updated with the latest news and insights from SPAudio. Discover articles, tutorials, and industry trends in the world of audio technology.
                </p>

                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
                    {posts.map(({ title, excerpt, date, image, url }, idx) => (
                        <a
                            key={idx}
                            href={url}
                            className="group block rounded-xl overflow-hidden shadow-lg bg-[#1f1f1f] transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="relative h-48 overflow-hidden rounded-t-xl">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent px-4 py-3">
                                    <p className="text-xs text-gray-300">{date}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">{title}</h2>
                                <p className="text-gray-400 text-sm leading-relaxed">{excerpt}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
