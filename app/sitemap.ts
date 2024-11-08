import { siteConfig } from '@/config/site-config';
import { getBlogPosts } from '@/utils/posts';

export default async function sitemap() {
  const posts = getBlogPosts().map((post) => ({
    url: `${siteConfig.baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.datePublished,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `${siteConfig.baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...posts];
}
