# mason-smith.dev

Personal website for Mason Smith. "This is who I am" — not a business pitch.

## Philosophy

- Do things right, not fast. Prioritize correctness, quality, and maintainability
- Always refer to official documentation (TanStack Start, shadcn, Tailwind CSS, Cloudflare Pages)
- Use library-provided components and utilities instead of rolling custom solutions
- Research assumptions against docs and current code before implementing
- Fix bugs in source code, not tests

## Architecture

- **Framework**: TanStack Start with file-based routing via TanStack Router
- **UI**: shadcn/ui (base-vega style) with Phosphor Icons
- **Styling**: Tailwind CSS v4 with CSS custom properties (oklch color space)
- **Font**: Geist Variable (sans-serif)
- **Build**: Vite with Nitro (Cloudflare Pages preset)
- **Deployment**: Cloudflare Pages at masonsmith.dev
- **Linting/Formatting**: Biome (NOT ESLint, NOT Prettier)
- **Git Hooks**: Husky + commitlint (conventional commits)

## Principles

- Mobile-first responsive design
- SOLID principles and separation of concerns
- Prefer small files with scoped, composable modules
- No barrel files. Use direct imports with `@/` path alias
- Static-first; content data lives in `src/data/` (not inline in components)

## Commands

```bash
pnpm dev          # dev server on port 8080
pnpm build        # production build (Cloudflare Pages)
pnpm lint         # biome check with auto-fix
pnpm format       # biome format
pnpm typecheck    # tsc --noEmit
pnpm test         # vitest
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Site header, footer, navigation
│   ├── ui/          # shadcn/ui components
│   └── sections/    # Page section components
├── data/            # Static typed content (personal info, blog metadata)
├── lib/             # Utilities (cn, seo, etc.)
├── hooks/           # Custom React hooks
├── routes/          # TanStack Router file-based routes
├── styles.css       # Tailwind config + CSS custom properties
└── router.tsx       # Router initialization
```

## Naming Conventions

- **Files**: kebab-case (`site-header.tsx`, `blog-list.tsx`)
- **Routes**: TanStack Router conventions (dots for nested: `blog.$slug.tsx`)
- **Components**: PascalCase exports in kebab-case files
- **Branches**: `feat/description`, `fix/description`, `chore/description`
- **Commits**: `feat: message`, `fix: message`, `refactor: message`

## Code Style

- Biome handles all formatting and linting
- 120 character line width, tab indent, double quotes
- `Array<T>` syntax over `T[]`
- `import type` for type-only imports
- No `any` at boundaries
- Use `cn()` from `@/lib/utils` for Tailwind class merging
- Use `@/` path alias for all src imports

## PR & Commit Requirements

- No Claude Code attribution in commits or PRs
- Conventional commits enforced via commitlint
- Pre-commit hook runs: Biome check + typecheck
