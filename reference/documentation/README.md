# Choki Lindberg Website Reference Materials

## 📁 Folder Structure

```
reference/
├── scraped-data/           # All original website content
│   ├── site-content.json   # Complete website data (16 pages)
│   └── images/            # All 75 original images (50MB)
├── documentation/         # Documentation and analysis
│   ├── README.md         # This file
│   ├── SCRAPE_SUMMARY.md # Original scrape summary
│   ├── CONTENT_GUIDE.md  # How to use the scraped content
│   └── DESIGN_ANALYSIS.md # Visual design analysis
└── scripts/              # Utility scripts
    └── scrape-squarespace-cheerio.js # Original scraper
```

## 🎯 Purpose

This reference folder contains everything needed to recreate the Choki Lindberg photography portfolio website. All original content, images, and metadata have been preserved in an organized, developer-friendly format.

## 📊 What's Included

### Scraped Data

- **16 complete pages** with full content and metadata
- **75 high-resolution images** (2.9MB - 4MB each)
- **Structured JSON** with page relationships and navigation
- **Original URLs** and file names preserved

### Key Pages Captured

1. **Homepage** - Main entry point
2. **Work Portfolio** - Complete gallery overview
3. **Individual Projects** - 11 photography series (2006-2021)
4. **About** - Artist statement and biography
5. **News/Press** - Exhibitions and media coverage
6. **Contact/CV** - Professional information

### Photography Series

- **10 Houses** (2021) - Shanghai
- **Window** (2020) - Still life
- **Remnants** (2019) - Interior decay
- **Elsewhere** (2019) - "The Tree" and environments
- **Vanitas** (2017) - Classical vanitas
- **Grand Salon & Please Wait Here** (2017)
- **Boudoir** (2015)
- **Interiors Reconstructed Memories** (2013-2015)
- **Various Works** (2006-2011) - "The Knight", "Samurai", etc.

## 🛠️ How to Use This Reference

### For Development

1. **Content Structure**: Use `site-content.json` for page hierarchy and navigation
2. **Images**: All images in `images/` folder with original filenames
3. **Metadata**: Each page includes title, description, and content arrays
4. **Routing**: URL structure preserved for React Router or Next.js

### Key Data Points

```javascript
// Each page object contains:
{
  "url": "original URL",
  "title": "page title",
  "meta": { "description": "...", "keywords": "..." },
  "content": [{ "type": "text", "content": "..." }],
  "images": [{ "src": "original URL", "alt": "...", "localPath": "/images/filename" }]
}
```

### Image Usage

- All images are high-resolution and web-ready
- Use `localPath` property for React/Next.js imports
- Implement lazy loading for performance
- Consider creating responsive variants

### Content Organization

- **Homepage**: Featured work and navigation
- **Portfolio Grid**: Use work page for main gallery layout
- **Project Pages**: Individual series with descriptions and image galleries
- **About**: Artist statement and bio content
- **News**: Exhibition history and press coverage

## 🎨 Design Insights

### Visual Characteristics

- **Minimalist**: Clean, photography-focused design
- **Grid-based**: Systematic layout for portfolio presentation
- **High-quality imagery**: Professional photography requires careful presentation
- **Simple navigation**: Clear, straightforward user experience

### Technical Approach Needed

- **Performance**: Large images require optimization
- **Responsive**: Must work across all devices
- **Accessibility**: High-contrast, keyboard navigation
- **SEO**: Artist portfolio needs good search visibility

## 📋 Development Checklist

### Phase 1: Setup

- [ ] Choose framework (React/Next.js recommended)
- [ ] Set up project structure
- [ ] Configure image optimization
- [ ] Plan responsive breakpoints

### Phase 2: Content Integration

- [ ] Parse site-content.json for navigation
- [ ] Create page components for each section
- [ ] Import and optimize images
- [ ] Implement routing structure

### Phase 3: Design Implementation

- [ ] Analyze original design patterns
- [ ] Create responsive grid system
- [ ] Style navigation and typography
- [ ] Add smooth transitions

### Phase 4: Enhancement

- [ ] Implement lazy loading
- [ ] Add SEO optimization
- [ ] Test accessibility
- [ ] Performance optimization

## 🔍 Quick Start Guide

1. **Examine the original**: Review `SCRAPE_SUMMARY.md` for overview
2. **Study the data**: Open `site-content.json` to understand structure
3. **Check images**: Browse `images/` folder to see assets
4. **Plan navigation**: Map out user journey based on scraped pages
5. **Start building**: Use this reference as your content source

## 📚 Additional Documentation

- `SCRAPE_SUMMARY.md` - Original analysis and insights
- `CONTENT_GUIDE.md` - Detailed content usage instructions
- `DESIGN_ANALYSIS.md` - Visual design breakdown and recommendations

---

**Ready to build!** This reference contains everything needed to recreate a beautiful, modern version of the Choki Lindberg photography portfolio.
