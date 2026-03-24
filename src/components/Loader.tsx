"use client";

export default function Loader() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="text-center">

                {/* Logo / Text */}
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    SP AUDIO
                </h1>

                {/* Loader Bar */}
                <div className="w-40 h-1 bg-gray-200 mt-6 overflow-hidden rounded">
                    <div className="h-full w-full bg-gradient-to-r from-blue-500 to-purple-600 animate-loader" />
                </div>

            </div>
        </div>
    );
}
