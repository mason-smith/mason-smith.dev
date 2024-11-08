import { getBlogPosts } from "@/utils/posts";

export const baseUrl = "https://portfolio-post-starter.vercel.app";

export default async function sitemap() {
  const posts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.metadata.datePublished,
  }));

  const routes = ["", "/posts"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...posts];
}
