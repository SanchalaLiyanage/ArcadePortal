import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { getRelatedGames } from "@/lib/games"

export default async function RelatedGames({ currentGameId, category }) {
  const games = await getRelatedGames(currentGameId, category)

  return (
    <div className="space-y-4">
      {games.map((game) => (
        <Card key={game._id} className="overflow-hidden border-0 shadow-md bg-[#1a1a24]/80 backdrop-blur-md game-card">
          <Link href={`/game/${game.slug}`} className="block">
            <div className="relative aspect-video">
              <Image src={game.thumbnail || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-white truncate">{game.title}</h3>
              <p className="text-xs text-neon-purple">{game.plays.toLocaleString()} plays</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  )
}

