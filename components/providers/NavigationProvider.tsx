'use client'

import { createContext, useContext } from 'react'
import { useRouter } from 'next/navigation'

type NavigationContextType = {
  navigateWithLoading: (href: string) => void
  reloadWithLoading: () => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

export function useNavigation() {
  const isClient = typeof window !== 'undefined'
  const context = isClient ? useContext(NavigationContext) : undefined
  
  if (!context) {
    return {
      navigateWithLoading: (href: string) => {
        if (isClient) {
          window.location.href = href
        }
      },
      reloadWithLoading: () => {
        if (isClient) {
          window.location.reload()
        }
      },
    }
  }
  return context
}

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const navigateWithLoading = (href: string) => {
    router.push(href)
  }

  const reloadWithLoading = () => {
    router.refresh()
  }

  const contextValue: NavigationContextType = {
    navigateWithLoading,
    reloadWithLoading,
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}
