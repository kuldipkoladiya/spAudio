export default function Marquee() {
    return (
        <div className="bg-black overflow-hidden whitespace-nowrap">
            <div className="animate-marquee flex text-white text-4xl sm:text-6xl font-extrabold">
                {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="mx-4">
            ⓧ IN THE SPOTLIGHT
          </span>
                ))}
            </div>
        </div>
    );
}
