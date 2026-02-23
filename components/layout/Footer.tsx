'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Gekkorizz', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/lakshay-rai-3b6889258/', icon: Linkedin },
  { name: 'Email', href: 'mailto:1bi22cs080@bit-bangalore.edu.in', icon: Mail },
]

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Projects', href: '/projects' },
      { name: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Toolbox', href: '/toolbox' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'Guestbook', href: '/guestbook' },
      { name: 'Contact', href: '/contact' },
    ],
  },
]

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black/80 backdrop-blur-sm border-t border-white/10 relative">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gradient mb-4 inline-block">
              Lakshay Rai
            </Link>
            <p className="text-dark-600 dark:text-dark-400 mb-6 max-w-md">
              Computer Science student passionate about creating innovative digital solutions
              and building applications that solve real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white dark:bg-dark-800 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-dark-200 dark:border-dark-800 flex items-center">
          <p className="text-dark-600 dark:text-dark-400 text-sm">
            © {new Date().getFullYear()} Lakshay Rai. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 
                   text-white rounded-full shadow-lg hover:shadow-xl transition-all 
                   duration-300 hover:scale-110 focus:outline-none focus:ring-2 
                   focus:ring-primary-500 focus:ring-offset-2 z-50 
                   ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}