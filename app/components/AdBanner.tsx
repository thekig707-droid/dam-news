"use client";

export default function AdBanner() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 text-center">
      {/* BBC style clean gray-bordered Ad Container */}
      <div className="bg-gray-50 border border-gray-200 py-3 px-4 inline-block w-full max-w-4xl shadow-sm">
        
        {/* Advertisement Label */}
        <p className="text-[10px] font-sans font-bold tracking-widest text-gray-400 uppercase mb-2">
          ADVERTISEMENT
        </p>
        
        {/* Asli Ad Holder Box */}
        <div className="border-2 border-dashed border-gray-300 bg-white h-24 flex flex-col items-center justify-center group hover:border-red-700 transition-colors cursor-pointer">
          <span className="text-sm font-sans font-bold tracking-wider text-gray-500 group-hover:text-red-700 transition-colors">
            Space Available for Banner Ads (728x90)
          </span>
          <a 
            href="mailto:deepumishra6836@gmail.com" 
            className="text-xs font-sans text-red-700 underline mt-1 opacity-80 group-hover:opacity-100 font-medium"
          >
            Contact for Ad Space &rarr;
          </a>
        </div>
        
      </div>
    </div>
  );
}