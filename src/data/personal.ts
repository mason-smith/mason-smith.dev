export const personal = {
	name: "Mason Smith",
	tagline: "Building software. Managing engineers. Figuring it out.",
	description:
		"I'm Mason. I've been writing software since 2014 and managing engineers for the last few years. I started building because I didn't know what else to do with myself, and I turned out to be pretty good at it. Came up in Silicon Valley and Seattle, now based in Kentucky. This is where I write about what I've learned.",
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
