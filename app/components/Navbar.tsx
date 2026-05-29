"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm">
      
      {/* 1. TOP RED BAR */}
      <div className="bg-[#cc2027] text-white px-4 py-2 flex justify-between items-center">
        <div className="font-bold tracking-wider flex items-baseline">
          <span className="text-xl">DAM</span>
          <span className="text-xs ml-1 opacity-90">NEWS</span>
        </div>
        <div className="text-xs font-medium opacity-90 uppercase tracking-widest">
          Premium Journalism
        </div>
      </div>

      {/* 2. MAIN LOGO AREA */}
      <div className="flex flex-col items-center py-10 bg-white">
        <Link href="/" className="flex items-baseline cursor-pointer" style={{ textDecoration: 'none' }}>
          {/* Bada DAM text */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-black leading-none m-0">
            DAM
          </h1>
          {/* Uske bagal mein chhota NEWS */}
          <span className="text-3xl md:text-5xl font-bold text-[#cc2027] ml-2 tracking-tight">
            NEWS
          </span>
        </Link>
        {/* Aapki purani tagline ko thoda professional touch diya hai */}
        <p className="text-gray-500 mt-4 text-sm md:text-base font-bold text-center px-4 tracking-[0.2em] uppercase">
          Global Reports • Authentic News
        </p>
      </div>

      {/* 3. DARK BLUE NAVIGATION STRIP WITH WATERMARK */}
      <nav className="relative bg-[#0f172a] text-white py-4 overflow-hidden flex justify-center border-t border-gray-800">
        
        {/* Left Watermark */}
        <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 opacity-10 text-6xl md:text-8xl font-black select-none pointer-events-none tracking-tighter">
          DAM
        </div>
        
        {/* Right Watermark */}
        <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 opacity-10 text-6xl md:text-8xl font-black select-none pointer-events-none tracking-tighter">
          DAM
        </div>

        {/* Navigation Links */}
        <ul className="relative z-10 flex flex-wrap justify-center gap-x-6 gap-y-3 px-4 font-semibold text-sm md:text-base tracking-wide m-0 p-0 list-none">
          <li><Link href="/" className="hover:text-[#cc2027] transition-colors">HOME</Link></li>
          <li><Link href="/category/business" className="hover:text-[#cc2027] transition-colors">BUSINESS</Link></li>
          <li><Link href="/category/finance" className="hover:text-[#cc2027] transition-colors">FINANCE</Link></li>
          <li><Link href="/category/real-estate" className="hover:text-[#cc2027] transition-colors">REAL ESTATE</Link></li>
          <li><Link href="/category/startups" className="hover:text-[#cc2027] transition-colors">STARTUPS</Link></li>
          <li><Link href="/category/news" className="hover:text-[#cc2027] transition-colors">NEWS</Link></li>
        </ul>
      </nav>

    </header>
  );
}