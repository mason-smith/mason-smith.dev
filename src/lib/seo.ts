import { personal } from "@/data/personal"

const DEFAULT_TITLE = personal.name
const DEFAULT_DESCRIPTION = personal.description

type SeoOptions = {
	title?: string
	description?: string
	path?: string
	type?: "website" | "article"
}

export function createSeoMeta({ title, description, path = "/", type = "website" }: SeoOptions = {}) {
	const pageTitle = title ? `${title} | ${personal.name}` : DEFAULT_TITLE
	const pageDescription = description || DEFAULT_DESCRIPTION
	const canonicalUrl = `${personal.site}${path}`

	return [
		{ title: pageTitle },
		{ name: "description", content: pageDescription },

		{ property: "og:type", content: type },
		{ property: "og:title", content: pageTitle },
		{ property: "og:description", content: pageDescription },
		{ property: "og:url", content: canonicalUrl },
		{ property: "og:site_name", content: personal.name },
		{ property: "og:locale", content: "en_US" },

		{ name: "twitter:card", content: "summary" },
		{ name: "twitter:title", content: pageTitle },
		{ name: "twitter:description", content: pageDescription },
	]
}

export function createCanonicalLink(path = "/") {
	return { rel: "canonical", href: `${personal.site}${path}` }
}

export function createJsonLd() {
	return {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Person",
				"@id": `${personal.site}/#person`,
				name: personal.name,
				url: personal.site,
				jobTitle: "Engineering Manager",
				description: DEFAULT_DESCRIPTION,
				sameAs: [personal.github, personal.linkedin, personal.company.url],
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
				"@id": `${personal.site}/#website`,
				url: personal.site,
				name: personal.name,
				author: { "@id": `${personal.site}/#person` },
			},
		],
	}
}
