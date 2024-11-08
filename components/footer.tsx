// import { HeaderFooterContent } from "./header-footer-content";

import { ThemeToggle } from "./theme-toggle";

// export function Footer() {
//   return (
//     <footer className="sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
//       <HeaderFooterContent />
//     </footer>
//   );
// }

export function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex w-full flex-row items-center justify-between text-neutral-600 dark:text-neutral-300">
        <div className="flex space-x-4">
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="/rss"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">rss</p>
            </a>
          </li>
          <li>
            <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/mason-smith/"
              aria-label="Check out my code on github"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">github</p>
            </a>
          </li>
        </div>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
