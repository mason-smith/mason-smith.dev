import { ThemeToggle } from './theme-toggle';

export function SiteFooter() {
  return (
    <header className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center p-4 lg:container">
        {/* <p>links will go here</p> */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
