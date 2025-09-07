'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Users, Clock, Target } from 'lucide-react'

export default function EcommerceAppCaseStudy() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-dark-900">
        <div className="container-max">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Projects
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-dark-100 mb-6">
              E-Commerce Mobile App Design
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-400 mb-8 max-w-3xl">
              A comprehensive mobile app design project focused on creating an intuitive shopping experience 
              that increased user engagement by 40% and conversion rates by 25%.
            </p>
            
            {/* Project Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Users className="text-primary-600" size={24} />
                <div>
                  <div className="font-semibold text-dark-900 dark:text-dark-100">50+ Users</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Interviewed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-primary-600" size={24} />
                <div>
                  <div className="font-semibold text-dark-900 dark:text-dark-100">3 Months</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Project Duration</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="text-primary-600" size={24} />
                <div>
                  <div className="font-semibold text-dark-900 dark:text-dark-100">25% Increase</div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">Conversion Rate</div>
                </div>
              </div>
            </div>

            <a 
              href="https://www.figma.com/your-prototype-link" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              View Prototype <ExternalLink size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop"
              alt="E-commerce app mockups"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                The Challenge
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                The existing mobile shopping experience had a 60% cart abandonment rate and users 
                frequently complained about the complex checkout process. Our goal was to redesign 
                the entire mobile experience to be more intuitive, faster, and conversion-focused.
              </p>
            </motion.div>

            {/* Research */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                Research & Discovery
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
                We conducted extensive user research including:
              </p>
              <ul className="list-disc list-inside text-dark-600 dark:text-dark-400 space-y-2 mb-6">
                <li>50+ user interviews with existing customers</li>
                <li>Competitive analysis of 15 e-commerce apps</li>
                <li>Analytics review of current user behavior</li>
                <li>Usability testing of the existing app</li>
              </ul>
              
              {/* Research Image Placeholder */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop"
                  alt="User research process"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                Design Solution
              </h2>
              <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
                Based on our research findings, we redesigned the app with focus on:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="card p-6">
                  <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-3">
                    Simplified Navigation
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    Reduced menu items from 12 to 6 main categories with improved search functionality
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="font-semibold text-dark-900 dark:text-dark-100 mb-3">
                    One-Click Checkout
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 text-sm">
                    Streamlined checkout process from 5 steps to 2 with saved payment methods
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-dark-900 dark:text-dark-100 mb-6">
                Results & Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-primary-50 dark:bg-primary-900 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">25%</div>
                  <div className="text-dark-600 dark:text-dark-400">Conversion Increase</div>
                </div>
                <div className="text-center p-6 bg-primary-50 dark:bg-primary-900 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">40%</div>
                  <div className="text-dark-600 dark:text-dark-400">User Engagement</div>
                </div>
                <div className="text-center p-6 bg-primary-50 dark:bg-primary-900 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">32%</div>
                  <div className="text-dark-600 dark:text-dark-400">Faster Checkout</div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}