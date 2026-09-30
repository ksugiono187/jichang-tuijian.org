import { airports } from "@/data/airports";
import { blogs } from "@/data/blogs";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jichang-tuijian.org"; // Ensure actual domain is used when deployed

  const brandUrls = airports.map((airport) => ({
    url: `${baseUrl}/brands/${airport.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogUrls = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
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
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" as const : "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  return [...staticPages, ...brandUrls, ...blogUrls];
}
