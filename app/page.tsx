import { BlogPosts } from "@/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Mason Smith
      </h1>
      <p className="mb-4">
        I am an engineering manager at Bamboo Rose. My inadvertent specialty is
        rearchitecting legacy codebases into modern, maintainable, and scalable
        web and cross-platform applications.
      </p>
      <p className="mb-4">
        Along the way I strive to make the web a more accessible and inclusive
        place for everyone. I have a lot of thoughts about what it means to be a
        leader, how to manage an effective team, and how to build a healthy
        engineering culture to produce reliable, high-quality software that
        users will love.
      </p>
      <p className="mb-4">
        I value political theory and praxis, and am interested in leftist
        politics and critiquing political systems that perpetuate inequality and
        injustice.
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
