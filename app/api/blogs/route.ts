import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://dev.to/api/articles?tag=javascript,react,webdev,programming&top=7&per_page=6', {
      headers: {
        'User-Agent': 'Portfolio-Blog-Fetcher/1.0'
      }
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const articles = await response.json()
    
    return NextResponse.json(articles)
  } catch (error) {
    console.error('Error fetching articles:', error)
    return NextResponse.json(
      { error: 'Failed to fetch articles' },
      { status: 500 }
    )
  }
}
