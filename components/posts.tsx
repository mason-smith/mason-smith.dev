import Link from 'next/link';

import { getBlogPosts } from '@/utils/posts';
import { format } from 'date-fns';

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.metadata.datePublished) > new Date(b.metadata.datePublished)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/blog/${post.slug}`}>
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 tabular-nums">
                {format(post.metadata.datePublished, 'MMM dd, yyyy')} -
              </p>

              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">{post.metadata.title}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
