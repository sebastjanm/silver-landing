import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/hvala",
    },
    sitemap: "https://www.nakupsrebra.com/sitemap.xml",
  };
}
