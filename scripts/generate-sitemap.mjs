import { readFileSync, writeFileSync } from "node:fs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")
const SITE = "https://masonsmith.dev"

const postsSource = readFileSync(resolve(root, "src/data/posts.ts"), "utf8")
const slugRegex = /slug:\s*"([^"]+)"[\s\S]*?datePublished:\s*"([^"]+)"/g
const posts = Array.from(postsSource.matchAll(slugRegex)).map(([, slug, datePublished]) => ({
	slug,
	datePublished,
}))

if (posts.length === 0) {
	throw new Error("generate-sitemap: failed to parse any posts from src/data/posts.ts")
}

const today = new Date().toISOString().slice(0, 10)

const entries = [
	{ loc: `${SITE}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
	{ loc: `${SITE}/about`, lastmod: today, changefreq: "monthly", priority: "0.8" },
	{ loc: `${SITE}/blog`, lastmod: today, changefreq: "weekly", priority: "0.9" },
	...posts.map((p) => ({
		loc: `${SITE}/blog/${p.slug}`,
		lastmod: p.datePublished,
		changefreq: "yearly",
		priority: "0.7",
	})),
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		(e) => `	<url>
		<loc>${e.loc}</loc>
		<lastmod>${e.lastmod}</lastmod>
		<changefreq>${e.changefreq}</changefreq>
		<priority>${e.priority}</priority>
	</url>`,
	)
	.join("\n")}
</urlset>
`

writeFileSync(resolve(root, "public/sitemap.xml"), xml)
console.log(`generated public/sitemap.xml with ${entries.length} entries`)
