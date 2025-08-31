import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { NavigationProvider } from '@/components/providers/NavigationProvider'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'
import { PagePreloader } from '@/components/layout/PagePreloader'
import { Suspense } from 'react'
import { LoadingScreen } from '@/components/layout/LoadingScreen'

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/about" as="document" />
        <link rel="preload" href="/projects" as="document" />
        <link rel="preload" href="/blog" as="document" />
        <link rel="preload" href="/contact" as="document" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16x16.svg" type="image/svg+xml" sizes="16x16" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <NavigationProvider>
            <PagePreloader />
            <div className="min-h-screen flex flex-col">
              <Navigation />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </NavigationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}