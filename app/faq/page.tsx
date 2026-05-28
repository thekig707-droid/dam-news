export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 uppercase tracking-tighter border-b-4 border-black pb-4 inline-block">
          Help & <span className="text-red-700">FAQs</span>
        </h1>
        <p className="text-gray-500 mt-4 text-lg">
          Find answers to common questions about DAM News.
        </p>
      </header>

      {/* FAQ Content */}
      <div className="space-y-8 mt-10">
        
        {/* Question 1 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold text-black mb-3 font-serif">1. How can I submit a news tip or story idea?</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We always welcome tips from our readers. If you have a breaking news tip or a story idea, please reach out to our editorial team directly at <a href="mailto:deepumishra6836@gmail.com" className="text-red-700 font-bold hover:underline">deepumishra6836@gmail.com</a>. We review all submissions carefully.
          </p>
        </div>

        {/* Question 2 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold text-black mb-3 font-serif">2. How do I advertise on DAM News?</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We offer various premium advertising placements for brands looking to reach our global audience. Please visit our <strong><a href="/advertise" className="text-red-700 font-bold hover:underline">Advertise With Us</a></strong> page to request our media kit and rates, or email us directly.
          </p>
        </div>

        {/* Question 3 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold text-black mb-3 font-serif">3. Can I republish your articles on my website?</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            All content on DAM News is protected by copyright. You may not republish full articles without explicit written permission. However, you are welcome to quote small portions of our reports provided you include a clear and direct link back to the original article on our website.
          </p>
        </div>

        {/* Question 4 */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-2xl font-bold text-black mb-3 font-serif">4. I found an error in an article, how do I report it?</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            DAM News is committed to authentic and accurate reporting. If you spot a factual error or a typo, please email our support team. We will review and issue a correction if necessary.
          </p>
        </div>

      </div>

      {/* Contact Section */}
      <div className="mt-16 bg-gray-50 p-8 text-center rounded-sm">
        <h3 className="text-xl font-bold text-black mb-2">Still have questions?</h3>
        <p className="text-gray-600 mb-4">Our support team is here to help you.</p>
        <a href="mailto:deepumishra6836@gmail.com" className="inline-block bg-black text-white font-bold uppercase tracking-widest px-8 py-3 hover:bg-red-700 transition-colors">
          Contact Support
        </a>
      </div>

    </div>
  );
}