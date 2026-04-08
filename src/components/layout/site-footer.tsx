import { personal } from "@/data/personal"

const CURRENT_YEAR = new Date().getFullYear()

export function SiteFooter() {
	return (
		<footer className="border-t border-border/40 py-8">
			<div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
				<p className="text-sm text-muted-foreground">
					&copy; {CURRENT_YEAR} {personal.name}
				</p>
				<a
					href={personal.company.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
				>
					{personal.company.name}
				</a>
			</div>
		</footer>
	)
}
