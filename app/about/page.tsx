import { getAboutPage } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Choki Lindberg",
  description:
    "Learn about Choki Lindberg's artistic approach to photography, creating meticulously crafted small-scale sets that explore memory and reality.",
  keywords:
    "Choki Lindberg, artist, photography, biography, artist statement, miniature photography",
};

export default function AboutPage() {
  const aboutPage = getAboutPage();

  if (!aboutPage) {
    return <div>Loading...</div>;
  }

  // Extract the main content text
  const mainContent = aboutPage.content[0]?.content || "";

  // Split content into paragraphs and clean them
  const paragraphs = mainContent
    .replace(/PrevNext/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .split(/\.(?=\s[A-Z])/) // Split on periods followed by capital letters (sentence boundaries)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
    .map((p) => (p.endsWith(".") ? p : p + ".")); // Ensure periods are preserved

  // Find the key quote about working like a painter/sculptor
  const keyQuoteIndex = paragraphs.findIndex(
    (p) =>
      p.toLowerCase().includes("painter") &&
      p.toLowerCase().includes("sculptor")
  );

  const keyQuote = keyQuoteIndex !== -1 ? paragraphs[keyQuoteIndex] : null;
  const otherParagraphs = paragraphs.filter(
    (_, index) => index !== keyQuoteIndex
  );

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-container border-b border-gray-100">
        <div className="text-center">
          <h1 className="page-title">About</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto">
          {/* Artist Statement */}
          <div className="prose prose-lg max-w-none">
            {otherParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-body text-lg leading-relaxed mb-6 text-justify"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Quote - Highlighted */}
          {keyQuote && (
            <blockquote className="my-12 py-8 px-8 bg-gray-50 border-l-4 border-black">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-center italic">
                "{keyQuote.replace(/^"|"$/g, "").replace(/\.$/, "")}"
              </p>
              <footer className="text-center mt-4">
                <cite className="text-sm font-light tracking-wider uppercase text-gray-600">
                  — Choki Lindberg
                </cite>
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      {/* Additional Context */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-8">
            The Process
          </h2>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h3 className="text-lg font-light tracking-wider uppercase mb-4">
                Construction
              </h3>
              <p className="text-body leading-relaxed">
                Each scene begins as a physical construction—materials carefully
                chosen, lighting meticulously arranged, every detail
                deliberately placed to create an intimate world in miniature.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light tracking-wider uppercase mb-4">
                Photography
              </h3>
              <p className="text-body leading-relaxed">
                The camera transforms these small-scale constructions into
                seemingly full-sized interiors, creating a dialogue between what
                is real and what is constructed, between memory and artifice.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-body text-lg leading-relaxed mb-8">
              The work explores themes of memory, impermanence, and the spaces
              we inhabit—both physical and psychological. Each photograph
              invites viewers to question their perceptions and consider the
              constructed nature of memory itself.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="text-center">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-6">
            Explore the Work
          </h2>
          <p className="text-body text-lg mb-8 max-w-2xl mx-auto">
            Discover how these carefully constructed miniature worlds come to
            life through the lens, creating powerful narratives about space,
            memory, and reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/work"
              className="px-8 py-3 bg-black text-white font-light tracking-wider uppercase text-sm hover:bg-gray-800 transition-all duration-300"
            >
              View Portfolio
            </a>
            <a
              href="/news"
              className="px-8 py-3 border border-black text-black font-light tracking-wider uppercase text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              Exhibitions & Press
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
