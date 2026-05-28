export default function CookiesPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 uppercase tracking-tighter border-b-4 border-black pb-4">
          Cookies <span className="text-red-700">Policy</span>
        </h1>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
          Last Updated: May 2026
        </p>
      </header>

      {/* Policy Content */}
      <div className="space-y-8 text-md md:text-lg leading-relaxed text-gray-700">
        
        <section>
          <p>
            This Cookie Policy explains how <strong>DAM News</strong> uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">1. What are cookies?</h2>
          <p>
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">2. Why do we use cookies?</h2>
          <p>We use cookies for several reasons:</p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our website.</li>
            <li><strong>Performance & Functionality Cookies:</strong> These are used to enhance the performance and functionality of our website but are non-essential to their use.</li>
            <li><strong>Analytics & Customization Cookies:</strong> These collect information that is used in aggregate form to help us understand how our website is being used or how effective our marketing campaigns are.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">3. How can I control cookies?</h2>
          <p>
            You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">4. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at: <br/>
            <a href="mailto:deepumishra6836@gmail.com" className="text-red-700 font-bold hover:underline mt-2 inline-block">deepumishra6836@gmail.com</a>
          </p>
        </section>

      </div>
    </div>
  );
}