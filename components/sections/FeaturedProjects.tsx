'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Folder } from 'lucide-react'
import { CustomArrow } from '@/components/ui/CustomArrow'
import Link from 'next/link'
import Image from 'next/image'

const featuredProjects = [
  {
    title: 'Student Portal - Academic Management System',
    description: 'A comprehensive student management system built with React and Node.js, featuring student registration, course management, grade tracking, and administrative tools for educational institutions.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/Development/Portal.png',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Gekkorizz/Student-Portal',
    demo: null,
    featured: true
  },
  {
    title: 'Byte-N-Crypt - File Encryption Tool',
    description: 'A secure file encryption and decryption application with advanced cryptographic algorithms. Features user-friendly interface for protecting sensitive data with military-grade encryption.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/Development/Loading%20.....png',
    technologies: ['Python', 'Cryptography', 'Tkinter', 'AES', 'RSA'],
    github: 'https://github.com/Gekkorizz/Byte-N-Crypt',
    demo: null,
    featured: true
  },
  {
    title: 'FileWalker - Selective Copy Utility',
    description: 'A powerful command-line file management utility that enables selective copying and organization of files based on custom criteria. Perfect for backup operations, file system management, and automated file organization tasks.',
    image: 'https://raw.githubusercontent.com/Gekkorizz/Portfolio-Website/main/public/Graphics/Development/1701714764933.jpeg',
    technologies: ['Python', 'OS Module', 'File I/O', 'CLI', 'Logging'],
    github: 'https://github.com/Gekkorizz/FileWalker-Selective-Copy-Utility',
    demo: null,
    featured: true
  }
]

export function FeaturedProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding">
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
              <Folder className="text-primary-500" size={24} />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Featured Work
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Projects I'm Proud Of
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              A showcase of my recent work, from concept to deployment
            </motion.p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                className={`card overflow-hidden hover:scale-105 transition-all duration-300 group ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`${index === 0 ? 'md:flex' : ''}`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden border border-white/10 ${
                    index === 0 ? 'md:w-1/2 md:rounded-l-xl md:rounded-tr-none rounded-t-xl' : 'aspect-video rounded-t-xl'
                  }`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className={`p-6 ${index === 0 ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-base text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm font-medium">View Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 btn-secondary group"
            >
              <span>View All Projects</span>
              <CustomArrow
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}