'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { TimelineBrief } from '@/components/sections/TimelineBrief'
import { Contact } from '@/components/sections/Contact'
import { Testimonials } from '@/components/sections/Testimonials'
import { CompilationHandler } from '@/components/layout/CompilationHandler'

export default function Home() {
  return (
    <CompilationHandler>
      <Hero />
      <About />
      <Skills />
      <TimelineBrief />
      <FeaturedProjects />
      <Testimonials />
      <Contact />
    </CompilationHandler>
  )
}