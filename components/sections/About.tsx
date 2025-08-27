'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wand2, Coffee, Gamepad2, Camera } from 'lucide-react'
import { useState, useEffect } from "react"

const interests = [
  { icon: Coffee, label: 'Coffee', color: 'text-amber-600' },
  { icon: Gamepad2, label: 'Gaming', color: 'text-purple-600' },
  { icon: Camera, label: 'Digital Design', color: 'text-blue-600' },
  { icon: Wand2, label: 'Tech Innovation', color: 'text-pink-600' },
]

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentInterest, setCurrentInterest] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInterest(prev => (prev + 1) % interests.length);
    }, 1500); // Change 1500 for faster/slower cycling
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-4"
            >
              <Wand2 className="text-accent-500" size={24} />
              <span className="text-sm font-semibold text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                About Me
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              The Developer Behind the Innovation
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 text-justify"
            >
              <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                I'm a passionate Computer Science student at Bangalore Institute of Technology with a strong
                focus on software development, security, and innovative problem-solving. My journey began with
                curiosity about how technology works, and has evolved into creating meaningful applications
                that solve real-world problems.
              </p>

              <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                Currently pursuing my B.Tech in Computer Science & Engineering, I've developed expertise in
                full-stack web development, cybersecurity, and user experience design.
              </p>

              <p className="text-lg text-dark-600 dark:text-dark-400 leading-relaxed">
                When I'm not coding, you'll find me working on personal projects, participating in hackathons,
                or exploring the latest developments in AI and machine learning. I believe in continuous learning
                and sharing knowledge with the developer community.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium">
                  UI/UX Designer
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Open Source Contributor
                </span>
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium">
                  Security Enthusiast
                </span>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6 mb-40"
            >
              <h3 className="text-xl font-semibold text-dark-900 dark:text-dark-100 mb-6 text-center">
                When I'm not coding...
              </h3>
              
              <div className="flex justify-center items-center">
                {interests.map((interest, index) => {
                  if (index !== currentInterest) return null;
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.05 }}
                      className="card w-48 p-8 text-center mx-auto hover:scale-105 transition-transform duration-200"
                    >
                      <Icon className={`${interest.color} mx-auto mb-3`} size={32} />
                      <p className="text-sm font-medium text-dark-700 dark:text-dark-300">
                        {interest.label}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Fun Fact */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="glass p-6 rounded-lg mb-8"
                >
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-2 text-center">
                  Fun Fact 🖱️
                </p>
                <p className="font-medium text-dark-800 dark:text-dark-200">
                  The first computer mouse was invented in 1964 and was made of wood. 🪵 It revolutionized how we interact with technology!
                </p>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="glass p-6 rounded-lg"
                >
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-2 text-center">
                  Fun Fact 🌐
                </p>
                <p className="font-medium text-dark-800 dark:text-dark-200">
                  Did you know? Over 90% of the world’s data was created in just the last two years, thanks to advances in technology and connectivity. 📈
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}