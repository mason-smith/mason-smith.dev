export const personal = {
	name: "Mason Smith",
	tagline: "Engineer, manager, maker.",
	description:
		"I'm Mason, a software engineer and engineering manager. I came up building software in Silicon Valley and Seattle, and now call Kentucky home. I build things with care, lead teams that ship with confidence, and write about what I learn along the way.",
	email: "mason.smith@solutionops.com",
	github: "https://github.com/mason-smith",
	linkedin: "https://linkedin.com/in/masonsmith",
	site: "https://masonsmith.dev",
	company: {
		name: "SolutionOps",
		url: "https://solutionops.com",
	},
} as const

export const internalNav = [
	{ label: "Blog", href: "/blog" },
	{ label: "About", href: "/about" },
] as const

export const externalNav = [{ label: "GitHub", href: personal.github }] as const
