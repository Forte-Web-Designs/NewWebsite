import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { url, device } = body

    if (!url || !device) {
      return NextResponse.json(
        { error: 'Missing required parameters: url and device' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Screenshot request received for ${device} view of ${url}`,
      data: {
        url,
        device,
        timestamp: new Date().toISOString(),
        status: 'mock_response'
      }
    })

  } catch (error) {
    console.error('Screenshot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST instead.' },
    { status: 405 }
  )
}
