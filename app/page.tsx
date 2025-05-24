import Image from "next/image";
import Link from "next/link";
import { getHomePage } from "@/lib/content";

export default function HomePage() {
  const homePage = getHomePage();

  if (!homePage) {
    return <div>Loading...</div>;
  }

  // Get the hero image (3_houses.jpg from scraped data)
  const heroImage = homePage.images[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-5rem)]">
        {heroImage && (
          <>
            <Image
              src={heroImage.localPath}
              alt={heroImage.alt || "Choki Lindberg Photography"}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+w6VdmotElSePOOdBt3JqBQ="
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-20" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-4xl md:text-6xl font-light tracking-wider uppercase mb-4">
                  Choki Lindberg
                </h1>
                <p className="text-lg md:text-xl font-light tracking-wide mb-8 max-w-2xl mx-auto px-4">
                  Meticulously crafted small-scale photographic sets exploring
                  memory, reality, and intimate spaces
                </p>
                <Link
                  href="/work"
                  className="inline-block px-8 py-3 border border-white text-white font-light tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Work
                </Link>
              </div>
            </div>
          </>
        )}
      </section>

      {/* Introduction Section */}
      <section className="page-container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase mb-8">
            About the Work
          </h2>
          <div className="text-body text-lg leading-relaxed space-y-6">
            <p>
              Choki Lindberg&apos;s photographs appear at first glance to depict
              interiors, often in a state of decay, void of human presence. The
              work is full of detail and fragmented stories.
            </p>
            <p>
              However, once we stop to study the details, an odd dimension
              surfaces. The proportions appear warped. Textures are exaggerated
              and there&apos;s a clumsiness to the objects. And slowly the
              artifice begins to unravel.
            </p>
            <p className="font-medium">
              What we see, are in fact meticulously crafted small-scale sets.
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/about"
              className="px-6 py-2 border border-black text-black font-light tracking-wider uppercase text-sm hover:bg-black hover:text-white transition-all duration-300"
            >
              Read More
            </Link>
            <Link
              href="/work"
              className="px-6 py-2 bg-black text-white font-light tracking-wider uppercase text-sm hover:bg-gray-800 transition-all duration-300"
            >
              Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light tracking-wider uppercase">
            Recent Work
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* We'll add featured project previews here */}
          <div className="text-center">
            <Link href="/work" className="block group">
              <div className="aspect-photo bg-gray-100 mb-4 group-hover:opacity-90 transition-opacity">
                {/* Preview thumbnails will be added */}
              </div>
              <h3 className="text-sm font-light tracking-wider uppercase">
                View All Projects
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
