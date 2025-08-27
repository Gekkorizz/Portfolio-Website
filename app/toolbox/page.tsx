'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wrench, ExternalLink, Heart, Code, Database, Palette, Zap, Shield, Globe } from 'lucide-react'

const toolCategories = [
  {
    title: 'Development Tools',
    icon: Code,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    tools: [
      {
        name: 'VSCode',
        description: 'My primary code editor for all development work. Excellent extension ecosystem and integrated terminal make it perfect for daily coding.',
        logo: '💙',
        link: 'https://code.visualstudio.com/',
        favorite: true
      },
      {
        name: 'IntelliJ IDEA',
        description: 'Powerful IDE for Java and other JVM languages. Advanced debugging and refactoring tools enhance productivity.',
        logo: '🧠',
        link: 'https://www.jetbrains.com/idea/',
        favorite: true
      },
      {
        name: 'Linux',
        description: 'My preferred operating system for development. Command-line efficiency and customization options are unmatched.',
        logo: '🐧',
        link: 'https://www.linux.org/',
        favorite: true
      }
    ]
  },
  {
    title: 'Design & Creative',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    tools: [
      {
        name: 'Figma',
        description: 'Essential for UI/UX design and prototyping. Perfect for creating wireframes, mockups, and collaborative design work.',
        logo: '🎨',
        link: 'https://figma.com/',
        favorite: true
      },
      {
        name: 'Photoshop',
        description: 'Industry-standard image editing software for creating graphics, editing photos, and designing visual elements.',
        logo: '🖼️',
        link: 'https://www.adobe.com/products/photoshop.html',
        favorite: true
      },
      {
        name: 'Blender',
        description: 'Open-source 3D creation suite for modeling, animation, and rendering. Great for creating 3D assets and visualizations.',
        logo: '🎭',
        link: 'https://www.blender.org/',
        favorite: false
      }
    ]
  },
  {
    title: 'Database & Backend',
    icon: Database,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    tools: [
      {
        name: 'MySQL',
        description: 'Reliable relational database management system. Perfect for structured data storage and complex queries.',
        logo: '🐬',
        link: 'https://www.mysql.com/',
        favorite: true
      }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Zap,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    tools: [
      {
        name: 'Docker',
        description: 'Containerization platform for consistent deployment across environments. Essential for modern application development.',
        logo: '🐳',
        link: 'https://docker.com/',
        favorite: true
      },
      {
        name: 'Vercel',
        description: 'Zero-config deployment platform for frontend applications. Seamless integration with Git and excellent performance.',
        logo: '▲',
        link: 'https://vercel.com/',
        favorite: true
      },
      {
        name: 'AWS',
        description: 'Comprehensive cloud computing platform. Provides scalable infrastructure and services for enterprise applications.',
        logo: '☁️',
        link: 'https://aws.amazon.com/',
        favorite: false
      },
      {
        name: 'GCP',
        description: 'Google Cloud Platform for modern cloud solutions. Excellent for machine learning and data analytics projects.',
        logo: '🌐',
        link: 'https://cloud.google.com/',
        favorite: false
      },
      {
        name: 'Jenkins',
        description: 'Open-source automation server for CI/CD pipelines. Reliable solution for continuous integration and deployment.',
        logo: '⚙️',
        link: 'https://www.jenkins.io/',
        favorite: false
      }
    ]
  },
  {
    title: 'Monitoring & Analytics',
    icon: Shield,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    tools: [
      {
        name: 'DataDog',
        description: 'Comprehensive monitoring and analytics platform. Essential for tracking application performance and infrastructure health.',
        logo: '🐕',
        link: 'https://www.datadoghq.com/',
        favorite: true
      }
    ]
  }
]

export default function ToolboxPage() {
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
              <Wrench className="text-primary-500" size={32} />
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Developer Toolbox
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Tools That <span className="text-gradient">Power</span> My Work
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark-600 dark:text-dark-400 leading-relaxed"
            >
              A curated collection of tools, libraries, and resources that make me more productive 
              and help me build better software. From development to deployment, these are my go-to solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800/50">
        <div className="container-max">
          <div className="space-y-16">
            {toolCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-8">
                    <div className={`p-3 rounded-lg ${category.bgColor}`}>
                      <Icon className={category.color} size={24} />
                    </div>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-100">
                      {category.title}
                    </h2>
                  </div>

                  {/* Tools Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.tools.map((tool, toolIndex) => (
                      <motion.div
                        key={tool.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ 
                          delay: categoryIndex * 0.2 + toolIndex * 0.1, 
                          duration: 0.6 
                        }}
                        className="card p-6 hover:scale-105 transition-all duration-300 group relative"
                      >
                        {/* Favorite Badge */}
                        {tool.favorite && (
                          <div className="absolute top-4 right-4">
                            <Heart className="text-red-500 fill-current" size={16} />
                          </div>
                        )}

                        {/* Tool Header */}
                        <div className="flex items-center space-x-3 mb-4">
                          <span className="text-2xl">{tool.logo}</span>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100">
                              {tool.name}
                            </h3>
                          </div>
                          <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg"
                            aria-label={`Visit ${tool.name}`}
                          >
                            <ExternalLink size={16} className="text-dark-500 dark:text-dark-400" />
                          </a>
                        </div>

                        {/* Tool Description */}
                        <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                          {tool.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mt-16"
          >
            <div className="card p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-4">
                Have a Tool Recommendation?
              </h3>
              <p className="text-dark-600 dark:text-dark-400 mb-6">
                I'm always exploring new tools and technologies. If you have a favorite tool 
                that's not on this list, I'd love to hear about it!
              </p>
              <a
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Share Your Favorites</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}