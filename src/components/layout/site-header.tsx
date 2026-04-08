import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { Link } from "@tanstack/react-router"
import { ThemeToggle } from "@/components/theme-toggle"
import { externalNav, internalNav, personal } from "@/data/personal"

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
				<Link
					to="/"
					className="text-sm font-medium tracking-tight transition-colors focus-visible:text-foreground focus-visible:outline-none"
				>
					{personal.name}
				</Link>
				<nav className="flex items-center gap-4 sm:gap-6">
					{internalNav.map((item) => (
						<Link
							key={item.label}
							to={item.href}
							className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
							activeProps={{ className: "text-foreground" }}
						>
							{item.label}
						</Link>
					))}
					<a
						href="/resume.pdf"
						download
						className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none sm:inline"
					>
						Resume
					</a>
					{externalNav.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="hidden items-center gap-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none sm:flex"
						>
							{item.label}
							<ArrowUpRightIcon size={12} />
						</a>
					))}
					<ThemeToggle />
				</nav>
			</div>
		</header>
	)
}
