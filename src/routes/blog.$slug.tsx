import { ArrowLeftIcon } from "@phosphor-icons/react"
import { createFileRoute, Link, notFound } from "@tanstack/react-router"
import parse from "html-react-parser"
import { getPostBySlug } from "@/data/posts"
import { processMarkdown } from "@/lib/markdown"
import { createCanonicalLink, createSeoMeta } from "@/lib/seo"

const rawModules = import.meta.glob("../data/content/*.md", {
	eager: true,
	query: "?raw",
	import: "default",
}) as Record<string, string>

const contentBySlug: Record<string, string> = {}
for (const [path, raw] of Object.entries(rawModules)) {
	const slug = path.replace("../data/content/", "").replace(".md", "")
	contentBySlug[slug] = raw
}

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPostPage,
	loader: async ({ params }) => {
		const post = getPostBySlug(params.slug)
		if (!post) throw notFound()
		const raw = contentBySlug[params.slug]
		if (!raw) throw notFound()
		const { html } = await processMarkdown(raw)
		return { post, html }
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
	const { post, html } = Route.useLoaderData()

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
					{parse(html)}
				</div>
			</article>
		</div>
	)
}
