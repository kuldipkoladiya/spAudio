import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#0f1f3d] px-4">
      <h1 className="text-6xl font-black font-display mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-[#0f1f3d] text-white font-semibold rounded-full hover:bg-[#3b82f6] transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
