'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Languages',
    icon: Globe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    skills: [
      'Java', 'Python', 'C'
    ]
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    skills: ['MySQL', 'MongoDB', 'Linux', 'DataDog']
  },
  {
    title: 'Frameworks & Libraries',
    icon: Cloud,
    color: 'text-teal-600',
    bgColor: 'bg-teal-100 dark:bg-teal-900/30',
    skills: ['Sring Boot', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Concepts',
    icon: Code2,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    skills: ['OOPs', 'Agile', 'REST APIs']
  },
  {
    title: 'Design',
    icon: Smartphone,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100 dark:bg-pink-900/30',
    skills: ['Figma', 'Photoshop', 'Blender']
  },
  {
    title: 'Deployment and Cloud',
    icon: Wrench,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    skills: ['VSCode', 'Git', 'Vercel', 'AWS']
  }
]

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="section-padding">
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
              <Code2 className="text-primary-500" size={24} />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Skills & Expertise
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              My Technical Arsenal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              A comprehensive toolkit built through years of hands-on experience and continuous learning
            </motion.p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  className="card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <Icon className={category.color} size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-100">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          delay: 1 + index * 0.1 + skillIndex * 0.05, 
                          duration: 0.4 
                        }}
                        className="px-3 py-1 bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
