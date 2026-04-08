const SITE_URL = "https://masonsmith.dev"
const SITE_NAME = "Mason Smith"
const DEFAULT_TITLE = "Mason Smith"
const DEFAULT_DESCRIPTION =
	"Software engineer and engineering manager. I build things with care, lead teams that ship with confidence, and write about what I learn along the way."

type SeoOptions = {
	title?: string
	description?: string
	path?: string
	type?: "website" | "article"
}

export function createSeoMeta({ title, description, path = "/", type = "website" }: SeoOptions = {}) {
	const pageTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
	const pageDescription = description || DEFAULT_DESCRIPTION
	const canonicalUrl = `${SITE_URL}${path}`

	return [
		{ title: pageTitle },
		{ name: "description", content: pageDescription },

		// Open Graph
		{ property: "og:type", content: type },
		{ property: "og:title", content: pageTitle },
		{ property: "og:description", content: pageDescription },
		{ property: "og:url", content: canonicalUrl },
		{ property: "og:site_name", content: SITE_NAME },
		{ property: "og:locale", content: "en_US" },

		// Twitter
		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: pageTitle },
		{ name: "twitter:description", content: pageDescription },
	]
}

export function createCanonicalLink(path = "/") {
	return { rel: "canonical", href: `${SITE_URL}${path}` }
}

export function createJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": `${SITE_URL}/#person`,
				name: SITE_NAME,
				url: SITE_URL,
				jobTitle: "Engineering Manager",
				description: DEFAULT_DESCRIPTION,
				sameAs: ["https://github.com/mason-smith", "https://linkedin.com/in/masonsmith", "https://solutionops.com"],
				worksFor: {
					"@type": "Organization",
					name: "Bamboo Rose",
				},
				knowsAbout: [
					"Software Engineering",
					"Engineering Management",
					"Web Development",
					"TypeScript",
					"React",
					"Leadership",
				],
			},
			{
				"@type": "WebSite",
				"@id": `${SITE_URL}/#website`,
				url: SITE_URL,
				name: SITE_NAME,
				author: { "@id": `${SITE_URL}/#person` },
			},
		],
	}
}
