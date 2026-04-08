export type Post = {
	slug: string
	title: string
	summary: string
	datePublished: string
	category: "engineering" | "leadership"
}

export const posts: Array<Post> = [
	{
		slug: "when-managers-fail-developers-six-years-later",
		title: "When managers fail developers (six years later)",
		summary:
			"I wrote about bad management in 2020. I still agree with most of it, but I understand now what it actually takes to make good management work.",
		datePublished: "2026-04-08",
		category: "leadership",
	},
	{
		slug: "when-managers-fail-developers",
		title: "When managers fail developers",
		summary:
			"The most successful teams I've been on were developer-led, developer-centric, and developer-trusted. What happens when management gets in the way.",
		datePublished: "2020-05-15",
		category: "leadership",
	},
	{
		slug: "functional-programming-in-javascript",
		title: "Functional Programming in JavaScript",
		summary:
			"A high-level overview of pure functions, higher-order functions, and immutability, and why they changed the way I write code.",
		datePublished: "2019-07-24",
		category: "engineering",
	},
]

export function getPostBySlug(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug)
}

const sortedPosts = [...posts].sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime())

export function getSortedPosts(): Array<Post> {
	return sortedPosts
}
