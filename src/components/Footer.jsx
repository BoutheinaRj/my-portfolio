import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* Main text */}
        <p className="text-sm md:text-base">
          2025 &copy; - Made by <span className="font-semibold">Boutheina Rjab</span>
        </p>

        {/* Social links (optional) */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/BoutheinaRj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/boutheina-rjab-b26085225/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/boutheina.rj"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/boutheina.rj/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
          >
            Instagram
          </a>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
