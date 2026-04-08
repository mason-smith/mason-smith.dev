import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPostPage,
})

function BlogPostPage() {
	return <div>Post</div>
}
