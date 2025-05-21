export default function Footer() {
  return (
      <footer className="bg-[#121212] text-gray-300 py-16 px-6 mt-auto animate-fadeIn">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-8 sm:space-y-0">

          {/* Brand & Copyright */}
          <div>
            <h2 className="text-3xl font-bold tracking-wide text-white">SPAudio</h2>
            <p className="text-sm text-gray-400 mt-2">
              © {new Date().getFullYear()} SPAudio. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-10 text-lg font-medium">
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#3b82f6] transition-colors">Contact Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#3b82f6] transition-colors">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.592 0 0 .59 0 1.318v21.364C0 23.406.592 24 1.325 24H12v-9.294H9.294v-3.622H12V8.41c0-2.674 1.633-4.135 4.017-4.135 1.14 0 2.118.084 2.403.122v2.784l-1.646.001c-1.29 0-1.54.614-1.54 1.515v1.985h3.08l-.402 3.622h-2.678V24h5.256c.73 0 1.324-.592 1.324-1.318V1.318c0-.728-.595-1.318-1.324-1.318z" /></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#3b82f6] transition-colors">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M24 4.557a9.9 9.9 0 01-2.828.775 4.942 4.942 0 002.165-2.724c-.95.564-2 .974-3.127 1.196a4.916 4.916 0 00-8.373 4.482A13.951 13.951 0 011.671 3.149a4.92 4.92 0 001.523 6.573 4.9 4.9 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.92 4.92 0 004.6 3.417 9.864 9.864 0 01-6.102 2.104c-.396 0-.787-.023-1.17-.068a13.94 13.94 0 007.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.633A9.936 9.936 0 0024 4.557z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#3b82f6] transition-colors">
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 2.75a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 2a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/></svg>
            </a>
          </div>
        </div>
      </footer>
  );
}
