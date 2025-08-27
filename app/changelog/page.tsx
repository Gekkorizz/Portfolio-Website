'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Plus, Zap, Bug, Sparkles, ArrowUp } from 'lucide-react'

const changelogEntries = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    type: 'feature',
    title: 'New Project Showcase & AI Contact Form',
    changes: [
      {
        type: 'added',
        description: 'Added Student Portal project with comprehensive academic management features'
      },
      {
        type: 'added', 
        description: 'Implemented AI-powered contact form with smart quick prompts'
      },
      {
        type: 'improved',
        description: 'Enhanced mobile navigation with smoother animations'
      },
      {
        type: 'improved',
        description: 'Updated skills section with latest technologies and certifications'
      }
    ]
  },
  {
    version: '2.0.0',
    date: '2024-01-01',
    type: 'major',
    title: 'Complete Portfolio Redesign',
    changes: [
      {
        type: 'added',
        description: 'Brand new design system with improved accessibility'
      },
      {
        type: 'added',
        description: 'Dark/light theme toggle with system preference detection'
      },
      {
        type: 'added',
        description: 'Interactive timeline with professional journey'
      },
      {
        type: 'added',
        description: 'Testimonials section with client feedback'
      },
      {
        type: 'improved',
        description: 'Performance optimizations - 40% faster load times'
      },
      {
        type: 'improved',
        description: 'SEO improvements with structured data and meta tags'
      }
    ]
  },
  {
    version: '1.3.0',
    date: '2023-12-10',
    type: 'feature',
    title: 'Blog Platform & Developer Toolbox',
    changes: [
      {
        type: 'added',
        description: 'Launched blog section with technical articles and insights'
      },
      {
        type: 'added',
        description: 'Developer toolbox page showcasing favorite tools and resources'
      },
      {
        type: 'fixed',
        description: 'Resolved mobile menu overlay issues on iOS Safari'
      },
      {
        type: 'improved',
        description: 'Enhanced project filtering and search functionality'
      }
    ]
  },
  {
    version: '1.2.1',
    date: '2023-11-28',
    type: 'patch',
    title: 'Bug Fixes & Performance',
    changes: [
      {
        type: 'fixed',
        description: 'Fixed contact form validation on mobile devices'
      },
      {
        type: 'fixed',
        description: 'Resolved theme toggle persistence across page refreshes'
      },
      {
        type: 'improved',
        description: 'Optimized images for better Core Web Vitals scores'
      }
    ]
  },
  {
    version: '1.2.0',
    date: '2023-11-15',
    type: 'feature',
    title: 'Enhanced Interactivity',
    changes: [
      {
        type: 'added',
        description: 'Smooth scroll animations with intersection observer'
      },
      {
        type: 'added',
        description: 'Hover effects and micro-interactions throughout the site'
      },
      {
        type: 'improved',
        description: 'Better keyboard navigation and focus management'
      }
    ]
  },
  {
    version: '1.1.0',
    date: '2023-10-30',
    type: 'feature',
    title: 'Content Updates & Mobile Optimization',
    changes: [
      {
        type: 'added',
        description: 'Added EcoTrack and DevMentor projects to portfolio'
      },
      {
        type: 'improved',
        description: 'Mobile-first responsive design improvements'
      },
      {
        type: 'improved',
        description: 'Updated professional timeline with recent achievements'
      }
    ]
  },
  {
    version: '1.0.0',
    date: '2023-10-01',
    type: 'major',
    title: 'Initial Portfolio Launch',
    changes: [
      {
        type: 'added',
        description: 'Launched personal portfolio with modern design'
      },
      {
        type: 'added',
        description: 'Responsive layout optimized for all devices'
      },
      {
        type: 'added',
        description: 'Contact form with email integration'
      },
      {
        type: 'added',
        description: 'Project showcase with GitHub and live demo links'
      }
    ]
  }
]

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'added':
      return <Plus className="text-green-500" size={16} />
    case 'improved':
      return <ArrowUp className="text-blue-500" size={16} />
    case 'fixed':
      return <Bug className="text-red-500" size={16} />
    default:
      return <Sparkles className="text-purple-500" size={16} />
  }
}

const getVersionBadge = (type: string) => {
  switch (type) {
    case 'major':
      return 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300'
    case 'feature':
      return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300'
    case 'patch':
      return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
    default:
      return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300'
  }
}

export default function ChangelogPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
              <Zap className="text-primary-500" size={32} />
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Changelog
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              What's <span className="text-gradient">New</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark-600 dark:text-dark-400 leading-relaxed"
            >
              Track the evolution of my portfolio. From new features and improvements 
              to bug fixes and content updates—here's everything that's been happening.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Changelog Entries */}
      <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800/50">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {changelogEntries.map((entry, index) => (
                <motion.div
                  key={entry.version}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="card p-8"
                >
                  {/* Entry Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                      <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-100">
                        v{entry.version}
                      </h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getVersionBadge(entry.type)}`}>
                        {entry.type}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-dark-500 dark:text-dark-400">
                      <Calendar size={16} />
                      <span className="text-sm">
                        {new Date(entry.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* Entry Title */}
                  <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-6">
                    {entry.title}
                  </h3>

                  {/* Changes List */}
                  <div className="space-y-3">
                    {entry.changes.map((change, changeIndex) => (
                      <motion.div
                        key={changeIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          delay: index * 0.1 + changeIndex * 0.05, 
                          duration: 0.6 
                        }}
                        className="flex items-start space-x-3"
                      >
                        <div className="mt-1">
                          {getTypeIcon(change.type)}
                        </div>
                        <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                          {change.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subscribe to Updates */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-center mt-16"
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-4">
                  Stay Updated
                </h3>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  Want to be notified when I add new projects, write blog posts, or update my portfolio? 
                  Follow me on social media or drop me a line!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://twitter.com/lakshayrai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Follow on Twitter
                  </a>
                  <a
                    href="/contact"
                    className="btn-primary"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}