import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { getFeaturedGames } from "@/lib/games"
import { FeaturedGamesSkeleton } from "@/components/skeletons"

async function FeaturedGamesContent() {
  const games = await getFeaturedGames()

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {games.map((game) => (
        <Card
          key={game._id}
          className="overflow-hidden border-0 shadow-lg bg-[#1a1a24]/80 backdrop-blur-md game-card neon-glow"
        >
          <div className="relative aspect-video">
            <Image src={game.thumbnail || "/placeholder.svg"} alt={game.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24]/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-xl font-bold text-white neon-text">{game.title}</h3>
              <p className="text-sm text-neon-purple">{game.category}</p>
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-[#1a1a24] bg-gradient-to-r from-neon-blue to-neon-purple"
                    />
                  ))}
                </div>
                <span className="text-xs text-white/70">{game.plays.toLocaleString()} plays</span>
              </div>
              <Button asChild size="sm" className="gap-1 arcade-button">
                <Link href={`/game/${game.slug}`}>
                  Play <Play className="w-3 h-3" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default function FeaturedGames() {
  return (
    <section className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-white neon-text">Featured Games</h2>
        <Button asChild variant="link" className="text-neon-purple hover:text-neon-blue">
          <Link href="/featured">View All</Link>
        </Button>
      </div>

      <Suspense fallback={<FeaturedGamesSkeleton />}>
        <FeaturedGamesContent />
      </Suspense>
    </section>
  )
}

