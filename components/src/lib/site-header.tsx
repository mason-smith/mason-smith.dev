import { HeaderFooterContent } from './header-footer-content';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 hidden w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:block">
      <HeaderFooterContent />
    </header>
  );
}
