export default function Advertise() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans bg-white min-h-screen">
      
      {/* Header Section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-black uppercase tracking-tighter mb-4 border-b-4 border-black pb-4 inline-block">
          Advertise <span className="text-red-700">With Us</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
          Partner with DAM News to reach a premium, highly engaged global audience. Put your brand in front of the people who matter.
        </p>
      </header>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-12">
        
        {/* Left Side: Pitch & Stats */}
        <div>
          <h2 className="text-3xl font-bold font-serif mb-6 text-black">Why DAM News?</h2>
          <div className="space-y-6 text-gray-700">
            <div className="border-l-4 border-red-700 pl-4">
              <h3 className="font-bold text-xl text-black">Global Reach</h3>
              <p>Our readers come from all over the world, seeking authentic and unbiased news reports.</p>
            </div>
            <div className="border-l-4 border-red-700 pl-4">
              <h3 className="font-bold text-xl text-black">High Engagement</h3>
              <p>Our audience spends more time reading our long-form journalism and in-depth analysis compared to standard news portals.</p>
            </div>
            <div className="border-l-4 border-red-700 pl-4">
              <h3 className="font-bold text-xl text-black">Premium Placements</h3>
              <p>From prominent homepage banners to in-article native ads, we offer highly visible slots tailored for your brand.</p>
            </div>
          </div>

          <div className="mt-10 bg-gray-50 p-6 border border-gray-200">
            <h3 className="font-bold text-lg mb-2 text-black">Direct Contact</h3>
            <p className="text-gray-600">Prefer to email us directly with your proposal?</p>
            <a href="mailto:deepumishra6836@gmail.com" className="text-red-700 font-bold hover:underline text-lg mt-2 inline-block">
              deepumishra6836@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side: Premium Contact Form */}
        <div className="bg-black text-white p-8 rounded-sm shadow-xl">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-2">Request Media Kit & Rates</h2>
          
          <form action="mailto:deepumishra6836@gmail.com" method="post" encType="text/plain" className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Full Name</label>
              <input type="text" name="Name" className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:border-red-700 transition-colors" placeholder="John Doe" required />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Company / Brand Name</label>
              <input type="text" name="Company" className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:border-red-700 transition-colors" placeholder="Acme Corp" required />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Email Address</label>
              <input type="email" name="Email" className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:border-red-700 transition-colors" placeholder="john@example.com" required />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Advertising Budget & Message</label>
              <textarea name="Message" rows={4} className="w-full bg-gray-900 border border-gray-700 text-white p-3 focus:outline-none focus:border-red-700 transition-colors" placeholder="Tell us about your campaign goals..." required></textarea>
            </div>
            
            <button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest py-4 mt-2 transition-colors">
              Send Request
            </button>
          </form>
          
        </div>

      </div>
    </div>
  );
}