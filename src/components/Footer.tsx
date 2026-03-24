"use client";

import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

type SocialIconProps = {
  Icon: React.ElementType;
};

export default function Footer() {
  return (
      <footer className="relative text-white overflow-hidden">

        {/* 🔥 BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,#1d4ed8,transparent_40%)] opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,#9333EA,transparent_40%)] opacity-40" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">

          <div className="grid md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                SPAudio
              </h2>
              <p className="mt-4 text-gray-400 text-sm">
                Premium sound experience with modern design and powerful performance.
              </p>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">About</li>
                <li className="hover:text-white cursor-pointer">Careers</li>
                <li className="hover:text-white cursor-pointer">Blog</li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer">Help Center</li>
                <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                <li className="hover:text-white cursor-pointer">Terms</li>
              </ul>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

              <div className="flex gap-4">
                <SocialIcon Icon={Facebook} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Instagram} />
                <SocialIcon Icon={Linkedin} />
              </div>
            </div>

          </div>

          <div className="border-t border-white/10 my-10" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
            <p>© {new Date().getFullYear()} SPAudio. All rights reserved.</p>

            <div className="flex gap-6">
              <span className="hover:text-white cursor-pointer">Privacy</span>
              <span className="hover:text-white cursor-pointer">Terms</span>
              <span className="hover:text-white cursor-pointer">Contact</span>
            </div>
          </div>

        </div>
      </footer>
  );
}

/* 🔥 SOCIAL ICON COMPONENT */

function SocialIcon({ Icon }: SocialIconProps) {
  return (
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition duration-300 hover:scale-110 cursor-pointer">
        <Icon size={18} />
      </div>
  );
}