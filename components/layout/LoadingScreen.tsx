'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Code, Zap, Sparkles } from 'lucide-react'
import { LRLogo } from '@/components/ui/LRLogo'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress with more realistic timing
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 800)
          return 100
        }
        // More realistic loading progression
        const increment = prev < 30 ? Math.random() * 20 : 
                         prev < 70 ? Math.random() * 15 : 
                         Math.random() * 8
        return Math.min(prev + increment, 100)
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary-200/20 to-accent-200/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-accent-200/20 to-primary-200/20 rounded-full blur-3xl"
            />
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="mb-8"
            >
              <div className="relative">
                <motion.button
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.location.href = '/surprise'
                    }
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer"
                  aria-label="Discover surprise"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    className="text-white"
                  >
                    <LRLogo size={32} />
                  </motion.div>
                </motion.button>
                
                {/* Floating Icons */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-2 -left-8"
                >
                  <Code className="text-primary-500" size={24} />
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 5, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5,
                  }}
                  className="absolute -top-2 -right-8"
                >
                  <Zap className="text-accent-500" size={24} />
                </motion.div>
                
                <motion.div
                  animate={{
                    y: [-5, 15, -5],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
                >
                  <Sparkles className="text-pink-500" size={20} />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-2"
              >
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  Lakshay Rai
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-lg text-dark-600 dark:text-dark-400"
              >
                {progress < 30 ? 'Initializing...' : 
                 progress < 60 ? 'Loading Components...' : 
                 progress < 90 ? 'Almost Ready...' : 
                 'Crafting Digital Experiences'}
              </motion.p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="w-64 mx-auto"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-dark-500 dark:text-dark-400">Loading</span>
                <span className="text-sm text-dark-500 dark:text-dark-400">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full relative"
                >
                  <motion.div
                    animate={{ x: [-20, 100] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: 'easeInOut',
                  }}
                  className="w-2 h-2 bg-primary-500 rounded-full"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}