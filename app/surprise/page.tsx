'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Download, Gift, Code, Heart, Star, Sparkles, Trophy, Zap, ArrowLeft } from 'lucide-react'
import { LRLogo } from '@/components/ui/LRLogo'

export default function SurprisePage() {
  const [showRiddle, setShowRiddle] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [riddleAttempted, setRiddleAttempted] = useState(false)
  const [riddleSolved, setRiddleSolved] = useState(false)
  const [confetti, setConfetti] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [currentRiddle, setCurrentRiddle] = useState<any>(null)

  // Coding riddles with multiple choice options
  const codingRiddles = [
    {
      id: 1,
      question: "What will this JavaScript code output?",
      code: `console.log(typeof typeof 1);`,
      options: [
        { id: 'a', text: '"number"', correct: false },
        { id: 'b', text: '"string"', correct: true },
        { id: 'c', text: '"undefined"', correct: false },
        { id: 'd', text: '"object"', correct: false }
      ],
      explanation: "typeof 1 returns 'number', and typeof 'number' returns 'string'"
    },
    {
      id: 2,
      question: "What's the time complexity of this algorithm?",
      code: `function findPair(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}`,
      options: [
        { id: 'a', text: 'O(n)', correct: false },
        { id: 'b', text: 'O(n²)', correct: true },
        { id: 'c', text: 'O(log n)', correct: false },
        { id: 'd', text: 'O(n log n)', correct: false }
      ],
      explanation: "Nested loops make this O(n²) - for each element, we check all remaining elements"
    },
    {
      id: 3,
      question: "What will this Python code print?",
      code: `def mystery(lst):
    return lst + lst

result = mystery([1, 2])
print(len(result))`,
      options: [
        { id: 'a', text: '2', correct: false },
        { id: 'b', text: '4', correct: true },
        { id: 'c', text: '3', correct: false },
        { id: 'd', text: 'Error', correct: false }
      ],
      explanation: "[1, 2] + [1, 2] creates [1, 2, 1, 2] which has length 4"
    },
    {
      id: 4,
      question: "What design pattern is demonstrated here?",
      code: `class Database {
  private static instance: Database;

  private constructor() {}

  static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}`,
      options: [
        { id: 'a', text: 'Factory Pattern', correct: false },
        { id: 'b', text: 'Observer Pattern', correct: false },
        { id: 'c', text: 'Singleton Pattern', correct: true },
        { id: 'd', text: 'Strategy Pattern', correct: false }
      ],
      explanation: "This is the Singleton pattern - ensures only one instance of the class exists"
    },
    // Conceptual coding questions below
    {
      id: 5,
      question: "Which of the following best describes immutability in programming?",
      code: "",
      options: [
        { id: 'a', text: "Variables whose values cannot be changed after creation", correct: true },
        { id: 'b', text: "Variables that can be changed at any time", correct: false },
        { id: 'c', text: "Functions that always return the same value", correct: false },
        { id: 'd', text: "Objects that are deleted after use", correct: false }
      ],
      explanation: "Immutability means once a value is set, it cannot be changed."
    },
    {
      id: 6,
      question: "What is the main advantage of using recursion over iteration?",
      code: "",
      options: [
        { id: 'a', text: "Recursion is always faster", correct: false },
        { id: 'b', text: "Recursion can simplify code for problems that have a natural recursive structure", correct: true },
        { id: 'c', text: "Recursion uses less memory", correct: false },
        { id: 'd', text: "Recursion is easier to debug", correct: false }
      ],
      explanation: "Recursion can make code simpler for problems like tree traversal or factorial calculation."
    },
    {
      id: 7,
      question: "Which principle is NOT part of the SOLID principles?",
      code: "",
      options: [
        { id: 'a', text: "Single Responsibility Principle", correct: false },
        { id: 'b', text: "Open/Closed Principle", correct: false },
        { id: 'c', text: "Interface Segregation Principle", correct: false },
        { id: 'd', text: "Least Recently Used Principle", correct: true }
      ],
      explanation: "Least Recently Used is a caching strategy, not a SOLID principle."
    },
    {
      id: 8,
      question: "What does 'asynchronous' mean in programming?",
      code: "",
      options: [
        { id: 'a', text: "Code executes one line at a time, in order", correct: false },
        { id: 'b', text: "Code can start tasks and continue running without waiting for them to finish", correct: true },
        { id: 'c', text: "Code only runs on weekends", correct: false },
        { id: 'd', text: "Code is always executed by multiple threads", correct: false }
      ],
      explanation: "Asynchronous code allows tasks to run in the background while other code continues executing."
    }
  ]

  useEffect(() => {
    setConfetti(true)
    const timer = setTimeout(() => setConfetti(false), 3000)

    // Check if riddle was already attempted in this session
    if (typeof window !== 'undefined') {
      const attempted = sessionStorage.getItem('riddleAttempted')
      if (attempted) {
        setRiddleAttempted(true)
      }

      // Select a random riddle
      const randomIndex = Math.floor(Math.random() * codingRiddles.length)
      setCurrentRiddle(codingRiddles[randomIndex])
    }

    return () => clearTimeout(timer)
  }, [])

  const handleLogoClick = () => {
    setClickCount(prev => prev + 1)
    if (clickCount >= 4) {
      if (typeof window !== 'undefined') {
        alert('🎉 You found the super secret! You clicked the logo 5 times! You\'re persistent! 🚀')
      }
    }
  }

  const handleAnswerSelect = (optionId: string) => {
    if (riddleAttempted || !currentRiddle) return

    setSelectedAnswer(optionId)
    setRiddleAttempted(true)

    // Store in session storage to prevent multiple attempts
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('riddleAttempted', 'true')
    }

    // Check if answer is correct
    const selectedOption = currentRiddle.options.find((opt: any) => opt.id === optionId)
    if (selectedOption?.correct) {
      setRiddleSolved(true)
    }
  }

  const funFacts = [
    "🎮 I can solve a Rubik's cube in under 2 minutes!",
    "☕ I've tried coding for 48 hours straight fueled only by coffee and determination",
    "🌙 I do my best coding between 11 PM and 3 AM - night owl programmer!",
    "🎵 I listen to lo-fi hip hop while coding, but switch to metal for debugging"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              scale: 0
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              y: [null, -100]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {i % 4 === 0 && <Star className="text-yellow-400" size={16} />}
            {i % 4 === 1 && <Sparkles className="text-blue-400" size={16} />}
            {i % 4 === 2 && <Heart className="text-red-400" size={16} />}
            {i % 4 === 3 && <Zap className="text-purple-400" size={16} />}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <button
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back()
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-dark-700 dark:text-dark-200 mt-14"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Trophy className="text-yellow-500" size={64} />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-4">
            🎉 SURPRISE! 🎉
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-2"
          >
            Congratulations, you found the secret page!
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-lg text-dark-500 dark:text-dark-400"
          >
            You're clearly a curious explorer - I like that! 🕵️‍♂️
          </motion.p>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-dark-800 dark:text-white">
            <Gift className="inline mr-3 text-primary-600" size={32} />
            Secret Fun Facts About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <p className="text-dark-700 dark:text-dark-200">{fact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Riddle Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 dark:from-purple-500/10 dark:to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-center mb-6 text-dark-800 dark:text-white">
              <Code className="inline mr-3 text-accent-600" size={28} />
              Bonus Coding Riddle!
            </h3>
            
            {!showRiddle ? (
              <div className="text-center">
                <p className="text-dark-600 dark:text-dark-300 mb-6">
                  {riddleAttempted
                    ? "You've already attempted the riddle this session! 🤔"
                    : "Think you're smart enough for a coding challenge?"
                  }
                </p>
                {!riddleAttempted && (
                  <button
                    onClick={() => setShowRiddle(true)}
                    className="btn-secondary"
                  >
                    Bring it on! 🧠
                  </button>
                )}
              </div>
            ) : !riddleAttempted ? (
              <div>
                {currentRiddle && (
                  <>
                    <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">
                      {currentRiddle.question}
                    </h4>

                    <div className="bg-dark-900 text-green-400 p-4 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
                      <pre className="whitespace-pre-wrap">{currentRiddle.code}</pre>
                    </div>

                    <div className="space-y-3">
                      {currentRiddle.options.map((option: any) => (
                        <button
                          key={option.id}
                          onClick={() => handleAnswerSelect(option.id)}
                          className="w-full text-left px-4 py-3 rounded-lg border border-dark-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white hover:bg-primary-50 dark:hover:bg-dark-600 transition-colors"
                        >
                          <span className="font-semibold">{option.id.toUpperCase()})</span> {option.text}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : riddleSolved ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">🎊</div>
                <h4 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
                  Correct! You're awesome! 🚀
                </h4>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  {currentRiddle?.explanation}
                </p>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold mb-3 text-dark-800 dark:text-white">
                    🎁 Special Offer for Smart Visitors!
                  </h5>
                  <p className="text-dark-700 dark:text-dark-200">
                    Since you solved the riddle, if you ever want to collaborate on a project
                    or just chat about code, feel free to reach out! I love connecting with
                    fellow problem-solvers. 😊
                  </p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">😅</div>
                <h4 className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-4">
                  Not quite right, but great try!
                </h4>
                <p className="text-dark-600 dark:text-dark-300 mb-4">
                  The correct answer was: <strong>{currentRiddle?.options.find((opt: any) => opt.correct)?.text}</strong>
                </p>
                <p className="text-dark-500 dark:text-dark-400 mb-6">
                  {currentRiddle?.explanation}
                </p>
                <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold mb-3 text-dark-800 dark:text-white">
                    🌟 Keep Learning!
                  </h5>
                  <p className="text-dark-700 dark:text-dark-200">
                    Every mistake is a learning opportunity! Feel free to explore my other projects
                    and see how I approach different coding challenges. 💪
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Footer Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
          className="text-center mt-12"
        >
          <p className="text-dark-500 dark:text-dark-400 text-lg">
            Thanks for being curious and exploring! 🌟
          </p>
          <p className="text-dark-400 dark:text-dark-500 mt-2">
            Now you know my secret... don't tell anyone! 🤫
          </p>
        </motion.div>
      </div>
    </div>
  )
}
