'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react'

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    description: 'Foundational understanding of AWS cloud services, security, and pricing models.',
    logo: '☁️',
    link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/',
    status: 'Recommended'
  },
  {
    title: 'Google Cloud Digital Leader',
    issuer: 'Google Cloud',
    date: '2024',
    description: 'Understanding of cloud concepts and Google Cloud products and services.',
    logo: '🌐',
    link: 'https://cloud.google.com/certification/cloud-digital-leader',
    status: 'Recommended'
  },
  {
    title: 'Oracle Java SE 11 Developer',
    issuer: 'Oracle',
    date: '2023',
    description: 'Proficiency in Java programming language and object-oriented programming concepts.',
    logo: '☕',
    link: 'https://education.oracle.com/java-se-11-developer/pexam_1Z0-819',
    status: 'Recommended'
  },
  {
    title: 'Microsoft Azure Fundamentals',
    issuer: 'Microsoft',
    date: '2024',
    description: 'Foundational knowledge of cloud services and Microsoft Azure platform.',
    logo: '🔷',
    link: 'https://docs.microsoft.com/en-us/learn/certifications/azure-fundamentals/',
    status: 'Recommended'
  },
  {
    title: 'CompTIA Security+',
    issuer: 'CompTIA',
    date: '2023',
    description: 'Cybersecurity fundamentals including network security, compliance, and operational security.',
    logo: '🛡️',
    link: 'https://www.comptia.org/certifications/security',
    status: 'Recommended'
  },
  {
    title: 'MongoDB Developer Associate',
    issuer: 'MongoDB',
    date: '2023',
    description: 'Database design, development, and administration using MongoDB.',
    logo: '🍃',
    link: 'https://university.mongodb.com/certification',
    status: 'Recommended'
  }
]

export function Certifications() {
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
              <Award className="text-accent-500" size={24} />
              <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                Certifications
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Professional Credentials
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              Continuous learning through industry-recognized certifications and credentials
            </motion.p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                className="card p-6 hover:scale-105 transition-all duration-300 group"
              >
                {/* Certification Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{cert.logo}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-dark-900 dark:text-dark-100 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  
                  {cert.status === 'Recommended' && (
                    <div className="flex items-center space-x-1 px-2 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-xs font-medium">
                      <CheckCircle size={12} />
                      <span>Recommended</span>
                    </div>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center space-x-2 mb-3 text-sm text-dark-500 dark:text-dark-400">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>

                {/* Description */}
                <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors text-sm font-medium"
                >
                  <span>Learn More</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </a>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mt-12"
          >
            <div className="glass p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-sm text-dark-600 dark:text-dark-400">
                <strong>Note:</strong> Some certifications are recommended based on my current skill set and career trajectory. 
                I'm actively working towards obtaining these industry-recognized credentials to validate my expertise.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
