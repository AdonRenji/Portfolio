import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://adonrenji.dev"; // Replace with actual domain when deployed

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add additional routes here if you add pages like /blog or /projects/[id]
  ];
}
