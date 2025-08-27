#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔥 Optimizing development environment...')

// Critical routes that should be pre-compiled
const criticalRoutes = [
  '/',
  '/about', 
  '/projects',
  '/blog',
  '/contact'
]

async function optimizeDev() {
  console.log('📦 Pre-warming Next.js compilation cache...')
  
  // Start the dev server with turbo mode
  const devProcess = spawn('next', ['dev', '--turbo', '--port', '3000'], {
    stdio: 'pipe',
    shell: true
  })

  let serverReady = false
  
  devProcess.stdout.on('data', (data) => {
    const output = data.toString()
    console.log(output)
    
    // Detect when server is ready
    if (output.includes('Ready in') || output.includes('Local:')) {
      serverReady = true
      setTimeout(() => {
        preWarmRoutes()
      }, 2000) // Wait 2 seconds after server is ready
    }
  })

  devProcess.stderr.on('data', (data) => {
    console.error(data.toString())
  })

  async function preWarmRoutes() {
    if (!serverReady) return
    
    console.log('🚀 Pre-warming critical routes...')
    
    for (const route of criticalRoutes) {
      try {
        console.log(`   Warming ${route}...`)
        
        // Use curl or fetch to hit the route
        const warmProcess = spawn('curl', ['-s', `http://localhost:3000${route}`], {
          stdio: 'pipe',
          shell: true
        })
        
        await new Promise((resolve) => {
          warmProcess.on('close', resolve)
        })
        
        // Small delay between requests
        await new Promise(resolve => setTimeout(resolve, 500))
        
      } catch (error) {
        console.log(`   ⚠️  Could not warm ${route}:`, error.message)
      }
    }
    
    console.log('✅ Route pre-warming complete!')
    console.log('🎯 Your development server is now optimized')
  }

  // Handle process termination
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down development server...')
    devProcess.kill('SIGINT')
    process.exit(0)
  })
}

// Run if called directly
if (require.main === module) {
  optimizeDev()
}

module.exports = { optimizeDev }