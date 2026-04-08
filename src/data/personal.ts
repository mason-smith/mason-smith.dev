export const personal = {
	name: "Mason Smith",
	tagline: "Engineer, manager, maker.",
	description:
		"I'm Mason — a software engineer and engineering manager based between Seattle and Louisville. I build things with care, lead teams that ship with confidence, and write about what I learn along the way.",
	email: "mason.smith@solutionops.com",
	github: "https://github.com/mason-smith",
	linkedin: "https://linkedin.com/in/masonsmith",
	site: "https://masonsmith.dev",
	company: {
		name: "SolutionOps",
		url: "https://solutionops.com",
	},
} as const

export const navigation = [
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
	{ label: "GitHub", href: personal.github, external: true },
] as const
