const fs = require('fs');
const path = require('path');

const sitemapContent = `
import { airports } from "@/data/airports";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jichang-tuijian.org"; // Ensure actual domain is used when deployed

  const brands = airports.map((airport) => ({
    url: \`\${baseUrl}/brands/\${airport.slug}/\`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    "",
    "/brands",
    "/compare",
    "/coupons",
    "/blog",
    "/guides",
    "/faq",
    "/about",
    "/privacy",
    "/disclaimer",
  ].map((route) => ({
    url: \`\${baseUrl}\${route}/\`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...staticPages, ...brands];
}
`;

const robotsContent = `
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jichang-tuijian.org/sitemap.xml",
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'app/sitemap.ts'), sitemapContent.trim() + '\\n', 'utf-8');
fs.writeFileSync(path.join(__dirname, 'app/robots.ts'), robotsContent.trim() + '\\n', 'utf-8');
console.log('Updated sitemap.ts and robots.ts');
