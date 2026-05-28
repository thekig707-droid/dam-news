export default function TermsOfUse() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 font-sans text-gray-800 bg-white min-h-screen">
      
      {/* Page Header */}
      <header className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif font-black mb-4 uppercase tracking-tighter border-b-4 border-black pb-4">
          Terms of <span className="text-red-700">Use</span>
        </h1>
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest">
          Last Updated: May 2026
        </p>
      </header>

      {/* Policy Content */}
      <div className="space-y-8 text-md md:text-lg leading-relaxed text-gray-700">
        
        <section>
          <p>
            Welcome to <strong>DAM News</strong>. These terms and conditions outline the rules and regulations for the use of our website. By accessing this website, we assume you accept these terms and conditions. Do not continue to use DAM News if you do not agree to take all of the terms and conditions stated on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">1. Intellectual Property Rights</h2>
          <p>
            Unless otherwise stated, DAM News and/or its licensors own the intellectual property rights for all material on DAM News. All intellectual property rights are reserved. You may access this from DAM News for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
            <li>You must not republish material from DAM News without credits.</li>
            <li>You must not sell, rent or sub-license material from DAM News.</li>
            <li>You must not reproduce, duplicate or copy material from DAM News.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">2. User Comments and Content</h2>
          <p>
            Parts of this website may offer an opportunity for users to post and exchange opinions and information. DAM News does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of DAM News, its agents, or affiliates.
          </p>
          <p className="mt-3">
            DAM News reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive, or causes a breach of these Terms and Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">3. Content Liability</h2>
          <p>
            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene, or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-black mb-3 border-b border-gray-200 pb-2">4. Disclaimer</h2>
          <p>
            The information provided by DAM News is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
          </p>
        </section>

      </div>
    </div>
  );
}