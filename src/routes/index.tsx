import { createFileRoute } from "@tanstack/react-router"
import { BlogList } from "@/components/sections/blog-list"
import { Hero } from "@/components/sections/hero"
import { createCanonicalLink } from "@/lib/seo"

export const Route = createFileRoute("/")({
	component: HomePage,
	head: () => ({
		links: [createCanonicalLink("/")],
	}),
})

function HomePage() {
	return (
		<>
			<Hero />
			<BlogList />
		</>
	)
}
