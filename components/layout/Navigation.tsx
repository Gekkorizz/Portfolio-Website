'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download, Github, Linkedin } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LRLogo } from '@/components/ui/LRLogo'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Toolbox', href: '/toolbox' },
  { name: 'Contact', href: '/contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href={pathname === '/' ? '/surprise' : '/'}
            className="text-2xl font-bold text-gradient hover:scale-105 transition-transform duration-200 cursor-pointer"
            aria-label="Go to home or discover surprise"
          >
            <LRLogo size={32} className="text-gradient" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 ${
                  pathname === item.href
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-600 dark:text-dark-300'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-primary-600 dark:bg-primary-400"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            <div className="flex items-center space-x-2">
              <a
                href="https://www.github.com/Gekkorizz"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lakshay-rai-3b6889258/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

            <a
              href="/CV_FInal2 DE.pdf"
              download="Lakshay_Rai_Resume.pdf"
              className="btn-primary flex items-center space-x-2"
            >
              <Download size={16} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 glass rounded-lg p-4"
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary-600 dark:hover:text-primary-400 text-left ${
                      pathname === item.href
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-dark-600 dark:text-dark-300'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                
                <div className="flex items-center justify-between pt-4 border-t border-dark-200 dark:border-dark-700">
                  <div className="flex items-center space-x-2">
                    <a
                      href="https://github.com/lakshayrai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href="https://linkedin.com/in/lakshayrai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-800 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                  
                  <ThemeToggle />
                </div>
                
                <a
                  href="/CV_FInal2 DE.pdf"
                  download="Lakshay_Rai_Resume.pdf"
                  className="btn-primary flex items-center justify-center space-x-2 w-full"
                >
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}