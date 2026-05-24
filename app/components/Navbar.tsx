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
    <nav className="border-b border-gray-300 bg-white w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: BBC Style Block Logo */}
          <div className="flex-shrink-0 flex items-center gap-1">
            <Link href="/" onClick={closeMenu} className="flex gap-1" title="DAM Home">
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">D</div>
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">A</div>
              <div className="bg-black text-white w-8 h-8 flex items-center justify-center font-bold text-xl font-sans">M</div>
            </Link>
          </div>
          
          {/* Right Side: Only Menu Button (User Icon Removed) */}
          <div className="flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-red-700 focus:outline-none transition-colors">
              {isOpen ? (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="bg-white text-black border-t border-gray-200 absolute w-full left-0 shadow-2xl h-screen overflow-y-auto pb-20">
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
  )
}