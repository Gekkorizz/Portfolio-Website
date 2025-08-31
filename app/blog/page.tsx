'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, ExternalLink } from 'lucide-react'
import { CustomArrow } from '@/components/ui/CustomArrow'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// Types for API responses
interface DevToArticle {
  id: number
  title: string
  description?: string
  url: string
  published_at: string
  published_timestamp?: string
  cover_image?: string | null
  reading_time_minutes?: number
  tag_list?: string[] | string
  tags?: string
  user?: {
    name?: string
    username?: string
    profile_image?: string
  }
  // Added credit fields
  source?: string
  sourceUrl?: string
  sourceCredit?: string
  originalUrl?: string
}

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  url: string
  author: string
  authorImage: string
  source?: string
  sourceUrl?: string
  sourceCredit?: string
}

// Fallback blog posts in case API fails
const fallbackPosts: BlogPost[] = [
  {
    title: 'Modern React Development Patterns',
    excerpt: 'Explore the latest patterns and best practices in React development for 2024.',
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--6zDMZZ3H--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vxkr9y1zuh5zfytw0ei.jpg',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'React',
    url: 'https://dev.to',
    author: 'Tech Community',
    authorImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473/b22b57a7-039d-4f32-b6df-c512fe99.jpeg'
  },
  {
    title: 'JavaScript Performance Optimization',
    excerpt: 'Learn advanced techniques to optimize JavaScript performance in modern web applications.',
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--YM5kxjlz--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1rjqzwxno8b6jrszz7e7.jpg',
    date: '2025-01-12',
    readTime: '10 min read',
    category: 'JavaScript',
    url: 'https://dev.to',
    author: 'Dev Community',
    authorImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473/b22b57a7-039d-4f32-b6df-c512fe99.jpeg'
  },
  {
    title: 'Building Secure Web Applications',
    excerpt: 'Essential security practices every developer should implement in their web applications.',
    image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--O3hyIcFH--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d3owirzd7vprdkqvpj2y.jpg',
    date: '2025-01-10',
    readTime: '12 min read',
    category: 'Security',
    url: 'https://dev.to',
    author: 'Security Expert',
    authorImage: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473/b22b57a7-039d-4f32-b6df-c512fe99.jpeg'
  }
]

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  // Fetch blog posts from Dev.to API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true)
        console.log('Fetching blog posts from API...')
        
        const response = await fetch('/api/blogs')

        if (!response.ok) {
          console.error(`API responded with status: ${response.status}`)
          throw new Error(`Failed to fetch articles: ${response.status}`)
        }

        const articles: DevToArticle[] = await response.json()
        console.log(`Received ${articles.length} articles from API`)
        
        if (!articles || articles.length === 0) {
          console.warn('No articles returned from API, using fallback posts')
          setBlogPosts(fallbackPosts)
          return
        }
        
        // Format the articles for display
        const formattedPosts: BlogPost[] = articles.map(article => {
          // Handle tag_list which can be string or array
          let firstTag = 'Tech';
          if (article.tag_list) {
            if (Array.isArray(article.tag_list) && article.tag_list.length > 0) {
              firstTag = article.tag_list[0];
            } else if (typeof article.tag_list === 'string' && article.tag_list.length > 0) {
              firstTag = article.tag_list.split(',')[0].trim();
            }
          } else if (article.tags && typeof article.tags === 'string') {
            firstTag = article.tags.split(',')[0].trim();
          }
          
          // Get published date
          const publishDate = article.published_timestamp || article.published_at || new Date().toISOString();
          
          return {
            title: article.title || 'Untitled Article',
            excerpt: article.description || 'Click to read the full article on Dev.to',
            image: article.cover_image || 'https://res.cloudinary.com/practicaldev/image/fetch/s--6zDMZZ3H--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7vxkr9y1zuh5zfytw0ei.jpg',
            date: publishDate,
            readTime: `${article.reading_time_minutes || 5} min read`,
            category: firstTag,
            url: article.originalUrl || article.url,
            author: article.user?.name || 'Dev.to Author',
            authorImage: article.user?.profile_image || 'https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/473/b22b57a7-039d-4f32-b6df-c512fe99.jpeg',
            source: article.source || 'DEV.to',
            sourceUrl: article.sourceUrl || 'https://dev.to',
            sourceCredit: article.sourceCredit || 'Content sourced from DEV.to'
          };
        });

        setBlogPosts(formattedPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
        setBlogPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchBlogPosts()
  }, [])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <BookOpen className="text-primary-500" size={32} />
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Blog & Insights
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              My <span className="text-gradient">Tech Blog</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark-600 dark:text-dark-400 leading-relaxed"
            >
              Sharing my journey, insights, and learnings in software development.
              From project tutorials to technical deep-dives and industry observations.
            </motion.p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card overflow-hidden animate-pulse">
                  <div className="aspect-video bg-dark-200 dark:bg-dark-700"></div>
                  <div className="p-6 space-y-3">
                    <div className="h-4 bg-dark-200 dark:bg-dark-700 rounded w-3/4"></div>
                    <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded w-1/2"></div>
                    <div className="space-y-2">
                      <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded"></div>
                      <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blog Posts Grid */}
          {!loading && (
            <>
              {blogPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.article
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                      className="card overflow-hidden hover:scale-105 transition-all duration-300 group"
                    >
                      {/* Post Image */}
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-3">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock size={14} />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          <span className="text-xs text-primary-600 dark:text-primary-400">
                            by {post.author}
                          </span>
                        </div>

                        <h2 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex flex-col space-y-3">
                          <a
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group/link"
                          >
                            <span>Read Article</span>
                            <ExternalLink
                              size={16}
                              className="group-hover/link:translate-x-1 transition-transform duration-200"
                            />
                          </a>
                          
                          <div className="flex items-center space-x-2 mt-2">
                            <a 
                              href={post.sourceUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-dark-400 dark:text-dark-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              Content from {post.source}
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto">
                      <BookOpen size={32} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold">No blog posts found</h3>
                    <p className="text-dark-600 dark:text-dark-400 max-w-md mx-auto">
                      There was an issue fetching blog posts from the Dev.to API. Please try again later or check the console for more details.
                    </p>
                    <button 
                      onClick={() => window.location.reload()}
                      className="mt-4 px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md inline-flex items-center space-x-2 transition"
                    >
                      <span>Refresh</span>
                      <CustomArrow />
                    </button>
                  </motion.div>
                </div>
              )}
            </>
          )}

        </div>
      </section>
    </div>
  )
}
