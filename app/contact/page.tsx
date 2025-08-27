import { Contact } from '@/components/sections/Contact'

export const metadata = {
  title: 'Contact - Lakshay Rai',
  description: 'Get in touch with Lakshay Rai for project collaborations, opportunities, or just to say hello.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  )
}