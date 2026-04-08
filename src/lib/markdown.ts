import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode from "rehype-pretty-code"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import { unified } from "unified"

export type MarkdownResult = {
	html: string
}

const pipeline = unified()
	.use(remarkParse)
	.use(remarkGfm)
	.use(remarkRehype, { allowDangerousHtml: true })
	.use(rehypeRaw)
	.use(rehypeSlug)
	.use(rehypeAutolinkHeadings, {
		behavior: "wrap",
		properties: { className: ["anchor"] },
	})
	.use(rehypePrettyCode, {
		theme: {
			dark: "github-dark-default",
			light: "github-light-default",
		},
		keepBackground: false,
	})
	.use(rehypeStringify)

export async function processMarkdown(content: string): Promise<MarkdownResult> {
	const result = await pipeline.process(content)
	return { html: String(result) }
}
