import React from 'react';
import { ParticlesDemo } from '../HeroComponents/Particles';

export default function HeaderTestimonial() {
  return (
    <div className="relative w-full py-32 overflow-hidden"> {/* Increased padding */}
      <ParticlesDemo/>
      {/* Background glow effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[500px] bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 z-20"> {/* Increased z-index */}
        <div className="relative z-10 text-center space-y-6">
          {/* Category label */}
          <div className="relative inline-block">
            <span className="inline-block px-6 py-2 rounded-full text-sm font-medium 
              bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
              border border-transparent
              before:absolute before:inset-0 before:-z-10 before:rounded-full
              before:bg-gradient-to-r before:from-purple-500/20 before:via-pink-500/20 before:to-purple-500/20
              text-neutral-200">
              Client Stories
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="relative inline-block text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-purple-400 to-pink-400 pb-4">
            What Our Clients Say
            {/* Animated underline */}
            <svg className="absolute -bottom-2 left-0 w-full h-6" viewBox="0 0 400 20">
              <path 
                d="M 0 12 Q 50 5, 100 12 T 200 12 T 300 12 T 400 12"
                fill="none" 
                stroke="url(#gradient)" 
                strokeWidth="4"
                strokeLinecap="round"
                className="animate-draw" 
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333EA" />
                  <stop offset="50%" stopColor="#EC4899" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
            </svg>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto
            bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm
            border border-transparent rounded-xl p-4
            before:absolute before:inset-0 before:-z-10 before:rounded-xl
            before:bg-gradient-to-r before:from-purple-500/10 before:via-pink-500/10 before:to-purple-500/10">
            Discover why leading businesses trust us with their logistics needs
          </p>
        </div>
      </div>
      {/* Add gradient fade to bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
}