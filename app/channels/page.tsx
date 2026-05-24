export const metadata = {
  title: 'Our Channels | DAM News',
  description: 'Explore our dedicated reporting desks.',
};

export default function ChannelsPage() {
  const channels = [
    { 
      name: "Akshay Mishra Official", 
      role: "Our flagship channel for deep-dive historical and analytical video reports.",
      link: "https://youtube.com/@akshay_mishra5700?si=SCVE68Sf6cfxI8Cy" // Aapka asli YouTube Link
    },
    { 
      name: "The Science Desk", 
      role: "Breaking updates on space exploration and engineering.",
      link: "https://youtube.com/@akshay_mishra5700?si=SCVE68Sf6cfxI8Cy" 
    },
    { 
      name: "Live Coverage", 
      role: "Real-time updates on breaking global events.",
      link: "https://youtube.com/@akshay_mishra5700?si=SCVE68Sf6cfxI8Cy" 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white text-black min-h-screen">
      
      <div className="border-b-8 border-red-700 pb-6 mb-12 inline-block">
        <h1 className="text-6xl font-black font-serif tracking-tighter uppercase">
          Our <span className="text-red-700">Channels</span>
        </h1>
      </div>

      <div className="space-y-8">
        {channels.map((channel, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-gray-200 pb-8">
            <div>
              <h2 className="text-4xl font-black font-serif mb-2">{channel.name}</h2>
              <p className="text-xl font-sans text-gray-600">{channel.role}</p>
            </div>
            <a 
              href={channel.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-4 md:mt-0 inline-block bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-4 hover:bg-red-700 transition-colors"
            >
              Subscribe & Watch &rarr;
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}