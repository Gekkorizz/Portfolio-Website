'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Eye, Palette, Users, Github, X, ZoomIn } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

// Dynamic gallery system - Add your images here and they'll automatically appear
const otherWorksConfig = [
  {
    filename: 'Code2.png',
    title: 'Code Visualization Interface',
    category: 'UI Design',
    description: 'Modern interface design for code visualization and development tools',
    size: 'medium'
  },
  {
    filename: 'Kahi Chale.png',
    title: 'Travel App',
    category: 'Mobile Design',
    description: 'Travel application design with intuitive navigation and beautiful visuals',
    size: 'medium'
  },  
  {
    filename: 'bottle.png',
    title: 'Blender-Bottle',
    category: 'Mobile Design',
    description: 'Travel application design with intuitive navigation and beautiful visuals',
    size: 'medium'
  }
  // Add new images here by just adding their filename and details
  // The system will automatically include them in the gallery
]

// Auto-generate gallery images from the config
const galleryImages = otherWorksConfig.map((work, index) => ({
  id: index + 1,
  src: `/graphics/Other/${work.filename}`,
  alt: work.title,
  title: work.title,
  category: work.category,
  description: work.description,
  size: work.size || 'medium' // Default to medium if no size specified
}))

// Combine your actual work with placeholders (remove placeholders when you have enough images)
const allGalleryImages = [...galleryImages]

const uiuxProjects = [
  {
    title: 'Restaurant App Design',
    description: 'Modern restaurant mobile app design featuring intuitive navigation, seamless ordering flow, and appetizing visual design. Complete UI/UX solution for food delivery and restaurant discovery.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/UIUX/Restaurant_app.png',
    category: 'Mobile Design',
    tools: ['Figma', 'Adobe XD', 'Prototyping', 'User Research'],
    prototype: 'https://www.figma.com/design/xZCyUws7KhJ295FZrjZQYc/ResHomepage?node-id=0-1&p=f&t=SSdDiu4PQU10CNy8-0',
    caseStudy: '/case-studies/restaurant-app',
    github: null,
    stars: 0,
    forks: 0,
    metrics: {
      userSatisfaction: '96%',
      taskCompletion: '89%',
      timeToComplete: '-35%'
    }
  },
  {
    title: 'Custom Search Engine',
    description: 'Innovative search engine interface design focusing on user experience, advanced filtering, and intuitive result presentation. Clean, modern design with powerful functionality.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/UIUX/Custom_search_engine.png',
    category: 'Web Design',
    tools: ['Figma', 'Information Architecture', 'Prototyping'],
    prototype: 'https://www.figma.com/design/ErBhabsEgTjX2Xjw6sF61E/Search-Engine?node-id=1-2&p=f&t=SSdDiu4PQU10CNy8-0',
    caseStudy: '/case-studies/search-engine',
    github: null,
    stars: 0,
    forks: 0,
    metrics: {
      userSatisfaction: '91%',
      taskCompletion: '84%',
      timeToComplete: '-28%'
    }
  },
  {
    title: 'Rome Arte - Digital Art Platform',
    description: 'An elegant digital art showcase platform that combines classical Roman aesthetics with modern web technologies. Features responsive galleries, artist portfolios, and interactive art exploration.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/UIUX/RomeArte.png',
    category: 'UI/UX Design',
    tools: ['Figma', 'User Experience', 'Prototype', 'Competition'],
    prototype: 'https://www.figma.com/design/1yGcs5XuOE6os2UfulwCba/RomeArte?t=g1Bn0OWyjX8N6lGt-0',
    caseStudy: '/case-studies/rome-arte',
    github: 'https://github.com/Gekkorizz/RomeArte',
    stars: 12,
    forks: 4,
    metrics: {
      userSatisfaction: '92%',
      taskCompletion: '85%',
      timeToComplete: '-25%'
    }
  }
]

export function UIUXShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [galleryRef, galleryInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-4">
            UI/UX Design Work
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
            Crafting user-centered designs that solve real problems and create meaningful experiences
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uiuxProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="card overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedImage({
                      id: index + 100,
                      src: project.image,
                      alt: project.title,
                      title: project.title,
                      category: project.category,
                      description: project.description,
                      size: 'medium'
                    })}
                    className="p-3 bg-white/90 dark:bg-dark-800/90 rounded-full hover:scale-110 transition-transform duration-200"
                    aria-label="View image"
                  >
                    <Eye size={20} className="text-dark-700 dark:text-dark-300" />
                  </button>
                  {project.prototype && (
                    <a
                      href={project.prototype}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-dark-800/90 rounded-full hover:scale-110 transition-transform duration-200"
                      aria-label="View Figma prototype"
                    >
                      <ExternalLink size={20} className="text-dark-700 dark:text-dark-300" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-dark-800/90 rounded-full hover:scale-110 transition-transform duration-200"
                      aria-label="View source code"
                    >
                      <Github size={20} className="text-dark-700 dark:text-dark-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-dark-100 dark:bg-dark-700 rounded">
                    <div className="text-sm font-bold text-primary-600">
                      {project.metrics.userSatisfaction}
                    </div>
                    <div className="text-xs text-dark-500 dark:text-dark-400">
                      Satisfaction
                    </div>
                  </div>
                  <div className="p-2 bg-dark-100 dark:bg-dark-700 rounded">
                    <div className="text-sm font-bold text-primary-600">
                      {project.metrics.taskCompletion}
                    </div>
                    <div className="text-xs text-dark-500 dark:text-dark-400">
                      Completion
                    </div>
                  </div>
                  <div className="p-2 bg-dark-100 dark:bg-dark-700 rounded">
                    <div className="text-sm font-bold text-primary-600">
                      {project.metrics.timeToComplete}
                    </div>
                    <div className="text-xs text-dark-500 dark:text-dark-400">
                      Time Saved
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Gallery Section */}
        <motion.div
          ref={galleryRef}
          initial={{ opacity: 0, y: 30 }}
          animate={galleryInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-dark-100 mb-4">
              More UI/UX Work
            </h3>
            <p className="text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
              A collection of wireframes, prototypes, research, and design explorations
            </p>
          </div>

          {/* Symmetrical Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {allGalleryImages.map((image, index) => {
              // Define grid item classes based on size
              const getGridClasses = (size: string) => {
                switch (size) {
                  case 'large':
                    return 'col-span-2 row-span-3 md:col-span-2 md:row-span-3'
                  case 'wide':
                    return 'col-span-2 row-span-2 md:col-span-3 md:row-span-2 lg:col-span-4 lg:row-span-2'
                  case 'tall':
                    return 'col-span-1 row-span-3 md:col-span-2 md:row-span-3'
                  default:
                    return 'col-span-1 row-span-2 md:col-span-2 md:row-span-2'
                }
              }

              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className={`${getGridClasses(image.size)} relative group cursor-pointer overflow-hidden rounded-lg bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300`}
                  onClick={() => setSelectedImage(image)}
                >
                  {/* Image Container */}
                  <div className="relative h-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary-600/90 text-white text-xs font-medium rounded backdrop-blur-sm">
                        {image.category}
                      </span>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h4 className="font-semibold text-white mb-1 text-sm md:text-base">
                        {image.title}
                      </h4>
                      <p className="text-white/80 text-xs md:text-sm leading-relaxed line-clamp-2">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-dark-800 rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              </div>

              {/* Image Details */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded">
                    {selectedImage.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-8">
            My Design Process
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Research', desc: 'User interviews & analysis' },
              { icon: Palette, title: 'Design', desc: 'Wireframes & prototypes' },
              { icon: Eye, title: 'Test', desc: 'Usability testing' },
              { icon: ExternalLink, title: 'Iterate', desc: 'Refine & improve' }
            ].map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-primary-600" />
                </div>
                <h4 className="font-semibold text-dark-900 dark:text-dark-100 mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}