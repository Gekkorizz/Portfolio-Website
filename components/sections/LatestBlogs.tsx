'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, Calendar, Clock, ExternalLink, User } from 'lucide-react'
import { CustomArrow } from '@/components/ui/CustomArrow'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

// Types for API responses
interface DevToArticle {
  id: number
  title: string
  description: string
  url: string
  published_at: string
  cover_image: string | null
  reading_time_minutes: number
  tag_list: string[]
  user: {
    name: string
    username: string
    profile_image: string
  }
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
}

// Fallback blog posts
const fallbackPosts: BlogPost[] = [
  {
    title: 'Modern React Development Patterns',
    excerpt: 'Explore the latest patterns and best practices in React development for 2024.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    url: 'https://dev.to',
    author: 'Tech Community',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'
  },
  {
    title: 'JavaScript Performance Optimization',
    excerpt: 'Learn advanced techniques to optimize JavaScript performance in modern web applications.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
    date: '2024-01-12',
    readTime: '10 min read',
    category: 'JavaScript',
    url: 'https://dev.to',
    author: 'Dev Community',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces'
  },
  {
    title: 'Building Secure Web Applications',
    excerpt: 'Essential security practices every developer should implement in their web applications.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Security',
    url: 'https://dev.to',
    author: 'Security Expert',
    authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces'
  }
]

export function LatestBlogs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(fallbackPosts)
  const [loading, setLoading] = useState(true)

  // Fetch latest tech articles from Dev.to API directly
  useEffect(() => {
    const fetchTechArticles = async () => {
      try {
        setLoading(true)
        
        // Using the internal API route that fetches from Dev.to
        const response = await fetch('/api/blogs')

        if (!response.ok) {
          throw new Error('Failed to fetch articles')
        }

        const articles: DevToArticle[] = await response.json()

        // Take only first 3 articles for this component
        const limitedArticles = articles.slice(0, 3)

        // Format posts for display
        const formattedPosts: BlogPost[] = limitedArticles.map(article => ({
          title: article.title,
          excerpt: article.description || 'Click to read the full article on Dev.to',
          image: article.cover_image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
          date: new Date(article.published_at).toISOString(),
          readTime: `${article.reading_time_minutes || 5} min read`,
          category: article.tag_list[0] || 'Tech',
          url: article.url,
          author: article.user.name,
          authorImage: article.user.profile_image || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces'
        }))

        setBlogPosts(formattedPosts)
      } catch (err) {
        console.error('Error fetching articles:', err)
        // If API fails, use fallback posts
        setBlogPosts(fallbackPosts)
      } finally {
        setLoading(false)
      }
    }

    fetchTechArticles()
  }, [])

  return (
    <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-4"
            >
              <BookOpen className="text-accent-500" size={24} />
              <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Latest Insights
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Fresh from the Tech Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              Stay updated with the latest articles, tutorials, and insights from the developer community
            </motion.p>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  className="card overflow-hidden hover:scale-105 transition-all duration-300 group"
                >
                  {/* Post Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent-600 text-white text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={12} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center space-x-2 mb-3">
                      <Image
                        src={post.authorImage}
                        alt={post.author}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-xs text-dark-500 dark:text-dark-400">
                        by {post.author}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-dark-900 dark:text-dark-100 mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed line-clamp-2 text-sm">
                      {post.excerpt}
                    </p>

                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group/link text-sm"
                    >
                      <span>Read Article</span>
                      <ExternalLink
                        size={14}
                        className="group-hover/link:translate-x-1 transition-transform duration-200"
                      />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* View All Blogs Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 btn-secondary"
            >
              <BookOpen size={18} />
              <span>View All Articles</span>
              <CustomArrow size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
