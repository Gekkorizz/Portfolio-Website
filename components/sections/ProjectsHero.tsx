'use client'

import { motion } from 'framer-motion'
import { Folder, Filter } from 'lucide-react'

export function ProjectsHero() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 mb-6"
          >
            <Folder className="text-primary-500" size={32} />
            <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
              My Portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6"
          >
            My <span className="text-gradient">Digital Creations</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-dark-600 dark:text-dark-400 mb-12 leading-relaxed"
          >
            A comprehensive collection of my work, from full-stack applications to 
            open-source contributions. Each project represents a unique challenge 
            and learning experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors">
              <Filter size={18} />
              <span>All Projects</span>
            </button>
            <button className="px-6 py-3 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg font-medium hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors border border-dark-200 dark:border-dark-600">
              Web Apps
            </button>
            <button className="px-6 py-3 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg font-medium hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors border border-dark-200 dark:border-dark-600">
              Mobile
            </button>
            <button className="px-6 py-3 bg-white dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg font-medium hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors border border-dark-200 dark:border-dark-600">
              Open Source
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}