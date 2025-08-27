'use client'

import { motion } from 'framer-motion'
import { BookOpen, Calendar, Clock, Mail, ExternalLink } from 'lucide-react'
import { CustomArrow } from '@/components/ui/CustomArrow'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  readTime: string
  category: string
  slug: string
  author: string
}

// Static blog posts
const blogPosts: BlogPost[] = [
  {
    title: 'Building a Student Management System with React and Node.js',
    excerpt: 'A deep dive into creating a comprehensive student portal with modern web technologies. Learn about authentication, database design, and user experience considerations for educational platforms.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    date: '2024-01-20',
    readTime: '12 min read',
    category: 'Full Stack',
    slug: 'student-management-system-react-nodejs',
    author: 'Lakshay Rai'
  },
  {
    title: 'Implementing Advanced Encryption in Python Applications',
    excerpt: 'Explore cryptographic techniques and security best practices. Learn how to implement AES encryption, RSA key exchange, and secure file handling in Python applications.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    date: '2024-01-15',
    readTime: '15 min read',
    category: 'Security',
    slug: 'advanced-encryption-python',
    author: 'Lakshay Rai'
  },
  {
    title: 'Creating Responsive Art Galleries with Modern CSS',
    excerpt: 'Design beautiful, responsive art galleries using CSS Grid, Flexbox, and modern layout techniques. Perfect for showcasing digital art and creative portfolios.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
    date: '2024-01-10',
    readTime: '10 min read',
    category: 'CSS',
    slug: 'responsive-art-galleries-css',
    author: 'Lakshay Rai'
  },
  {
    title: 'File Management Automation with Python',
    excerpt: 'Build powerful file management utilities using Python. Learn about directory traversal, pattern matching, and creating efficient backup solutions.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop',
    date: '2024-01-05',
    readTime: '8 min read',
    category: 'Python',
    slug: 'file-management-automation-python',
    author: 'Lakshay Rai'
  },
  {
    title: 'Modern JavaScript ES6+ Features for Beginners',
    excerpt: 'Master the essential JavaScript features that every developer should know. From arrow functions to async/await, destructuring, and modules.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    date: '2023-12-28',
    readTime: '9 min read',
    category: 'JavaScript',
    slug: 'modern-javascript-es6-features',
    author: 'Lakshay Rai'
  },
  {
    title: 'Getting Started with Docker for Developers',
    excerpt: 'Learn containerization fundamentals with Docker. Understand how to create, manage, and deploy applications using containers for consistent development environments.',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335a?w=600&h=400&fit=crop',
    date: '2023-12-20',
    readTime: '11 min read',
    category: 'DevOps',
    slug: 'getting-started-docker-developers',
    author: 'Lakshay Rai'
  }
]

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribing(true)

    try {
      // Simulate newsletter subscription (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000))

      setSubscriptionMessage('🎉 Successfully subscribed! You\'ll receive the latest tech insights.')
      setEmail('')
    } catch (err) {
      setSubscriptionMessage('❌ Subscription failed. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
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
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
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

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium group/link"
                  >
                    <span>Read More</span>
                    <CustomArrow
                      size={16}
                      className="group-hover/link:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Mail className="text-primary-500" size={24} />
                <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100">
                  Tech Newsletter
                </h3>
              </div>
              <p className="text-dark-600 dark:text-dark-400 mb-6">
                Subscribe to get the latest tech articles, tutorials, and industry insights delivered to your inbox weekly.
              </p>

              {subscriptionMessage ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 mb-6"
                >
                  <p className="text-green-800 dark:text-green-200">{subscriptionMessage}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubscribing}
                    className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isSubscribing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <Mail size={16} />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              <p className="text-xs text-dark-500 dark:text-dark-400 mt-4">
                Join 1000+ developers getting weekly tech insights. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}