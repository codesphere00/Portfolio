'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
  return (
    <footer className="w-full bg-[rgb(20,20,20)]/90 backdrop-blur-md text-gray-400 py-12 border-t border-gray-800/60 mt-16 font-mono z-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left">
        
        {/* Left Column: Brand & Tagline */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold text-white tracking-widest uppercase">
            <span className="text-[#F7AB0A]">Nilesh</span> Kumawat
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed max-w-sm">
            Expert Full Stack & Frontend Developer specializing in React, Next.js, and TypeScript. Engineering high-performance, pixel-perfect, and SEO-optimized digital products.
          </p>
        </div>

        {/* Middle Column: Navigation Map */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#Hero" className="hover:text-[#F7AB0A] transition-all duration-200 hover:pl-1">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#F7AB0A] transition-all duration-200 hover:pl-1">About</a>
            </li>
            <li>
              <a href="#Skills" className="hover:text-[#F7AB0A] transition-all duration-200 hover:pl-1">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#F7AB0A] transition-all duration-200 hover:pl-1">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#F7AB0A] transition-all duration-200 hover:pl-1">Contact</a>
            </li>
          </ul>
        </div>

        {/* Right Column: Connection & Scroll to Top */}
        <div className="flex flex-col items-center md:items-end justify-between space-y-4 md:space-y-0">
          <div className="space-y-3 text-center md:text-right w-full">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-3">
              <SocialIcon 
                url="https://github.com/nilesh-kumawat" 
                fgColor="gray" 
                bgColor="transparent" 
                className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile" 
              />
              <SocialIcon 
                url="https://linkedin.com/in/nilesh-kumawat" 
                fgColor="gray" 
                bgColor="transparent" 
                className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile" 
              />
              <SocialIcon 
                url="mailto:nileshkmt2005@gmail.com" 
                fgColor="gray" 
                bgColor="transparent" 
                network="email"
                className="h-8 w-8 hover:scale-110 transition-transform duration-200" 
                aria-label="Send Nilesh Kumawat an Email"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:nileshkmt2005@gmail.com";
                }}
              />
            </div>
          </div>

          <a 
            href="#Hero" 
            className="text-xs uppercase tracking-widest text-[#F7AB0A] hover:text-white flex items-center gap-1 font-mono transition-all duration-300 hover:opacity-85"
            aria-label="Scroll back to top of page"
          >
            Back to Top <span className="animate-bounce">↑</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800/30 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 space-y-3 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Nilesh Kumawat. All rights reserved.</p>
        <p className="text-gray-700">Designed & Developed by Nilesh</p>
      </div>
    </footer>
  );
}

export default Footer;
