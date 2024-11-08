import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
// project dependencies
import { ThemeProvider } from '@/components/theme-provider';
// local dependencies
import './css/reset.css';
import './css/global.css';
import { siteConfig } from '@/config/site-config';
import { cn } from '@/utils/cn';
import { fontMono, fontSans } from './fonts';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: `${siteConfig.name}`,
    template: '%s | Personal Website',
  },
  description: `${siteConfig.name}'s personal website`,
  creator: siteConfig.name,
  keywords: [
    siteConfig.name,
    'Software',
    'Engineer',
    'Frontend',
    'Politics',
    'Leftist',
    'Ideology',
    'Leadership',
    'Management',
    'Culture',
  ],
  openGraph: {
    title: `${siteConfig.name}'s personal website`,
    description: `${siteConfig.name}'s personal website`,
    url: siteConfig.baseUrl,
    siteName: `${siteConfig.name}'s personal website`,
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html
      lang="en"
      className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable, fontMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
