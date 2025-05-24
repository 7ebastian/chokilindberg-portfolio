import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/content";
import type { Metadata } from "next";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all project pages
export async function generateStaticParams() {
  const projects = getAllProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project page
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found — Choki Lindberg",
    };
  }

  return {
    title: `${project.title} ${project.year} — Choki Lindberg`,
    description:
      project.description ||
      `Photography project ${project.title} from ${project.year}`,
    keywords: `${project.title}, ${project.year}, photography, art, Choki Lindberg`,
    openGraph: {
      title: `${project.title} ${project.year} — Choki Lindberg`,
      description:
        project.description ||
        `Photography project ${project.title} from ${project.year}`,
      images: project.thumbnailImage
        ? [
            {
              url: project.thumbnailImage.localPath,
              width: 1200,
              height: 800,
              alt: `${project.title} ${project.year}`,
            },
          ]
        : [],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Navigation Breadcrumb */}
      <section className="page-container border-b border-gray-100 py-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link
            href="/work"
            className="text-gray-600 hover:text-black transition-colors font-light tracking-wide uppercase"
          >
            Work
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-black font-light tracking-wide uppercase">
            {project.title}
          </span>
        </nav>
      </section>

      {/* Project Header */}
      <section className="page-container">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light tracking-wider uppercase mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-gray-600 font-light tracking-wide mb-6">
            {project.year}
          </p>

          {project.description && (
            <div className="max-w-3xl mx-auto">
              <p className="text-body text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Image Gallery */}
      <section className="page-container">
        <div className="gallery-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {project.images.map((image, index) => (
            <div key={index} className="gallery-item group">
              <div className="relative aspect-photo overflow-hidden bg-gray-100">
                <Image
                  src={image.localPath}
                  alt={image.alt || `${project.title} - Image ${index + 1}`}
                  fill
                  className="optimized-image group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 50vw, 33vw"
                  quality={85}
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R7+w6VdmotElSePOOdBt3JqBQ="
                />

                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>

              {/* Image caption if available */}
              {image.alt &&
                image.alt !== `${project.title} - Image ${index + 1}` && (
                  <div className="mt-3 text-center">
                    <p className="text-caption text-xs">{image.alt}</p>
                  </div>
                )}
            </div>
          ))}
        </div>
      </section>

      {/* Project Navigation */}
      <section className="page-container border-t border-gray-100 mt-16 pt-16">
        <div className="flex justify-between items-center">
          <ProjectNavigation currentSlug={project.slug} direction="prev" />

          <Link
            href="/work"
            className="px-6 py-2 border border-black text-black font-light tracking-wider uppercase text-sm hover:bg-black hover:text-white transition-all duration-300"
          >
            All Projects
          </Link>

          <ProjectNavigation currentSlug={project.slug} direction="next" />
        </div>
      </section>
    </div>
  );
}

// Component for previous/next project navigation
function ProjectNavigation({
  currentSlug,
  direction,
}: {
  currentSlug: string;
  direction: "prev" | "next";
}) {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  let targetProject;
  if (direction === "prev") {
    targetProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  } else {
    targetProject =
      currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;
  }

  if (!targetProject) {
    return <div className="w-24"></div>; // Spacer for layout balance
  }

  return (
    <Link
      href={`/work/${targetProject.slug}`}
      className="group flex items-center space-x-3 text-sm hover:opacity-70 transition-opacity"
    >
      {direction === "prev" && (
        <>
          <span className="text-gray-400 group-hover:text-black transition-colors">
            ←
          </span>
          <div className="text-right">
            <p className="font-light tracking-wide uppercase text-xs text-gray-600">
              Previous
            </p>
            <p className="font-light tracking-wider uppercase">
              {targetProject.title}
            </p>
          </div>
        </>
      )}

      {direction === "next" && (
        <>
          <div className="text-left">
            <p className="font-light tracking-wide uppercase text-xs text-gray-600">
              Next
            </p>
            <p className="font-light tracking-wider uppercase">
              {targetProject.title}
            </p>
          </div>
          <span className="text-gray-400 group-hover:text-black transition-colors">
            →
          </span>
        </>
      )}
    </Link>
  );
}
