"use client"; 
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const categories = [
    "Home", "News", "Sport", "Business", "Technology", "Health", 
    "Culture", "Arts", "Travel", "Earth", "Video", "Live"
  ];

  return (
    <header className="w-full bg-white">
      
      {/* 1. TOP RED BAR (Extra Logo Removed - Only 1 Logo Now) */}
      <div className="bg-[#cc2027] text-white px-4 py-2 flex justify-between items-center text-xs font-bold tracking-widest uppercase">
        <div>Breaking News</div>
        <div>Premium Journalism</div>
      </div>

      {/* 2. MAIN LOGO AREA (Only ONE Big Logo) */}
      <div className="flex flex-col items-center py-8 bg-white">
        <Link href="/" onClick={closeMenu} className="flex items-baseline cursor-pointer" style={{ textDecoration: 'none' }}>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black leading-none m-0">
            DAM
          </h1>
          <span className="text-3xl md:text-5xl font-bold text-[#cc2027] ml-2 tracking-tight">
            NEWS
          </span>
        </Link>
        <p className="text-gray-500 mt-3 text-sm md:text-base font-bold text-center px-4 tracking-[0.2em] uppercase">
          Global Reports • Authentic News
        </p>
      </div>

      {/* 3. DARK BLUE NAVIGATION STRIP (With Watermark & Your Original Menu) */}
      <nav className="relative bg-[#0f172a] text-white border-b border-gray-800 w-full sticky top-0 z-50 overflow-hidden">
        
        {/* Watermarks (Background) */}
        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-10 text-6xl md:text-8xl font-black select-none pointer-events-none tracking-tighter">
          DAM
        </div>
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-10 text-6xl md:text-8xl font-black select-none pointer-events-none tracking-tighter">
          DAM
        </div>

        {/* Your Original Navbar Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            
            {/* Left Side: Your BBC Style Block Logo */}
            <div className="flex-shrink-0 flex items-center gap-1">
              <Link href="/" onClick={closeMenu} className="flex gap-1" title="DAM Home">
                <div className="bg-white text-[#0f172a] w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">D</div>
                <div className="bg-white text-[#0f172a] w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">A</div>
                <div className="bg-white text-[#0f172a] w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">M</div>
              </Link>
            </div>
            
            {/* Right Side: Your Original Menu Button */}
            <div className="flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-red-400 focus:outline-none transition-colors">
                {isOpen ? (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Your Original Dropdown Menu */}
        {isOpen && (
          <div className="bg-white text-black border-t border-gray-200 absolute w-full left-0 shadow-2xl h-screen overflow-y-auto pb-20 z-40">
            <div className="px-4 py-6 sm:px-6 max-w-7xl mx-auto flex flex-col font-sans font-bold text-lg">
              {categories.map((item, index) => (
                <Link 
                  key={index} 
                  href={item === "Home" ? "/" : `/categories`}
                  onClick={closeMenu} 
                  className="block py-4 hover:text-red-700 border-b border-gray-100 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}