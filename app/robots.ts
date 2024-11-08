import { siteConfig } from '@/config/site-config';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
      },
    ],
    sitemap: `${siteConfig.baseUrl}/sitemap.xml`,
  };
}
