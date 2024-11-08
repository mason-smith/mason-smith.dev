'use client';

import { format, formatDistanceToNow } from 'date-fns';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site-config';
import type { getBlogPosts } from '@/utils/posts';

type Props = {
  posts: ReturnType<typeof getBlogPosts>;
};

export function BlogHeader({ posts }: Props) {
  const path = usePathname();
  const post = posts.find((post) => post.slug === path.replace('/blog/', ''))!;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.datePublished,
            dateModified: post.metadata.datePublished,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${siteConfig.baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${siteConfig.baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: `${siteConfig.name}'s personal website`,
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">{post.metadata.title}</h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {format(post.metadata.datePublished, 'MMM dd, yyyy')} -{' '}
          {formatDistanceToNow(new Date(post.metadata.datePublished), {
            addSuffix: true,
          })}
        </p>
      </div>
    </>
  );
}
