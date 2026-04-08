import { ArrowRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { getSortedPosts } from "@/data/posts"

export function BlogList() {
	const posts = getSortedPosts()

	return (
		<section className="pb-16">
			<h2 className="mb-6 text-xs font-medium uppercase tracking-[0.08em] text-muted-foreground">Writing</h2>
			<div className="divide-y divide-border/40">
				{posts.map((post) => (
					<Link
						key={post.slug}
						to="/blog/$slug"
						params={{ slug: post.slug }}
						className="group flex items-baseline justify-between gap-4 py-4 no-underline"
					>
						<div className="flex items-baseline gap-3">
							<span className="text-lg font-medium tracking-tight group-hover:text-foreground">{post.title}</span>
							<span className="hidden text-sm text-muted-foreground sm:inline">{post.summary}</span>
						</div>
						<div className="flex shrink-0 items-center gap-3">
							<time className="hidden text-sm tabular-nums text-muted-foreground sm:inline">
								{new Date(post.datePublished).toLocaleDateString("en-US", {
									year: "numeric",
									month: "short",
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
		</section>
	)
}
