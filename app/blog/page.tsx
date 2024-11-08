import { BlogPosts } from '@/components/posts';

export const metadata = {
  title: 'Blog | Mason Smith',
  description: 'I write about things I think about.',
};

export default function Posts() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Things I think about</h1>
      <BlogPosts />
    </section>
  );
}
