import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Timeline } from '@/components/sections/Timeline'
import { Certifications } from '@/components/sections/Certifications'

export const metadata = {
  title: 'About - Lakshay Rai',
  description: 'Learn more about Lakshay Rai, his journey, skills, and passion for creating innovative software solutions and digital experiences.',
}

// Enable static generation
export const dynamic = 'force-static'
export const revalidate = 3600 // Revalidate every hour

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Skills />
      <Timeline />
      <Certifications />
    </div>
  )
}