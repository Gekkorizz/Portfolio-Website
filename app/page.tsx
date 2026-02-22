'use client'

import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import TimelineBrief from '@/components/sections/TimelineBrief'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <TimelineBrief />
      <FeaturedProjects />
    </>
  )
}