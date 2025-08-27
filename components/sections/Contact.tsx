'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MessageSquare, Send, Sparkles, Github, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

const allPrompts = [
  "I'd like to discuss a project opportunity",
  "Let's collaborate on something amazing",
  "I have a question about your work",
  "I'm interested in hiring you",
  "Let's grab coffee and chat about tech",
  "I want to learn more about your projects",
  "Can you help me with a technical challenge?",
  "I'd love to contribute to your open source work",
  "Let's discuss potential partnerships",
  "I'm curious about your development process",
  "Can we schedule a quick call?",
  "I have an exciting project idea to share"
]

// Function to get 2 random prompts
const getRandomPrompts = () => {
  const shuffled = [...allPrompts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, 2)
}

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quickPrompts, setQuickPrompts] = useState<string[]>([])

  // Generate random prompts on component mount
  useEffect(() => {
    setQuickPrompts(getRandomPrompts())
  }, [])

  const handleQuickPrompt = (prompt: string) => {
    setFormData(prev => ({ ...prev, message: prompt }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully! I\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <MessageSquare className="text-primary-500" size={24} />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Get In Touch
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Let's Create Something Amazing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto"
            >
              Have a project in mind? Want to collaborate? Or just want to say hello? 
              I'd love to hear from you!
            </motion.p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch gap-6">
              {/* Left Column - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex-1 min-h-[600px]"
              >
                <div className="card p-8 h-full flex flex-col justify-between">
                  {/* Header Section */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-4">
                      Let's Connect
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                      I'm always excited to work on new projects and meet fellow developers.
                      Whether you have a specific project in mind or just want to network,
                      don't hesitate to reach out!
                    </p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-6 flex-1">
                    {/* Direct Email */}
                    <div className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
                      <div className="flex items-center space-x-3 mb-3">
                        <Mail className="text-primary-500" size={24} />
                        <h4 className="text-lg font-semibold text-dark-900 dark:text-dark-100">
                          Direct Email
                        </h4>
                      </div>
                      <a
                        href="mailto:1bi22cs080@bit-bangalore.edu.in"
                        className="text-primary-600 dark:text-primary-400 hover:underline font-medium text-sm"
                      >
                        1bi22cs080@bit-bangalore.edu.in
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="p-6 bg-gradient-to-r from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 rounded-lg border border-accent-200 dark:border-accent-800">
                      <h4 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-4">
                        Connect With Me
                      </h4>
                      <div className="space-y-3">
                        <a
                          href="https://github.com/Gekkorizz"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                        >
                          <Github size={20} />
                          <span>github.com/Gekkorizz</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/lakshay-rai-3b6889258/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                        >
                          <Linkedin size={20} />
                          <span>linkedin.com/in/lakshay-rai-3b6889258</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Prompts */}
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold text-dark-900 dark:text-dark-100 mb-4 flex items-center space-x-2">
                      <Sparkles className="text-accent-500" size={20} />
                      <span>Quick Prompts</span>
                    </h4>
                    <div className="space-y-2">
                      {quickPrompts.map((prompt, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                          onClick={() => handleQuickPrompt(prompt)}
                          className="block w-full text-left p-3 rounded-lg bg-white dark:bg-dark-700 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-dark-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200 text-sm text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400"
                        >
                          "{prompt}"
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex-1 min-h-[600px]"
              >
                <div className="card p-8 h-full flex flex-col justify-between">
                  {/* Form Header */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-4">
                      Send a Message
                    </h3>
                    <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>

                  {/* Contact Form */}
                  <div className="flex-1">
                    <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={8}
                        className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none flex-1"
                        placeholder="Tell me about your project or just say hello!"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}