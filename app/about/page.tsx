import Link from "next/link";

export const metadata = {
  title: 'About Us | DAM News',
  description: 'Learn more about DAM News and our global reporting.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white text-black min-h-screen">
      
      <div className="border-b-8 border-red-700 pb-6 mb-12 inline-block">
        <h1 className="text-6xl font-black font-serif tracking-tighter uppercase">
          About <span className="text-red-700">DAM.</span>
        </h1>
      </div>

      <div className="prose-xl prose-serif text-gray-800 space-y-6">
        <p className="text-2xl font-bold leading-relaxed text-black">
          Global Reports • Authentic News
        </p>
        <p className="leading-relaxed">
          Welcome to DAM News. We are a premium digital journalism platform dedicated to bringing you the most authentic, well-researched, and impactful stories from around the globe.
        </p>
        <p className="leading-relaxed">
          From deep-dive historical documentaries to breaking updates in science and global events, our mission is to cut through the noise and deliver facts with unparalleled clarity.
        </p>
        <p className="leading-relaxed font-bold mt-8 border-l-4 border-red-700 pl-4">
          DAM News was founded with a vision for transparent journalism by Akshay Mishra, driving modern reporting through cutting-edge digital platforms.
        </p>
      </div>

      <div className="mt-16 pt-8 border-t-2 border-gray-200">
        <h2 className="text-2xl font-bold font-sans uppercase tracking-widest mb-6 text-gray-400">Direct Contact</h2>
        <a href="mailto:deepumishra6836@gmail.com" className="text-xl font-bold text-red-700 hover:text-black transition-colors underline decoration-4 underline-offset-4">
          deepumishra6836@gmail.com
        </a>
      </div>

      <div className="mt-16">
        <Link href="/" className="inline-block bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-red-700 transition-colors">
          &larr; Return to Frontpage
        </Link>
      </div>

    </div>
  );
}