import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Krish Royal Organics — Premium Organic Food, Bengaluru",
  description:
    "Stone-milled flours, cold-pressed oils, A2 ghee, wild honey, and traditional grains. FSSAI certified, India Organic. Free delivery in Bengaluru on orders above ₹999.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-primary-bg text-primary-dark">
        {/* Left Sidebar (Fixed on desktop) */}
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0 md:pl-[70px] transition-all">
          <Header />
          <main className="flex-1 w-full bg-primary-bg">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
