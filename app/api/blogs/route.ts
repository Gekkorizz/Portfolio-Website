import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const maxDuration = 1

export async function GET() {
  try {
    console.log('Fetching articles from Dev.to API...')
    // Use a more reliable endpoint with popular posts
    const response = await fetch('https://dev.to/api/articles?top=15&per_page=6', {
      headers: {
        'User-Agent': 'Portfolio-Blog-Fetcher/1.0',
        'Accept': 'application/json'
      },
      cache: 'no-store' // Don't cache to ensure fresh data during testing
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const articles = await response.json()
    console.log(`Fetched ${articles.length} articles successfully`)
    
    // Add Dev.to credits to each article
    const articlesWithCredits = articles.map((article: any) => ({
      ...article,
      source: 'DEV.to',
      sourceUrl: 'https://dev.to',
      sourceCredit: 'Content sourced from DEV.to - Where programmers share ideas and help each other grow',
      originalUrl: article.url // Ensure original URL is preserved
    }))
    
    return NextResponse.json(articlesWithCredits)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}
