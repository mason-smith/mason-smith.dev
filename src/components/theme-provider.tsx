import { createContext, useCallback, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderState = {
	theme: Theme
	setTheme: (theme: Theme) => void
}

const STORAGE_KEY = "masonsmith-theme"

const ThemeProviderContext = createContext<ThemeProviderState>({
	theme: "system",
	setTheme: () => {},
})

function getResolvedTheme(theme: Theme): "dark" | "light" {
	if (theme === "system") {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
	}
	return theme
}

export function ThemeProvider({
	children,
	defaultTheme = "system",
}: {
	children: React.ReactNode
	defaultTheme?: Theme
}) {
	const [theme, setThemeState] = useState<Theme>(defaultTheme)

	const applyTheme = useCallback((t: Theme) => {
		const resolved = getResolvedTheme(t)
		const root = document.documentElement
		root.classList.remove("light", "dark")
		root.classList.add(resolved)
	}, [])

	useEffect(() => {
		const stored = localStorage.getItem(STORAGE_KEY) as Theme | null
		if (stored && stored !== defaultTheme) {
			setThemeState(stored)
			applyTheme(stored)
		} else {
			applyTheme(defaultTheme)
		}
	}, [defaultTheme, applyTheme])

	useEffect(() => {
		applyTheme(theme)
	}, [theme, applyTheme])

	useEffect(() => {
		const media = window.matchMedia("(prefers-color-scheme: dark)")
		const handler = () => {
			if (theme === "system") applyTheme("system")
		}
		media.addEventListener("change", handler)
		return () => media.removeEventListener("change", handler)
	}, [theme, applyTheme])

	const setTheme = useCallback((t: Theme) => {
		localStorage.setItem(STORAGE_KEY, t)
		setThemeState(t)
	}, [])

	return <ThemeProviderContext value={{ theme, setTheme }}>{children}</ThemeProviderContext>
}

export function useTheme() {
	const context = useContext(ThemeProviderContext)
	if (!context) throw new Error("useTheme must be used within a ThemeProvider")
	return context
}
