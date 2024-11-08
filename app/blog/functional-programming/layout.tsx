import type { ReactNode } from 'react';

import { BlogHeader } from '@/components/blog-header';
import { getBlogPosts } from '@/utils/posts';

type Props = {
  children: ReactNode;
};

export default function MdxLayout({ children }: Props) {
  const posts = getBlogPosts();
  return (
    <section>
      <BlogHeader posts={posts} />

      <article className="prose prose-zinc dark:prose-invert prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white">
        {children}
      </article>
    </section>
  );
}
