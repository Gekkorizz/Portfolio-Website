import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NavigationProvider } from '@/components/providers/NavigationProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { SpaceBackground } from '@/components/layout/SpaceBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://lakshayrai.dev'),
  title: 'Lakshay Rai - Computer Science Student & Developer',
  description: 'Portfolio of Lakshay Rai, a passionate Computer Science student creating innovative software solutions and digital experiences.',
  keywords: ['developer', 'portfolio', 'computer science', 'student', 'react', 'python', 'lakshay rai', 'BIT Bangalore'],
  authors: [{ name: 'Lakshay Rai' }],
  openGraph: {
    title: 'Lakshay Rai - Computer Science Student & Developer',
    description: 'Portfolio of Lakshay Rai, a passionate Computer Science student creating innovative software solutions and digital experiences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://lakshayrai.dev',
    siteName: 'Lakshay Rai Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshay Rai - Computer Science Student & Developer',
    description: 'Portfolio of Lakshay Rai, a passionate Computer Science student creating innovative software solutions and digital experiences.',
    creator: '@lakshayrai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" href="/projects" as="document" />
        <link rel="preload" href="/contact" as="document" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <NavigationProvider>
          <SpaceBackground />
          <div className="min-h-screen flex flex-col relative z-10">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </NavigationProvider>
      </body>
    </html>
  )
}