import Link from "next/link";

export const metadata = {
  title: 'Categories | DAM News',
  description: 'Browse global reports by categories.',
};

export default function CategoriesPage() {
  // BBC Ke Screenshots ke mutabik saari premium categories
  const categories = [
    { name: "News", desc: "Breaking updates, national reporting, and top stories from around the globe." },
    { name: "Sport", desc: "Cricket match analysis, IPL updates, football leagues, and athletic events." },
    { name: "Business", desc: "Corporate strategies, economic shifts, and global trade updates." },
    { name: "Technology", desc: "AI breakthroughs, software development, coding hackathons, and gadgets." },
    { name: "Health", desc: "Medical science, lifestyle analysis, personal care, and fitness insights." },
    { name: "Culture", desc: "Exploring digital creators, entertainment, art movements, and trends." },
    { name: "Arts", desc: "Literature, cinema, premium documentary features, and creative reviews." },
    { name: "Travel", desc: "Global destinations, traditional foods, and cultural heritage journeys." },
    { name: "Earth", desc: "Climate reporting, space exploration, and environmental science updates." },
    { name: "Video", desc: "Shorts, embeddable coverage, and high-impact visual journalism." },
    { name: "Live", desc: "Real-time feeds, continuous coverage, and instant breaking announcements." }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white text-black min-h-screen font-sans">
      
      {/* Title Header */}
      <div className="border-b-8 border-red-700 pb-6 mb-12 inline-block">
        <h1 className="text-5xl md:text-6xl font-black font-serif tracking-tighter uppercase">
          News <span className="text-red-700">Categories</span>
        </h1>
      </div>

      {/* Grid Layout for Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link 
            href="/" 
            key={index} 
            className="group block border border-gray-300 p-6 hover:border-black transition-all duration-300 bg-white hover:shadow-lg"
          >
            <h2 className="text-2xl font-bold font-serif mb-3 text-black group-hover:text-red-700 transition-colors">
              {cat.name}
            </h2>
            <p className="text-sm leading-relaxed text-gray-600">
              {cat.desc}
            </p>
            <div className="mt-4 text-xs font-bold uppercase tracking-widest text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
              View Feed &rarr;
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}