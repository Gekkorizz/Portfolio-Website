import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const GUESTBOOK_FILE = path.join(process.cwd(), 'data', 'guestbook.json')

interface GuestMessage {
  id: number
  name: string
  email: string
  role: string
  company: string
  avatar: string
  message: string
  date: string
  likes: number
}

// GET - Fetch all guestbook messages
export async function GET() {
  try {
    if (!fs.existsSync(GUESTBOOK_FILE)) {
      return NextResponse.json([])
    }

    const data = fs.readFileSync(GUESTBOOK_FILE, 'utf8')
    const messages: GuestMessage[] = JSON.parse(data)
    
    // Sort by date (newest first)
    messages.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    return NextResponse.json(messages)
  } catch (error) {
    console.error('Error reading guestbook:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
}

// POST - Add new guestbook message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, role, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Read existing messages
    let messages: GuestMessage[] = []
    if (fs.existsSync(GUESTBOOK_FILE)) {
      const data = fs.readFileSync(GUESTBOOK_FILE, 'utf8')
      messages = JSON.parse(data)
    }

    // Generate avatar URL based on name
    const avatarSeed = name.toLowerCase().replace(/\s+/g, '')
    const avatarUrl = `https://images.unsplash.com/photo-${Math.random() > 0.5 ? '1438761681033-6461ffad8d80' : '1507003211169-0a1dd7228f2d'}?w=150&h=150&fit=crop&crop=faces`

    // Create new message
    const newMessage: GuestMessage = {
      id: messages.length > 0 ? Math.max(...messages.map(m => m.id)) + 1 : 1,
      name,
      email,
      role: role || 'Visitor',
      company: company || '',
      avatar: avatarUrl,
      message,
      date: new Date().toISOString(),
      likes: 0
    }

    // Add to messages array
    messages.push(newMessage)

    // Ensure data directory exists
    const dataDir = path.dirname(GUESTBOOK_FILE)
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Write back to file
    fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify(messages, null, 2))

    return NextResponse.json(newMessage, { status: 201 })
  } catch (error) {
    console.error('Error adding message:', error)
    return NextResponse.json(
      { error: 'Failed to add message' },
      { status: 500 }
    )
  }
}
