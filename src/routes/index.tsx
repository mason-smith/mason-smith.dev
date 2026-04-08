import { createFileRoute } from "@tanstack/react-router"
import { BlogList } from "@/components/sections/blog-list"
import { Hero } from "@/components/sections/hero"

export const Route = createFileRoute("/")({ component: HomePage })

function HomePage() {
	return (
		<>
			<Hero />
			<BlogList />
		</>
	)
}
