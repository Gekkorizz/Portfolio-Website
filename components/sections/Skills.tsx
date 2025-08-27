'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Smartphone, Cloud, Wrench } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
    skills: ['React', 'Next.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'text-green-600',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
    skills: ['Node.js', 'Express.js', 'Python', 'PHP', 'MySQL', 'MongoDB']
  },
  {
    title: 'Security',
    icon: Smartphone,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
    skills: ['Cryptography', 'AES Encryption', 'RSA', 'JWT', 'Security Auditing', 'Penetration Testing']
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'text-orange-600',
    bgColor: 'bg-orange-100 dark:bg-orange-900/30',
    skills: ['Docker', 'AWS', 'GCP', 'Vercel', 'Jenkins', 'Linux']
  },
  {
    title: 'Languages',
    icon: Code2,
    color: 'text-red-600',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
    skills: ['JavaScript', 'Python', 'Java', 'C++', 'PHP', 'SQL']
  },
  {
    title: 'Tools & Design',
    icon: Wrench,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100 dark:bg-indigo-900/30',
    skills: ['VSCode', 'IntelliJ IDEA', 'Figma', 'Photoshop', 'Blender', 'DataDog']
  }
]

const softSkills = [
  'Problem Solving',
  'Creative Thinking',
  'Team Collaboration',
  'Project Management',
  'UI/UX Design',
  'Technical Writing'
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

          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-8">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                  className="px-6 py-3 glass rounded-full font-medium text-dark-700 dark:text-dark-300 hover:scale-105 transition-transform duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}