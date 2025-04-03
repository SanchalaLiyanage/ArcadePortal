import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"

export async function PUT(request, { params }) {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const data = await request.json()

    // In a real app, this would update the database
    // For demo purposes, we'll just return the updated data
    const updatedGame = {
      _id: params.id,
      ...data,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(updatedGame)
  } catch (error) {
    return NextResponse.json({ error: "Failed to update game" }, { status: 500 })
  }
}

export async function DELETE(request, { params }) {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // In a real app, this would delete from the database
    // For demo purposes, we'll just return success

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete game" }, { status: 500 })
  }
}

