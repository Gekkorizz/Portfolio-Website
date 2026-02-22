'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, Code, Zap, ChevronDown } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-max section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <Sparkles className="text-accent-500" size={24} />
            <span className="text-lg text-dark-600 dark:text-dark-400 font-medium">
              Hey there, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">Lakshay Rai</span>
          </motion.h1>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <Code className="text-primary-600 dark:text-primary-400" size={32} />
            <h2 className="text-2xl md:text-4xl font-semibold text-dark-700 dark:text-dark-200">
              Computer Science Student & Developer
            </h2>
            <Zap className="text-accent-600 dark:text-accent-400" size={32} />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-200 dark:text-indigo-100 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I transform ideas into{' '}
            <span className="text-primary-600 dark:text-primary-400 font-semibold">innovative solutions</span>{' '}
            through code and design. Currently pursuing Computer Science at{' '}
            <span className="text-accent-600 dark:text-accent-400 font-semibold">Bangalore Institute of Technology</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
          >
            <Link href="/contact" className="btn-primary">
              Contact Me
            </Link>
            <a href="/CV_FInal2 DE.pdf" download className="btn-outline">
              Download CV
            </a>
          </motion.div>

          {/* Wizard/Creative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-flex items-center space-x-3 px-6 py-3 glass rounded-full"
          >
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
              Available for new opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            const aboutSection = document.querySelector('section:nth-of-type(2)');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-2 text-indigo-200 dark:text-indigo-300 
                       hover:text-primary-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="flex flex-col space-y-1">
              <ChevronDown size={24} className="animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}