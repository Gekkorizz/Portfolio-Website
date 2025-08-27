'use client'

import { useEffect, useState } from 'react'
import { LoadingScreen } from './LoadingScreen'

export function CompilationHandler({ children }: { children: React.ReactNode }) {
  const [isCompiling, setIsCompiling] = useState(false)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if we're in development mode and detect compilation
    const isDev = process.env.NODE_ENV === 'development'
    
    if (isDev) {
      // Listen for Next.js compilation events
      const handleBeforeUnload = () => {
        setIsCompiling(true)
      }

      const handleLoad = () => {
        setIsCompiling(false)
        setShowContent(true)
      }

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        setShowContent(true)
      } else {
        window.addEventListener('load', handleLoad)
        window.addEventListener('beforeunload', handleBeforeUnload)
      }

      // Detect if we're waiting for compilation by checking for Next.js indicators
      const checkCompilation = () => {
        const nextIndicators = document.querySelectorAll('[data-nextjs-scroll-focus-boundary]')
        if (nextIndicators.length === 0 && !showContent) {
          setIsCompiling(true)
        }
      }

      const compilationTimer = setTimeout(checkCompilation, 100)

      return () => {
        window.removeEventListener('load', handleLoad)
        window.removeEventListener('beforeunload', handleBeforeUnload)
        clearTimeout(compilationTimer)
      }
    } else {
      // In production, show content immediately
      setShowContent(true)
    }
  }, [showContent])

  // Show loading screen during compilation or initial load
  if (isCompiling || !showContent) {
    return <LoadingScreen />
  }

  return <>{children}</>
}