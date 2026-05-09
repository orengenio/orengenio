import type { MetadataRoute } from "next";

/**
 * app.orengen.io is a logged-in workspace, not a public surface. Block
 * everything from indexing — there is nothing here a search engine
 * should ever serve in results.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
  };
}
