import { ProjectsContent } from './ProjectsContent'

export const metadata = {
  title: 'Projects - Lakshay Rai',
  description: 'Explore Lakshay Rai\'s portfolio of web applications, encryption tools, and innovative software solutions.',
}

// Enable static generation
export const dynamic = 'force-static'
export const revalidate = 3600

export default function ProjectsPage() {
  return (
    <ProjectsContent />
  )
}