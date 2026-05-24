import "./globals.css"; // YEH LINE DESIGN KE LIYE SABSE ZAROORI HAI
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "DAM News | Global Reports & Authentic News",
  description: "A premium journalism platform by Akshay Mishra",
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