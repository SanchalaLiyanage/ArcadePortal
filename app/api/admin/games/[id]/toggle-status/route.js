import { NextResponse } from "next/server"
import { getServerSession } from "@/lib/auth"

export async function PATCH(request, { params }) {
  const session = await getServerSession()

  if (!session?.user?.isAdmin) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // In a real app, this would toggle the enabled status in the database
    // For demo purposes, we'll just return success

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update game status" }, { status: 500 })
  }
}

