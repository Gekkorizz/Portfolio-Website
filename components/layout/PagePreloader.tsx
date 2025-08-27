'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

const CRITICAL_ROUTES = ['/about', '/projects', '/blog', '/contact', '/toolbox', '/changelog', '/guestbook']

export function PagePreloader() {
  const router = useRouter()

  useEffect(() => {
    // Prefetch critical routes after initial load
    const prefetchRoutes = async () => {
      // Wait a bit for the initial page to fully load
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Prefetch routes one by one to avoid overwhelming the server
      for (const route of CRITICAL_ROUTES) {
        try {
          router.prefetch(route)
          // Small delay between prefetches
          await new Promise(resolve => setTimeout(resolve, 200))
        } catch (error) {
          console.log(`Failed to prefetch ${route}:`, error)
        }
      }
    }

    prefetchRoutes()
  }, [router])

  return null
}