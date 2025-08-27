'use client'

import { createContext, useContext, useEffect, useState, useTransition } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { LoadingScreen } from '@/components/layout/LoadingScreen'

type NavigationContextType = {
  isLoading: boolean
  setLoading: (loading: boolean) => void
  navigateWithLoading: (href: string) => void
  reloadWithLoading: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function useNavigation() {
  const context = useContext(NavigationContext)
  if (!context) {
    // Return fallback functions for server-side rendering
    return {
      isLoading: false,
      setLoading: () => {},
      navigateWithLoading: (href: string) => {
        if (typeof window !== 'undefined') {
          window.location.href = href
        }
      },
      reloadWithLoading: () => {
        if (typeof window !== 'undefined') {
          window.location.reload()
        }
      },
    }
  }
  return context
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [isHydrated, setIsHydrated] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Check if loading should be skipped based on URL parameter
  const shouldSkipLoading = searchParams?.get('skipLoading') === 'true'

  // Handle hydration
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  // Handle initial page load
  useEffect(() => {
    // Only show loading after hydration and if skipLoading is not set
    if (isHydrated && !shouldSkipLoading) {
      setIsLoading(true)

      // Hide loading after a short delay to allow page to render
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [isHydrated, shouldSkipLoading])

  // Clean up skipLoading parameter after initial load
  useEffect(() => {
    if (shouldSkipLoading) {
      // Remove skipLoading parameter from URL after initial load
      const timer = setTimeout(() => {
        const url = new URL(window.location.href)
        url.searchParams.delete('skipLoading')
        window.history.replaceState({}, '', url.toString())
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [shouldSkipLoading])

  // Handle route changes
  useEffect(() => {
    const handleStart = () => {
      if (!shouldSkipLoading) {
        setIsLoading(true)
      }
    }

    const handleComplete = () => {
      setIsLoading(false)
    }

    // Listen for browser navigation events
    const handlePopState = () => {
      if (!shouldSkipLoading) {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 1000)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [shouldSkipLoading])

  // Navigation functions
  const navigateWithLoading = (href: string) => {
    // Don't navigate if already on the same page
    if (pathname === href) {
      return
    }

    if (!shouldSkipLoading) {
      setIsLoading(true)
    }

    startTransition(() => {
      router.push(href)

      // Hide loading after navigation
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    })
  }

  const reloadWithLoading = () => {
    if (!shouldSkipLoading) {
      setIsLoading(true)
    }

    // Use Next.js router refresh instead of window.location.reload
    startTransition(() => {
      router.refresh()

      // Hide loading after refresh
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    })
  }

  const setLoading = (loading: boolean) => {
    if (!shouldSkipLoading) {
      setIsLoading(loading)
    }
  }

  const contextValue: NavigationContextType = {
    isLoading: isLoading || isPending,
    setLoading,
    navigateWithLoading,
    reloadWithLoading,
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {isHydrated && (isLoading || isPending) && !shouldSkipLoading && <LoadingScreen />}
      {children}
    </NavigationContext.Provider>
  )
}
