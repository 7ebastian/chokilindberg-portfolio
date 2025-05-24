// scrape-squarespace-cheerio.js
// Simple and fast scraper for Squarespace sites

const cheerio = require("cheerio");
const fs = require("fs").promises;
const path = require("path");
const https = require("https");

// Configuration
const SITE_URL = "http://chokilindberg.com";
const OUTPUT_DIR = "./scraped-content";

// Helper to download images
async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = require("fs").createWriteStream(filepath);
    https
      .get(url.startsWith("//") ? `https:${url}` : url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", reject);
  });
}

// Main scraping function
async function scrapePage(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const pageData = {
      url: url,
      title: $("title").text(),
      meta: {
        description: $('meta[name="description"]').attr("content") || "",
        keywords: $('meta[name="keywords"]').attr("content") || "",
      },
      content: [],
      images: [],
    };

    // Extract main content
    $('main, .main-content, [role="main"], .content-wrapper').each(
      (i, elem) => {
        const text = $(elem).text().trim();
        if (text) {
          pageData.content.push({
            type: "text",
            content: text,
          });
        }
      }
    );

    // Extract images
    const imagePromises = [];
    $("img").each((i, elem) => {
      const src = $(elem).attr("src") || $(elem).attr("data-src");
      const alt = $(elem).attr("alt") || "";

      if (src && !src.startsWith("data:")) {
        const imageUrl = new URL(src, url).href;
        const imageName = path.basename(imageUrl.split("?")[0]);
        const localPath = path.join(OUTPUT_DIR, "images", imageName);

        pageData.images.push({
          src: imageUrl,
          alt: alt,
          localPath: `/images/${imageName}`,
        });

        imagePromises.push(downloadImage(imageUrl, localPath));
      }
    });

    // Extract navigation links to find other pages
    const links = new Set();
    $("a").each((i, elem) => {
      const href = $(elem).attr("href");
      if (href && !href.startsWith("#") && !href.startsWith("mailto:")) {
        const absoluteUrl = new URL(href, url).href;
        if (absoluteUrl.startsWith(SITE_URL)) {
          links.add(absoluteUrl);
        }
      }
    });

    // Wait for all images to download
    await Promise.all(imagePromises);

    return { pageData, links: Array.from(links) };
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return { pageData: null, links: [] };
  }
}

// Main execution
async function scrapeWebsite() {
  // Create output directories
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, "images"), { recursive: true });

  const visited = new Set();
  const toVisit = [SITE_URL];
  const allPages = [];

  console.log("Starting scrape of", SITE_URL);

  while (toVisit.length > 0) {
    const url = toVisit.shift();

    if (visited.has(url)) continue;
    visited.add(url);

    console.log(`Scraping: ${url}`);
    const { pageData, links } = await scrapePage(url);

    if (pageData) {
      allPages.push(pageData);

      // Add new links to visit
      links.forEach((link) => {
        if (!visited.has(link)) {
          toVisit.push(link);
        }
      });
    }

    // Be polite - add delay between requests
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Save all data
  await fs.writeFile(
    path.join(OUTPUT_DIR, "site-content.json"),
    JSON.stringify(allPages, null, 2)
  );

  console.log(`\nScraping complete!`);
  console.log(`- Pages scraped: ${allPages.length}`);
  console.log(`- Content saved to: ${OUTPUT_DIR}/site-content.json`);
  console.log(`- Images saved to: ${OUTPUT_DIR}/images/`);
}

// Run the scraper
scrapeWebsite().catch(console.error);

// To use:
// 1. npm init -y
// 2. npm install cheerio
// 3. node scrape-squarespace-cheerio.js
