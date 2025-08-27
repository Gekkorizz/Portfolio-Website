'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Monitor, ChevronDown } from 'lucide-react'
import { useTheme } from '@/components/providers/ThemeProvider'
import { useState, useRef, useEffect } from 'react'

const themes = [
  { value: 'light', label: 'Light', icon: Sun },
  { value: 'dark', label: 'Dark', icon: Moon },
  { value: 'system', label: 'System', icon: Monitor },
] as const

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentTheme = themes.find(t => t.value === theme) || themes[2]
  const CurrentIcon = currentTheme.icon

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Toggle theme"
      >
        <CurrentIcon size={16} className="text-dark-600 dark:text-dark-400" />
        <span className="text-sm font-medium text-dark-700 dark:text-dark-300 hidden sm:block">
          {currentTheme.label}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={14} className="text-dark-500 dark:text-dark-500" />
        </motion.div>
      </motion.button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg shadow-lg overflow-hidden z-50"
          >
            {themes.map((themeOption, index) => {
              const Icon = themeOption.icon
              const isSelected = theme === themeOption.value
              
              return (
                <motion.button
                  key={themeOption.value}
                  onClick={() => {
                    setTheme(themeOption.value)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors ${
                    isSelected ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400' : 'text-dark-700 dark:text-dark-300'
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                >
                  <Icon size={16} />
                  <span className="text-sm font-medium">{themeOption.label}</span>
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-primary-500 rounded-full"
                    />
                  )}
                </motion.button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}