import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { THEME_STORAGE_KEY, ThemeProvider } from "@/components/theme-provider"
import { createJsonLd, createSeoMeta } from "@/lib/seo"

import appCss from "../styles.css?url"

const themeScript = `(function(){var t=localStorage.getItem("${THEME_STORAGE_KEY}")||"system";var r=t;if(t==="system"){r=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.classList.add(r)})();`

const jsonLd = JSON.stringify(createJsonLd())

// Cloudflare Web Analytics beacon token (public, domain-locked). `spa: true`
// tracks pathname changes from TanStack Router client-side navigation.
const CF_BEACON_TOKEN = "2ebaa3b0f6f141d9a1b0b631494f2139"

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			...createSeoMeta(),
		],
		links: [
			{ rel: "stylesheet", href: appCss },
			{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		],
		scripts: [{ children: themeScript }, { type: "application/ld+json", children: jsonLd }],
	}),
	component: RootComponent,
	shellComponent: RootDocument,
	notFoundComponent: NotFound,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<HeadContent />
			</head>
			<body className="min-h-svh antialiased">
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:ring-2 focus:ring-ring"
				>
					Skip to content
				</a>
				{children}
				{import.meta.env.PROD && (
					<script
						type="module"
						src="https://static.cloudflareinsights.com/beacon.min.js"
						data-cf-beacon={JSON.stringify({ token: CF_BEACON_TOKEN, spa: true })}
					/>
				)}
				<Scripts />
			</body>
		</html>
	)
}

function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center py-24">
			<p className="text-sm text-muted-foreground">This page doesn't exist.</p>
			<Link to="/" className="mt-4 text-sm text-foreground underline underline-offset-4 hover:text-muted-foreground">
				Back home
			</Link>
		</div>
	)
}

function RootComponent() {
	return (
		<ThemeProvider defaultTheme="system">
			<div className="flex min-h-svh flex-col">
				<SiteHeader />
				<main id="main" className="mx-auto w-full max-w-5xl flex-1 px-6">
					<Outlet />
				</main>
				<SiteFooter />
			</div>
		</ThemeProvider>
	)
}
