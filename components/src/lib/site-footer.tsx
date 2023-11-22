import { HeaderFooterContent } from './header-footer-content';

export function SiteFooter() {
  return (
    <footer className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <HeaderFooterContent />
    </footer>
  );
}
