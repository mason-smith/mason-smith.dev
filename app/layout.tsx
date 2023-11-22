import { type ReactNode } from 'react';

// local dependencies
import './global.css';

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
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
