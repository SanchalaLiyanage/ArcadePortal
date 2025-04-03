import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { getAllGames } from "@/lib/games"

export default async function GameGrid() {
  const games = await getAllGames()

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {games.map((game) => (
        <Card key={game._id} className="overflow-hidden border-0 shadow-lg bg-[#1a1a24]/80 backdrop-blur-md game-card">
          <div className="relative aspect-video">
            <Image src={game.thumbnail || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24]/90 to-transparent opacity-0 hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-center w-full h-full">
                <Button asChild size="sm" className="gap-1 arcade-button">
                  <Link href={`/game/${game.slug}`}>
                    Play Now <Play className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <CardContent className="p-3">
            <div className="flex flex-col gap-1">
              <h3 className="font-bold text-white truncate">{game.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-neon-purple">{game.category}</span>
                <span className="text-xs text-white/70">{game.plays.toLocaleString()} plays</span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

