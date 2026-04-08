import { ArrowLeftIcon } from "@phosphor-icons/react"
import { Link, createFileRoute, notFound } from "@tanstack/react-router"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { getPostBySlug } from "@/data/posts"
import { createCanonicalLink, createSeoMeta } from "@/lib/seo"

const contentModules: Record<string, string> = {}

const rawModules = import.meta.glob("../data/content/*.ts", { eager: true }) as Record<string, { content: string }>

for (const [path, mod] of Object.entries(rawModules)) {
	const slug = path.replace("../data/content/", "").replace(".ts", "")
	contentModules[slug] = mod.content
}

function getPostContent(slug: string): string | undefined {
	return contentModules[slug]
}

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPostPage,
	loader: ({ params }) => {
		const post = getPostBySlug(params.slug)
		if (!post) throw notFound()
		const content = getPostContent(params.slug)
		if (!content) throw notFound()
		return { post, content }
	},
	head: ({ loaderData }) => {
		const post = loaderData?.post
		return {
			meta: post
				? createSeoMeta({
						title: post.title,
						description: post.summary,
						path: `/blog/${post.slug}`,
						type: "article",
					})
				: [],
			links: post ? [createCanonicalLink(`/blog/${post.slug}`)] : [],
		}
	},
})

function BlogPostPage() {
	const { post, content } = Route.useLoaderData()

	return (
		<div className="py-12 sm:py-16">
			<Link
				to="/blog"
				className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
			>
				<ArrowLeftIcon size={14} />
				Back
			</Link>

			<article className="mt-8">
				<header className="space-y-2">
					<h1 className="text-3xl font-medium tracking-[-0.03em]">{post.title}</h1>
					<time className="block text-sm text-muted-foreground">
						{new Date(post.datePublished).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</time>
				</header>
				<div className="prose prose-zinc mt-8 max-w-[65ch] dark:prose-invert prose-headings:font-medium prose-headings:tracking-tight prose-p:leading-7 prose-a:underline prose-a:underline-offset-4">
					<Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
				</div>
			</article>
		</div>
	)
}
