import React, { useEffect, useRef, useState } from 'react';
import { ParticlesDemo } from '../HeroComponents/Particles';

export default function ContactUs() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShowPopup(true);
    }, { threshold: 0.3 });

    if (contactRef.current) observer.observe(contactRef.current);
    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  return (
    <div ref={contactRef} className="relative w-full py-32 overflow-hidden">
      <ParticlesDemo/>
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-20">
        <div className="relative z-10 text-center space-y-6 mb-20">
          {/* Category label */}
          <div className="relative inline-block">
            <span className="inline-block px-6 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
              border border-transparent
              before:absolute before:inset-0 before:-z-10 before:rounded-full
              before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-purple-500/20
              text-neutral-200">
              Get in Touch
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="relative inline-block text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-400 pb-4">
            Let&apos;s Connect
            {/* Animated underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-6" viewBox="0 0 400 20">
              <path 
                d="M 0 12 Q 50 5, 100 12 T 200 12 T 300 12 T 400 12"
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-draw" 
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </h2>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="relative p-8 rounded-3xl 
            bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
            border border-transparent
            before:absolute before:inset-0 before:-z-10 before:rounded-3xl
            before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-purple-500/20">
            <form className="space-y-6">
              <div>
                <label className="block text-neutral-200 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-200" />
              </div>
              <div>
                <label className="block text-neutral-200 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-200" />
              </div>
              <div>
                <label className="block text-neutral-200 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-neutral-800/50 border border-neutral-700 text-neutral-200"></textarea>
              </div>
              <button className="w-full py-3 px-6 rounded-xl text-white font-medium
                bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600
                transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="relative p-8 rounded-3xl 
              bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
              border border-transparent
              before:absolute before:inset-0 before:-z-10 before:rounded-3xl
              before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-purple-500/20">
              <h3 className="text-2xl font-bold text-neutral-200 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-neutral-300">
                  <span className="mr-3">📍</span>
                  123 Business Street, Jakarta, Indonesia
                </p>
                <p className="flex items-center text-neutral-300">
                  <span className="mr-3">📞</span>
                  +62 123 456 7890
                </p>
                <p className="flex items-center text-neutral-300">
                  <span className="mr-3">✉️</span>
                  contact@dualine.com
                </p>
              </div>
            </div>

            {/* Social Links */}
        
            <div className="flex justify-center space-x-6 mt-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/123456789?text=Hello%20DuaLine!"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-transform hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                }}
              >
                <span className="text-white text-lg font-medium flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    className="w-6 h-6 inline-block align-middle"
                  >
                    <path d="M16.002 3c-7.211 0-13 5.789-13 12.999 0 2.299.618 4.528 1.796 6.484l-1.92 7.035 7.198-1.887c1.812.99 3.88 1.515 5.925 1.515 7.211 0 13-5.79 13-12.999s-5.789-12.999-13-12.999zm6.655 18.562c-.281.785-1.62 1.533-2.266 1.607-.586.071-1.334.1-2.156-.133-.502-.155-1.147-.365-1.985-.709-3.47-1.505-5.746-5.067-5.927-5.302-.181-.234-1.41-1.879-1.41-3.614 0-1.735.876-2.598 1.187-2.945.309-.349.675-.436.903-.436h.64c.156 0 .399-.026.618.47.236.526.805 2.043.875 2.192.071.149.118.332.035.532-.08.195-.12.316-.237.472-.118.156-.251.35-.358.469-.118.12-.241.249-.105.486.137.237.607 1.002 1.306 1.624.898.8 1.654 1.051 1.887 1.167.237.118.374.104.51-.035.137-.141.586-.692.74-.928.155-.236.309-.196.526-.118.216.075 1.375.649 1.611.771.237.118.395.177.456.274.061.099.061.574-.219 1.359z" />
                  </svg>
                  <span>WhatsApp</span>
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/dualine"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full transition-transform hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, #F58529 0%, #DD2A7B 60%, #8134AF 100%)",
                }}
              >
                <span className="text-white text-lg font-medium flex items-center space-x-2">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 448 512"
                    className="w-6 h-6 inline-block align-middle"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.6 141 224.1 141zm0 189.6c-41.7 0-75.6-33.9-75.6-75.6 0-41.7 33.9-75.6 75.6-75.6 41.7 0 75.6 33.9 75.6 75.6 0 41.7-33.9 75.6-75.6 75.6zm146.4-194.3c0 14.1-11.4 25.6-25.6 25.6h-48.2c-14.1 0-25.6-11.5-25.6-25.6V83.2c0-14.1 11.4-25.6 25.6-25.6h48.2c14.1 0 25.6 11.5 25.6 25.6v53.1zM398.8 177.4c-1.7-35.5-9.9-67.1-36.2-93.4-26.3-26.3-58-34.5-93.4-36.2-36.8-2.1-147.2-2.1-184 0-35.5 1.7-67.1 9.9-93.4 36.2-26.3 26.3-34.5 58-36.2 93.4-2.1 36.8-2.1 147.2 0 184 1.7 35.5 9.9 67.1 36.2 93.4 26.3 26.3 58 34.5 93.4 36.2 36.8 2.1 147.2 2.1 184 0 35.5-1.7 67.1-9.9 93.4-36.2 26.3-26.3 34.5-58 36.2-93.4 2.1-36.8 2.1-147.2 0-184z" />
                  </svg>
                  <span>Instagram</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>

      {showPopup && (
        <a
          href="https://wa.me/123456789?text=Hello%20DuaLine!"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full 
                     bg-gradient-to-br from-green-400 to-green-600 text-white
                     shadow-xl transition-transform hover:scale-105"
        >
          Chat Us!
        </a>
      )}
    </div>
  );
}