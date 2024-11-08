import { DownloadIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const navItems = {
  '/': {
    name: 'home',
  },
  '/posts': {
    name: 'posts',
  },
  '/about': {
    name: 'about',
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
            <a
              href="/resume.pdf"
              download
              className="hover:underline transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle items-center relative py-1 px-2 m-1"
            >
              resume <DownloadIcon className="inline-block h-[0.8rem] w-[0.8rem] ml-1" aria-label="download icon" />
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
