# Content Usage Guide

## 📋 Overview

This guide explains how to use the scraped content data (`site-content.json`) to build the Choki Lindberg website. The JSON file contains 16 pages with complete content, metadata, and image references.

## 🗂️ Data Structure

### Page Object Schema

```javascript
{
  "url": "http://chokilindberg.com/page-name",
  "title": "Page Title — Choki Lindberg",
  "meta": {
    "description": "SEO description",
    "keywords": "comma,separated,keywords"
  },
  "content": [
    {
      "type": "text",
      "content": "Raw text content..."
    }
  ],
  "images": [
    {
      "src": "https://original-cdn-url.jpg",
      "alt": "Alt text",
      "localPath": "/images/filename.jpg"
    }
  ]
}
```

## 🏗️ Implementation Strategies

### 1. Navigation Structure

Create navigation from the scraped pages:

```javascript
// Extract navigation from scraped data
const navigationPages = [
  { name: "WORK", url: "/work", data: workPage },
  { name: "ABOUT", url: "/about", data: aboutPage },
  { name: "NEWS / PRESS", url: "/news", data: newsPage },
  { name: "CONTACT / CV", url: "/contact", data: contactPage },
];

// Portfolio projects (from individual project pages)
const portfolioProjects = [
  { name: "10 Houses", year: "2021", url: "/10-houses", data: tenHousesPage },
  { name: "Window", year: "2020", url: "/window", data: windowPage },
  { name: "Remnants", year: "2019", url: "/remnants", data: remnantsPage },
  // ... etc
];
```

### 2. Image Implementation

Handle images with Next.js or React:

```javascript
// Next.js example
import Image from "next/image";

// Map scraped images to components
const ProjectGallery = ({ images }) => (
  <div className="gallery">
    {images.map((img, index) => (
      <Image
        key={index}
        src={img.localPath}
        alt={img.alt}
        width={800}
        height={600}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,..."
      />
    ))}
  </div>
);
```

### 3. Content Parsing

Extract and format text content:

```javascript
// Parse content arrays
const parseContent = (contentArray) => {
  return contentArray
    .map((item) => {
      if (item.type === "text") {
        // Clean up the scraped text
        return item.content
          .replace(/\n+/g, "\n") // Normalize line breaks
          .split("\n") // Split into paragraphs
          .filter((p) => p.trim()) // Remove empty lines
          .map((p) => p.trim()); // Clean whitespace
      }
    })
    .flat();
};

// Usage
const AboutPage = ({ data }) => {
  const paragraphs = parseContent(data.content);

  return (
    <div>
      {paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};
```

## 📄 Page-by-Page Guide

### Homepage

- **Purpose**: Main landing page with featured work
- **Images**: Single hero image (`3_houses.jpg`)
- **Content**: Minimal text, navigation focus
- **Implementation**: Large image with overlay navigation

### Work Portfolio Page

- **Purpose**: Overview of all photography series
- **Images**: Thumbnail for each project (22 images)
- **Content**: Project titles and years
- **Implementation**: Grid layout with hover effects

### Individual Project Pages

- **Purpose**: Detailed view of each photography series
- **Pattern**: Title + description + image gallery
- **Images**: Multiple high-res images per project
- **Implementation**: Masonry or carousel gallery

### About Page

- **Purpose**: Artist statement and biography
- **Content**: Rich text about Choki's artistic approach
- **Key Quote**: "I work more like a painter or sculptor than a photographer"
- **Implementation**: Typography-focused layout

### News/Press Page

- **Purpose**: Exhibition history and media coverage
- **Content**: Chronological list of exhibitions/press
- **Images**: Press clippings and exhibition photos
- **Implementation**: Timeline or list format

### Contact/CV Page

- **Purpose**: Professional contact and resume
- **Content**: Contact details and full CV
- **Implementation**: Clean, professional layout

## 🖼️ Image Categories

### Project Thumbnails

- Used on work overview page
- Typically smaller file sizes
- Show representative work from each series

### Project Galleries

- High-resolution detail shots
- Multiple images per project
- Often include close-up details

### Press Images

- Magazine covers and articles
- Exhibition photos
- Documentation images

## 💡 Content Processing Tips

### 1. Text Cleanup

```javascript
// Remove Squarespace artifacts
const cleanText = (text) => {
  return text
    .replace(/PrevNext/g, "") // Remove navigation text
    .replace(/\s+/g, " ") // Normalize whitespace
    .trim();
};
```

### 2. Image Optimization

```javascript
// Create responsive image sets
const createImageSrcSet = (imagePath) => {
  const sizes = [400, 800, 1200, 1600];
  return sizes.map((size) => `${imagePath}?w=${size} ${size}w`).join(", ");
};
```

### 3. SEO Implementation

```javascript
// Use scraped metadata
const PageHead = ({ pageData }) => (
  <Head>
    <title>{pageData.title}</title>
    <meta name="description" content={pageData.meta.description} />
    <meta name="keywords" content={pageData.meta.keywords} />
  </Head>
);
```

## 🎨 Design Implementation

### Color Scheme (from analysis)

- **Background**: White/off-white
- **Text**: Black/dark gray
- **Accent**: Minimal, let photos speak

### Typography

- **Headings**: Clean sans-serif
- **Body**: Readable, high contrast
- **Navigation**: Uppercase, spaced

### Layout Principles

- **Grid-based**: Systematic organization
- **Whitespace**: Generous spacing around images
- **Responsive**: Mobile-first approach

## 🔧 Development Workflow

1. **Parse Data**: Load and structure the JSON content
2. **Create Components**: Build reusable page/gallery components
3. **Implement Routing**: Map URLs to page data
4. **Add Images**: Integrate with optimization library
5. **Style**: Apply design system
6. **Test**: Verify all content displays correctly

## 📚 Useful Code Snippets

### Load All Data

```javascript
import siteData from "../reference/scraped-data/site-content.json";

// Find specific pages
const homePage = siteData.find(
  (page) => page.url === "http://chokilindberg.com"
);
const workPage = siteData.find((page) => page.url.includes("/work"));
const aboutPage = siteData.find((page) => page.url.includes("/about"));
```

### Extract Project Data

```javascript
// Get all individual projects
const projects = siteData.filter(
  (page) =>
    page.url !== "http://chokilindberg.com" &&
    page.url !== "http://chokilindberg.com/work" &&
    page.url !== "http://chokilindberg.com/about-1" &&
    page.url !== "http://chokilindberg.com/new-page-3" &&
    page.url !== "http://chokilindberg.com/contact-cv"
);
```

This guide provides everything needed to transform the scraped data into a fully functional, modern website!
