// 🔴 YAHAN DEKHIYE: Aapki photo ke exact hisaab se raste set kar diye hain!
import { client } from '../lib/sanity.client'
import { homeArticlesQuery } from '../lib/article'
import { urlFor } from '../lib/urlFor'
import Link from 'next/link'
import AdBanner from './components/AdBanner'
import SplashScreen from './components/SplashScreen'
import React from 'react' 

export const revalidate = 60; 

export default async function Home() {
  const articles = await client.fetch(homeArticlesQuery)

  return (
    <>
      {/* Naya Animation yahan hai */}
      <SplashScreen />

      {/* Website ka main code */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white min-h-screen relative z-10">
        
        {/* MAIN LOGO HEADER */}
        <header className="border-b-4 border-black pb-6 mb-8 text-center mt-4">
          <div className="flex justify-center items-baseline">
            <h1 className="text-7xl md:text-[8rem] font-black tracking-tighter text-black uppercase leading-none m-0">
              DAM
            </h1>
            <span className="text-3xl md:text-5xl font-bold text-[#cc2027] ml-2 tracking-tight uppercase">
              NEWS
            </span>
          </div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
            <p className="text-gray-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em] font-sans">
              Global Reports • Authentic News
            </p>
            <div className="h-px bg-gray-300 w-16 md:w-32"></div>
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
                  
                  <article className="group cursor-pointer">
                    <Link href={`/article/${article.slug.current}`}>
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
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-[#cc2027] text-[10px] md:text-xs font-black uppercase tracking-widest border-l-[3px] border-[#cc2027] pl-2">
                          {article.categories?.[0]?.title || "Top Story"}
                        </span>
                        <span className="text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">
                          • {article.authorName || "DAM News Desk"}
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
    </>
  )
}