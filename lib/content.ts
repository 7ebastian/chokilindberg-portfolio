import {
  Page,
  ProjectData,
  NavigationItem,
  SiteContent,
  ExhibitionItem,
} from "./types";
import siteContentData from "../content/site-content.json";

// Helper function to clean scraped text content
export function cleanTextContent(content: string): string {
  return content
    .replace(/PrevNext/g, "") // Remove Squarespace navigation artifacts
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
}

// Helper function to extract project title and year from text
export function parseProjectTitle(text: string): {
  title: string;
  year: string;
} {
  const yearMatch = text.match(/(\d{4})/);
  const year = yearMatch ? yearMatch[1] : "";

  const title = text
    .replace(/\d{4}/g, "") // Remove year
    .replace(/\([^)]*\)/g, "") // Remove parenthetical content
    .trim();

  return { title, year };
}

// Helper function to create URL slug from title
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Parse individual projects from scraped data
export function parseProjects(pages: Page[]): ProjectData[] {
  const projects: ProjectData[] = [];

  // Get the work overview page to extract project list
  const workPage = pages.find((page) => page.url.includes("/work"));
  if (!workPage) return projects;

  // Parse project titles from work page content
  const projectTitles = workPage.content[0]?.content
    .split(/(?=[A-Z][A-Z])/g) // Split on uppercase words (project names)
    .filter((text) => text.trim() && text.match(/\d{4}/)) // Filter for entries with years
    .map((text) => text.trim());

  projectTitles.forEach((titleText, index) => {
    const { title, year } = parseProjectTitle(titleText);
    const slug = createSlug(title);

    // Find corresponding project page
    const projectPage = pages.find(
      (page) =>
        page.url.toLowerCase().includes(slug.substring(0, 10)) ||
        page.title.toLowerCase().includes(title.toLowerCase().substring(0, 10))
    );

    // Get thumbnail image from work page
    const thumbnailImage = workPage.images[index];

    // Get project images from individual project page
    const projectImages =
      projectPage?.images || [thumbnailImage].filter(Boolean);

    // Extract description from project page
    const description = projectPage?.content[0]?.content
      ? cleanTextContent(projectPage.content[0].content)
      : "";

    if (title && year) {
      projects.push({
        id: `project-${index + 1}`,
        title,
        year,
        slug,
        description,
        images: projectImages,
        thumbnailImage,
        category: "Photography",
      });
    }
  });

  return projects.sort((a, b) => parseInt(b.year) - parseInt(a.year)); // Sort by year, newest first
}

// Parse navigation from main pages
export function parseNavigation(pages: Page[]): NavigationItem[] {
  const navigation: NavigationItem[] = [
    {
      name: "WORK",
      href: "/work",
      page: pages.find((p) => p.url.includes("/work")),
    },
    {
      name: "ABOUT",
      href: "/about",
      page: pages.find((p) => p.url.includes("/about")),
    },
    {
      name: "NEWS / PRESS",
      href: "/news",
      page: pages.find(
        (p) => p.url.includes("/new-page") || p.title.includes("NEWS")
      ),
    },
    {
      name: "CONTACT / CV",
      href: "/contact",
      page: pages.find(
        (p) => p.url.includes("/contact") || p.title.includes("CONTACT")
      ),
    },
  ];

  return navigation.filter((item) => item.page); // Only include items with valid pages
}

// Parse exhibitions from news page
export function parseExhibitions(newsPage: Page): ExhibitionItem[] {
  if (!newsPage.content[0]?.content) return [];

  const content = newsPage.content[0].content;
  const exhibitions: ExhibitionItem[] = [];

  // Split content by exhibition entries (looking for date patterns)
  const entries = content.split(/(?=\d{2}\.\d{2}\.\d{2})/g);

  entries.forEach((entry, index) => {
    const lines = entry
      .trim()
      .split("\n")
      .filter((line) => line.trim());
    if (lines.length < 2) return;

    const firstLine = lines[0].trim();
    const secondLine = lines[1]?.trim() || "";

    // Extract dates (format: DD.MM.YY - DD.MM.YY)
    const dateMatch = firstLine.match(
      /(\d{2}\.\d{2}\.\d{2})\s*-\s*(\d{2}\.\d{2}\.\d{2})/
    );

    if (dateMatch) {
      const title = firstLine.replace(dateMatch[0], "").trim();
      const dates = `${dateMatch[1]} - ${dateMatch[2]}`;

      exhibitions.push({
        title,
        dates,
        venue: secondLine,
        type: secondLine.toLowerCase().includes("solo") ? "solo" : "group",
        description: lines.slice(2).join(" ").trim(),
        images: newsPage.images.slice(index, index + 1), // Assign images sequentially
      });
    }
  });

  return exhibitions;
}

// Main function to parse all site content
export function parseSiteContent(): SiteContent {
  const pages = siteContentData as Page[];

  const projects = parseProjects(pages);
  const navigation = parseNavigation(pages);

  return {
    pages,
    projects,
    navigation,
  };
}

// Utility functions for specific page types
export function getHomePage(): Page | null {
  const data = parseSiteContent();
  return (
    data.pages.find((page) => page.url === "http://chokilindberg.com") || null
  );
}

export function getWorkPage(): Page | null {
  const data = parseSiteContent();
  return data.pages.find((page) => page.url.includes("/work")) || null;
}

export function getAboutPage(): Page | null {
  const data = parseSiteContent();
  return data.pages.find((page) => page.url.includes("/about")) || null;
}

export function getNewsPage(): Page | null {
  const data = parseSiteContent();
  return (
    data.pages.find(
      (page) => page.url.includes("/new-page") || page.title.includes("NEWS")
    ) || null
  );
}

export function getContactPage(): Page | null {
  const data = parseSiteContent();
  return (
    data.pages.find(
      (page) => page.url.includes("/contact") || page.title.includes("CONTACT")
    ) || null
  );
}

export function getProjectBySlug(slug: string): ProjectData | null {
  const data = parseSiteContent();
  return data.projects.find((project) => project.slug === slug) || null;
}

export function getAllProjects(): ProjectData[] {
  const data = parseSiteContent();
  return data.projects;
}

// SEO helper functions
export function generatePageMetadata(page: Page) {
  return {
    title: page.title,
    description:
      page.meta.description || "Photography portfolio of Choki Lindberg",
    keywords:
      page.meta.keywords || "photography, art, portfolio, Choki Lindberg",
  };
}
