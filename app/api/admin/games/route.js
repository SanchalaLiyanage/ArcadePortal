import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // In a real app, this would fetch from a database
  // For demo purposes, we'll return mock data
  const mockGames = [
    {
      _id: "1",
      title: "Subway Surfers",
      slug: "subway-surfers",
      description: "Dash as fast as you can through the subway and dodge the oncoming trains!",
      category: "Arcade",
      thumbnail: "/placeholder.svg?height=300&width=500",
      url: "https://example.com/games/subway-surfers",
      developer: "SYBO Games",
      plays: 15800000,
      enabled: true,
      createdAt: "2023-01-15T12:00:00Z",
      updatedAt: "2023-06-20T15:30:00Z",
    },
    // More games would be here
  ]

  return NextResponse.json(mockGames)
}

export async function POST(request) {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    // In a real app, this would save to a database
    // For demo purposes, we'll just return the data with an ID
    const newGame = {
      _id: Math.random().toString(36).substring(2, 15),
      ...data,
      plays: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(newGame, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Failed to add game" }, { status: 500 })
  }
}

