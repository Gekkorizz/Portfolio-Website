'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, GraduationCap, Briefcase, Trophy } from 'lucide-react'
import { useRef } from 'react'

const timelineData = [
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.Tech Computer Science & Engineering',
    company: 'Bangalore Institute of Technology',
    location: 'Bangalore, Karnataka',
    period: '2022 - Present',
    description: 'Currently pursuing Bachelor of Technology in Computer Science with focus on software development and emerging technologies.',
    color: 'bg-indigo-500'
  },
  {
    type: 'award',
    icon: Trophy,
    title: 'UI/UX Design Competition Winner',
    company: 'College Technical Fest',
    location: 'Bangalore, Karnataka',
    period: '2023',
    description: 'Won first place in UI/UX design competition for innovative mobile app interface design.',
    color: 'bg-yellow-500'
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Freelance Developer & Project Lead',
    company: 'Independent Projects',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Leading development of multiple open-source projects focusing on web development, security tools, and educational platforms.',
    color: 'bg-green-500'
  }
]

export function TimelineBrief() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Track scroll progress within the timeline section
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.7", "end 0.3"]
  })

  // Transform scroll progress to line height (0% to 100%)
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  // Transform scroll progress for the moving dot position
  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  
  // Transform scroll progress for dot opacity (fade in early, fade out late)
  const dotOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

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
              <Calendar className="text-primary-500" size={24} />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Professional Journey
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              My Career Timeline
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              A journey of continuous growth, learning, and impactful contributions
            </motion.p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Static Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dark-200 dark:bg-dark-700 transform md:-translate-x-0.5" />
            
            {/* Scroll-Synced Progress Line */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-600 transform md:-translate-x-0.5 shadow-lg origin-top"
              style={{ height: lineHeight }}
            />
            
            {/* Scroll-Synced Glow Effect */}
            <motion.div
              className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-primary-400/50 via-accent-400/50 to-primary-500/50 transform md:-translate-x-0.5 blur-sm origin-top"
              style={{ height: lineHeight }}
            />
            
            {/* Scroll-Synced Moving Dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary-500 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 shadow-lg"
              style={{ 
                top: dotPosition,
                opacity: dotOpacity
              }}
            >
              {/* Pulsing ring effect */}
              <motion.div
                className="absolute inset-0 bg-primary-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <div className="space-y-12">
              {timelineData.map((item, index) => {
                const Icon = item.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
                    className={`relative flex items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                      <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                        <Icon className="text-white" size={16} />
                      </div>
                    </div>

                    {/* Content - Brief version for home page */}
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="card p-6 hover:scale-105 transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-dark-900 dark:text-dark-100 mb-1">
                              {item.title}
                            </h3>
                            <p className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                              {item.company}
                            </p>
                            <div className="flex items-center space-x-4 text-sm text-dark-500 dark:text-dark-400">
                              <div className="flex items-center space-x-1">
                                <Calendar size={14} />
                                <span>{item.period}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MapPin size={14} />
                                <span>{item.location}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
