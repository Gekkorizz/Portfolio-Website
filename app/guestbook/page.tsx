'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MessageCircle, Send, Heart, Calendar, User } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface GuestMessage {
  id: number
  name: string
  email: string
  role: string
  company: string
  avatar: string
  message: string
  date: string
  likes: number
}

export default function GuestbookPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [messages, setMessages] = useState<GuestMessage[]>([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  // Fetch messages on component mount
  useEffect(() => {
    fetchMessages()
  }, [])

  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/guestbook')
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    } catch (error) {
      console.error('Error fetching messages:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const newMessage = await response.json()
        setMessages(prev => [newMessage, ...prev])
        setFormData({ name: '', email: '', role: '', company: '', message: '' })
        setSubmitMessage('Thank you for signing my guestbook! Your message means a lot to me. 🙏')
      } else {
        const error = await response.json()
        setSubmitMessage(`Error: ${error.error}`)
      }
    } catch (error) {
      setSubmitMessage('Failed to submit message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleLike = async (messageId: number) => {
    try {
      const response = await fetch('/api/guestbook/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messageId }),
      })

      if (response.ok) {
        const { likes } = await response.json()
        setMessages(prev =>
          prev.map(msg =>
            msg.id === messageId ? { ...msg, likes } : msg
          )
        )
      }
    } catch (error) {
      console.error('Error liking message:', error)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 mb-6"
            >
              <MessageCircle className="text-primary-500" size={32} />
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                Community Guestbook
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-dark-900 dark:text-dark-100 mb-6"
            >
              Leave Your <span className="text-gradient">Mark</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-dark-600 dark:text-dark-400 leading-relaxed"
            >
              A space for fellow developers, designers, and creators to share thoughts,
              feedback, or just say hello. Your words inspire me to keep building and sharing!
            </motion.p>
          </motion.div>

          {/* Add Message Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-dark-900 dark:text-dark-100 mb-6 text-center">
                Sign the Guestbook
              </h2>

              {submitMessage && (
                <div className={
                  submitMessage.includes('Error')
                    ? 'p-4 rounded-lg mb-6 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200'
                    : 'p-4 rounded-lg mb-6 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200'
                }>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Name *
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
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Role
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="e.g., Software Developer"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-800 text-dark-900 dark:text-dark-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Share your thoughts, feedback, or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Sign Guestbook</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Messages Display */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-dark-100 text-center mb-12">
              Messages from the Community
            </h2>

            {loading ? (
              <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="card p-6 animate-pulse">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dark-200 dark:bg-dark-700 rounded-full"></div>
                      <div className="flex-1 space-y-3">
                        <div className="h-4 bg-dark-200 dark:bg-dark-700 rounded w-1/4"></div>
                        <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded w-1/3"></div>
                        <div className="space-y-2">
                          <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded"></div>
                          <div className="h-3 bg-dark-200 dark:bg-dark-700 rounded w-5/6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center py-12">
                <MessageCircle className="mx-auto text-dark-400 dark:text-dark-600 mb-4" size={48} />
                <p className="text-dark-600 dark:text-dark-400 text-lg">
                  No messages yet. Be the first to sign the guestbook!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                    className="card p-6 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <Image
                          src={message.avatar}
                          alt={message.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-dark-800 rounded-full"></div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="font-semibold text-dark-900 dark:text-dark-100">
                              {message.name}
                            </h3>
                            <div className="flex items-center space-x-2 text-sm text-dark-500 dark:text-dark-400">
                              {message.role && (
                                <>
                                  <User size={12} />
                                  <span>{message.role}</span>
                                </>
                              )}
                              {message.company && (
                                <>
                                  <span>•</span>
                                  <span>{message.company}</span>
                                </>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-dark-500 dark:text-dark-400">
                            <div className="flex items-center space-x-1">
                              <Calendar size={12} />
                              <span>{new Date(message.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-dark-700 dark:text-dark-300 leading-relaxed mb-4">
                          {message.message}
                        </p>

                        <div className="flex items-center justify-between">
                          <button
                            onClick={() => handleLike(message.id)}
                            className="flex items-center space-x-2 text-dark-500 dark:text-dark-400 hover:text-red-500 dark:hover:text-red-400 transition-colors group"
                          >
                            <Heart
                              size={16}
                              className="group-hover:scale-110 transition-transform duration-200"
                            />
                            <span className="text-sm">{message.likes}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  )
}