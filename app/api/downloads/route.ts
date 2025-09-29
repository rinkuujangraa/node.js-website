import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const file = searchParams.get('file')
    const guideId = searchParams.get('id')
    const type = searchParams.get('type') // 'free' or 'premium'

    // Handle file-based downloads (from dashboard)
    if (file) {
      // Track download (in real app, save to database)
      console.log(`Download tracked: ${file}`)
      
      // Redirect to the actual file
      return NextResponse.redirect(new URL(`/downloads/${file}`, request.url))
    }

    // Handle guide-based downloads (legacy support)
    if (!guideId) {
      return NextResponse.json({ error: 'Guide ID or file is required' }, { status: 400 })
    }

    // In a real application, you would:
    // 1. Verify user authentication for premium guides
    // 2. Check if user has access to the guide
    // 3. Track download statistics
    // 4. Serve the actual PDF file

    const guide = {
      id: guideId,
      title: 'Complete Financial Planning Starter Guide',
      type: type || 'free',
      downloadUrl: `/downloads/investment-basics-guide.pdf`,
      downloadCount: 50000,
    }

    // Track download (in real app, save to database)
    console.log(`Download tracked: ${guideId} - ${type}`)

    return NextResponse.json(guide)
  } catch (error) {
    console.error('Error handling download:', error)
    return NextResponse.json(
      { error: 'Failed to process download' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { guideId, userId, type } = body

    // In a real application, you would:
    // 1. Verify user authentication
    // 2. Check if user has access to premium content
    // 3. Process payment for premium guides
    // 4. Generate download link
    // 5. Track the download

    const download = await prisma.download.create({
      data: {
        guideId,
        userId: userId || null,
        type: type || 'free',
        downloadedAt: new Date(),
      },
    })

    return NextResponse.json(download)
  } catch (error) {
    console.error('Error tracking download:', error)
    return NextResponse.json(
      { error: 'Failed to track download' },
      { status: 500 }
    )
  }
}
