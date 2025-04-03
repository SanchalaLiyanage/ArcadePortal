import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"

export async function GET() {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  // In a real app, this would fetch analytics data from a database
  // For demo purposes, we'll return mock data
  const mockAnalytics = {
    totalGames: 48,
    totalPlays: 12567,
    activeGames: 42,
    topGames: [
      { name: "Subway Surfers", plays: 2345 },
      { name: "Temple Run", plays: 1890 },
      { name: "Candy Crush", plays: 1456 },
      { name: "Minecraft", plays: 1234 },
      { name: "Among Us", plays: 987 },
    ],
    playsByDay: [
      { name: "Mon", plays: 1200 },
      { name: "Tue", plays: 1800 },
      { name: "Wed", plays: 1600 },
      { name: "Thu", plays: 2100 },
      { name: "Fri", plays: 2400 },
      { name: "Sat", plays: 3200 },
      { name: "Sun", plays: 2800 },
    ],
    playsByCategory: [
      { name: "Action", value: 25 },
      { name: "Adventure", value: 18 },
      { name: "Puzzle", value: 15 },
      { name: "Racing", value: 12 },
      { name: "Sports", value: 10 },
      { name: "Strategy", value: 8 },
      { name: "Other", value: 12 },
    ],
  }

  return NextResponse.json(mockAnalytics)
}

