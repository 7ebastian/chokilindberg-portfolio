import Image from "next/image";
import Link from "next/link";
import { getNewsPage, parseExhibitions } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Press — Choki Lindberg",
  description:
    "Exhibition history, press coverage, and news from photography artist Choki Lindberg, featuring solo and group exhibitions across Europe.",
  keywords:
    "Choki Lindberg, exhibitions, press, gallery, solo exhibition, group exhibition, photography shows",
};

export default function NewsPage() {
  const newsPage = getNewsPage();

  if (!newsPage) {
    return (
      <div className="min-h-screen page-container">
        <div className="text-center">
          <h1 className="page-title">News & Press</h1>
          <p className="text-body">
            News and press content will be available soon.
          </p>
        </div>
      </div>
    );
  }

  // Parse exhibitions from the news content
  const exhibitions = parseExhibitions(newsPage);

  // Extract press/media items from images
  const pressItems = newsPage.images || [];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-container border-b border-gray-100">
        <div className="text-center">
          <h1 className="page-title">News & Press</h1>
          <p className="text-body text-lg max-w-3xl mx-auto">
            Exhibition history, press coverage, and latest news from Choki
            Lindberg&apos;s photography practice spanning international
            galleries and publications.
          </p>
        </div>
      </section>

      {/* Recent Exhibitions Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-8 text-center">
            Recent Exhibitions
          </h2>

          <div className="space-y-8">
            {/* Recent Key Exhibitions - Manually curated from content */}
            <div className="border-l-4 border-black pl-8 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    Two Parts Impossible, One Part May Be
                  </h3>
                  <p className="text-sm text-gray-600 font-light tracking-wide mb-3">
                    28.11.21 - 29.01.22 • Group Exhibition
                  </p>
                  <p className="text-body">
                    <span className="font-medium">Galerie Bart Amsterdam</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    2021
                  </span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    Preternatural Impacts
                  </h3>
                  <p className="text-sm text-gray-600 font-light tracking-wide mb-3">
                    11.06.21 - 07.08.21 • Group Exhibition
                  </p>
                  <p className="text-body">
                    <span className="font-medium">
                      Arden Asbæk Gallery Copenhagen
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    2021
                  </span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    Elsewhere
                  </h3>
                  <p className="text-sm text-gray-600 font-light tracking-wide mb-3">
                    25.05.19 - 29.06.19 • Solo Exhibition
                  </p>
                  <p className="text-body">
                    <span className="font-medium">Galerie Bart Amsterdam</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    2019
                  </span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 pb-8 border-b border-gray-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    BBA Photography Prize 2019
                  </h3>
                  <p className="text-sm text-gray-600 font-light tracking-wide mb-3">
                    Shortlisted Artist • Group Exhibition
                  </p>
                  <p className="text-body">
                    <span className="font-medium">BBA Gallery Berlin</span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    2019
                  </span>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-gray-300 pl-8 pb-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-light tracking-wider uppercase mb-2">
                    Carte Blanche
                  </h3>
                  <p className="text-sm text-gray-600 font-light tracking-wide mb-3">
                    11.03.17 - 01.04.17 • Group Exhibition
                  </p>
                  <p className="text-body">
                    <span className="font-medium">
                      French Embassy in Copenhagen
                    </span>
                    <br />
                    <span className="text-sm text-gray-600">
                      Curated by Natalia Gutman
                    </span>
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-light tracking-wider uppercase text-gray-500">
                    2017
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-8 text-center">
            Press Coverage
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Featured Press Items */}
            <div className="bg-gray-50 p-6">
              <h3 className="text-lg font-light tracking-wider uppercase mb-3">
                Artstalk Magazine
              </h3>
              <p className="text-sm text-gray-600 font-light tracking-wide mb-4">
                23.06.19 • Article by Elaine Zheng
              </p>
              <p className="text-body text-sm leading-relaxed">
                Featured article exploring Choki Lindberg&apos;s unique approach
                to photography and miniature construction.
              </p>
            </div>

            <div className="bg-gray-50 p-6">
              <h3 className="text-lg font-light tracking-wider uppercase mb-3">
                Elle Danmark Magazine
              </h3>
              <p className="text-sm text-gray-600 font-light tracking-wide mb-4">
                01.08.17 - 31.08.17 • Artist Feature
              </p>
              <p className="text-body text-sm leading-relaxed">
                Artist feature in the August 2017 issue of Elle Denmark
                magazine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-6">
            Current Work
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            Explore the portfolio of photography projects that have been
            featured in galleries and exhibitions across Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/work"
              className="px-8 py-3 bg-black text-white font-light tracking-wider uppercase text-sm hover:bg-gray-800 transition-all duration-300"
            >
              View Portfolio
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 border border-black text-black font-light tracking-wider uppercase text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              About the Artist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
