// TypeScript interfaces for Choki Lindberg portfolio content

export interface ContentItem {
  type: string;
  content: string;
}

export interface ImageItem {
  src: string;
  alt: string;
  localPath: string;
}

export interface PageMeta {
  description: string;
  keywords: string;
}

export interface Page {
  url: string;
  title: string;
  meta: PageMeta;
  content: ContentItem[];
  images: ImageItem[];
}

export interface ProjectData {
  id: string;
  title: string;
  year: string;
  slug: string;
  description: string;
  images: ImageItem[];
  thumbnailImage?: ImageItem;
  category?: string;
}

export interface NavigationItem {
  name: string;
  href: string;
  page?: Page;
}

export interface SiteContent {
  pages: Page[];
  projects: ProjectData[];
  navigation: NavigationItem[];
}

// Utility types for specific page types
export interface WorkPage extends Page {
  projectThumbnails: ImageItem[];
}

export interface ProjectPage extends Page {
  projectData: ProjectData;
}

export interface AboutPage extends Page {
  artistStatement: string;
}

export interface NewsPage extends Page {
  exhibitions: ExhibitionItem[];
  pressItems: PressItem[];
}

export interface ExhibitionItem {
  title: string;
  dates: string;
  venue: string;
  type: "solo" | "group";
  description?: string;
  images?: ImageItem[];
}

export interface PressItem {
  title: string;
  publication: string;
  date: string;
  description?: string;
  link?: string;
  images?: ImageItem[];
}

export interface ContactPage extends Page {
  contactInfo: ContactInfo;
}

export interface ContactInfo {
  email?: string;
  website?: string;
  representation?: string;
  cv?: string;
}
