'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Star, GitFork } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Student Portal - Academic Management System',
    description: 'A comprehensive student management system designed for educational institutions. Features include student registration, course enrollment, grade tracking, attendance management, and administrative dashboards. Built with modern web technologies to provide a seamless experience for students, faculty, and administrators.',
    longDescription: 'The Student Portal is a full-stack web application that revolutionizes academic management. It provides a centralized platform where students can register for courses, view grades, track attendance, and communicate with faculty. Administrators can manage student records, generate reports, and oversee institutional operations. The system features role-based authentication, real-time notifications, and responsive design for optimal user experience across devices.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Bootstrap'],
    github: 'https://github.com/Gekkorizz/Student-Portal',
    demo: null,
    stars: 15,
    forks: 3,
    category: 'Web App',
    goals: ['Streamline academic administration', 'Improve student-faculty communication', 'Digitize traditional paper-based processes'],
    features: ['Student Registration & Authentication', 'Course Management System', 'Grade Tracking & Analytics', 'Attendance Management', 'Administrative Dashboard', 'Real-time Notifications']
  },
  {
    title: 'Byte-N-Crypt - File Encryption Tool',
    description: 'A secure file encryption and decryption application implementing advanced cryptographic algorithms. Features an intuitive GUI for protecting sensitive data with military-grade encryption standards.',
    longDescription: 'Byte-N-Crypt is a robust security application that provides enterprise-level file encryption capabilities. It implements multiple encryption algorithms including AES-256 and RSA for hybrid encryption. The application features a user-friendly interface built with Tkinter, making advanced cryptography accessible to non-technical users while maintaining the highest security standards.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    technologies: ['Python', 'Cryptography', 'Tkinter', 'AES-256', 'RSA', 'PBKDF2'],
    github: 'https://github.com/Gekkorizz/Byte-N-Crypt',
    demo: null,
    stars: 8,
    forks: 2,
    category: 'Security Tool',
    goals: ['Provide military-grade file encryption', 'Make cryptography accessible to all users', 'Ensure data privacy and security'],
    features: ['AES-256 Encryption', 'RSA Key Exchange', 'Password-based Key Derivation', 'Secure File Shredding', 'Batch File Processing', 'Cross-platform Compatibility']
  },
  {
    title: 'Rome Arte - Digital Art Platform',
    description: 'An elegant digital art showcase platform that combines classical Roman aesthetics with modern web technologies. Features responsive galleries, artist portfolios, and interactive art exploration.',
    longDescription: 'Rome Arte is a sophisticated web platform dedicated to showcasing digital art with a classical twist. The platform combines the timeless beauty of Roman art and architecture with cutting-edge web technologies. It features responsive galleries, artist portfolio management, and interactive art exploration tools that provide an immersive cultural experience.',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
    github: 'https://github.com/Gekkorizz/RomeArte',
    demo: null,
    stars: 12,
    forks: 4,
    category: 'Web Platform',
    goals: ['Showcase digital art with classical aesthetics', 'Create immersive cultural experiences', 'Bridge traditional and digital art forms'],
    features: ['Responsive Art Galleries', 'Artist Portfolio Management', 'Interactive Art Exploration', 'Classical UI Design', 'Mobile-optimized Experience', 'Content Management System']
  },
  {
    title: 'FileWalker - Selective Copy Utility',
    description: 'A powerful command-line file management utility that enables selective copying and organization of files based on custom criteria. Perfect for backup operations, file system management, and automated file organization tasks.',
    longDescription: 'FileWalker is an advanced file management utility designed for developers and system administrators who need precise control over file operations. The tool provides selective copying capabilities based on file types, sizes, dates, and custom patterns. It features recursive directory traversal, progress tracking, and detailed logging for all operations.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop',
    technologies: ['Python', 'OS Module', 'File I/O', 'CLI', 'Regex', 'Logging'],
    github: 'https://github.com/Gekkorizz/FileWalker-Selective-Copy-Utility',
    demo: null,
    stars: 6,
    forks: 1,
    category: 'CLI Tool',
    goals: ['Automate file management tasks', 'Provide selective file copying capabilities', 'Simplify backup and organization workflows'],
    features: ['Selective File Copying', 'Pattern-based Filtering', 'Recursive Directory Traversal', 'Progress Tracking', 'Detailed Logging', 'Cross-platform Support']
  }
]

export function ProjectsGrid() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding">
      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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

                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/90 dark:bg-dark-800/90 rounded-full hover:scale-110 transition-transform duration-200"
                    aria-label="View source code"
                  >
                    <Github size={20} className="text-dark-700 dark:text-dark-300" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/90 dark:bg-dark-800/90 rounded-full hover:scale-110 transition-transform duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={20} className="text-dark-700 dark:text-dark-300" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-3 text-sm text-dark-500 dark:text-dark-400">
                    <div className="flex items-center space-x-1">
                      <Star size={14} />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork size={14} />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>

                <p className="text-dark-600 dark:text-dark-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            Load More Projects
          </button>
        </motion.div>
      </div>
    </section>
  )
}