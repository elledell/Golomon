import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "./ConvexClientProvider";
import TopBar from "./components/layout/TopBar";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer";
import FloatingAssistant from "./components/FloatingAssistant"; // <-- Import it here

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Golomon Limited | Technology Solutions Provider",
  description: "Progress, Powered By Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-gray-900 flex flex-col min-h-screen`}>
        <ConvexClientProvider>
          <TopBar />
          <Navbar />
          
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Add the Floating Assistant here so it overlays globally */}
          <FloatingAssistant />
          
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}