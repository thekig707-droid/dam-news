import { client } from "../../../lib/sanity.client";
import { urlFor } from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60;

// URL se video ID nikalne ka formula
function getYouTubeId(url: string) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const query = `*[_type == "article" && slug.current == $slug][0]{
    ...,
    author->
  }`;
  const article = await client.fetch(query, { slug: slug });

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <h1 className="text-3xl font-bold font-sans uppercase tracking-widest">Article Not Found!</h1>
      </div>
    );
  }

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;
        return (
          <div className="relative w-full h-[500px] my-10 shadow-lg border-2 border-black">
            <Image src={urlFor(value).url()} alt="News Image" fill className="object-cover" />
          </div>
        );
      },
      youtube: ({ value }: any) => {
        const videoId = getYouTubeId(value.url);
        if (!videoId) return null;
        
        return (
          <div className="my-10 aspect-video w-full shadow-2xl rounded-md overflow-hidden border-4 border-black bg-black">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );
      }
    },
    block: {
      h1: ({children}: any) => <h1 className="text-4xl font-black mt-12 mb-6 font-serif leading-tight">{children}</h1>,
      h2: ({children}: any) => <h2 className="text-3xl font-bold mt-10 mb-5 font-serif">{children}</h2>,
      normal: ({children}: any) => <p className="text-xl leading-relaxed mb-6 font-serif text-gray-800">{children}</p>,
      blockquote: ({children}: any) => <blockquote className="border-l-8 border-red-700 bg-gray-50 p-6 italic my-8 text-2xl font-serif text-gray-700 shadow-sm">{children}</blockquote>,
    }
  };

  const mainVideoId = getYouTubeId(article.videoUrl);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white text-black min-h-screen">
      
      {/* Back Button */}
      <Link href="/" className="text-red-700 font-bold uppercase tracking-widest text-xs hover:text-black transition-colors mb-10 inline-block border-2 border-red-700 hover:border-black px-4 py-2">
        &larr; Back to Briefs
      </Link>

      {/* Header */}
      <header className="mb-10 text-center md:text-left border-b-4 border-black pb-8">
        <h1 className="text-5xl md:text-7xl font-black font-serif tracking-tight mb-6 leading-[1.1]">
          {article.title}
        </h1>
        
        {article.description && (
          <p className="text-2xl text-gray-600 font-serif italic mb-6">
            {article.description}
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center md:justify-start text-gray-500 font-sans text-sm font-bold uppercase tracking-widest gap-4">
          <span className="bg-red-700 text-white px-3 py-1">Featured</span>
          {article.author?.name && (
            <span>By {article.author.name}</span>
          )}
          {article.datePublished && (
            <time>
              {new Date(article.datePublished).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          )}
        </div>
      </header>

      {/* Agar "Video URL" dala hai, toh seedha video player dikhao */}
      {mainVideoId ? (
        <div className="relative w-full aspect-video mb-12 shadow-2xl overflow-hidden border-4 border-black bg-black">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            title="Main Article Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : article.mainImage ? (
        /* Agar video nahi hai, toh Main Image dikhao */
        <div className="relative w-full aspect-video mb-12 shadow-2xl overflow-hidden border-2 border-black">
          <Image src={urlFor(article.mainImage).url()} alt={article.title} fill className="object-cover" priority />
        </div>
      ) : null}

      {/* Actual News Content (The Body) */}
      <div className="prose-xl max-w-none">
        {article.body ? (
          <PortableText value={article.body} components={ptComponents} />
        ) : (
          <p className="font-serif italic text-gray-500">Full report is currently being typed...</p>
        )}
      </div>

    </article>
  );
}