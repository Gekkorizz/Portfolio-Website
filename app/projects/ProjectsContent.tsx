'use client'

import { useState } from 'react'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { UIUXShowcase } from '@/components/sections/UIUXShowcase'
import { LatestBlogs } from '@/components/sections/LatestBlogs'

export type ProjectFilter = 'all' | 'development' | 'designs' | 'blogs'

export function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all')

  return (
    <>
      <ProjectsHero activeFilter={activeFilter} onFilterChange={setActiveFilter} />

      {(activeFilter === 'all' || activeFilter === 'development') && <ProjectsGrid />}
      {(activeFilter === 'all' || activeFilter === 'designs') && <UIUXShowcase />}
      {(activeFilter === 'all' || activeFilter === 'blogs') && <LatestBlogs />}
    </>
  )
}