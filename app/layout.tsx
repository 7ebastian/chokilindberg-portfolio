import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chokilindberg.com"),
  title: "Choki Lindberg — Photography Portfolio",
  description:
    "Meticulously crafted small-scale photographic sets that explore themes of memory, reality vs. artifice, and intimate interior spaces.",
  keywords:
    "photography, art, portfolio, interior, miniature, contemporary art, Choki Lindberg",
  authors: [{ name: "Choki Lindberg" }],
  openGraph: {
    title: "Choki Lindberg — Photography Portfolio",
    description:
      "Meticulously crafted small-scale photographic sets that explore themes of memory, reality vs. artifice, and intimate interior spaces.",
    url: "https://chokilindberg.com",
    siteName: "Choki Lindberg",
    type: "website",
    images: [
      {
        url: "/images/3_houses.jpg",
        width: 1200,
        height: 800,
        alt: "Choki Lindberg Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Choki Lindberg — Photography Portfolio",
    description:
      "Meticulously crafted small-scale photographic sets that explore themes of memory, reality vs. artifice, and intimate interior spaces.",
    images: ["/images/3_houses.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-black min-h-screen`}
      >
        <Navigation />

        {/* Main content with top margin to account for fixed header */}
        <main className="pt-20">{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-100 mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <p className="text-sm font-light tracking-wider uppercase text-gray-600">
                Choki Lindberg
              </p>
              <p className="text-xs text-gray-400 mt-2">
                © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
