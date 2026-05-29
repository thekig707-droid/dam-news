import "./globals.css"; // YEH LINE DESIGN KE LIYE SABSE ZAROORI HAI
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Yahan humne Google ke liye naya SEO code daal diya hai 👇
export const metadata = {
  title: "DAM News - India's Latest News & Updates",
  description: "DAM News par padhiye desh aur duniya ki sabse taaza khabrein. Sports, tech aur daily updates ke liye abhi visit kijiye.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen flex flex-col justify-between">
        {/* Website ka Header/Navbar */}
        <Navbar />
        
        {/* Har page ka content yahan load hoga */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Website ka BBC style Footer */}
        <Footer />
      </body>
    </html>
  );
}