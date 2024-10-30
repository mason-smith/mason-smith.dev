import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

import { SiteFooter } from '@/components/lib/site-footer';
import { SiteHeader } from '@/components/lib/site-header';
// project dependencies
import { ThemeProvider } from '@/components/lib/theme-provider';
// local dependencies
import './css/reset.css';
import './css/global.css';
import { cn } from '@/utils/cn';

export const metadata = {
  title: 'Home | Mason Smith',
  description: "Mason Smith's personal website",
  author: 'Mason Smith',
  creator: 'Mason Smith',
  keywords: ['Mason Smith', 'Software', 'Engineer', 'Frontend'],
  openGraph: {
    title: 'Mason Smith - Personal Website',
    description: "Mason Smith's personal website",
    siteName: 'Mason Smith',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn('min-h-screen bg-background font-sans antialiased', inter.className)}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
