import { client } from "../../../lib/sanity.client";
import { urlFor } from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import AdBanner from "../../components/AdBanner";

// Sanity se article ka data lane ka function - BULLETPROOF FIX
const getArticle = async (slug: string) => {
  // Yahan humne $slug parameter ka chakkar khatam karke sidha variable "${slug}" inject kar diya hai
  const query = `*[_type == "article" && slug.current == "${slug}"][0]{
    ...,
    "authorName": author->name
  }`;
  const article = await client.fetch(query);
  return article;
};

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold font-serif text-gray-500">News Article Not Found</h1>
      </div>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
      <article>
        
        {/* Headline & Meta Data */}
        <header className="mb-8 text-center border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight text-black hover:text-red-700 transition-colors">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">
            <span className="bg-red-700 text-white px-3 py-1">DAM Exclusive</span>
            <span>•</span>
            <span>By {article.authorName || "DAM News Desk"}</span>
          </div>
        </header>

        {/* Cover Image */}
        {article.mainImage && (
          <div className="w-full h-auto mb-8 bg-gray-100 rounded-sm overflow-hidden shadow-lg">
            <img
              src={urlFor(article.mainImage).url()}
              alt={article.title}
              className="w-full max-h-[550px] object-cover"
            />
          </div>
        )}

        {/* 🔴 PEHLA AD BANNER */}
        <div className="my-10 flex justify-center bg-gray-50 py-4 border-y border-gray-200">
          <AdBanner />
        </div>

        {/* Article Body / Content */}
        <div className="prose prose-lg md:prose-xl max-w-none font-serif text-gray-800 leading-relaxed mb-12">
          {article.body ? (
            <PortableText value={article.body} />
          ) : (
            <p className="text-center text-gray-500 italic">Content is being updated...</p>
          )}
        </div>
        
        {/* 🔴 DUSRA AD BANNER */}
        <div className="mt-16 mb-8 flex justify-center bg-gray-50 py-4 border-t-4 border-black">
          <AdBanner />
        </div>

      </article>
    </main>
  );
}