import rehypeShikiFromHighlighter from "@shikijs/rehype/core"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import remarkGfm from "remark-gfm"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import type { Highlighter } from "shiki"
import { createHighlighterCore } from "shiki/core"
import { createJavaScriptRegexEngine } from "shiki/engine/javascript"
import bash from "shiki/langs/bash.mjs"
import javascript from "shiki/langs/javascript.mjs"
import json from "shiki/langs/json.mjs"
import tsx from "shiki/langs/tsx.mjs"
import typescript from "shiki/langs/typescript.mjs"
import githubDarkDefault from "shiki/themes/github-dark-default.mjs"
import githubLightDefault from "shiki/themes/github-light-default.mjs"
import { unified } from "unified"

export type MarkdownResult = {
	html: string
}

// Fine-grained shiki: preload only the themes and languages actually used so the
// Cloudflare worker doesn't ship shiki's full ~9MB grammar + theme bundle. Add a
// language import to the `langs` array below when a post starts using a new one.
// rehype-pretty-code is intentionally avoided here because it statically imports
// shiki's full bundle regardless of the highlighter passed in.
async function buildPipeline() {
	// createHighlighterCore returns a HighlighterCore; the rehype plugin's types
	// want the fuller Highlighter shape but only use core methods, so cast.
	const highlighter = (await createHighlighterCore({
		themes: [githubLightDefault, githubDarkDefault],
		langs: [typescript, javascript, tsx, json, bash],
		engine: createJavaScriptRegexEngine(),
	})) as Highlighter

	return unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkRehype, { allowDangerousHtml: true })
		.use(rehypeRaw)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, {
			behavior: "wrap",
			properties: { className: ["anchor"] },
		})
		.use(rehypeShikiFromHighlighter, highlighter, {
			themes: { light: "github-light-default", dark: "github-dark-default" },
			defaultColor: false,
		})
		.use(rehypeStringify)
}

let pipelinePromise: ReturnType<typeof buildPipeline> | undefined

export async function processMarkdown(content: string): Promise<MarkdownResult> {
	if (!pipelinePromise) {
		pipelinePromise = buildPipeline()
	}
	const pipeline = await pipelinePromise
	const result = await pipeline.process(content)
	return { html: String(result) }
}
