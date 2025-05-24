import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Choki Lindberg",
  description:
    "Photography portfolio featuring meticulously crafted small-scale photographic sets from 2006-2021.",
  keywords:
    "photography, portfolio, contemporary art, miniature, interior design, Choki Lindberg",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-container border-b border-gray-100">
        <div className="text-center">
          <h1 className="page-title">Work</h1>
          <p className="text-body text-lg max-w-3xl mx-auto">
            A collection of photography projects spanning 2006-2021, exploring
            themes of memory, reality, and intimate interior spaces through
            meticulously crafted miniature sets.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="relative aspect-photo overflow-hidden bg-gray-100 mb-6">
                {project.thumbnailImage && (
                  <Image
                    src={project.thumbnailImage.localPath}
                    alt={
                      project.thumbnailImage.alt ||
                      `${project.title} ${project.year}`
                    }
                    fill
                    className="project-card-image object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={80}
                    priority={index < 6}
                    loading={index < 6 ? "eager" : "lazy"}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+w6VdmotElSePOOdBt3JqBQ="
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                    <p className="text-sm font-light tracking-wider uppercase">
                      View Project
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="text-center">
                <h2 className="text-lg font-light tracking-wider uppercase mb-2 group-hover:opacity-70 transition-opacity">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 font-light tracking-wide">
                  {project.year}
                </p>
                {project.description && (
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {project.description.substring(0, 100)}
                    {project.description.length > 100 && "..."}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-light tracking-wider uppercase mb-6">
            About the Process
          </h2>
          <p className="text-body text-lg leading-relaxed mb-8">
            Each piece begins as a physical construction—a miniature world built
            by hand. The camera then becomes the tool that transforms these
            intimate scales into seemingly full-sized interiors, creating a
            dialogue between reality and artifice.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-3 border border-black text-black font-light tracking-wider uppercase text-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
