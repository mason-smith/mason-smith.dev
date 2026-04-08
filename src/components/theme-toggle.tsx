import { MonitorIcon, MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
	const { theme, setTheme } = useTheme()

	return (
		<div className="flex items-center gap-0.5 rounded-lg border border-border p-0.5">
			<Button
				variant={theme === "light" ? "secondary" : "ghost"}
				size="icon-xs"
				onClick={() => setTheme("light")}
				aria-label="Light mode"
			>
				<SunIcon size={14} />
			</Button>
			<Button
				variant={theme === "system" ? "secondary" : "ghost"}
				size="icon-xs"
				onClick={() => setTheme("system")}
				aria-label="System mode"
			>
				<MonitorIcon size={14} />
			</Button>
			<Button
				variant={theme === "dark" ? "secondary" : "ghost"}
				size="icon-xs"
				onClick={() => setTheme("dark")}
				aria-label="Dark mode"
			>
				<MoonIcon size={14} />
			</Button>
		</div>
	)
}
