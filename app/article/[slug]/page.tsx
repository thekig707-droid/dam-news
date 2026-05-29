import { client } from "../../../lib/sanity.client";
import { urlFor } from "../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import AdBanner from "../../components/AdBanner";

export const revalidate = 0; 

const getArticle = async (slug: string) => {
  const query = `*[_type == "article" && slug.current == "${slug}"][0]{
    ...,
    "authorName": author->name
  }`;
  const article = await client.fetch(query);
  return article;
};

// 🔥 MASTER FORMULA: Yeh Shorts aur Normal dono YouTube links ko pakad lega
const getYouTubeId = (url: string) => {
  if (!url) return null;
  const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

// Agar by-chance body ke andar video daali toh uske liye backup
const RichTextComponents = {
  types: {
    youtube: ({ value }: any) => {
      const videoId = getYouTubeId(value?.url);
      if (!videoId) return null;
      return (
        <div className="my-10 flex justify-center w-full">
          <iframe className="w-full aspect-video rounded-sm shadow-lg md:w-[85%]" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allowFullScreen />
        </div>
      );
    }
  }
};

export default async function ArticlePage(props: any) {
  const params = await props.params;
  const slug = params?.slug;

  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold font-serif text-gray-500 mb-4">News Article Not Found</h1>
      </div>
    );
  }

  // 🔴 YAHAN HUM SANITY WALE 'videoUrl' SE ID NIKAAL RAHE HAIN
  const topVideoId = article.videoUrl ? getYouTubeId(article.videoUrl) : null;

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white min-h-screen">
      <article>
        
        {/* Headline */}
        <header className="mb-8 text-center border-b border-gray-200 pb-8">
          <h1 className="text-4xl md:text-6xl font-serif font-black mb-6 leading-tight text-black">
            {article.title}
          </h1>
          <div className="flex items-center justify-center space-x-4 text-gray-500 font-sans text-xs uppercase tracking-widest font-bold">
            <span className="bg-red-700 text-white px-3 py-1">DAM Exclusive</span>
            <span>•</span>
            <span>By {article.authorName || "DAM News Desk"}</span>
          </div>
        </header>

        {/* 🔴 MAGIC BOX: Agar Video URL hai toh Video chalegi, nahi toh Image dikhegi */}
        {topVideoId ? (
          <div className="w-full mb-8 bg-black rounded-sm overflow-hidden shadow-lg flex justify-center">
            <iframe
              className="w-full aspect-video md:w-[90%]"
              src={`https://www.youtube.com/embed/${topVideoId}?autoplay=1&mute=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : article.mainImage ? (
          <div className="w-full h-auto mb-8 bg-gray-100 rounded-sm overflow-hidden shadow-lg">
            <img src={urlFor(article.mainImage).url()} alt={article.title} className="w-full max-h-[550px] object-cover" />
          </div>
        ) : null}

        {/* Ad Banner */}
        <div className="my-10 flex justify-center bg-gray-50 py-4 border-y border-gray-200">
          <AdBanner />
        </div>

        {/* Article Body */}
        <div className="prose prose-lg md:prose-xl max-w-none font-serif text-gray-800 leading-relaxed mb-12">
          {article.body ? (
            <PortableText value={article.body} components={RichTextComponents} />
          ) : (
            <p className="text-center text-gray-500 italic">Content is being updated...</p>
          )}
        </div>
        
        {/* Ad Banner */}
        <div className="mt-16 mb-8 flex justify-center bg-gray-50 py-4 border-t-4 border-black">
          <AdBanner />
        </div>

      </article>
    </main>
  );
}