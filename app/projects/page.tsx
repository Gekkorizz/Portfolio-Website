import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { ProjectsHero } from '@/components/sections/ProjectsHero'
import { LatestBlogs } from '@/components/sections/LatestBlogs'

export const metadata = {
  title: 'Projects - Lakshay Rai',
  description: 'Explore Lakshay Rai\'s portfolio of web applications, encryption tools, and innovative software solutions.',
}

// Enable static generation
export const dynamic = 'force-static'
export const revalidate = 3600

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
      <LatestBlogs />
    </>
  )
}