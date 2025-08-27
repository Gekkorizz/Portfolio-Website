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

// POST - Like a message
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messageId } = body

    if (!messageId) {
      return NextResponse.json(
        { error: 'Message ID is required' },
        { status: 400 }
      )
    }

    // Read existing messages
    if (!fs.existsSync(GUESTBOOK_FILE)) {
      return NextResponse.json(
        { error: 'Guestbook not found' },
        { status: 404 }
      )
    }

    const data = fs.readFileSync(GUESTBOOK_FILE, 'utf8')
    const messages: GuestMessage[] = JSON.parse(data)

    // Find and update the message
    const messageIndex = messages.findIndex(m => m.id === messageId)
    if (messageIndex === -1) {
      return NextResponse.json(
        { error: 'Message not found' },
        { status: 404 }
      )
    }

    messages[messageIndex].likes += 1

    // Write back to file
    fs.writeFileSync(GUESTBOOK_FILE, JSON.stringify(messages, null, 2))

    return NextResponse.json({ 
      success: true, 
      likes: messages[messageIndex].likes 
    })
  } catch (error) {
    console.error('Error liking message:', error)
    return NextResponse.json(
      { error: 'Failed to like message' },
      { status: 500 }
    )
  }
}
