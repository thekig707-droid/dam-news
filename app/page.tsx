import { client } from '@/lib/sanity.client'
import { homeArticlesQuery } from '@/lib/queries'
import { urlFor } from '@/lib/urlFor'
import Link from 'next/link'
import AdBanner from './components/AdBanner'
import React from 'react' // 🟢 Iski zaroorat padegi fragment ke liye

export const revalidate = 60; 

export default async function Home() {
  const articles = await client.fetch(homeArticlesQuery)

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen">
      
      {/* MAIN LOGO HEADER */}
      <header className="border-b-4 border-black pb-6 mb-8 text-center mt-4">
        <h1 className="text-7xl md:text-8xl font-serif font-black tracking-tighter text-black uppercase">
          <span className="text-red-700">D</span>AM.
        </h1>
        <div className="flex items-center justify-center mt-2 space-x-4">
          <div className="h-px bg-gray-300 w-16"></div>
          <p className="text-gray-600 text-sm font-bold uppercase tracking-widest font-sans">
            Global Reports • Authentic News
          </p>
          <div className="h-px bg-gray-300 w-16"></div>
        </div>
      </header>

      {/* LATEST NEWS SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Side: Latest Briefs */}
        <div className="md:col-span-1 border-r border-gray-200 pr-6 hidden md:block">
          <h2 className="text-xl font-bold font-sans border-b-2 border-red-700 pb-2 mb-4 uppercase tracking-wide">
            Latest Briefs
          </h2>
          <div className="space-y-6">
            {articles?.map((article: any) => (
              <div key={article._id + "sidebar"} className="border-b border-gray-100 pb-4">
                <Link href={`/article/${article.slug.current}`}>
                  <h3 className="font-serif font-bold text-lg leading-snug hover:text-red-700 transition-colors">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-xs text-gray-500 mt-2 font-sans font-medium">
                  {new Date(article.datePublished).toLocaleDateString('en-IN', { month: 'long', day: 'numeric' })}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Big Image News Cards */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {articles && articles.length > 0 ? (
            articles.map((article: any, index: number) => (
              <React.Fragment key={article._id}>
                
                {/* News Card */}
                <article className="group cursor-pointer">
                  <Link href={`/article/${article.slug.current}`}>
                    {/* Photo Section */}
                    {article.mainImage ? (
                      <div className="relative w-full h-56 mb-4 overflow-hidden rounded-sm bg-gray-100">
                        <img 
                          src={urlFor(article.mainImage).url()} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-56 mb-4 bg-gray-200 flex items-center justify-center rounded-sm">
                        <span className="text-gray-400 font-serif">No Image</span>
                      </div>
                    )}
                    
                    {/* Text Section */}
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="bg-red-700 text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider">
                        Breaking
                      </span>
                      <span className="text-xs text-gray-500 font-semibold uppercase">
                        {article.authorName}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-serif font-extrabold text-gray-900 leading-tight group-hover:text-red-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mt-3 line-clamp-3 font-serif text-md">
                      {article.description}
                    </p>
                  </Link>
                </article>

                {/* 🔴 AD BANNER LOGIC: Har 2 news ke baad Ad aayega */}
                {(index + 1) % 2 === 0 && index !== articles.length - 1 && (
                  <div className="col-span-1 sm:col-span-2 my-4 flex justify-center border-y-2 border-gray-100 py-6 bg-gray-50 w-full">
                    <AdBanner />
                  </div>
                )}
                
              </React.Fragment>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <p className="text-gray-500 font-serif text-lg">Waiting for the first breaking news...</p>
            </div>
          )}
        </div>

      </div>
    </main>
  )
}