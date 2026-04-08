import { ArrowRightIcon } from "@phosphor-icons/react"
import { createFileRoute, Link } from "@tanstack/react-router"
import { getSortedPosts } from "@/data/posts"
import { createCanonicalLink, createSeoMeta } from "@/lib/seo"

export const Route = createFileRoute("/blog/")({
	component: BlogIndexPage,
	head: () => ({
		meta: createSeoMeta({
			title: "Blog",
			description: "Writing about software engineering, leadership, and things I think about.",
			path: "/blog",
		}),
		links: [createCanonicalLink("/blog")],
	}),
})

function BlogIndexPage() {
	const posts = getSortedPosts()

	return (
		<div className="py-12 sm:py-16">
			<h1 className="text-3xl font-medium tracking-[-0.03em]">Writing</h1>
			<div className="mt-8 divide-y divide-border/40">
				{posts.map((post) => (
					<Link
						key={post.slug}
						to="/blog/$slug"
						params={{ slug: post.slug }}
						className="group flex flex-col gap-1 py-5 no-underline sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
					>
						<div className="space-y-1">
							<span className="text-lg font-medium tracking-tight group-hover:text-foreground">{post.title}</span>
							<p className="text-sm text-muted-foreground">{post.summary}</p>
						</div>
						<div className="flex shrink-0 items-center gap-3">
							<time className="text-sm tabular-nums text-muted-foreground">
								{new Date(post.datePublished).toLocaleDateString("en-US", {
									year: "numeric",
									month: "short",
									day: "numeric",
								})}
							</time>
							<ArrowRightIcon
								size={14}
								className="text-muted-foreground transition-transform group-hover:translate-x-0.5"
							/>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}
