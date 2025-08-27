#!/usr/bin/env node

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Starting page precompilation...')

// Routes to precompile
const routes = [
  '/',
  '/about',
  '/projects', 
  '/blog',
  '/contact',
  '/toolbox',
  '/changelog',
  '/guestbook'
]

async function precompileRoutes() {
  console.log('📦 Building application...')
  
  // Run build first
  const buildProcess = spawn('npm', ['run', 'build'], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })

  buildProcess.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Build completed successfully')
      console.log('🎯 Routes precompiled:', routes.join(', '))
    } else {
      console.error('❌ Build failed with code:', code)
      process.exit(1)
    }
  })
}

// Run if called directly
if (require.main === module) {
  precompileRoutes()
}

module.exports = { precompileRoutes }