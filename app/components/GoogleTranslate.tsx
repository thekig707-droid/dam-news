"use client";
import { useEffect } from "react";

export default function GoogleTranslate() {
  useEffect(() => {
    // Google API load karne ka function
    const addScript = document.createElement("script");
    addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
    document.body.appendChild(addScript);

    // Widget initialize karne ka code
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  return (
    <div className="mb-8">
      {/* BBC jaisa Gray Box */}
      <div className="bg-gray-100 p-4 inline-block border border-gray-200">
        <span className="font-bold font-sans text-sm mr-4 uppercase tracking-widest text-black">
          DAM News in other languages
        </span>
        <div id="google_translate_element" className="mt-2"></div>
      </div>

      {/* Google ke upar aane wale faltu banner ko chhupane ka CSS */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .goog-te-banner-frame { display: none !important; }
          body { top: 0 !important; }
          .goog-te-gadget { color: transparent !important; font-family: inherit !important; }
          .goog-te-gadget .goog-te-combo { color: black !important; padding: 5px; border: 1px solid #ccc; font-size: 14px; font-weight: bold; cursor: pointer; }
          .goog-te-gadget span { display: none !important; }
        `
      }} />
    </div>
  );
}