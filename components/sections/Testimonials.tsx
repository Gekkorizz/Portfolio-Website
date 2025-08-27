'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Professor',
    company: 'Bangalore Institute of Technology',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    content: 'Lakshay is an exceptional student with remarkable problem-solving abilities. His projects demonstrate deep understanding of computer science concepts and practical application skills. His Student Portal project showcased excellent full-stack development capabilities.',
    rating: 5
  },
  {
    name: 'Rahul Gupta',
    role: 'Senior Developer',
    company: 'Tech Community Mentor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces',
    content: 'I\'ve mentored many students, but Lakshay stands out for his dedication and innovative approach. His Byte-N-Crypt project demonstrates advanced understanding of cybersecurity principles. He has great potential for a successful career in software development.',
    rating: 5
  }
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800/50">
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
              <Quote className="text-accent-500" size={24} />
              <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Testimonials
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              What People Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              Feedback from colleagues, clients, and collaborators I've had the pleasure to work with
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                className="card p-8 hover:scale-105 transition-all duration-300"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="text-accent-500" size={32} />
                </div>

                {/* Content */}
                <blockquote className="text-dark-600 dark:text-dark-400 mb-6 leading-relaxed text-lg">
                  "{testimonial.content}"
                </blockquote>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={16} />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-900 dark:text-dark-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-dark-500 dark:text-dark-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}